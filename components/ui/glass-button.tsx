"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "default" | "primary" | "ghost";
type Size = "sm" | "md" | "lg";

const sizeStyles: Record<Size, string> = {
  sm: "text-sm px-4 py-2 rounded-[12px]",
  md: "text-[0.95rem] px-7 py-[0.85rem]",
  lg: "text-base px-9 py-4 rounded-[16px]",
};

const variantStyles: Record<Variant, string> = {
  default: "glass-button",
  primary: "glass-button glass-button-primary",
  ghost: "glass-button glass-button-ghost",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type LinkProps = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type Props = ButtonProps | LinkProps;

export function GlassButton(props: Props) {
  const {
    variant = "default",
    size = "md",
    className,
    children,
    ...rest
  } = props as CommonProps & Record<string, unknown>;

  const classes = cn(variantStyles[variant], sizeStyles[size], className);

  if ("href" in props && props.href) {
    const { href, target, rel } = props as LinkProps;
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a href={href} target={target ?? "_blank"} rel={rel ?? "noopener noreferrer"} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
