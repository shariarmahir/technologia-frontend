import { FileText, Clock, Download, BookOpen } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { weeklyWorkshops } from "@/lib/mock-data";

const curriculum = [
  { week: 1, topic: "Orientation + Hello World", done: true },
  { week: 2, topic: "Python basics · problem solving", done: true },
  { week: 3, topic: "Electronics fundamentals + Ohm's law", done: true },
  { week: 4, topic: "Arduino starter kit — blink to logic", done: true },
  { week: 5, topic: "Sensors · ultrasonic, IR, DHT11", done: true },
  { week: 6, topic: "IoT networking with MQTT", done: true },
  { week: 7, topic: "How to build a startup — ideation", done: false, current: true },
  { week: 8, topic: "Project pitch clinic · demo day prep", done: false },
  { week: 9, topic: "Lean MVP · validating your idea", done: false },
  { week: 10, topic: "Building a landing page + payments", done: false },
  { week: 11, topic: "Hackathon · team execution", done: false },
  { week: 12, topic: "Showcase & Level Up ceremony", done: false },
];

export default function WorkshopsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Workshops"
        title="Weekly workshop tracker"
        description="2 sessions / week · 90 minutes each. Structured. Practical. Tech-forward."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {weeklyWorkshops.map((w) => (
          <Card key={w.id} className="overflow-hidden">
            <div className="bg-gradient-to-r from-[#0F0B3D] to-[#1B1464] p-5 text-white">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--color-accent-light)]">
                  {w.day}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-white/70">
                  <Clock className="h-3 w-3" />
                  {w.time}
                </span>
              </div>
              <p className="mt-3 font-display text-xl font-semibold">
                {w.topic}
              </p>
              <p className="mt-0.5 text-xs text-white/65">
                Led by {w.lead} · Week {w.week} of {w.total}
              </p>
            </div>
            <CardContent className="space-y-3">
              <div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[color:var(--color-text-secondary)]">
                    Progress
                  </span>
                  <span className="font-mono">
                    {Math.round((w.week / w.total) * 100)}%
                  </span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[color:var(--color-surface)]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#1B1464] to-[#7C3AED]"
                    style={{ width: `${(w.week / w.total) * 100}%` }}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 rounded-full border border-[color:var(--color-border)] px-3 py-2 text-xs font-semibold text-[color:var(--color-primary)]">
                  <FileText className="mr-1 inline h-3.5 w-3.5" /> Materials
                </button>
                <button className="flex-1 rounded-full bg-[color:var(--color-primary)] px-3 py-2 text-xs font-semibold text-white">
                  Mark attendance
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-[color:var(--color-accent)]" />
            12-week curriculum
          </CardTitle>
          <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
            A structured, tech-forward progression from basics to a working
            startup pitch.
          </p>
        </CardHeader>
        <CardContent className="space-y-2">
          {curriculum.map((c) => (
            <div
              key={c.week}
              className={`flex items-center justify-between rounded-xl border p-3.5 ${
                c.current
                  ? "border-[color:var(--color-accent)]/40 bg-[color:var(--color-surface-alt)]"
                  : c.done
                  ? "border-[color:var(--color-border)] bg-white"
                  : "border-dashed border-[color:var(--color-border)] bg-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold ${
                    c.done
                      ? "bg-[color:var(--color-primary)] text-white"
                      : c.current
                      ? "bg-[color:var(--color-accent)] text-white"
                      : "bg-[color:var(--color-surface)] text-[color:var(--color-text-secondary)]"
                  }`}
                >
                  {c.week.toString().padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-[color:var(--color-primary-dark)]">
                  {c.topic}
                </p>
              </div>
              {c.done && (
                <button className="inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--color-primary)]">
                  <Download className="h-3 w-3" /> Download
                </button>
              )}
              {c.current && (
                <span className="rounded-full bg-[color:var(--color-accent)] px-2.5 py-0.5 text-[10px] font-semibold uppercase text-white">
                  This week
                </span>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
