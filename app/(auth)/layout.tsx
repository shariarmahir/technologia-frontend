import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Sparkles, ShieldCheck, Trophy, Star, Quote } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col lg:flex-row">
      {/* Left: visual panel */}
      <div className="relative hidden overflow-hidden lg:flex lg:w-[46%] lg:flex-col lg:justify-between lg:p-10">
        <div className="hero-mesh absolute inset-0" />
        <div className="hero-grid absolute inset-0 opacity-80" />
        <div className="orb h-[420px] w-[420px] bg-[#FFD662]/25 left-[-80px] top-[-50px] animate-float-slow" />
        <div className="orb h-[360px] w-[360px] bg-[#FFE48A]/20 right-[-120px] bottom-[40px] animate-float-slower" />
        <div className="orb h-[280px] w-[280px] bg-[#00539C]/55 left-[30%] top-[40%] animate-float-slow" />

        {/* Logo */}
        <div className="relative">
          <Logo variant="light" />
        </div>

        {/* Main content */}
        <div className="relative flex flex-col gap-5 max-w-md">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFD662] backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFD662] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FFD662]" />
              </span>
              The technoLOgia manifesto
            </span>
            <p className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.02em] text-white">
              If it&rsquo;s not now, <br />
              then when? <br />
              <span className="bg-gradient-to-r from-[#FFD662] via-white to-[#FFE48A] bg-clip-text text-transparent">
                This is the time to jump.
              </span>
            </p>
            <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-white/65">
              Academic services, IoT &amp; IEEE projects, a national STEM program,
              and a platform for university labs — built in Bangladesh.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2.5 text-white">
            {[
              { icon: Sparkles, label: "2,400+", sub: "deliveries" },
              { icon: Trophy, label: "96%", sub: "verified" },
              { icon: ShieldCheck, label: "48 hr", sub: "avg. turn" },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.sub}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur"
                >
                  <Icon className="h-4 w-4 text-[#FFD662]" />
                  <p className="mt-2 font-display text-lg font-semibold">{s.label}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/55">{s.sub}</p>
                </div>
              );
            })}
          </div>

          {/* Student testimonial */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <Quote className="h-3.5 w-3.5 text-[#FFD662] mb-2" />
            <p className="text-[12.5px] leading-relaxed text-white/75">
              &ldquo;Got my EEE lab report with full simulation done in 36 hrs — and it was verified by a professor. The dashboard made tracking super easy.&rdquo;
            </p>
            <div className="mt-3 flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(135deg,#00539C,#003A6E)] text-white text-xs font-bold">
                R
              </div>
              <div className="leading-tight">
                <p className="text-[11px] font-semibold text-white">Rafid Hasan</p>
                <p className="font-mono text-[9px] text-white/50">EEE · BUET</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-2.5 w-2.5 fill-[#FFD662] text-[#FFD662]" />
                ))}
              </div>
            </div>
          </div>

          {/* Professor verified */}
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2.5 backdrop-blur">
            <ShieldCheck className="h-4 w-4 flex-shrink-0 text-[#4ADE80]" />
            <div>
              <p className="text-[11px] font-semibold text-white">Quality assured by academia</p>
              <p className="text-[10px] text-white/50">Masum Hawlader · Asst. Prof., EEE · Univ. of Asia Pacific</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative">
          <Link
            href="/"
            className="text-xs text-white/50 transition hover:text-white"
          >
            ← Back to home
          </Link>
        </div>
      </div>

      {/* Right: form panel */}
      <div className="relative flex flex-1 items-start justify-center overflow-y-auto bg-white px-5 py-10 sm:px-10 lg:items-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(50% 40% at 100% 0%, rgba(255,214,98,0.08) 0%, transparent 70%), radial-gradient(40% 40% at 0% 100%, rgba(0,83,156,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="relative w-full max-w-md">
          <div className="mb-8 flex items-center justify-between lg:hidden">
            <Logo />
            <Link
              href="/"
              className="text-xs text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-primary)]"
            >
              ← Home
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
