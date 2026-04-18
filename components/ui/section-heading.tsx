import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-accent)] shadow-sm backdrop-blur">
          <span className="h-1 w-1 rounded-full bg-[color:var(--color-accent)]" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[color:var(--color-text-primary)] sm:text-4xl md:text-[2.75rem]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[color:var(--color-text-secondary)] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
