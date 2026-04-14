import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Work Experience</h1>
      <p className="mt-2 text-muted-foreground">
        My professional journey from wildland firefighting to senior software
        engineering.
      </p>

      {/* Career Highlights */}
      <Card className="mt-8 border-primary/30 bg-primary/5">
        <CardContent className="pt-6">
          <h2 className="text-lg font-semibold mb-4">Career Highlights</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-2 text-sm">
              <span className="text-primary font-bold mt-0.5">&#9650;</span>
              <span>Promoted to Senior in under 3 years</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <span className="text-primary font-bold mt-0.5">&#9650;</span>
              <span>Sole backend engineer for AI product replacement</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <span className="text-primary font-bold mt-0.5">&#9650;</span>
              <span><strong className="text-foreground">17%</strong> increase in customer email open rates</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <span className="text-primary font-bold mt-0.5">&#9650;</span>
              <span><strong className="text-foreground">1M+</strong> records processed in under 10 minutes</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <span className="text-primary font-bold mt-0.5">&#9650;</span>
              <span>Reduced incidents <strong className="text-foreground">~90-95%</strong> via legacy modernization</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <span className="text-primary font-bold mt-0.5">&#9650;</span>
              <span>Published in IEEE TSE 2022</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-10 space-y-8">
        {/* Act-On Senior */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-xl">
                  Senior Software Engineer
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  Act-On Software, Portland
                </p>
              </div>
              <Badge variant="outline">June 2025 &ndash; Present</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              <Badge variant="secondary" className="text-xs">AWS Bedrock</Badge>
              <Badge variant="secondary" className="text-xs">Kafka</Badge>
              <Badge variant="secondary" className="text-xs">Snowflake</Badge>
              <Badge variant="secondary" className="text-xs">Terraform</Badge>
              <Badge variant="secondary" className="text-xs">Spring Boot</Badge>
              <Badge variant="secondary" className="text-xs">Claude Code</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="hidden sm:flex shrink-0 items-start pt-1">
                <div className="rounded-lg bg-white/60 p-2">
                  <Image
                    src="/images/act-on.jpg"
                    alt="Act-On"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
              </div>
              <ul className="list-disc space-y-4 pl-5 text-sm text-muted-foreground">
              <li>
                <strong>AI Product Replacement:</strong> Sole backend engineer
                delivering a full AI product replacement under a 3-month
                deadline. Owned architecture, implementation, production
                rollout, release cycle, on-call, and customer onboarding.
              </li>
              <li>
                <strong>RAG Architecture:</strong> Built multi-agent,
                multi-source RAG infrastructure with AWS Bedrock, web crawler
                with Cloudflare/auth handling, and async queuing. Delivered on
                deadline, then expanded to many-to-many agent/source mapping.
              </li>
              <li>
                <strong>Email Performance Optimization:</strong> Collaborated
                with Customer Support, Design, Product, and Ops to build a
                subject line optimizer using Bedrock. Drove a 17% increase in
                customer email open rates.
              </li>
              <li>
                <strong>High-Scale Data Architecture:</strong> Architected a
                schema-agnostic Custom Objects feature processing 1M+ complex
                records per 10 minutes. Enabled real-time ingestion via
                Snowpipe streaming and Kafka integrations.
              </li>
              <li>
                <strong>Operational Excellence:</strong> Automated
                Postgres-to-Snowflake replication via OpenFlow. Provisioned
                infrastructure with Terraform (VPCs, subnets, IAM, Vault).
                Reduced connector setup from hours to under 20 minutes.
              </li>
              <li>
                <strong>Mentorship:</strong> Trained junior and mid-level
                engineers on best practices and AI-augmented workflows,
                including hands-on Claude Code and LLM tooling.
              </li>
            </ul>
            </div>
          </CardContent>
        </Card>

        {/* Act-On Mid-level */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-xl">
                  Mid-level Software Engineer
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  Act-On Software, Portland
                </p>
              </div>
              <Badge variant="outline">March 2024 &ndash; June 2025</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              <Badge variant="secondary" className="text-xs">Java 21</Badge>
              <Badge variant="secondary" className="text-xs">PostgreSQL</Badge>
              <Badge variant="secondary" className="text-xs">SCDF</Badge>
              <Badge variant="secondary" className="text-xs">Snowflake</Badge>
              <Badge variant="secondary" className="text-xs">AWS</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="hidden sm:flex shrink-0 items-start pt-1">
                <div className="rounded-lg bg-white/60 p-2">
                  <Image
                    src="/images/act-on.jpg"
                    alt="Act-On"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
              </div>
              <ul className="list-disc space-y-4 pl-5 text-sm text-muted-foreground">
                <li>
                  <strong>Legacy Modernization:</strong> Upgraded a
                  mission-critical dataflow service (11 downstream dependencies,
                  customer-facing analytics) from Java 8 to Java 21.
                  Consolidated distributed H2 databases into centralized
                  PostgreSQL, eliminating recurring data corruption every few
                  months. Reduced incidents by ~90-95% and established real-time
                  monitoring (previously undetected for up to a month). Directly
                  enabled migration from Act-On&apos;s data center to AWS.
                </li>
                <li>
                  <strong>Pipeline Engineering:</strong> Built multiple data
                  processing pipelines using Spring Cloud Data Flow to integrate
                  Snowflake, S3, and internal microservices.
                </li>
                <li>
                  <strong>System Design:</strong> Designed a segmentation
                  initialization subsystem evaluating contacts against factor
                  types (behavior, profile, CRM, etc.). Used factory and
                  strategy patterns to make onboarding new factor types trivial.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Act-On Junior */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-xl">
                  Junior Software Engineer
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  Act-On Software, Portland
                </p>
              </div>
              <Badge variant="outline">
                November 2022 &ndash; March 2024
              </Badge>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              <Badge variant="secondary" className="text-xs">Spring Boot</Badge>
              <Badge variant="secondary" className="text-xs">Snowflake</Badge>
              <Badge variant="secondary" className="text-xs">Kubernetes</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="hidden sm:flex shrink-0 items-start pt-1">
                <div className="rounded-lg bg-white/60 p-2">
                  <Image
                    src="/images/act-on.jpg"
                    alt="Act-On"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
              </div>
              <ul className="list-disc space-y-4 pl-5 text-sm text-muted-foreground">
                <li>
                  <strong>Performance Optimization:</strong> Optimized data
                  handling for a data ingestion microservice, eliminating
                  duplication errors and reducing response times from 8 minutes
                  to 300 milliseconds.
                </li>
                <li>
                  <strong>Process Improvement:</strong> Fixed a critical UTF-8
                  corruption issue affecting ~70-80% of customer accounts
                  &mdash; all data with special characters or emojis was
                  impacted.
                </li>
                <li>
                  <strong>Customer Support Champion:</strong> Championed
                  escalation resolution, reducing org-wide high escalations from
                  20+ to 9, mediums from 15+ to 2, and fully eliminating my
                  team&apos;s 5 escalations.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* Research Assistant */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-xl">Research Assistant</CardTitle>
                <p className="text-muted-foreground text-sm">University of Alberta</p>
              </div>
              <Badge variant="outline">May 2020 &ndash; December 2021</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              <Badge variant="secondary" className="text-xs">Java</Badge>
              <Badge variant="secondary" className="text-xs">Git</Badge>
              <Badge variant="secondary" className="text-xs">Empirical SE</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="hidden sm:flex shrink-0 items-start pt-1">
                <div className="rounded-lg bg-white/60 p-2">
                  <Image
                    src="/images/SMR.png"
                    alt="Research"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <ul className="list-disc space-y-4 pl-5 text-sm text-muted-foreground">
                  <li>
                    Spearheaded a project to revitalize refactoring-aware
                    operation-based merging in a Java-based implementation.
                  </li>
                  <li>
                    Emulated double dispatch in Java to make operation-based
                    merging feasible to scale and maintain.
                  </li>
                  <li>
                    Leveraged state-of-the-art refactoring detection tools
                    applied to Git.
                  </li>
                  <li>
                    Leveraged sparsely documented third-party libraries to
                    programmatically perform refactorings and detect
                    refactoring-related merge conflicts, supporting 17 of the
                    most common known refactoring types.
                  </li>
                  <li>
                    Performed large-scale empirical evaluations comparing with
                    IntelliMerge. Published results in IEEE Transactions on
                    Software Engineering (TSE 2022).
                  </li>
                </ul>
                <a
                  href="https://arxiv.org/pdf/2112.10370.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="text-xs">
                    View Preprint (arXiv)
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* TA */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-xl">Teaching Assistant</CardTitle>
                <p className="text-muted-foreground text-sm">University of Alberta</p>
              </div>
              <Badge variant="outline">
                September 2019 &ndash; May 2020
              </Badge>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              <Badge variant="secondary" className="text-xs">C/C++</Badge>
              <Badge variant="secondary" className="text-xs">Operating Systems</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="hidden sm:flex shrink-0 items-start pt-1">
                <Image
                  src="/images/UofA.JPG"
                  alt="University of Alberta"
                  width={96}
                  height={96}
                  className="rounded-lg object-cover h-24 w-24"
                />
              </div>
              <ul className="list-disc space-y-4 pl-5 text-sm text-muted-foreground">
                <li>
                  Delivered course material in lab settings for CMPUT 379
                  (Operating Systems).
                </li>
                <li>
                  Designed assessments, quizzes, and exams alongside the
                  instructor.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* STEM Tutor */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-xl">STEM Tutor</CardTitle>
                <p className="text-muted-foreground text-sm">Clark College</p>
              </div>
              <Badge variant="outline">April 2016 &ndash; May 2019</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              <Badge variant="secondary" className="text-xs">CS</Badge>
              <Badge variant="secondary" className="text-xs">Math</Badge>
              <Badge variant="secondary" className="text-xs">Electrical Engineering</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="hidden sm:flex shrink-0 items-start pt-1">
                <Image
                  src="/images/Clark.jpg"
                  alt="Clark College"
                  width={96}
                  height={96}
                  className="rounded-lg object-cover h-24 w-24"
                />
              </div>
              <ul className="list-disc space-y-4 pl-5 text-sm text-muted-foreground">
              <li>
                Assisted hundreds of students at all levels in STEM fields
                including computer science, math, and electrical engineering.
              </li>
              <li>
                Adapted teaching methods to each student&apos;s learning style.
              </li>
              <li>
                Received the OSWALD Award (Outstanding Students With Academic
                Leadership and Development Skills) for excellence in service.
              </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Firefighter */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-xl">
                  Wildland Firefighter (Type 2 Initial Attack)
                </CardTitle>
                <p className="text-muted-foreground text-sm">GFP Response</p>
              </div>
              <Badge variant="outline">
                April 2014 &ndash; September 2015
              </Badge>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              <Badge variant="secondary" className="text-xs">Leadership</Badge>
<Badge variant="secondary" className="text-xs">Team Coordination</Badge>
              <Badge variant="secondary" className="text-xs">Risk Assessment</Badge>
              <Badge variant="secondary" className="text-xs">Communication</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="hidden sm:flex shrink-0 items-start pt-1">
                <Image
                  src="/images/GFP.jpg"
                  alt="GFP Response"
                  width={128}
                  height={128}
                  className="rounded-lg object-cover h-32 w-32"
                />
              </div>
              <div className="space-y-4">
                <ul className="list-disc space-y-4 pl-5 text-sm text-muted-foreground">
                  <li>
                    Completed rigorous wildfire training with an 82% attrition
                    rate &mdash; one of 11 out of 60+ trainees selected for
                    the crew.
                  </li>
                  <li>
                    Operated in high-risk wildfire environments requiring rapid
                    decision-making under pressure, real-time risk assessment,
                    and tight team coordination.
                  </li>
                  <li>
                    Executed tactical firefighting operations including building
                    and holding fireline, burnout operations, and
                    initial/direct/indirect attack strategies to contain and
                    suppress active wildfires.
                  </li>
                  <li>
                    Actively communicated fire behavior with other firefighters
                    and air attack to ensure safe fire engagement.
                  </li>
                </ul>
                <p className="text-sm italic text-muted-foreground">
                  My time as a wildland firefighter taught me communication,
                  discipline, working under pressure, time management, and
                  organizational skills &mdash; all directly transferable to
                  software engineering.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
