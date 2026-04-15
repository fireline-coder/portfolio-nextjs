import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function TeachingEngineeringPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog">
        <Button variant="ghost" size="sm" className="mb-6 text-xs">
          &larr; Back to Blog
        </Button>
      </Link>

      <h1 className="text-3xl font-bold tracking-tight">
        Teaching Made Me a Better Engineer (and Vice Versa)
      </h1>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Badge variant="secondary">Mentorship</Badge>
        <Badge variant="secondary">Teaching</Badge>
        <Badge variant="secondary">Engineering Culture</Badge>
        <span className="text-sm text-muted-foreground">April 2026</span>
      </div>

      <Separator className="my-8" />

      <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
        <h3 className="mb-2 text-sm font-semibold text-foreground">
          Key Takeaways
        </h3>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            &bull; The best debugging skill is understanding how someone else
            thinks &mdash; whether they&apos;re a student or a distributed
            system
          </li>
          <li>
            &bull; Meeting people where they are matters more than knowing the
            answer
          </li>
          <li>
            &bull; The Socratic method works just as well in code review as it
            does in a tutoring session
          </li>
        </ul>
      </div>

      <article className="mt-8 space-y-8 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          Before I was a software engineer, I was a STEM tutor. From 2015 to
          2019 at Clark College, I tutored every math class from elementary
          algebra through Calculus IV, differential equations, and linear
          algebra. Every computer science class. Every electrical engineering
          class. Physics. Some chemistry.
        </p>
        <p>
          And then things got fuzzy. I started tutoring classes I hadn&apos;t
          taken &mdash; business law, nursing, mechanical engineering. I
          didn&apos;t know the material, but I found that the skill
          wasn&apos;t knowing the answer. It was knowing how to get there with
          someone.
        </p>
        <p>
          That instinct has shaped everything about how I work as an engineer.
        </p>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            The Student Who Changed How I Teach
          </h2>
          <p>
            There&apos;s a student I&apos;ll never forget. He was an older guy
            with a welding background. He knew some fractions from his trade
            &mdash; halves, quarters, three-eighths &mdash; but he
            didn&apos;t believe that one-seventh was a real fraction. He was
            frustrated, aggressive about it, and the tutoring center was busy.
          </p>
          <p className="mt-4">
            Instead of explaining why he was wrong, I tried something
            different. I told him that if we look at something as if we hate it,
            we&apos;re not going to want to do it, and we&apos;re not going to
            do well with it. I asked him for an example of something he
            liked &mdash; something he was good at <em>because</em> he liked
            it. He gave me a blunt answer that turned a few heads in the
            tutoring center. But the point landed: he was good at things he
            enjoyed because he engaged with them.
          </p>
          <p className="mt-4">
            We did some fraction work and it started clicking. He told me to
            give him something harder. So instead of addition and subtraction, I
            gave him multiplication &mdash; which he found easier and started
            getting excited about. Our time ran out, but as he was leaving, he
            told the front desk staff that I needed a raise.
          </p>
          <p className="mt-4">
            That moment taught me something I still carry: the first job
            isn&apos;t teaching the material. It&apos;s changing the
            relationship with the material. If someone has decided they
            can&apos;t do something, no amount of explanation will help until
            you address that belief first.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Meeting People Where They Are
          </h2>
          <p>
            One of the first things I learned as a tutor is that everyone learns
            differently. Some students need to hear an explanation. Others need
            to see it drawn out. Some need to work through it with their hands.
            And a lot of students don&apos;t actually know which type they are
            &mdash; so part of the job is figuring that out quickly.
          </p>
          <p className="mt-4">
            I do the same thing when working with junior engineers. When
            someone comes to me stuck on a CORS error, a unit test that
            won&apos;t pass, or a Terraform configuration they can&apos;t get
            right, the first thing I do is figure out how they learn. If
            they&apos;re auditory, I explain it. If they&apos;re visual, I draw
            it. Once they seem to understand, I have them explain it back to me
            or give me an example &mdash; because being able to explain
            something is the real test of understanding.
          </p>
          <p className="mt-4">
            This isn&apos;t something I learned in engineering. I learned it
            sitting across from a nursing student trying to understand
            pharmacology dosage calculations, or a business law student working
            through contract analysis. The domain changes. The skill
            doesn&apos;t.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            The Socratic Method in Code Review
          </h2>
          <p>
            The reason I could tutor classes I&apos;d never taken is the
            Socratic method. Instead of giving answers, I&apos;d ask
            questions and learn alongside the student. &ldquo;What do we know so
            far? What does this term mean? What would happen if we tried
            this?&rdquo; It forces the student to build their own understanding
            rather than borrowing mine.
          </p>
          <p className="mt-4">
            I use the same approach in engineering, especially during code
            review and mentoring. Instead of saying &ldquo;this won&apos;t
            work because of X,&rdquo; I&apos;ll ask &ldquo;what happens when
            this gets called concurrently?&rdquo; or &ldquo;what does this
            return when the input is null?&rdquo; The engineer arrives at the
            issue themselves, which means they&apos;ll recognize the pattern
            next time without me.
          </p>
          <p className="mt-4">
            It&apos;s slower in the moment. But it scales. A junior who learns
            to ask themselves those questions doesn&apos;t need me to ask them
            forever.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Debugging Mental Models
          </h2>
          <p>
            Here&apos;s the connection I didn&apos;t expect: debugging a
            student&apos;s understanding and debugging a distributed system use
            the same core skill. In both cases, you&apos;re building a mental
            model of something you can&apos;t directly observe.
          </p>
          <p className="mt-4">
            When a student gets the wrong answer, the interesting question
            isn&apos;t &ldquo;what&apos;s wrong?&rdquo; &mdash; it&apos;s
            &ldquo;where did their reasoning diverge from reality?&rdquo;
            Maybe they understand the concept but misapplied a rule. Maybe they
            have a fundamental misconception that&apos;s been silently
            producing wrong answers for weeks.
          </p>
          <p className="mt-4">
            Production bugs work the same way. The stack trace tells you
            <em> what</em> went wrong, but the real work is figuring out
            <em> where the system&apos;s behavior diverged from what you
            expected</em>. Is it a bad assumption in the code? A race
            condition that only appears under load? A silent failure that&apos;s
            been compounding for months?
          </p>
          <p className="mt-4">
            In both cases, you&apos;re not just fixing the immediate problem.
            You&apos;re finding the gap in the mental model &mdash; yours, the
            student&apos;s, or the system&apos;s &mdash; and correcting it at
            the source.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            What Engineering Taught Me About Teaching
          </h2>
          <p>
            The &ldquo;vice versa&rdquo; in the title is real. Engineering has
            changed how I&apos;d approach tutoring if I went back to it.
          </p>
          <p className="mt-4">
            Engineering taught me to think in systems. When a student is
            struggling, I used to focus on the immediate problem &mdash; this
            equation, this concept, this assignment. Now I&apos;d think about
            the system: What prerequisite knowledge is shaky? What&apos;s their
            study process? Are they struggling with the material or with how
            they&apos;re approaching the material?
          </p>
          <p className="mt-4">
            It also taught me to value feedback loops. In engineering, you write
            tests to catch regressions. In tutoring, having a student explain
            something back to you is the test. Both are about verifying that
            your mental model matches reality before moving forward.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            The Thread That Connects It All
          </h2>
          <p>
            If I&apos;m honest, the through-line of my career isn&apos;t a
            technology or a domain. It&apos;s this: I care about helping people
            understand things. Whether that&apos;s a student who doesn&apos;t
            believe in fractions, a junior engineer debugging their first CORS
            error, or a group of engineers in a{" "}
            <Link
              href="/blog/speakeasy-demos"
              className="text-primary hover:underline"
            >
              Discord server on a Friday night
            </Link>{" "}
            going deep on how Kafka works.
          </p>
          <p className="mt-4">
            The tools change. The skill is the same: figure out where someone
            is, meet them there, and help them get to where they need to be.
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
            <Button variant="outline" size="sm" className="mt-3">
              Ask me about this
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}
