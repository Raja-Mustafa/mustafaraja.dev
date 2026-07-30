export interface CapabilityGroupProps {
  title: string;
  capabilities: readonly string[];
}

export function CapabilityGroup({ title, capabilities }: CapabilityGroupProps) {
  return (
    <section className="border-t border-border pt-space-md">
      <h3 className="text-body font-medium text-text-primary">{title}</h3>
      <ul className="mt-space-sm flex flex-wrap gap-x-space-sm gap-y-space-xs text-caption text-text-muted">
        {capabilities.map((capability) => (
          <li key={capability}>{capability}</li>
        ))}
      </ul>
    </section>
  );
}
