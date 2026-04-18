import { MessageSquare, Send } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { orders } from "@/lib/mock-data";

const threads = orders.slice(0, 3).map((o) => ({
  order: o,
  messages: [
    {
      from: "You",
      when: "2 hours ago",
      body: "Could we tighten the introduction? It reads a bit passive.",
      mine: true,
    },
    {
      from: "Mehek · technoLOgia",
      when: "1 hour ago",
      body: "Absolutely — rewriting it with an active-voice hook now. Expect draft 2 in 3 hours.",
      mine: false,
    },
  ],
}));

export default function RemarksPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Conversations"
        title="Remarks & feedback"
        description="Share opinions, request changes, or ask questions per order — threaded and tracked."
      />

      <div className="space-y-4">
        {threads.map(({ order, messages }) => (
          <Card key={order.id} className="overflow-hidden">
            <div className="border-b border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-5 py-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-accent)]">
                {order.id}
              </span>
              <p className="mt-0.5 font-display text-sm font-semibold text-[color:var(--color-primary-dark)]">
                {order.title}
              </p>
            </div>
            <CardContent className="space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${m.mine ? "flex-row-reverse" : ""}`}
                >
                  <span
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                      m.mine
                        ? "bg-gradient-to-br from-[#1B1464] to-[#7C3AED] text-white"
                        : "bg-[color:var(--color-surface-alt)] text-[color:var(--color-primary)]"
                    }`}
                  >
                    {m.from[0]}
                  </span>
                  <div
                    className={`max-w-md rounded-2xl px-4 py-2.5 text-sm ${
                      m.mine
                        ? "bg-[color:var(--color-primary)] text-white"
                        : "bg-[color:var(--color-surface)] text-[color:var(--color-text-primary)]"
                    }`}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-wider opacity-70">
                      {m.from} · {m.when}
                    </p>
                    <p className="mt-1 leading-relaxed">{m.body}</p>
                  </div>
                </div>
              ))}
              <div className="mt-4 flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white px-2 py-1.5">
                <MessageSquare className="ml-2 h-4 w-4 text-[color:var(--color-text-secondary)]" />
                <input
                  placeholder="Add a remark or change request…"
                  className="flex-1 bg-transparent py-1.5 text-sm outline-none"
                />
                <button className="inline-flex items-center gap-1 rounded-full bg-[color:var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-white">
                  <Send className="h-3.5 w-3.5" /> Send
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
