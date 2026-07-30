import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import {
  FeaturedProject,
  type FeaturedProjectProps,
} from "@/components/sections/featured-project";

const featuredProjects = [
  {
    categories: ["AI", "Robotics", "Computer Vision", "Embedded"],
    title: "Gesture-Guided Aerial Swarm Robotics",
    description:
      "An autonomous multi-drone system combining computer vision, embedded intelligence, and coordinated navigation for gesture-guided operation and minefield detection.",
    href: "/projects",
    visualPosition: "end",
  },
  {
    categories: ["Semiconductor", "Research", "Fabrication"],
    title: "Semiconductor Research & Fabrication",
    description:
      "Hands-on semiconductor research spanning device fabrication, thin-film deposition, lithography, dielectric and electrode engineering, and process optimization across MOS devices, memristors, and TFTs.",
    href: "/projects",
    visualPosition: "start",
  },
  {
    categories: ["Web Engineering", "Next.js", "TypeScript", "UI/UX"],
    title: "R&AV Club Web Platform",
    description:
      "A modern web platform built for the R&AV Club to showcase its projects, activities, achievements, and engineering community through a responsive, structured digital presence.",
    href: "/projects",
    visualPosition: "end",
  },
  {
    categories: ["Embedded", "Optical Sensing", "Instrumentation", "Calibration"],
    title: "Portable 18-Channel Optical Spectrometer",
    description:
      "A portable optical sensing system using an 18-channel spectral sensor and onboard display to capture, calibrate, and visualize wavelength-resolved measurements from 410 to 940 nm.",
    href: "/projects",
    visualPosition: "start",
  },
] as const satisfies readonly FeaturedProjectProps[];

export default function Home() {
  return (
    <>
      <Section className="pt-space-2xl">
        <Container>
          <Stack space="2xl">
            <Stack space="md">
              <p className="text-label font-medium tracking-label text-text-muted">
                Electronics Engineering • AI • Embedded Systems • Research
              </p>
              <h1 className="text-headline font-semibold tracking-display text-text-primary sm:text-display">
                <span className="block whitespace-nowrap">Built to sense.</span>
                <span className="block whitespace-nowrap">Designed to think.</span>
                <span className="block whitespace-nowrap">Engineered to adapt.</span>
              </h1>
            </Stack>

            <Stack space="lg" className="max-w-reading">
              <p className="text-title tracking-headline text-text-primary">
                Engineering the invisible systems behind tomorrow.
              </p>
              <p className="max-w-prose text-body text-text-secondary">
                Electronics Engineering student passionate about building intelligent
                systems across hardware and software. My work spans semiconductor
                fabrication, AI, embedded systems, robotics, computer vision, and
                full-stack engineering—transforming research into practical,
                reliable solutions.
              </p>
            </Stack>

            <div className="flex flex-col gap-space-md sm:flex-row">
              <Link
                href="/projects"
                className="w-full rounded-md bg-accent px-space-xl py-space-md text-center text-body font-medium text-accent-foreground sm:w-auto"
              >
                View Projects
              </Link>
              <Link
                href="/resume"
                className="w-full rounded-md border border-border px-space-xl py-space-md text-center text-body font-medium text-text-primary sm:w-auto"
              >
                Resume
              </Link>
            </div>

            <p className="max-w-reading border-t border-border pt-space-lg text-caption text-text-muted">
              CREST, BITS Pilani Hyderabad • Semiconductor Research • Intelligent
              Systems
            </p>
          </Stack>
        </Container>
      </Section>

      <Section id="featured-work" className="pt-space-2xl">
        <Container>
          <Stack space="3xl">
            <Stack space="md" className="max-w-reading">
              <p className="text-label font-medium tracking-label text-text-muted">
                FEATURED WORK
              </p>
              <h2 className="text-headline font-medium tracking-headline text-text-primary">
                Engineering Across Disciplines
              </h2>
              <p className="text-body text-text-secondary">
                Selected work across AI, robotics, semiconductor research, embedded
                systems, and modern web engineering.
              </p>
            </Stack>

            <Stack space="3xl">
              {featuredProjects.map((project) => (
                <FeaturedProject key={project.title} {...project} />
              ))}
            </Stack>
          </Stack>
        </Container>
      </Section>
    </>
  );
}
