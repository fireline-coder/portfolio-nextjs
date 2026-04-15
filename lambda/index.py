import json
import boto3
import time
import os

bedrock_agent_runtime = boto3.client("bedrock-agent-runtime")

AGENT_ID = os.environ.get("AGENT_ID")
AGENT_ALIAS_ID = os.environ.get("AGENT_ALIAS_ID")
ALLOWED_ORIGIN = os.environ.get("ALLOWED_ORIGIN", "https://max-ellis.vercel.app")

# Simple in-memory rate limiting (per Lambda instance)
rate_limit_store = {}
RATE_LIMIT_WINDOW = 60  # seconds
RATE_LIMIT_MAX = 10  # requests per window per IP


def get_cors_headers():
    return {
        "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
    }


def is_rate_limited(ip):
    now = time.time()
    if ip not in rate_limit_store:
        rate_limit_store[ip] = []

    # Clean old entries
    rate_limit_store[ip] = [t for t in rate_limit_store[ip] if now - t < RATE_LIMIT_WINDOW]

    if len(rate_limit_store[ip]) >= RATE_LIMIT_MAX:
        return True

    rate_limit_store[ip].append(now)
    return False


def handler(event, context):
    # Handle CORS preflight
    if event.get("requestContext", {}).get("http", {}).get("method") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": get_cors_headers(),
            "body": "",
        }

    # Get client IP for rate limiting
    ip = event.get("requestContext", {}).get("http", {}).get("sourceIp", "unknown")
    if is_rate_limited(ip):
        return {
            "statusCode": 429,
            "headers": get_cors_headers(),
            "body": json.dumps({"error": "Too many requests. Please try again in a minute."}),
        }

    # Parse request body
    try:
        body = json.loads(event.get("body", "{}"))
        message = body.get("message", "").strip()
        session_id = body.get("sessionId", "")
    except json.JSONDecodeError:
        return {
            "statusCode": 400,
            "headers": get_cors_headers(),
            "body": json.dumps({"error": "Invalid request body."}),
        }

    if not message:
        return {
            "statusCode": 400,
            "headers": get_cors_headers(),
            "body": json.dumps({"error": "Message is required."}),
        }

    if len(message) > 1000:
        return {
            "statusCode": 400,
            "headers": get_cors_headers(),
            "body": json.dumps({"error": "Message too long. Max 1000 characters."}),
        }

    # Generate session ID if not provided (new conversation)
    if not session_id:
        session_id = f"session-{int(time.time() * 1000)}-{ip.replace('.', '')[-6:]}"

    # Invoke Bedrock Agent
    try:
        print(f"Invoking agent: agentId={AGENT_ID}, aliasId={AGENT_ALIAS_ID}, sessionId={session_id}")
        print(f"Message: {message}")

        response = bedrock_agent_runtime.invoke_agent(
            agentId=AGENT_ID,
            agentAliasId=AGENT_ALIAS_ID,
            sessionId=session_id,
            inputText=message,
        )

        print(f"Got response, reading completion stream...")

        # Collect the streamed response
        completion = ""
        for event_chunk in response.get("completion", []):
            chunk = event_chunk.get("chunk", {})
            if "bytes" in chunk:
                completion += chunk["bytes"].decode("utf-8")

        print(f"Completion: {completion[:200]}")

        return {
            "statusCode": 200,
            "headers": get_cors_headers(),
            "body": json.dumps({
                "response": completion,
                "sessionId": session_id,
            }),
        }

    except Exception as e:
        print(f"Error invoking Bedrock Agent: {type(e).__name__}: {str(e)}")
        import traceback
        traceback.print_exc()
        return {
            "statusCode": 500,
            "headers": get_cors_headers(),
            "body": json.dumps({
                "error": "Sorry, I'm having trouble right now. Please try again in a moment."
            }),
        }
