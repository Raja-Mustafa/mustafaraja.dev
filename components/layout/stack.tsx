import type { ElementType, ReactNode } from "react";

type StackElement = "div" | "ul" | "ol";
type StackSpace = "micro" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface StackProps {
  children: ReactNode;
  space?: StackSpace;
  as?: StackElement;
  className?: string;
}

const spaceClassNames: Record<StackSpace, string> = {
  micro: "gap-space-micro",
  xs: "gap-space-xs",
  sm: "gap-space-sm",
  md: "gap-space-md",
  lg: "gap-space-lg",
  xl: "gap-space-xl",
  "2xl": "gap-space-2xl",
  "3xl": "gap-space-3xl",
};

export function Stack({
  children,
  space = "md",
  as = "div",
  className,
}: StackProps) {
  const Element = as as ElementType;

  return (
    <Element
      className={["flex flex-col", spaceClassNames[space], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Element>
  );
}
