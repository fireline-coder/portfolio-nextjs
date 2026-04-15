"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LAMBDA_URL =
  "https://fj3igai6rjmb7hh2m27ga4iyhi0znfbg.lambda-url.us-west-2.on.aws/";

const examplePrompts = [
  "What did firefighting teach you about incident response?",
  "How did you scale data pipelines to 1M+ records?",
  "How did you build a multi-agent RAG system?",
  "What projects show leadership?",
  "What's your tech stack?",
];

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AskPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(text: string) {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch(LAMBDA_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text.trim(),
          sessionId: sessionId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      if (data.sessionId) {
        setSessionId(data.sessionId);
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setError("Failed to connect. Please try again in a moment.");
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  function handleNewChat() {
    setMessages([]);
    setSessionId("");
    setError("");
    inputRef.current?.focus();
  }

  return (
    <div className="mx-auto flex max-w-4xl flex-col px-4 py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            Ask Me Anything
          </h1>
          {messages.length > 0 && (
            <Button variant="outline" size="sm" onClick={handleNewChat}>
              New chat
            </Button>
          )}
        </div>
        <p className="mt-2 text-muted-foreground">
          Chat with an AI agent trained on my background, projects, and
          experience. Powered by AWS Bedrock.
        </p>
      </div>

      <Card className="flex flex-1 flex-col border-border/50">
        <CardContent className="flex flex-1 flex-col gap-4 p-4">
          {/* Messages area */}
          <div className="flex min-h-[400px] flex-col gap-4 overflow-y-auto rounded-lg border border-border/50 bg-muted/10 p-4">
            {messages.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-6">
                <div className="text-center">
                  <p className="text-lg font-medium text-foreground">
                    What would you like to know?
                  </p>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    Ask about my work &mdash; from building distributed data
                    systems to designing AI infrastructure, or how firefighting
                    shaped my approach to engineering.
                  </p>
                </div>
                <div className="flex max-w-xl flex-wrap justify-center gap-2">
                  {examplePrompts.map((prompt) => (
                    <Button
                      key={prompt}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => sendMessage(prompt)}
                    >
                      {prompt}
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-3 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      {msg.role === "assistant" ? (
                        <ReactMarkdown
                          className="prose prose-sm prose-invert max-w-none [&>p]:mb-2 [&>p:last-child]:mb-0 [&>ul]:mb-2 [&>ul]:ml-4 [&>ul]:list-disc [&>ol]:mb-2 [&>ol]:ml-4 [&>ol]:list-decimal [&_li]:mb-1 [&_strong]:text-foreground"
                        >
                          {msg.content}
                        </ReactMarkdown>
                      ) : (
                        msg.content
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg bg-muted px-4 py-3 text-sm text-muted-foreground">
                      <span className="inline-flex gap-1">
                        <span className="animate-bounce">.</span>
                        <span className="animate-bounce [animation-delay:0.1s]">
                          .
                        </span>
                        <span className="animate-bounce [animation-delay:0.2s]">
                          .
                        </span>
                      </span>
                    </div>
                  </div>
                )}
                {error && (
                  <div className="flex justify-center">
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about my experience..."
              className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              disabled={isLoading}
              maxLength={1000}
            />
            <Button type="submit" disabled={isLoading || !input.trim()}>
              Send
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
