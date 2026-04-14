import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function OverviewPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      {/* Hero */}
      <section className="flex flex-col items-center gap-6 text-center">
        <Image
          src="/images/prof.jpg"
          alt="Max Ellis"
          width={180}
          height={180}
          className="rounded-full border-2 border-primary/50 object-cover"
          priority
        />
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Max Ellis</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Senior Software Engineer building resilient systems &mdash; with a
            firefighter&apos;s mindset
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            <Badge variant="secondary">Kafka</Badge>
            <Badge variant="secondary">Snowflake</Badge>
            <Badge variant="secondary">AWS</Badge>
            <Badge variant="secondary">PostgreSQL</Badge>
            <Badge variant="secondary">Terraform</Badge>
            <Badge variant="secondary">RAG</Badge>
          </div>
        </div>
      </section>

      {/* About */}
      <Card className="mt-14 border-border/50">
        <CardContent className="max-w-none px-8 py-8">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            High-velocity Senior Software Engineer with a proven track record of
            architecting scalable data platforms and automating mission-critical
            infrastructure. Expert in backend development for distributed
            systems, utilizing Java, Snowflake, and AWS to process massive data
            volumes. Recognized for &ldquo;smoke jumping&rdquo; into critical
            projects to restore stability, performance, and reliability.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            My unique perspective stems from my time as a wildland firefighter,
            where I learned to roll up my sleeves, adapt rapidly to changing
            situations, and now fight any &ldquo;virtual fires&rdquo; that
            arise. This foundation, combined with my commitment to building
            resilient systems and solving complex problems at scale, fuels an
            unwavering drive to contribute meaningfully and engineer
            transformative change.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            I&apos;m passionate about AI-augmented development &mdash; I mentor
            engineers on AI workflows using Claude Code and other LLM tooling,
            and recently architected a multi-agent RAG infrastructure using AWS
            Bedrock.
          </p>
        </CardContent>
      </Card>

      {/* Quick links */}
      <div className="mt-14 grid gap-5 sm:grid-cols-3">
        <QuickLink
          href="/experience"
          title="Work Experience"
          description="Act-On Software, Research, Teaching & more"
        />
        <QuickLink
          href="/projects"
          title="Projects"
          description="Data pipelines, cloud migrations & system optimization"
        />
        <QuickLink
          href="/ask"
          title="Ask Me Anything"
          description="Chat with my AI agent about my background"
        />
      </div>
    </div>
  );
}

function QuickLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link href={href} className="group">
      <Card className="h-full border-border/50 transition-all duration-200 group-hover:border-primary/30 group-hover:bg-accent">
        <CardContent className="px-6 py-6">
          <h3 className="font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
