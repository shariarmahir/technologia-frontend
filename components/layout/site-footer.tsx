import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Globe, Link2, Mail, Share2 } from "lucide-react";

const groups = [
  {
    title: "Services",
    links: [
      { label: "Student services", href: "/#services" },
      { label: "IoT & IEEE projects", href: "/#services" },
      { label: "Content & creatives", href: "/#services" },
      { label: "Price bidding", href: "/register" },
    ],
  },
  {
    title: "Schools & colleges",
    links: [
      { label: "Partner with us", href: "/#school-program" },
      { label: "Achievement showcase", href: "/dashboard/school/achievements" },
      { label: "Weekly workshops", href: "/#school-program" },
      { label: "Science fairs", href: "/#school-program" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "BookBuyBD partner", href: "/#partners" },
      { label: "Privacy", href: "/#" },
      { label: "Terms", href: "/#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[color:var(--color-text-secondary)]">
              Academic services, IoT & IEEE projects, and a national STEM
              education mission — delivered from Bangladesh with integrity.
            </p>
            <p className="mt-5 font-display text-sm italic text-[color:var(--color-primary)]">
              &ldquo;If it&rsquo;s not now, then when? This is the time to jump.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Globe, href: "#" },
                { Icon: Link2, href: "#" },
                { Icon: Share2, href: "#" },
                { Icon: Mail, href: "mailto:hello@technologia.example" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-white text-[color:var(--color-primary)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[color:var(--color-primary-dark)]">
                {g.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-[color:var(--color-text-secondary)] transition hover:text-[color:var(--color-primary)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[color:var(--color-border)] pt-6 text-xs text-[color:var(--color-text-secondary)] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} technoLOgia. Built in Dhaka, Bangladesh.</p>
          <p className="font-mono">
            Event & print partner · <span className="text-[color:var(--color-primary)]">BookBuyBD.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
