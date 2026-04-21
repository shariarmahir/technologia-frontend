import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Sparkles, ShieldCheck, Trophy } from "lucide-react";

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
        <div className="orb h-[420px] w-[420px] bg-[#0EA5E9]/45 left-[-80px] top-[-50px] animate-float-slow" />
        <div className="orb h-[360px] w-[360px] bg-[#38BDF8]/40 right-[-120px] bottom-[40px] animate-float-slower" />
        <div className="orb h-[280px] w-[280px] bg-[#1B1464]/55 left-[30%] top-[40%] animate-float-slow" />

        <div className="relative">
          <Logo variant="light" />
        </div>

        <div className="relative max-w-md">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#7DD3FC] backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38BDF8] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0EA5E9]" />
            </span>
            The technoLOgia manifesto
          </span>
          <p className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.02em] text-white">
            If it&rsquo;s not now, <br />
            then when? <br />
            <span className="bg-gradient-to-r from-[#7DD3FC] via-white to-[#38BDF8] bg-clip-text text-transparent">
              This is the time to jump.
            </span>
          </p>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/70">
            Academic services, IoT &amp; IEEE projects, a national STEM program,
            and a dedicated platform for university labs — built in Bangladesh.
          </p>

          <div className="mt-7 grid grid-cols-3 gap-3 text-white">
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
                  <Icon className="h-4 w-4 text-[#7DD3FC]" />
                  <p className="mt-2 font-display text-lg font-semibold">
                    {s.label}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/55">
                    {s.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <Link
            href="/"
            className="text-xs text-white/55 transition hover:text-white"
          >
            ← Back to home
          </Link>
        </div>
      </div>

      {/* Right: form panel */}
      <div className="relative flex flex-1 items-center justify-center bg-white px-5 py-10 sm:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(50% 40% at 100% 0%, rgba(14,165,233,0.08) 0%, transparent 70%), radial-gradient(40% 40% at 0% 100%, rgba(27,20,100,0.06) 0%, transparent 70%)",
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
