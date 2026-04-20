"use client";

import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-display font-semibold tracking-[-0.01em] transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 overflow-hidden isolate group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "text-white bg-[linear-gradient(135deg,#1B1464_0%,#2E21A3_45%,#0EA5E9_100%)] border border-[rgba(56,189,248,0.4)] shadow-[0_10px_30px_-8px_rgba(14,165,233,0.5)] hover:shadow-[0_18px_44px_-10px_rgba(14,165,233,0.65)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        sky:
          "text-white bg-[linear-gradient(135deg,#0EA5E9_0%,#38BDF8_100%)] border border-[rgba(186,230,253,0.6)] shadow-[0_10px_30px_-8px_rgba(14,165,233,0.55)] hover:shadow-[0_18px_44px_-10px_rgba(14,165,233,0.75)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        ghost:
          "text-white bg-white/5 border border-white/25 backdrop-blur-md hover:bg-white/12 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "text-[color:var(--color-primary-dark)] bg-white border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] hover:shadow-[0_8px_22px_-12px_rgba(14,165,233,0.5)] hover:-translate-y-0.5",
        subtle:
          "text-[color:var(--color-primary)] bg-[color:var(--color-surface-alt)] hover:bg-white hover:shadow-[0_8px_22px_-12px_rgba(15,11,61,0.25)] border border-transparent hover:border-[color:var(--color-border)]",
        link:
          "text-[color:var(--color-accent)] hover:text-[color:var(--color-primary)] underline-offset-4 hover:underline px-0",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-[10px]",
        md: "h-11 px-6 text-[0.95rem] rounded-[12px]",
        lg: "h-[52px] px-8 text-base rounded-[14px]",
        xl: "h-[60px] px-10 text-[1.05rem] rounded-[16px]",
        icon: "h-10 w-10 rounded-full",
      },
      glow: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      glow: false,
    },
  }
);

type ButtonOwnProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  shine?: boolean;
};

type ButtonProps =
  | (ButtonOwnProps & { href: string; target?: string; rel?: string })
  | (ButtonOwnProps &
      Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
        href?: undefined;
      });

export function Button(props: ButtonProps) {
  const {
    variant,
    size,
    glow,
    className,
    children,
    asChild,
    shine = true,
    ...rest
  } = props as ButtonOwnProps & Record<string, unknown>;

  const classes = cn(
    buttonVariants({ variant, size, glow }),
    glow &&
      "after:absolute after:inset-0 after:-z-10 after:rounded-[inherit] after:bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.55),transparent_70%)] after:blur-xl after:opacity-60 hover:after:opacity-100 after:transition-opacity",
    className
  );

  const inner = (
    <>
      {shine && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
        >
          <span className="absolute inset-y-0 -left-[40%] w-[40%] translate-x-[-120%] skew-x-[-15deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)] transition-transform duration-700 ease-out group-hover/btn:translate-x-[320%]" />
        </span>
      )}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children as React.ReactNode}
      </span>
    </>
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props as { href: string; target?: string; rel?: string };
    const external = /^https?:\/\//.test(href);
    if (external) {
      return (
        <a
          href={href}
          target={target ?? "_blank"}
          rel={rel ?? "noopener noreferrer"}
          className={classes}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  if (asChild) {
    return (
      <Slot className={classes} {...(rest as Record<string, unknown>)}>
        {children as React.ReactElement}
      </Slot>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {inner}
    </button>
  );
}

export { buttonVariants };
