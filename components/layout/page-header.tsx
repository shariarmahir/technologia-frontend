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
        "flex flex-col gap-4 border-b border-[color:var(--color-border)] pb-6 sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div>
        {eyebrow && (
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-1 font-display text-2xl font-semibold tracking-tight text-[color:var(--color-text-primary)] sm:text-[1.75rem]">
          {title}
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
