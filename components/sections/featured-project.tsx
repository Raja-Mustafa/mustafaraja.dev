import Link from "next/link";
import { Stack } from "@/components/layout/stack";

type VisualPosition = "start" | "end";

export interface FeaturedProjectProps {
  categories: readonly string[];
  title: string;
  description: string;
  href: string;
  visualPosition: VisualPosition;
}

export function FeaturedProject({
  categories,
  title,
  description,
  href,
  visualPosition,
}: FeaturedProjectProps) {
  const visualOrderClassName =
    visualPosition === "start" ? "lg:order-1" : "lg:order-2";
  const contentOrderClassName =
    visualPosition === "start" ? "lg:order-2" : "lg:order-1";

  return (
    <article className="grid items-center gap-space-2xl py-space-xl lg:grid-cols-2">
      <Stack space="lg" className={`max-w-reading ${contentOrderClassName}`}>
        <ul className="flex flex-wrap gap-space-xs" aria-label="Project disciplines">
          {categories.map((category) => (
            <li
              key={category}
              className="rounded-sm border border-border px-space-xs py-space-micro text-label tracking-label text-text-muted"
            >
              {category}
            </li>
          ))}
        </ul>
        <h3 className="text-balance text-headline font-medium tracking-headline text-text-primary">
          {title}
        </h3>
        <p className="text-body text-text-secondary">{description}</p>
        <Link href={href} className="w-fit text-body font-medium text-accent">
          View Case Study →
        </Link>
      </Stack>

      <figure
        aria-label={`Reserved space for future imagery for ${title}`}
        className={`flex aspect-video items-center justify-center border border-border bg-surface-muted ${visualOrderClassName}`}
      >
        <figcaption className="text-label tracking-label text-text-muted">
          Project Visual
        </figcaption>
      </figure>
    </article>
  );
}
