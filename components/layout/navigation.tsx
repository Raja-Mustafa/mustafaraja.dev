import Link from "next/link";

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationProps {
  currentPath?: string;
}

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
] as const satisfies readonly NavigationItem[];

export function Navigation({ currentPath }: NavigationProps) {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex flex-wrap items-center gap-x-space-lg gap-y-space-xs text-caption">
        {navigationItems.map((item) => {
          const isCurrentPage = item.href === currentPath;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrentPage ? "page" : undefined}
                className={
                  isCurrentPage
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
