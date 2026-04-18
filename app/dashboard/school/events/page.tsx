import { MapPin, CalendarDays, ArrowUpRight, Globe } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { upcomingEvents } from "@/lib/mock-data";

const scopeTone = {
  international: "bg-[#FEE2E2] text-[#B91C1C] border-[#FECACA]",
  national: "bg-[#E0F2FE] text-[#075985] border-[#BAE6FD]",
  zilla: "bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]",
  school: "bg-[#DCFCE7] text-[#065F46] border-[#BBF7D0]",
};

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Events & competitions"
        title="Upcoming events"
        description="National, international, Zilla and school competitions — registration links in one place."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {upcomingEvents.map((e) => (
          <Card key={e.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-28 overflow-hidden bg-gradient-to-br from-[#0F0B3D] via-[#1B1464] to-[#7C3AED] p-5 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.6),transparent_50%)]" />
                <div className="relative flex items-center justify-between">
                  <span
                    className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${scopeTone[e.scope]}`}
                  >
                    {e.scope}
                  </span>
                  <Globe className="h-5 w-5 text-white/60" />
                </div>
                <p className="relative mt-4 font-display text-lg font-semibold leading-tight">
                  {e.title}
                </p>
              </div>
              <div className="space-y-2 p-5">
                <p className="inline-flex items-center gap-2 text-sm text-[color:var(--color-text-secondary)]">
                  <CalendarDays className="h-4 w-4 text-[color:var(--color-accent)]" />
                  {e.date}
                </p>
                <p className="inline-flex items-center gap-2 text-sm text-[color:var(--color-text-secondary)]">
                  <MapPin className="h-4 w-4 text-[color:var(--color-accent)]" />
                  {e.location}
                </p>
                <div className="flex gap-2 pt-2">
                  <button className="flex-1 rounded-full border border-[color:var(--color-border)] px-3 py-2 text-xs font-semibold text-[color:var(--color-primary)]">
                    Details
                  </button>
                  <a
                    href={e.registrationLink}
                    className="flex-1 rounded-full bg-[color:var(--color-primary)] px-3 py-2 text-center text-xs font-semibold text-white hover:bg-[color:var(--color-primary-light)]"
                  >
                    Register
                    <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
