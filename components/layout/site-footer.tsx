import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";

interface SocialLink {
  label: string;
  href: string;
}

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Raja-Mustafa" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mustafa-raja-tech" },
] as const satisfies readonly SocialLink[];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container>
        <Stack space="xs" className="py-space-lg text-caption text-text-secondary">
          <p>© {currentYear} Mustafa Raja</p>
          <nav aria-label="Social links">
            <ul className="flex flex-wrap gap-space-md">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Stack>
      </Container>
    </footer>
  );
}
