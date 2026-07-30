import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Navigation } from "@/components/layout/navigation";

interface SiteHeaderProps {
  currentPath?: string;
}

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-canvas">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-space-sm py-space-md">
          <Link
            href="/"
            className="text-body font-semibold tracking-headline text-text-primary hover:text-accent-strong"
          >
            Mustafa Raja
          </Link>
          <Navigation currentPath={currentPath} />
        </div>
      </Container>
    </header>
  );
}
