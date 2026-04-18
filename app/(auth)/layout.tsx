import Link from "next/link";
import { Logo } from "@/components/brand/logo";

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
        <div className="orb h-[420px] w-[420px] bg-[#7C3AED]/50 left-[-80px] top-[-50px] animate-float-slow" />
        <div className="orb h-[360px] w-[360px] bg-[#2E21A3]/60 right-[-120px] bottom-[40px] animate-float-slower" />

        <div className="relative">
          <Logo variant="light" />
        </div>

        <div className="relative max-w-md">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-accent-light)]">
            The technoLOgia manifesto
          </span>
          <p className="mt-4 font-display text-3xl font-semibold leading-tight text-white">
            If it&rsquo;s not now, then when? <br />
            <span className="bg-gradient-to-r from-[#A78BFA] to-white bg-clip-text text-transparent">
              This is the time to jump.
            </span>
          </p>
          <p className="mt-5 text-sm text-white/75">
            Academic services, IoT & IEEE projects, and a national STEM program
            — all in one platform, built in Bangladesh.
          </p>
        </div>

        <div className="relative">
          <Link
            href="/"
            className="text-xs text-white/60 transition hover:text-white"
          >
            ← Back to home
          </Link>
        </div>
      </div>

      {/* Right: form panel */}
      <div className="flex flex-1 items-center justify-center bg-white px-5 py-10 sm:px-10">
        <div className="w-full max-w-md">
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
