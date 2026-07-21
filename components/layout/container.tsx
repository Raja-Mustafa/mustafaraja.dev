import type { ReactNode } from "react";

type ContainerWidth = "content" | "reading";

interface ContainerProps {
  children: ReactNode;
  width?: ContainerWidth;
  className?: string;
}

const widthClassNames: Record<ContainerWidth, string> = {
  content: "max-w-content",
  reading: "max-w-reading",
};

export function Container({
  children,
  width = "content",
  className,
}: ContainerProps) {
  return (
    <div
      className={["mx-auto w-full px-space-page", widthClassNames[width], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
