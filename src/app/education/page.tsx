import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Education</h1>
      <p className="mt-2 text-muted-foreground">
        Academic foundation in computing science, from fundamentals through
        graduate research.
      </p>

      <div className="mt-10 space-y-6">
        {/* M.Sc */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-xl">
                  M.Sc Computing Science
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  University of Alberta, Edmonton, Alberta
                </p>
              </div>
              <Badge variant="outline">Graduated June 2022</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-1 text-sm text-muted-foreground">
              <div>
                <span className="font-semibold text-foreground">Advisor:</span>{" "}
                Sarah Nadi
              </div>
              <div>
                <span className="font-semibold text-foreground">GPA:</span>{" "}
                4.0 / 4.0
              </div>
            </div>
            <Separator />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Research focused on software engineering and program analysis.
              Conducted work on refactoring-aware operation-based merging,
              resulting in a peer-reviewed publication in IEEE Transactions on
              Software Engineering (TSE 2022) &mdash; research later applied to
              building scalable backend and data systems in industry.
            </p>
          </CardContent>
        </Card>

        {/* B.Sc */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-xl">
                  B.Sc Computer Science
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  Washington State University, Vancouver, Washington
                </p>
              </div>
              <Badge variant="outline">Graduated May 2019</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">GPA:</span>{" "}
              3.92 / 4.0
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Honors:</span>{" "}
              Summa Cum Laude
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* Certification */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-xl">
                  International Tutor Training Program Certification
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  Clark College &middot; College Reading and Learning Association
                </p>
              </div>
              <Badge variant="outline">2018</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Eight-week program focused on improving tutoring skills and
              developing leadership experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
