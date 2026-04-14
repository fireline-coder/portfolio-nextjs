import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const coreStrengths = [
  "Distributed Data Systems",
  "Real-Time Streaming Pipelines",
  "AI / RAG Systems",
  "Cloud Infrastructure (AWS)",
  "System Reliability & Performance",
];

const skillCategories = [
  {
    title: "Core Engineering (Deep Expertise)",
    description: "Technologies I architect and build production systems with daily.",
    skills: [
      "Java",
      "Spring Boot",
      "SQL",
      "Apache Kafka",
      "Snowflake",
      "PostgreSQL",
      "AWS (Lambda, S3, DynamoDB, API Gateway, EC2)",
      "Terraform",
      "Kubernetes",
      "Docker",
    ],
  },
  {
    title: "AI Systems & LLM Engineering",
    description:
      "Building intelligent systems, not just using AI as a tool.",
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "Multi-agent architectures",
      "AWS Bedrock",
      "Claude Code",
      "LLM-assisted prototyping & iteration",
      "Prompt engineering",
    ],
  },
  {
    title: "AI-Augmented Stack",
    description:
      "Technologies I deliver production systems with via AI-assisted development, enabling rapid onboarding and high-quality output across unfamiliar stacks.",
    skills: [
      "Node.js",
      "React",
      "Next.js",
      "Web scraping / crawlers",
      "Python",
    ],
  },
  {
    title: "Data & Streaming",
    description: "End-to-end data pipeline design and optimization.",
    skills: [
      "Snowpipe Streaming",
      "Spring Cloud Data Flow",
      "AWS Kinesis",
      "OpenFlow",
      "JDBC",
    ],
  },
  {
    title: "Tools & Observability",
    description: "Development, deployment, and monitoring.",
    skills: [
      "Git",
      "Bitbucket Pipelines",
      "IntelliJ IDEA",
      "HashiCorp Vault",
      "Splunk",
      "New Relic",
    ],
  },
  {
    title: "Engineering Practices",
    description: "How I work, not just what I work with.",
    skills: [
      "Agile / Scrum",
      "Test-Driven Development",
      "Code Review",
      "Mentorship",
      "CI/CD",
      "Monitoring & Alerting",
      "System Design",
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">
        Skills & Tech Stack
      </h1>
      <p className="mt-2 text-muted-foreground">
        Backend-focused engineer specializing in distributed data systems, cloud
        infrastructure, and AI-driven applications.
      </p>

      {/* AI-Augmented Development callout */}
      <Card className="mt-8 border-primary/30 bg-primary/5">
        <CardContent className="pt-6">
          <h2 className="text-lg font-semibold mb-2">
            Development Philosophy
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I leverage AI-assisted development (Claude Code, LLM tooling) to
            rapidly design, implement, and iterate on systems across unfamiliar
            stacks while maintaining production-quality standards. This allows me
            to focus on system design and architecture over syntax memorization,
            and to deliver production services in technologies I haven&apos;t
            previously worked with.
          </p>
        </CardContent>
      </Card>

      {/* Core Strengths */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3">Core Strengths</h2>
        <div className="flex flex-wrap gap-2">
          {coreStrengths.map((strength) => (
            <Badge
              key={strength}
              variant="outline"
              className="text-sm px-3 py-1 border-primary/50 text-foreground"
            >
              {strength}
            </Badge>
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      {/* Skill categories */}
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <Card key={category.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{category.title}</CardTitle>
              <p className="text-xs text-muted-foreground">
                {category.description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
