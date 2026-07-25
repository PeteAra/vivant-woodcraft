import Link from "next/link";
import { type ComponentProps, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-bg-elevated hover:bg-accent-hover shadow-sm",
  secondary:
    "border border-ink/20 text-ink hover:border-ink/40 bg-transparent",
  ghost: "text-ink hover:text-walnut underline-offset-4 hover:underline",
  light:
    "bg-bg-elevated/95 text-ink hover:bg-bg-elevated border border-white/20",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
} & Omit<ComponentProps<"button">, "className">;

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
