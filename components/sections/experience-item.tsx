export interface ExperienceItemProps {
  period?: string;
  organization: string;
  role: string;
  description: string;
  disciplines: readonly string[];
}

export function ExperienceItem({
  period,
  organization,
  role,
  description,
  disciplines,
}: ExperienceItemProps) {
  return (
    <article className="grid gap-space-lg border-t border-border py-space-xl lg:grid-cols-[8rem_minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-space-xl">
      {period ? (
        <p className="text-caption text-text-muted lg:pt-space-micro">{period}</p>
      ) : (
        <div aria-hidden="true" />
      )}

      <div>
        <h3 className="text-title font-medium tracking-headline text-text-primary">
          {role}
        </h3>
        <p className="mt-space-xs text-label font-medium tracking-label text-text-muted">
          {organization}
        </p>
      </div>

      <div className="max-w-reading">
        <p className="text-body text-text-secondary">{description}</p>
        <ul className="mt-space-md flex flex-wrap gap-x-space-sm gap-y-space-xs text-caption text-text-muted">
          {disciplines.map((discipline) => (
            <li key={discipline}>{discipline}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
