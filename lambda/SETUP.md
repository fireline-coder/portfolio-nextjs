# RAG Agent Setup Guide

## Prerequisites
- AWS account with Bedrock access enabled (specifically Claude models)
- AWS CLI configured locally (optional, can do everything in console)

## Step 1: Create S3 Bucket for Knowledge Base

1. Go to S3 Console → Create bucket
2. Name: `max-ellis-kb-docs` (or similar)
3. Region: `us-east-1` (Bedrock has best model availability here)
4. Upload all files from `kb-docs/` folder + `public/files/Ellis_Max_Resume.pdf`

## Step 2: Create Bedrock Knowledge Base

1. Go to Amazon Bedrock Console → Knowledge bases → Create
2. Name: `max-ellis-portfolio-kb`
3. Data source: Select your S3 bucket
4. Embedding model: Titan Embeddings v2
5. Vector store: Quick create (S3-based, managed by Bedrock)
6. Create and sync the knowledge base
7. Note the **Knowledge Base ID** — you'll need it for the agent

## Step 3: Create Bedrock Agent

1. Go to Amazon Bedrock Console → Agents → Create
2. Name: `max-ellis-portfolio-agent`
3. Model: Claude Sonnet (or Claude Haiku for lower cost)
4. System prompt (paste this):

```
You are Max Ellis's AI assistant on his portfolio website. Your job is to answer questions about Max's work experience, projects, skills, education, achievements, and blog posts.

Rules:
- Only answer questions related to Max Ellis and his professional background
- Use the knowledge base to find accurate information — do not make up details
- Be conversational but professional
- If someone asks something unrelated to Max, politely redirect: "I'm here to answer questions about Max's background and work. Is there something specific about his experience you'd like to know?"
- Keep responses concise but informative
- When referencing blog posts, mention the title so the user can find it on the site
- If you're not sure about something, say so rather than guessing
```

5. Associate your knowledge base with this agent
6. Create an alias (e.g., `live`)
7. Note the **Agent ID** and **Agent Alias ID**

## Step 4: Create Lambda Function

1. Go to Lambda Console → Create function
2. Name: `max-ellis-portfolio-agent`
3. Runtime: Python 3.12
4. Architecture: arm64 (cheaper)
5. Paste the code from `index.py`
6. Set environment variables:
   - `AGENT_ID` = your agent ID from Step 3
   - `AGENT_ALIAS_ID` = your alias ID from Step 3
   - `ALLOWED_ORIGIN` = `https://max-ellis.vercel.app`
7. Set timeout to 30 seconds (Bedrock can take a few seconds)
8. Set memory to 256 MB

### Lambda Permissions

Add this inline policy to the Lambda execution role:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "bedrock:InvokeAgent",
      "Resource": "arn:aws:bedrock:us-east-1:YOUR_ACCOUNT_ID:agent-alias/YOUR_AGENT_ID/YOUR_ALIAS_ID"
    }
  ]
}
```

### Lambda Function URL

1. Go to your Lambda → Configuration → Function URL
2. Auth type: NONE
3. Configure CORS:
   - Allow origin: `https://max-ellis.vercel.app`
   - Allow methods: `POST, OPTIONS`
   - Allow headers: `Content-Type`
4. Note the **Function URL** — this is what the frontend will call

## Step 5: Update Frontend

Update `src/app/ask/page.tsx` to call the Lambda Function URL.
The session ID is managed client-side and sent with each request for multi-turn conversations.

## Step 6: Test

Example prompts to test:
- "What is Max's experience with Kafka?"
- "Tell me about the RAG system Max built"
- "What did Max do as a firefighter?"
- "What's Max's educational background?"
- "What would Max do differently on the data ingestion project?"

## Cost Estimate (very rough)

- Bedrock Knowledge Base: ~$0.01 per query
- Bedrock Agent (Claude Sonnet): ~$0.01-0.03 per query
- Lambda: essentially free at this scale
- S3: essentially free for a few markdown files

At low portfolio traffic, expect < $5/month.
