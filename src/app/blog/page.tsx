import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const publishedPosts = [
  {
    title:
      "The Speakeasy Demo: Creating Space for Engineers to Go Deep",
    description:
      "Weekly tech demos are great for visibility, but some conversations need more room. I started a monthly \"speakeasy\" — informal, no time limits, just engineers going deep on what excites them.",
    href: "/blog/speakeasy-demos",
    tags: ["Engineering Culture", "Mentorship", "Knowledge Sharing"],
    date: "March 2026",
  },
  {
    title:
      "Teaching Made Me a Better Engineer (and Vice Versa)",
    description:
      "From CRLA-certified STEM tutor to senior engineer. The surprising overlap between debugging a student's mental model and debugging a distributed system.",
    href: "/blog/teaching-engineering",
    tags: ["Mentorship", "Teaching", "Engineering Culture"],
    date: "February 2026",
  },
  {
    title:
      "Building a RAG System From Scratch in 3 Months (As the Only Backend Engineer)",
    description:
      "A technical deep-dive into multi-agent RAG architecture with Bedrock. The real challenges: Cloudflare bypass, auth handling, async queuing, many-to-many mapping.",
    href: "/blog/building-rag-system",
    tags: ["RAG", "AWS Bedrock", "Architecture", "AI"],
    date: "January 2026",
  },
  {
    title:
      "I Wrote a 50-Page Business Proposal as an Engineer — Here's Why",
    description:
      "Why engineers should think beyond code. How I saw an opportunity to shift my company toward AI-driven products, and what it felt like to see leadership adopt the vision.",
    href: "/blog/business-proposal",
    tags: ["Strategy", "Leadership", "AI"],
    date: "July 2025",
  },
  {
    title:
      "From Fireline to Pipeline: What Wildland Firefighting Taught Me About Incident Response",
    description:
      "Drawing parallels between fighting wildfires and fighting production fires — the training, the decision-making, the communication, and the discipline that transfers directly.",
    href: "/blog/fireline-to-pipeline",
    tags: ["Firefighting", "Incident Response", "Engineering Culture"],
    date: "March 2024",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Blog / Thoughts</h1>
      <p className="mt-2 text-muted-foreground">
        Engineering insights, project breakdowns, and lessons learned.
      </p>

      {/* Published posts */}
      <div className="mt-10 space-y-6">
        {publishedPosts.map((post) => (
          <Link key={post.href} href={post.href} className="block group">
            <Card className="transition-colors group-hover:bg-accent">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  <span className="text-xs text-muted-foreground">
                    {post.date}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {post.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

    </div>
  );
}
