import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    title: "Rapid Career Progression",
    description:
      "Progressed from Junior to Senior Software Engineer in under 3 years at Act-On Software, demonstrating exceptional proficiency across the modern tech stack.",
    tags: ["Career Growth"],
  },
  {
    title: "Sole Backend Engineer — AI Product Replacement",
    description:
      "Selected as the sole backend engineer to architect and deliver a ground-up replacement of a partner AI product under a 3-month deadline, building multi-agent RAG infrastructure with AWS Bedrock.",
    tags: ["Leadership", "AI"],
  },
  {
    title: "17% Email Open Rate Increase",
    description:
      "Built a subject line optimizer using AWS Bedrock that analyzes top and bottom performing subject lines, driving a 17% increase in customer email open rates.",
    tags: ["Impact", "AI"],
  },
  {
    title: "50-Page Business Proposal Adopted by Leadership",
    description:
      "Authored a comprehensive 50-page business proposal outlining a marketing strategy, sales strategy, and 15 project initiatives. The core thesis — shifting towards AI-driven products — was adopted as company direction, and the sales strategy was implemented.",
    tags: ["Strategy", "Leadership"],
  },
  {
    title: "Published Researcher — IEEE TSE 2022",
    description:
      'Max Ellis, Sarah Nadi, and Danny Dig. "Operation-based Refactoring-aware Merging: An Empirical Evaluation". In: IEEE Transactions on Software Engineering (TSE 2022).',
    link: "https://arxiv.org/pdf/2112.10370.pdf",
    tags: ["Academia"],
  },
  {
    title: "4.0 GPA — Master's Degree",
    description:
      "Achieved a perfect 4.0 GPA in M.Sc Computing Science at the University of Alberta.",
    tags: ["Academia"],
  },
  {
    title: "OSWALD Award — Clark College",
    description:
      "Received the OSWALD Award (Outstanding Students With Academic Leadership and Development Skills), Clark College's annual recognition for students demonstrating outstanding achievement in academics, leadership, and service.",
    tags: ["Award"],
  },
  {
    title: "Infrastructure Automation",
    description:
      "Reduced connector setup time from several hours to under 20 minutes by automating OpenFlow provisioning with Terraform, including VPCs, subnets, security groups, IAM roles, and HashiCorp Vault rules.",
    tags: ["Impact"],
  },
];

export default function AchievementsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Achievements</h1>
      <p className="mt-2 text-muted-foreground">
        Notable milestones, awards, and accomplishments.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {achievements.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <div className="flex flex-wrap gap-1 pt-1">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
              {"link" in item && item.link && (
                <a
                  href={item.link as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary underline-offset-4 hover:underline"
                >
                  View Preprint
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
