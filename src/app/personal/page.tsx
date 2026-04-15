import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PersonalPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Beyond the Code</h1>
      <p className="mt-2 text-muted-foreground">
        The stuff that doesn&apos;t fit on a resume but shapes how I show up
        every day.
      </p>

      <Separator className="my-8" />

      {/* Values */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground">
          What I Care About
        </h2>
        <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            At my core, I&apos;m driven by two things: helping people and
            growing. Not in a motivational-poster kind of way &mdash; more like,
            if I&apos;m not learning something or making someone&apos;s day a
            little easier, I feel like I&apos;m wasting the day.
          </p>
          <p>
            That shows up in my engineering work (mentoring junior devs, writing
            docs nobody asked for, running speakeasy demos), but it started long
            before I wrote my first line of code. It&apos;s why I fought
            wildfires. It&apos;s why I tutored students who were convinced they
            couldn&apos;t learn math. It&apos;s why I wrote a 50-page business
            proposal that nobody asked me to write.
          </p>
          <p>
            I believe in showing up, doing the work, and leaving things better
            than I found them. Whether that&apos;s a codebase, a team, or a
            campsite.
          </p>
        </div>
      </section>

      <Separator className="my-10" />

      {/* Interests */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground">
          What I&apos;m Into
        </h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Card className="border-border/50">
            <CardContent className="px-6 py-5">
              <h3 className="font-semibold text-foreground">
                Wildfire & Climate
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                You can take the firefighter off the line, but you can&apos;t
                take the fire out of the firefighter. I still track fire seasons,
                follow climate patterns in the off-season, and think about how
                shifting conditions will shape the next burn year. It&apos;s
                part situational awareness, part genuine fascination with how
                these systems work.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="px-6 py-5">
              <h3 className="font-semibold text-foreground">
                Finance & Markets
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                I love digging into company fundamentals &mdash; reading 10-Ks,
                analyzing balance sheets, understanding what makes a business
                actually work. There&apos;s a lot of overlap with engineering
                thinking: pattern recognition, risk assessment, separating
                signal from noise. I also dabble in technical analysis, because
                sometimes you just want to stare at charts.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-10" />

      {/* Hobbies */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground">
          When I&apos;m Not Working
        </h2>
        <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
          <div className="grid gap-5 sm:grid-cols-2">
            <Card className="border-border/50">
              <CardContent className="px-6 py-5">
                <h3 className="font-semibold text-foreground">
                  Hiking & Travel
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Growing up in the Pacific Northwest and spending summers on
                  fire lines gave me an appreciation for getting outside that
                  never faded. I try to hit a new trail or a new city whenever I
                  can.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="px-6 py-5">
                <h3 className="font-semibold text-foreground">Gaming</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  I take my games seriously &mdash; I peaked at top 500 in
                  Overwatch, which is roughly the top 0.1% of players. That
                  competitive drive actually led to a connection that helped me
                  get into grad school. Full story coming soon.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
