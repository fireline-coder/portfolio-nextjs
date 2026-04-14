import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BuildingRagSystemPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog">
        <Button variant="ghost" size="sm" className="mb-6 text-xs">
          &larr; Back to Blog
        </Button>
      </Link>

      <h1 className="text-3xl font-bold tracking-tight">
        Building a RAG System From Scratch in 3 Months (As the Only Backend
        Engineer)
      </h1>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Badge variant="secondary">RAG</Badge>
        <Badge variant="secondary">AWS Bedrock</Badge>
        <Badge variant="secondary">Architecture</Badge>
        <Badge variant="secondary">AI</Badge>
        <span className="text-sm text-muted-foreground">April 2026</span>
      </div>

      <Separator className="my-8" />

      <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
        <h3 className="mb-2 text-sm font-semibold text-foreground">Key Takeaways</h3>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>&bull; One engineer can ship complex systems with the right tools and architecture</li>
          <li>&bull; Prompt engineering at scale requires systematic testing, not manual tuning</li>
          <li>&bull; AI-assisted development expands execution capability &mdash; it doesn&apos;t replace understanding</li>
        </ul>
      </div>

      <nav className="mt-6 space-y-1 text-sm">
        <p className="font-medium text-foreground">In this post</p>
        <a href="#replacing" className="block text-primary hover:underline">What We Were Replacing</a>
        <a href="#starting-point" className="block text-primary hover:underline">Starting Point</a>
        <a href="#architecture" className="block text-primary hover:underline">The Architecture</a>
        <a href="#crawler" className="block text-primary hover:underline">The Crawler</a>
        <a href="#many-to-many" className="block text-primary hover:underline">Going Beyond Parity: Many-to-Many</a>
        <a href="#hardest-problem" className="block text-primary hover:underline">The Hardest Problem: Agent Behavior at Scale</a>
        <a href="#only-backend" className="block text-primary hover:underline">Being the Only Backend Engineer</a>
        <a href="#deadline" className="block text-primary hover:underline">Hitting the Deadline</a>
        <a href="#war-story" className="block text-primary hover:underline">The Production War Story</a>
        <a href="#do-differently" className="block text-primary hover:underline">What I&apos;d Do Differently</a>
      </nav>

      <article className="mt-8 space-y-8 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          When a partner company that provided our AI chat product went out of
          business, we had three months to build a replacement from scratch. I
          was the sole backend engineer.
        </p>
        <p>
          This is the story of how it got built &mdash; the architecture
          decisions, the hard problems, and the things I&apos;d do differently.
        </p>

        <section>
          <h2 id="replacing" className="mb-3 text-xl font-semibold text-foreground">
            What We Were Replacing
          </h2>
          <p>
            The existing product, provided by a partner company, gave customers
            a RAG-powered chat agent that lived on their website. It crawled
            their site, used it as a knowledge base, and let visitors ask
            questions. It was simple: one agent, one source, one website. Agents
            could trigger actions based on rules, like displaying a form.
          </p>
          <p className="mt-4">
            When the partner went out of business, we needed to replace it
            &mdash; and we decided to build something better.
          </p>
        </section>

        <section>
          <h2 id="starting-point" className="mb-3 text-xl font-semibold text-foreground">
            Starting Point
          </h2>
          <p>
            I wasn&apos;t starting completely from zero, but close. Someone in
            the org had written a draft of a page crawler in Node.js. I was able
            to leverage the API Gateway we&apos;d built for the subject line
            optimizer. And I had just finished my first project using AWS
            Lambdas and Bedrock Prompt Management, so the patterns were fresh.
          </p>
          <p className="mt-4">
            Everything else &mdash; the architecture, the agent system, the
            multi-source design, the crawler infrastructure &mdash; I designed
            from scratch.
          </p>
        </section>

        <section>
          <h2 id="architecture" className="mb-3 text-xl font-semibold text-foreground">
            The Architecture
          </h2>
          <p>
            Here&apos;s how a request flows through the system:
          </p>
          <p className="mt-4">
            The agent lives on the customer&apos;s website as an embedded
            widget. When a visitor opens it, the widget calls an endpoint to
            fetch the agent&apos;s configuration &mdash; color, placement,
            example prompts, which agent to use (for multi-agent support).
          </p>
          <p className="mt-4">
            When the visitor sends a message, it spins up a Lambda that handles
            the request. The Lambda tracks analytics data, performs visitor
            resolution (binding the visitor to an existing contact or creating a
            new one), and retrieves the agent&apos;s configured actions &mdash;
            forms, links, and their trigger rules.
          </p>
          <p className="mt-4">
            Everything gets passed into the first prompt. It hits the Bedrock
            Agent, which either triggers an action or queries the knowledge
            base. The Lambda saves reporting data and returns the response with
            a session ID for conversation continuity.
          </p>
          <p className="mt-4">
            The major components: AWS Lambda, Bedrock Agents, Bedrock Knowledge
            Bases, PostgreSQL, API Gateway, S3, SQS, and DynamoDB.
          </p>
        </section>

        <section>
          <h2 id="crawler" className="mb-3 text-xl font-semibold text-foreground">
            The Crawler
          </h2>
          <p>
            The web crawler is what populates the knowledge base. It supports
            multiple modes &mdash; recursive crawling, sitemap parsing, and
            explicit URL lists. It collects page content and stores it in S3 for
            the knowledge base to index.
          </p>
          <p className="mt-4">
            The interesting engineering was in handling the real world. Not every
            website cooperates with crawlers.
          </p>
          <p className="mt-4">
            We built a three-step approach: first, try a standard crawl. If
            that fails for specific reasons, try a stealth approach. If that
            fails, use an external API to access Cloudflare-protected pages.
          </p>
          <p className="mt-4">
            For password-protected sites, users can provide credentials which we
            store securely using KMS encryption. The crawler authenticates,
            captures the session cookie, and caches auth info in DynamoDB so it
            can be shared across multiple Lambdas.
          </p>
          <p className="mt-4">
            The crawler itself is distributed &mdash; each Lambda crawls a page,
            detects URLs, and pushes them onto an SQS queue that triggers more
            Lambdas. A queuing system prevents multiple crawlers from hitting
            the same website simultaneously (avoiding 429 rate-limit errors).
            Sources automatically recrawl every 30 days to keep knowledge fresh,
            and users can trigger a manual recrawl whenever they update their
            site.
          </p>
        </section>

        <section>
          <h2 id="many-to-many" className="mb-3 text-xl font-semibold text-foreground">
            Going Beyond Parity: Many-to-Many
          </h2>
          <p>
            The original product was one agent, one source. We built
            many-to-many.
          </p>
          <p className="mt-4">
            A customer can have multiple agents on their website. Agent A might
            live on a subsection of pages while Agent B covers the rest. They
            can share the same knowledge base with different configurations, or
            read from entirely separate sources. A single agent can also pull
            from multiple sources.
          </p>
          <p className="mt-4">
            This gives customers real control over how visitors interact with
            different parts of their website &mdash; something the previous
            product never offered.
          </p>
        </section>

        <section>
          <h2 id="hardest-problem" className="mb-3 text-xl font-semibold text-foreground">
            The Hardest Problem: Agent Behavior at Scale
          </h2>
          <p>
            The hardest technical challenge wasn&apos;t the infrastructure. It
            was making agents behave consistently.
          </p>
          <p className="mt-4">
            Each agent can have a custom voice and tone. Each action can have
            custom response guidance for when and how it triggers. Getting this
            right for one customer is straightforward. Getting it right for many
            customers simultaneously is where it gets dangerous.
          </p>
          <p className="mt-4">
            I saw the problem early: we&apos;d tune the prompts to work for
            customers A, B, and C, then customer D&apos;s configuration would
            break something. Fix it for D, and A regresses. Classic prompt
            engineering whack-a-mole.
          </p>
          <p className="mt-4">
            To solve this, I built a test framework for the agent. It defines
            test scenarios &mdash; specific inputs, expected behaviors, action
            triggers &mdash; and runs them against the agent systematically.
            When we make changes to prompt structure or action handling, we run
            the full suite and catch regressions before they hit production.
            This turned a fragile, manual process into something we could
            iterate on with confidence.
          </p>
        </section>

        <section>
          <h2 id="only-backend" className="mb-3 text-xl font-semibold text-foreground">
            Being the Only Backend Engineer
          </h2>
          <p>
            The hardest non-technical challenge was scope. This wasn&apos;t one
            system &mdash; it was several: the infrastructure, the API, the
            crawler, the agent, reporting, analytics, visitor resolution. Each
            one had its own complexity, and I was the only backend engineer
            across all of them.
          </p>
          <p className="mt-4">
            On top of that, I was learning significant parts of the stack on the
            fly. I&apos;d never built Bedrock Agents or Knowledge Bases before.
            The crawler was written in Node.js, which I had minimal experience
            with. I tried converting it to Python early on but realized it would
            introduce more risk than it eliminated, so I kept it in Node.
          </p>
          <p className="mt-4">
            This is where AI-assisted development became essential. Claude Code
            was instrumental throughout the project &mdash; translating my
            architectural intent into Node.js, helping debug unfamiliar runtime
            behavior, and researching different approaches for agent
            configuration. I ran multiple Claude Code sessions in parallel, each
            working on different epics, which let me make progress across the
            crawler, the API, and the agent simultaneously. It didn&apos;t
            replace the need to understand the system deeply, but it
            dramatically expanded what one engineer could deliver.
          </p>
        </section>

        <section>
          <h2 id="deadline" className="mb-3 text-xl font-semibold text-foreground">
            Hitting the Deadline
          </h2>
          <p>
            We shipped on the three-month deadline with full feature parity,
            better performance than the original product, and the scaffolding
            for multi-agent/multi-source already in place.
          </p>
          <p className="mt-4">
            The strategy was focus and discipline. I spent significant time
            writing tests and performing manual testing throughout &mdash; not
            just at the end. The agent test framework was built early
            specifically because I knew we couldn&apos;t afford regression
            cycles late in the project. And the parallel Claude Code workflow
            meant I wasn&apos;t blocked on one workstream while another sat
            idle.
          </p>
        </section>

        <section>
          <h2 id="war-story" className="mb-3 text-xl font-semibold text-foreground">
            The Production War Story
          </h2>
          <p>
            After all that engineering, the first time we deployed to production
            and created the first agent, the chat widget didn&apos;t load.
          </p>
          <p className="mt-4">
            We rolled it back immediately and started investigating. It took
            longer than I&apos;d like to admit to find the root cause: a typo
            in the configuration. The field was named{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">
              &quot;style&quot;
            </code>{" "}
            instead of{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">
              &quot;styles&quot;
            </code>
            . A one-character, non-code fix.
          </p>
          <p className="mt-4">
            Every engineer has a story like this. The system that handles
            millions of records, processes real-time data, manages distributed
            crawlers across dozens of Lambdas &mdash; brought down by a missing
            letter.
          </p>
        </section>

        <section>
          <h2 id="do-differently" className="mb-3 text-xl font-semibold text-foreground">
            What I&apos;d Do Differently
          </h2>
          <p>
            Use one language for the entire backend. Running Python for the API
            and Node.js for the crawler works, but it&apos;s not ideal. Two
            dependency ecosystems, two sets of patterns, two mental models. If I
            were starting over, I&apos;d pick one and commit.
          </p>
          <p className="mt-4">
            Beyond that, I&apos;d invest more upfront in observability. When
            you&apos;re the only backend engineer, you need the system to tell
            you what&apos;s wrong &mdash; you can&apos;t be everywhere at once.
          </p>
        </section>

        <Separator className="my-4" />

        <div className="rounded-lg border border-dashed border-muted-foreground/30 p-6 text-center">
          <p className="text-sm font-medium text-foreground">
            Want to dig deeper?
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            My AI assistant can answer questions about this topic and my other
            work.
          </p>
          <Link href="/ask">
            <Button
              variant="outline"
              size="sm"
              className="mt-3"
              disabled
            >
              Ask me about this (Coming Soon)
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}
