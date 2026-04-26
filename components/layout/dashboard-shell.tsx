"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Bell,
  ChevronRight,
  Command,
  LogOut,
  Menu,
  Search,
  Settings,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { cn, initials } from "@/lib/utils";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
};

export type DashboardRole = "admin" | "client" | "school" | "lab";

export function DashboardShell({
  nav,
  role,
  userName,
  userMeta,
  children,
}: {
  nav: NavItem[];
  role: DashboardRole;
  userName: string;
  userMeta: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const roleLabel = {
    admin: "Admin Console",
    client: "Student Dashboard",
    school: "School Portal",
    lab: "University Lab",
  }[role];

  return (
    <div className="relative flex min-h-screen w-full bg-[color:var(--color-surface)]">
      {/* Ambient wash */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 90% -5%, rgba(255,214,98,0.12) 0%, transparent 65%), radial-gradient(ellipse 45% 40% at -5% 100%, rgba(0,83,156,0.10) 0%, transparent 65%), radial-gradient(ellipse 35% 35% at 50% 55%, rgba(0,102,184,0.05) 0%, transparent 100%)",
        }}
      />

      {/* Sidebar desktop */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[268px] lg:block">
        <div className="relative h-full overflow-hidden border-r border-white/5 bg-[linear-gradient(180deg,#001A3E_0%,#002B6E_40%,#003A6E_100%)] text-white">
          <div className="absolute -right-20 top-10 h-60 w-60 rounded-full bg-[#FFD662]/15 blur-3xl" />
          <div className="absolute -left-20 bottom-10 h-60 w-60 rounded-full bg-[#00539C]/20 blur-3xl" />
          <SidebarInner nav={nav} pathname={pathname} roleLabel={roleLabel} />
        </div>
      </aside>

      {/* Sidebar mobile */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-[#001A3E]/70 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
        />
        <aside
          className={cn(
            "absolute inset-y-0 left-0 w-[288px] bg-[linear-gradient(180deg,#001A3E_0%,#002B6E_40%,#003A6E_100%)] text-white shadow-2xl transition-transform",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-5 pt-5">
            <Logo variant="light" />
            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-white/70 hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <SidebarInner
            nav={nav}
            pathname={pathname}
            roleLabel={roleLabel}
            onNavigate={() => setOpen(false)}
            hideLogo
          />
        </aside>
      </div>

      {/* Main */}
      <div className="relative flex min-h-screen flex-1 flex-col lg:pl-[268px]">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-[#00539C]/20 bg-white/82 px-5 backdrop-blur-xl shadow-[0_1px_0_rgba(0,83,156,0.08),0_4px_20px_rgba(0,83,156,0.04)] sm:px-8">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-primary)] lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="relative hidden w-full max-w-md md:block">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--color-text-secondary)]" />
            <input
              placeholder="Search orders, teams, events…"
              className="w-full rounded-full border border-[#00539C]/25 bg-white/70 py-2 pl-10 pr-16 text-sm outline-none transition placeholder:text-[#94A3B8] focus:border-[#00539C] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,83,156,0.12)]"
            />
            <kbd className="absolute right-2.5 top-1/2 inline-flex h-6 -translate-y-1/2 items-center gap-1 rounded-md border border-[color:var(--color-border)] bg-white px-1.5 font-mono text-[10px] text-[color:var(--color-text-secondary)]">
              <Command className="h-3 w-3" /> K
            </kbd>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#FFD662]/40 bg-white/85 backdrop-blur-sm text-[color:var(--color-primary)] transition hover:border-[#FFD662]/70 hover:bg-[#FFFBEB] hover:shadow-[0_4px_16px_rgba(255,214,98,0.2)]">
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#FFD662] shadow-[0_0_0_2px_white] animate-pulse" />
            </button>
            <button className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#FFD662]/40 bg-white/85 backdrop-blur-sm text-[color:var(--color-primary)] transition hover:border-[#FFD662]/70 hover:bg-[#FFFBEB] hover:shadow-[0_4px_16px_rgba(255,214,98,0.2)] sm:inline-flex">
              <Settings className="h-4 w-4" />
            </button>
            <div className="ml-1 flex items-center gap-2.5 rounded-full border border-[#00539C]/25 bg-white/88 backdrop-blur-sm py-1 pl-1 pr-3.5 shadow-[0_4px_20px_-4px_rgba(0,83,156,0.2)]">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#003A6E_0%,#00539C_100%)] text-xs font-semibold text-white">
                {initials(userName)}
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#10B981]" />
              </span>
              <div className="hidden text-left leading-tight sm:block">
                <p className="text-xs font-semibold text-[color:var(--color-text-primary)]">
                  {userName}
                </p>
                <p className="text-[10px] text-[color:var(--color-text-secondary)]">
                  {userMeta}
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="relative flex-1 px-5 py-7 sm:px-8 sm:py-9">
          {children}
        </main>
      </div>
    </div>
  );
}

function SidebarInner({
  nav,
  pathname,
  roleLabel,
  onNavigate,
  hideLogo = false,
}: {
  nav: NavItem[];
  pathname: string;
  roleLabel: string;
  onNavigate?: () => void;
  hideLogo?: boolean;
}) {
  return (
    <div className="relative flex h-full flex-col">
      {!hideLogo && (
        <div className="px-6 pt-7">
          <Logo variant="light" />
        </div>
      )}
      <div className="mt-6 px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#FFD662]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFD662] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FFD662]" />
          </span>
          {roleLabel}
        </span>
      </div>

      <nav className="mt-7 flex-1 space-y-1 px-3">
        {nav.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href + "/"));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                active
                  ? "bg-[linear-gradient(135deg,rgba(255,214,98,0.18)_0%,rgba(255,228,138,0.08)_100%)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              )}
            >
              {active && (
                <span className="absolute -left-3 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full bg-[#FFD662] shadow-[0_0_18px_rgba(255,214,98,0.85)]" />
              )}
              <Icon
                className={cn(
                  "h-4 w-4 transition-colors",
                  active ? "text-[#FFD662]" : "text-white/55 group-hover:text-white"
                )}
              />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 text-[10px] font-semibold transition",
                    active
                      ? "bg-[#FFD662] text-[#001A3E] shadow-[0_0_10px_rgba(255,214,98,0.6)]"
                      : "bg-white/10 text-white/80"
                  )}
                >
                  {item.badge}
                </span>
              )}
              {active && (
                <ChevronRight className="h-3.5 w-3.5 text-[#FFD662]" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="relative mx-4 mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,214,98,0.12)_0%,rgba(0,83,156,0.4)_100%)] p-4 text-white">
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#FFD662]/20 blur-2xl" />
        <div className="relative flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-white/10">
            <Sparkles className="h-4 w-4 text-[#FFD662]" />
          </span>
          <p className="font-display text-sm font-semibold">Need a hand?</p>
        </div>
        <p className="relative mt-2 text-xs text-white/65">
          Chat with the technoLOgia team — we reply within an hour.
        </p>
        <button className="relative mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[linear-gradient(135deg,#FFD662_0%,#FFE48A_100%)] py-2 text-xs font-semibold text-[#001A3E] shadow-[0_10px_28px_-10px_rgba(255,214,98,0.7)] transition hover:brightness-105">
          Contact support
        </button>
      </div>

      <Link
        href="/"
        className="mx-3 mb-4 flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-white/55 transition hover:bg-white/5 hover:text-white"
      >
        <LogOut className="h-4 w-4" /> Sign out
      </Link>
    </div>
  );
}
