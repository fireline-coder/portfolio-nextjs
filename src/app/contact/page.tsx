import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-2 text-muted-foreground">
        Get in touch or download my resume.
      </p>

      <div className="mt-10 mx-auto max-w-md space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Email</CardTitle>
          </CardHeader>
          <CardContent>
            <a
              href="mailto:maxjordanellis@gmail.com"
              className="text-primary underline-offset-4 hover:underline"
            >
              maxjordanellis@gmail.com
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">LinkedIn</CardTitle>
          </CardHeader>
          <CardContent>
            <a
              href="https://www.linkedin.com/in/max-ellis-cs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              linkedin.com/in/max-ellis-cs
            </a>
          </CardContent>
        </Card>

<Card>
          <CardHeader>
            <CardTitle className="text-lg">Resume</CardTitle>
          </CardHeader>
          <CardContent>
            <a
              href="/files/Ellis_Max_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Download Resume (PDF)</Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
