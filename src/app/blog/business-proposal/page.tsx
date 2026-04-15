import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BusinessProposalPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog">
        <Button variant="ghost" size="sm" className="mb-6 text-xs">
          &larr; Back to Blog
        </Button>
      </Link>

      <h1 className="text-3xl font-bold tracking-tight">
        I Wrote a 50-Page Business Proposal as an Engineer &mdash; Here&apos;s
        Why
      </h1>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Badge variant="secondary">Strategy</Badge>
        <Badge variant="secondary">Leadership</Badge>
        <Badge variant="secondary">AI</Badge>
        <span className="text-sm text-muted-foreground">April 2026</span>
      </div>

      <Separator className="my-8" />

      <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
        <h3 className="mb-2 text-sm font-semibold text-foreground">Key Takeaways</h3>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>&bull; Engineers have a unique vantage point on product opportunities &mdash; but only if they share it</li>
          <li>&bull; Ideas die in Slack threads unless someone champions them</li>
          <li>&bull; Different stakeholders need different pitches</li>
        </ul>
      </div>

      <article className="mt-8 space-y-8 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          Engineers don&apos;t usually write business proposals. We write code,
          design systems, maybe push back on requirements. But we don&apos;t
          typically sit down and write a 50-page document outlining product
          strategy, marketing positioning, and a sales approach. I did, and
          I&apos;d do it again.
        </p>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            The Context
          </h2>
          <p>
            The company was at a crossroads. Projects were moving slowly, a key
            deal had fallen through, and morale was low. It felt like we needed
            quick, impactful wins &mdash; not another 6-month roadmap that might
            not ship.
          </p>
          <p className="mt-4">
            At the same time, the AI landscape was exploding. Every competitor
            was shipping AI features. We had built an AI email composer a few
            years prior, and there had been some bigger AI project attempts
            since, but they hadn&apos;t gained traction. The gap between what we{" "}
            <em>could</em> be doing with AI and what we <em>were</em> doing felt
            enormous.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Why an Engineer?
          </h2>
          <p>
            Here&apos;s what I noticed: the engineers around me had genuinely
            good ideas. In hallway conversations and 1:1s, people would describe
            features that could meaningfully change the product. But none of
            them were raising these ideas formally. The ideas lived and died in
            Slack threads and coffee chats.
          </p>
          <p className="mt-4">
            I decided to collect them, flesh them out, and put them into a
            format that leadership could actually act on.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            The Proposal
          </h2>
          <p>
            I spent a Friday afternoon, the entire weekend, and most of my
            evenings the following week writing a 50-page business proposal. All
            on my own time &mdash; we had pressing projects and I didn&apos;t
            want it to interfere with my work.
          </p>
          <p className="mt-4">
            The core thesis was simple: rebrand as an AI-driven marketing
            automation company through a suite of small, composable AI features
            that build on each other. Not one massive bet, but a series of quick
            wins that compound.
          </p>
          <p className="mt-4">
            I outlined three product suites composed of 15 AI-driven projects,
            along with a strategy for how to position and sell them.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Selling It Internally
          </h2>
          <p>
            Writing the proposal was the easy part. Selling it internally was a
            crash course in stakeholder management.
          </p>
          <p className="mt-4">
            I started with my manager, who got excited and escalated it. Our
            software architect heard about it and did the same. Within days, I
            had meetings scheduled with engineering leadership and sales
            leadership.
          </p>
          <p className="mt-4">
            But it wasn&apos;t all smooth. When I brought early ideas to the
            product team, they pushed back &mdash; the ideas weren&apos;t
            concrete enough. Fair. I iterated, made them more specific, and
            product became more receptive. They told me if I formalized the
            ideas further, they&apos;d connect me with the relevant product
            managers.
          </p>
          <p className="mt-4">
            I learned quickly that different stakeholders need different pitches.
            I created tailored slide decks for each audience &mdash; engineering
            cared about feasibility, sales cared about positioning, product
            cared about user value.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            What Happened
          </h2>
          <p>
            The core thesis &mdash; shifting toward AI-driven products &mdash;
            was adopted as company direction. The sales strategy was
            implemented. Not everything made it: the full scope was adjusted to
            match available resources. Instead of three teams working in
            parallel, it became a focused effort with a dedicated team &mdash;
            myself, a designer, a product manager, a customer success manager,
            and an ops engineer for consulting.
          </p>
          <p className="mt-4">
            The first project we shipped? The subject line optimizer I had
            proposed &mdash; a feature that analyzes a user&apos;s top and
            bottom performing subject lines, feeds them into an AI agent to find
            patterns, and generates optimized alternatives with explanations. It
            drove a 17% increase in email open rates.
          </p>
          <p className="mt-4">
            I went from writing the proposal to building the product. That felt
            right.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            What I Learned
          </h2>
          <p>
            The biggest lesson wasn&apos;t about business strategy. It was about
            perspective.
          </p>
          <p className="mt-4">
            Every engineer I talked to had ideas worth hearing. But they assumed
            someone else would raise them, or that it wasn&apos;t their place.
            The ideas existed &mdash; they just needed someone to collect them,
            structure them, and present them with enough conviction to get
            people&apos;s attention.
          </p>
          <p className="mt-4">
            Engineers have a unique vantage point. We see the technical
            possibilities before anyone else. We understand what&apos;s
            feasible, what&apos;s fast to build, and what would actually work at
            scale. That perspective is incredibly valuable to sales, marketing,
            and product &mdash; but only if we share it.
          </p>
          <p className="mt-4">
            I&apos;m not saying every engineer should write a 50-page proposal.
            But I am saying: if you see an opportunity and you care about where
            your company is going, don&apos;t wait for someone else to act on
            it.
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
            >
              Ask me about this
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}
