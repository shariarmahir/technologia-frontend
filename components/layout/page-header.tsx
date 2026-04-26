import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 border-b border-[#BAE6FD]/40 pb-6 sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div>
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-[#BAE6FD] bg-[#F0F9FF] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#0369A1]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38BDF8] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0EA5E9]" />
            </span>
            {eyebrow}
          </span>
        )}
        <h1 className="mt-2.5 font-display text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
          <span className="bg-gradient-to-r from-[#0F0B3D] via-[#1B1464] to-[#0369A1] bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        {description && (
          <p className="mt-1.5 max-w-2xl text-sm text-[color:var(--color-text-secondary)]">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}
