import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FirelineToPipelinePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog">
        <Button variant="ghost" size="sm" className="mb-6 text-xs">
          &larr; Back to Blog
        </Button>
      </Link>

      <h1 className="text-3xl font-bold tracking-tight">
        From Fireline to Pipeline: What Wildland Firefighting Taught Me About
        Incident Response
      </h1>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Badge variant="secondary">Firefighting</Badge>
        <Badge variant="secondary">Incident Response</Badge>
        <Badge variant="secondary">Engineering Culture</Badge>
        <span className="text-sm text-muted-foreground">April 2026</span>
      </div>

      <Separator className="my-8" />

      <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
        <h3 className="mb-2 text-sm font-semibold text-foreground">Key Takeaways</h3>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>&bull; Incident response is about reading signals early &mdash; not reacting fast</li>
          <li>&bull; Communication under pressure is non-negotiable</li>
          <li>&bull; Discipline matters more than heroics</li>
        </ul>
      </div>

      <nav className="mt-6 space-y-1 text-sm">
        <p className="font-medium text-foreground">In this post</p>
        <a href="#selection-process" className="block text-primary hover:underline">The Selection Process Sets the Tone</a>
        <a href="#size-up" className="block text-primary hover:underline">Size Up Before You Act</a>
        <a href="#communication" className="block text-primary hover:underline">Communication Is Non-Negotiable</a>
        <a href="#fight-the-fire" className="block text-primary hover:underline">You Fight the Fire You Have, Not the One You Planned For</a>
        <a href="#holding-the-line" className="block text-primary hover:underline">Holding the Line</a>
        <a href="#transferable-truth" className="block text-primary hover:underline">The Transferable Truth</a>
      </nav>

      <article className="mt-8 space-y-8 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          When people learn I was a wildland firefighter before becoming a
          software engineer, they usually assume these are two completely
          unrelated chapters of my life. They&apos;re not. The truth is, nearly
          everything I learned on the fireline directly applies to how I handle
          production incidents today.
        </p>

        <section>
          <h2 id="selection-process" className="mb-3 text-xl font-semibold text-foreground">
            The Selection Process Sets the Tone
          </h2>
          <p>
            Out of 60+ trainees who started the wildfire training program, only
            11 of us made it through. The program was a week of 8-hour classroom
            days covering fire behavior, safety protocols, and suppression
            tactics, followed by field exercises &mdash; digging line, deploying
            hose, learning to read terrain and weather. If you weren&apos;t
            paying attention in class, you were out. Score below 80% on any quiz
            or test, you were out. The final day was a gauntlet: the pack test,
            field exercises, and practical evaluations back to back.
          </p>
          <p className="mt-4">
            The 82% attrition rate wasn&apos;t just about physical fitness
            &mdash; it was about sustained focus, discipline, and composure
            under evaluation. Could you absorb dense material all day, then
            perform under pressure when it mattered?
          </p>
          <p className="mt-4">
            Those same qualities determine who thrives during a production
            incident. The engineers who stay calm, recall the system
            architecture under stress, and communicate clearly &mdash;
            they&apos;re the ones you want on the call.
          </p>
        </section>

        <section>
          <h2 id="size-up" className="mb-3 text-xl font-semibold text-foreground">
            Size Up Before You Act
          </h2>
          <p>
            In firefighting, you never just charge at a fire. You size up the
            situation first: What&apos;s the fuel? What&apos;s the terrain?
            What&apos;s the weather doing? What direction is the fire moving,
            and how fast? Then you evaluate your options and their tradeoffs. A
            burnout operation might contain the fire quickly, but if the
            prescribed fire escapes, you&apos;ve just spread your resources
            thinner fighting two fires instead of one. Every strategy has a risk
            profile, and choosing wrong makes things worse.
          </p>
          <p className="mt-4">
            The subtle details matter most. A slight change in wind direction, a
            shift in humidity, the way smoke is behaving &mdash; these are easy
            to miss in the moment but dictate how the fire will act hours later.
            You learn to read the signs early or you&apos;re reacting too late.
          </p>
          <p className="mt-4">
            Debugging production issues feels remarkably similar. The obvious
            error in the stack trace is rarely the root cause. It&apos;s the
            subtle clue buried in the logs &mdash; a null value that
            shouldn&apos;t be there, a code path that only triggers under
            specific conditions, a data format edge case that nobody accounted
            for. The UTF-8 corruption bug I fixed at Act-On affected 70-80% of
            customer accounts, but it wasn&apos;t surfacing as a UTF-8 error.
            You had to read the signs carefully to trace it back to the actual
            cause. In both cases, the skill isn&apos;t just seeing what&apos;s
            in front of you &mdash; it&apos;s reading the situation deeply
            enough to find the real problem before you waste time fighting the
            wrong fire.
          </p>
        </section>

        <section>
          <h2 id="communication" className="mb-3 text-xl font-semibold text-foreground">
            Communication Is Non-Negotiable
          </h2>
          <p>
            On a wildfire, we communicated fire behavior constantly &mdash; with
            our crew, with other teams on the ground, and with air attack
            overhead. If you saw the fire change behavior, you called it out
            immediately. There was no &ldquo;I&apos;ll mention it
            later.&rdquo; Lives depended on information flowing fast and
            accurately.
          </p>
          <p className="mt-4">
            In software, I&apos;ve carried that same discipline. When I see
            something wrong in production &mdash; even if I&apos;m not sure
            it&apos;s a real problem yet &mdash; I communicate it. I&apos;ve
            seen too many incidents get worse because someone sat on
            information, thinking it wasn&apos;t important enough to share.
          </p>
        </section>

        <section>
          <h2 id="fight-the-fire" className="mb-3 text-xl font-semibold text-foreground">
            You Fight the Fire You Have, Not the One You Planned For
          </h2>
          <p>
            We trained for initial attack, direct attack, indirect attack, and
            burnout operations. But real fires don&apos;t follow your playbook.
            The wind shifts. The terrain funnels the fire somewhere unexpected.
            You adapt or you&apos;re in trouble.
          </p>
          <p className="mt-4">
            Production incidents are the same. You can have runbooks and
            playbooks, but the real skill is adapting when the situation
            doesn&apos;t match what you expected. The best incident responders
            I&apos;ve worked with share this trait with the best firefighters I
            worked with: they stay calm, reassess, and adjust.
          </p>
        </section>

        <section>
          <h2 id="holding-the-line" className="mb-3 text-xl font-semibold text-foreground">
            Holding the Line
          </h2>
          <p>
            Building and holding fireline is unglamorous, exhausting work.
            You&apos;re digging, cutting, clearing &mdash; creating a boundary
            the fire can&apos;t cross. It&apos;s not heroic. It&apos;s
            discipline.
          </p>
          <p className="mt-4">
            The engineering equivalent is the monitoring, alerting, and
            operational hygiene that prevents incidents in the first place. At
            Act-On, I established comprehensive monitoring and alerting across
            key services that catches issues in real-time. Before that work,
            problems could go undetected for up to a month. That&apos;s the
            engineering version of holding the line &mdash; it&apos;s not
            flashy, but it&apos;s what keeps the system standing.
          </p>
        </section>

        <section>
          <h2 id="transferable-truth" className="mb-3 text-xl font-semibold text-foreground">
            The Transferable Truth
          </h2>
          <p>
            Firefighting taught me that high-pressure situations reward
            preparation, communication, and humility. You don&apos;t panic. You
            don&apos;t freelance. You trust your training, communicate clearly,
            and adapt when the situation changes.
          </p>
          <p className="mt-4">
            Those principles have made me a better engineer every single day.
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
