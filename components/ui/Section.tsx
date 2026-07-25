import { type ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
  container?: boolean;
};

export function Section({
  children,
  className = "",
  id,
  as: Tag = "section",
  container = true,
}: SectionProps) {
  return (
    <Tag id={id} className={`py-20 md:py-28 lg:py-32 ${className}`}>
      {container ? (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </Tag>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 md:mb-16 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] text-ink text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base md:text-lg text-ink-muted leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
