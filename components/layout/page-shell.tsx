import type { ReactNode } from "react";

interface PageShellProps {
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
}

export function PageShell({ header, children, footer }: PageShellProps) {
  return (
    <div className="flex min-h-svh flex-col bg-canvas text-text-primary">
      {header}
      <main className="flex-1 py-space-page">{children}</main>
      {footer}
    </div>
  );
}
