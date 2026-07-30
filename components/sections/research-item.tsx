import Link from "next/link";

export interface ResearchItemProps {
  index: string;
  category: string;
  title: string;
  description: string;
  topics: readonly string[];
  href?: string;
  ctaLabel?: string;
}

export function ResearchItem({
  index,
  category,
  title,
  description,
  topics,
  href,
  ctaLabel = "Explore Research →",
}: ResearchItemProps) {
  const gridClassName = href
    ? "lg:grid-cols-[5rem_minmax(0,1fr)_auto]"
    : "lg:grid-cols-[5rem_minmax(0,1fr)]";

  return (
    <article
      className={`grid gap-space-lg border-t border-border py-space-xl lg:gap-space-xl ${gridClassName}`}
    >
      <p className="text-label font-medium tracking-label text-text-muted">{index}</p>

      <div className="max-w-reading">
        <p className="text-label font-medium tracking-label text-text-muted">
          {category}
        </p>
        <h3 className="mt-space-xs text-title font-medium tracking-headline text-text-primary">
          {title}
        </h3>
        <p className="mt-space-sm text-body text-text-secondary">{description}</p>
        <ul className="mt-space-md flex flex-wrap gap-x-space-sm gap-y-space-xs text-caption text-text-muted">
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>

      {href ? (
        <Link
          href={href}
          className="w-fit self-end text-body font-medium text-accent lg:mb-space-xs"
        >
          {ctaLabel}
        </Link>
      ) : null}
    </article>
  );
}
