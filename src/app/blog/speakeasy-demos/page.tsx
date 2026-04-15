import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function SpeakeasyDemosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link
        href="/blog"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        &larr; Back to Blog
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight">
        The Speakeasy Demo: Creating Space for Engineers to Go Deep
      </h1>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Badge variant="secondary">Engineering Culture</Badge>
        <Badge variant="secondary">Mentorship</Badge>
        <Badge variant="secondary">Knowledge Sharing</Badge>
        <span className="text-sm text-muted-foreground">March 2026</span>
      </div>

      <Separator className="my-8" />

      <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
        <h3 className="mb-2 text-sm font-semibold text-foreground">Key Takeaways</h3>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>&bull; Formal demos optimize for visibility; informal ones optimize for learning</li>
          <li>&bull; Engineers share more when there&apos;s no time pressure or management audience</li>
          <li>&bull; Small, organic initiatives can meaningfully change engineering culture</li>
        </ul>
      </div>

      <article className="mt-8 space-y-8 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          Most engineering orgs have some version of the weekly tech demo. Ours
          is no different — each engineer gets five minutes, there&apos;s an
          audience, and the format rewards polish over depth. It&apos;s great for
          visibility. People get to see what other teams are shipping, leadership
          stays in the loop, and it keeps work from disappearing into silos.
        </p>
        <p>
          But five minutes is a constraint. You can show <em>what</em> you
          built, but you can&apos;t really explain <em>how</em> or{" "}
          <em>why</em>. And for a lot of engineers — especially juniors who
          are still building confidence — the performative aspect makes it
          harder to participate at all.
        </p>

        <h2 className="mb-3 text-xl font-semibold text-foreground">The Conversation Over Drinks</h2>
        <p>
          The idea started at a bar after work. A coworker mentioned something
          he&apos;d been working on that he wanted to share with the team, but it
          wasn&apos;t the kind of thing that fit into a five-minute slot. So he
          told us about it over drinks instead — and the conversation was
          genuinely one of the most useful technical discussions I&apos;d had in
          weeks.
        </p>
        <p>
          That got me thinking. A lot of engineers on our team are siloed. They
          work on their own systems and don&apos;t get much exposure to how other
          parts of the platform work. Our juniors, in particular, don&apos;t
          have many opportunities for mentorship or deep technical
          conversations. And a lot of engineers are anxious about presenting in
          the formal demo format — so the people who might benefit the most from
          sharing their work are the least likely to do it.
        </p>
        <p>
          I pitched the idea that night: a monthly &quot;speakeasy&quot; demo.
          After work, last Friday of the month, no time limits, no management,
          no pressure. Just engineers going deep on whatever they want to talk
          about. Everyone at the table loved it.
        </p>

        <h2 className="mb-3 text-xl font-semibold text-foreground">Setting It Up</h2>
        <p>
          I created a Discord server and started inviting engineers from
          different teams. I was deliberate about cross-team representation —
          the whole point was to break down silos. Within a few days, there were
          nine engineers and a QA in the server. Everyone was excited about the
          idea.
        </p>
        <p>
          I chose monthly cadence intentionally. This is an after-work activity,
          and I don&apos;t want to pressure anyone into working more than they
          need to. But I do want to give people a space to share knowledge and
          bond. Once a month felt like the right balance — frequent enough to
          build momentum, infrequent enough that it doesn&apos;t feel like an
          obligation.
        </p>

        <h2 className="mb-3 text-xl font-semibold text-foreground">The First Session</h2>
        <p>
          Five engineers showed up for the first round: two seniors, two
          juniors, and a mid-level. Three people brought demos.
        </p>
        <p>
          I went first, walking through the visitor resolution system I built
          for our AI product. In the weekly demo I would have shown the feature
          and moved on. Here, I could take twenty minutes to go deeper — how we
          read from a Kafka topic, how we compare cookie IDs, how the agent
          actually works under the hood. The juniors asked questions they never
          would have asked in the formal setting.
        </p>
        <p>
          Then one of the other senior engineers took the floor for forty
          minutes. He walked through how OpenFlow works in our system, then
          branched into how Kafka works at a lower level. Since I&apos;m the one
          who originally set up OpenFlow for our org, there was a ton of
          back-and-forth — I&apos;d correct something, he&apos;d build on it,
          the juniors would ask follow-up questions. It was collaborative in a
          way that the formal demos never are. The juniors and mid-level said
          they found it extremely useful, and the senior who presented loved the
          format.
        </p>
        <p>
          The third demo wasn&apos;t even engineering-related. One of the
          engineers walked us through a local storage system he&apos;d been
          building at home — a RAID setup as an alternative to cloud storage.
          He explained the product, how he uses it, the tradeoffs. It was
          interesting, it was fun, and it reinforced something important: this
          isn&apos;t just about work. It&apos;s about people sharing what they
          care about.
        </p>

        <h2 className="mb-3 text-xl font-semibold text-foreground">What People Said After</h2>
        <p>
          The senior engineer told me it was a much better environment for
          knowledge sharing than anything we had before. But the message that
          stuck with me came from one of the junior engineers, who texted me
          afterward:
        </p>
        <blockquote className="border-l-2 border-primary/50 pl-4 italic text-muted-foreground">
          &quot;I love that you&apos;ve brought a cluster of coworkers together.
          It seems to be helping all of us remember that we work with
          humans.&quot;
        </blockquote>
        <p>
          That&apos;s not something I expected to hear from a technical
          knowledge-sharing session. But it makes sense. When you strip away the
          time pressure, the audience, and the performance, what you&apos;re
          left with is just people talking to each other about things they find
          interesting. And that builds something that a five-minute demo
          can&apos;t: trust.
        </p>

        <h2 className="mb-3 text-xl font-semibold text-foreground">Keeping It Organic</h2>
        <p>
          A principal QA and a staff engineer have both expressed interest in
          joining. I&apos;m letting it grow naturally — no formal invitations,
          no sign-up sheets, no agenda templates. The format is deliberately
          unstructured: show up if you want, demo if you want, just listen if
          you want. No topics are planned for the next session yet, and
          that&apos;s fine.
        </p>
        <p>
          One thing I&apos;m intentional about is keeping management out of the
          picture. Not because there&apos;s anything to hide, but because the
          value of the speakeasy is that it&apos;s a space where engineers can
          be candid, ask &quot;dumb&quot; questions, go on tangents, and share
          things that aren&apos;t polished enough for a formal audience. The
          moment it becomes an official program with stakeholders, it loses what
          makes it work.
        </p>

        <h2 className="mb-3 text-xl font-semibold text-foreground">Why This Matters to Me</h2>
        <p>
          If there&apos;s a thread that runs through my career, it&apos;s
          bringing people together and helping others grow. I see it in my time
          as a{" "}
          <Link
            href="/blog/fireline-to-pipeline"
            className="text-primary hover:underline"
          >
            wildland firefighter
          </Link>
          , where crew cohesion was the difference between a controlled burn and
          a disaster. I see it in my years as a STEM tutor, where I learned that
          meeting someone where they are matters more than knowing the answer. I
          see it in how I approach engineering — not just building systems, but
          making sure the people around me understand them too.
        </p>
        <p>
          The speakeasy is a small thing. It&apos;s one Friday a month, a
          Discord server with ten people, and no formal structure. But
          it&apos;s already changing how the engineers in it relate to each
          other and to their work. And sometimes the small things are the ones
          that matter most.
        </p>

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
