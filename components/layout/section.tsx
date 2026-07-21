import type { ReactNode } from "react";

type SectionTone = "canvas" | "surface" | "muted";

interface SectionProps {
  children: ReactNode;
  tone?: SectionTone;
  id?: string;
  className?: string;
}

const toneClassNames: Record<SectionTone, string> = {
  canvas: "bg-canvas",
  surface: "bg-surface",
  muted: "bg-surface-muted",
};

export function Section({
  children,
  tone = "canvas",
  id,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={["py-space-section", toneClassNames[tone], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
}
