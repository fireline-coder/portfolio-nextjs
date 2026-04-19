import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const projects = [
  {
    title: "Building a Production RAG System in 3 Months",
    tldr: "Built a multi-agent RAG platform from scratch as the sole backend engineer, replacing a sunset third-party AI product and expanding beyond feature parity.",
    problem:
      "A partner AI product was being sunset, leaving a critical gap in Act-On's AI capabilities. The replacement needed to be built from scratch under a 3-month deadline with a single backend engineer.",
    whatIBuilt: [
      "Multi-agent, multi-source RAG infrastructure using AWS Bedrock",
      "Web crawler with Cloudflare bypass, auth handling, and distributed SQS-based processing",
      "Async queuing system to prevent rate-limiting across concurrent crawlers",
      "Many-to-many agent/source mapping — beyond the original one-to-one model",
      "Delivered initial parity on the 3-month deadline, then expanded capabilities",
    ],
    keyChallenge:
      "Ensuring consistent agent behavior across diverse customer configurations. Prompt tuning for one customer would break another — solved by building a systematic agent test framework that catches regressions before they hit production.",
    techStack: ["AWS Bedrock", "Lambda", "API Gateway", "RAG", "Web Crawler"],
    impact:
      "Replaced a third-party dependency with an in-house solution, reducing costs and giving full control over the AI product roadmap. Expanded beyond original feature parity to support many-to-many agent/source mapping.",
    architectureDiagram: "/agent-diagram.png",
    whatIdDoDifferently:
      "Use one language for the entire backend instead of splitting between Python and Node.js — two dependency ecosystems and two mental models added unnecessary friction. Invest more upfront in observability, since being the sole backend engineer means the system needs to tell you what's wrong. And engage the architecture committee earlier for peer review. The pressure to move fast meant I flew solo on architectural decisions that would have benefited from a second set of eyes.",
  },
  {
    title: "AI-Powered Email Subject Line Optimizer",
    tldr: "First AI product shipped from my 50-page business proposal — built in one month while learning API Gateway, Lambda, and Bedrock from scratch.",
    problem:
      "Customers struggled to write effective email subject lines, leading to low open rates and reduced campaign performance. There was no data-driven tooling to help them understand what worked and why.",
    whatIBuilt: [
      "Joins email analytics with metadata tables across 27 months of customer history",
      "Analyzes top 5 and bottom 5 performing subject lines to surface patterns (length, tone, emoji usage, urgency, personalization)",
      "Evaluates subject line relevance against email content",
      "Generates 5 AI-suggested alternatives using insights, original subject, and email content",
      "Integrated into the email draft workflow at the preview stage",
      "Stack: API Gateway → Lambda → Step Functions → Bedrock",
    ],
    keyChallenge:
      "Learning API Gateway, Lambda, and Bedrock from scratch under a one-month deadline while establishing patterns robust enough to become the foundation for future AI products.",
    techStack: [
      "AWS Bedrock",
      "Lambda",
      "API Gateway",
      "Step Functions",
      "Spring Boot",
    ],
    impact:
      "Drove a 17% increase in email open rates in early comparisons. First AI product shipped from my 50-page business proposal, and the API Gateway/Lambda/Bedrock patterns I established became the foundation for the RAG system built afterward.",
    architectureDiagram: null,
    whatIdDoDifferently:
      "Continued iterating on it. Showing users how their AI-generated subject lines performed compared to non-generated ones would have driven adoption and demonstrated ROI more clearly. I'd also add more monitoring around usage patterns and generation quality.",
  },
  {
    title: "Schema-Agnostic Data Ingestion Platform (1M Records/10 Min)",
    tldr: "Greenfield platform enabling customers to bring any structured data into Act-On for segmentation and personalized marketing — the most complex project I've worked on.",
    problem:
      "Act-On had no way for customers to integrate proprietary structured data — college grades, concert tickets, sales records — for segmentation and personalized marketing. Customers needed a schema-agnostic system that could handle arbitrary data shapes, both profile data (student records, contact info) and behavior data (event attendance, purchases), with both batch and real-time ingestion.",
    whatIBuilt: [
      "Schema API supporting up to 512 columns with rich subtypes (URLs, custom enums, 40+ currencies, flexible date/datetime parsing)",
      "Batch mode: S3 upload → ordered queue → SCDF job → validate/transform → Snowpipe Streaming → Snowflake staging → changeset detection → merge → Kafka",
      "Streaming mode: Kafka topic (webhooks) → microbatch by account/object ID → same validation-through-merge pipeline",
      "Per-row/per-column validation with detailed error reports (expected formats, fix suggestions, error codes mapped to logs for support)",
      "Performance iterated from ~2 hours per 100K records to 1M records (52 columns, 1 GB) in under 10 minutes",
    ],
    keyChallenge:
      "Date/datetime parsing without guaranteed format hints. Customers could provide dates in virtually any format, and the system had to figure it out — a deceptively hard problem at scale across dozens of locales and conventions.",
    techStack: [
      "Apache Kafka",
      "Snowpipe Streaming",
      "Snowflake",
      "Spring Cloud Data Flow",
      "Spring Boot",
      "AWS S3",
    ],
    impact:
      "Enabled Custom Objects — a new high-value product offering that gave customers the ability to bring any structured data into Act-On for segmentation and personalized campaigns. Opened new revenue streams and enhanced customer stickiness.",
    architectureDiagram: "/custom-objects-diagram.png",
    whatIdDoDifferently:
      "Store error report data in a database instead of S3. The current approach works for download, but makes it harder to display reports in-app and query across ingestion runs.",
  },
  {
    title: "Unblocking Cloud Migration by Fixing Silent Data Duplication",
    tldr: "Traced a 'random' data duplication bug to its root cause in distributed H2 databases, then modernized the service from Java 8 to 21 with zero downtime.",
    problem:
      "A mission-critical dataflow service ran on each customer instance with embedded H2 databases storing read watermarks. It consumed 7 file-based data sources (fact data, CRM data, account data), transformed and published to Kinesis for 13 downstream dependencies. The distributed H2 instances caused silent data duplication — when a customer account migrated between instances, the target instance had no record of it and would re-read every piece of data from scratch. This was accepted as random duplicate data until I traced an escalation to a recent account migration and pieced the root cause together. The service was also stuck on Java 8 and was one of the most critical blockers for migrating from Flexential data centers to AWS.",
    whatIBuilt: [
      "Diagnosed root cause: account migrations between customer instances caused full data re-reads (distributed H2 had no cross-instance awareness)",
      "Upgraded Java 8 → Java 21 (required concurrent H2 version migration due to incompatibility)",
      "Consolidated distributed H2 databases into centralized PostgreSQL using a dual-write strategy",
      "Canary rollout: partial canary → full canary → incremental region-by-region",
      "Updated Puppet and deployment pipeline for graceful rollout process",
    ],
    keyChallenge:
      "The H2-to-PostgreSQL migration had to happen alongside the Java 8-to-21 upgrade because the embedded H2 version wasn't compatible with Java 21 — two tightly coupled migrations coordinated without breaking a service feeding 13 downstream dependencies.",
    techStack: ["Java 21", "PostgreSQL", "Kinesis", "AWS", "Puppet", "H2"],
    impact:
      "Eliminated the silent data duplication that had been accepted as normal. Unblocked the Flexential-to-AWS cloud migration for this service — the most nuclear blocker, since without the fix, migrating would have duplicated all of every customer's data. Centralized data visibility replaced opaque per-instance H2 databases.",
    architectureDiagram: "/legacy-diagram.png",
    whatIdDoDifferently:
      "Put a microservice in front of PostgreSQL for watermark management instead of having ~100 customer instances connect to the database directly. The current setup works (I load-tested it before migration), but abstracting the database behind a service would be cleaner and more scalable.",
  },
  {
    title: "Fixing a Data Lake Averaging 800+ Errors/Hour",
    tldr: "Diagnosed and eliminated cascading failures in Act-On's core data lake — from 8-minute response times to 300ms.",
    problem:
      "Act-On's data lake was averaging 800+ data errors per hour with query response times up to 8 minutes. The root cause: metadata changes from customer instances were sent directly to a microservice via REST API, which wrote to a Snowflake base table using standard merges. High volume effectively DDoS'd the service, merge operations held locks that queued all downstream queries, and JDBC timeouts caused silent failures — retries then duplicated data when the original query eventually succeeded.",
    whatIBuilt: [
      "Traced root cause from Splunk logs to Snowflake query history (standard merge locks → query queuing → JDBC timeouts → silent failures → duplicate retries)",
      "Implemented deferred merge strategy: writes go to a history table, Snowflake stream captures changes, merge procedure consumes hourly",
      "Eliminated locking contention that caused the cascading failures",
    ],
    keyChallenge:
      "The failures were mostly silent — Splunk showed slow transactions but few errors. The real picture only emerged by cross-referencing Snowflake's query history, where backed-up and failing queries told the full story.",
    techStack: [
      "Snowflake",
      "Deferred Merge",
      "Spring Boot",
      "KVS Queue",
      "JDBC",
    ],
    impact:
      "Reduced average response time from 8 minutes to 300 milliseconds. Completely eliminated all 800+/hour persistent data errors and resolved the data duplication issue.",
    architectureDiagram: null,
    whatIdDoDifferently:
      "Replace the REST API and microservice entirely. Put metadata changes onto a Kafka topic and use Snowpipe Streaming to ingest directly into Snowflake — fewer failure points, lower latency, and a simpler architecture that eliminates the JDBC connection management that caused the silent failures in the first place.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">
        Engineering Projects
      </h1>
      <p className="mt-2 text-muted-foreground">
        Select projects demonstrating data engineering, system modernization,
        and performance optimization at scale.
      </p>

      <div className="mt-10 space-y-8">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{project.tldr}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <Section label="Problem">{project.problem}</Section>

              <Separator />

              <div>
                <h4 className="text-sm font-semibold mb-2">What I Built</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {project.whatIBuilt.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 shrink-0 text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                <h4 className="text-sm font-semibold mb-1">Key Challenge</h4>
                <p className="text-sm text-muted-foreground">
                  {project.keyChallenge}
                </p>
              </div>

              <Separator />

              <Section label="Impact">{project.impact}</Section>

              {project.architectureDiagram && (
                <>
                  <Separator />
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Architecture Diagram</h4>
                    {project.architectureDiagram === "placeholder" ? (
                      <p className="text-sm text-muted-foreground italic">Diagram coming soon.</p>
                    ) : (
                      <Image
                        src={project.architectureDiagram}
                        alt={`${project.title} architecture diagram`}
                        width={800}
                        height={450}
                        className="rounded-lg border border-border"
                      />
                    )}
                  </div>
                </>
              )}

              <Separator />

              <Section label="What I Would Do Differently">
                <span className="italic">{project.whatIdDoDifferently}</span>
              </Section>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-1">{label}</h4>
      <p className="text-sm text-muted-foreground">{children}</p>
    </div>
  );
}
