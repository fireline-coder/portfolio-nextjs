"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const examplePrompts = [
  "What experience do you have with backend systems?",
  "Tell me about your firefighting experience",
  "What projects show leadership?",
  "What's your tech stack?",
  "How did you reduce data errors at Act-On?",
];

export default function AskPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Ask Me Anything</h1>
      <p className="mt-2 text-muted-foreground">
        Chat with an AI agent trained on my background, projects, and
        experience. Powered by AWS Bedrock.
      </p>

      <Card className="mt-10">
        <CardHeader>
          <CardTitle className="text-lg">AI Chat Agent</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Placeholder chat area */}
          <div className="flex min-h-[300px] items-center justify-center rounded-lg border border-dashed border-border bg-muted/30">
            <div className="text-center">
              <p className="text-lg font-medium text-muted-foreground">
                RAG Agent Coming Soon
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                This will be an interactive chat powered by AWS Bedrock + Lambda
              </p>
            </div>
          </div>

          {/* Example prompts */}
          <div>
            <p className="mb-3 text-sm font-medium">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {examplePrompts.map((prompt) => (
                <Button
                  key={prompt}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  disabled
                >
                  {prompt}
                </Button>
              ))}
            </div>
          </div>

          {/* Placeholder input */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask me anything about my experience..."
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground"
              disabled
            />
            <Button disabled>Send</Button>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="secondary">Phase 2</Badge>
            <span className="text-xs text-muted-foreground">
              AWS Bedrock + Lambda + API Gateway integration
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
