import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import {
  CapabilityGroup,
  type CapabilityGroupProps,
} from "@/components/sections/capability-group";
import {
  FeaturedProject,
  type FeaturedProjectProps,
} from "@/components/sections/featured-project";
import {
  ExperienceItem,
  type ExperienceItemProps,
} from "@/components/sections/experience-item";
import {
  ResearchItem,
  type ResearchItemProps,
} from "@/components/sections/research-item";

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

const researchItems = [
  {
    index: "01",
    category: "SEMICONDUCTOR DEVICES",
    title: "Device Fabrication & Process Engineering",
    description:
      "Hands-on semiconductor fabrication spanning MOSCAP, MOSFET and TFT structures, with experience across thin-film deposition, lithography, dielectric and electrode formation, and device process integration.",
    topics: ["MOSCAP", "MOSFET", "TFT"],
  },
  {
    index: "02",
    category: "EMERGING MEMORY",
    title: "Memristive Devices",
    description:
      "Research into memristive sensory devices, resistive-switching mechanisms and performance engineering, examining material, interface and device-level approaches for sensing and emerging computing applications.",
    topics: ["Memristors", "Resistive Switching", "Sensory Devices"],
  },
  {
    index: "03",
    category: "FUNCTIONAL MATERIALS",
    title: "Laser-Induced Graphene",
    description:
      "Fabrication and process optimization of laser-induced graphene using CO₂ laser processing, investigating power, scan speed, focus, passes and pattern geometry to improve structural quality and reproducibility.",
    topics: ["LIG", "CO₂ Laser", "Process Optimization"],
  },
  {
    index: "04",
    category: "OPTICAL SENSING",
    title: "Spectral Instrumentation",
    description:
      "Development of a portable 18-channel optical spectrometer spanning 410–940 nm, with sensor integration, spectral calibration, embedded visualization and analysis of wavelength-dependent response.",
    topics: ["18-Channel Sensing", "Calibration", "Instrumentation"],
  },
] as const satisfies readonly ResearchItemProps[];

const experienceItems = [
  {
    organization: "CREST, BITS Pilani Hyderabad",
    role: "Research Intern — Semiconductor Fabrication",
    description:
      "Hands-on research experience spanning semiconductor device fabrication, laser-induced graphene, and optical instrumentation within a multidisciplinary research environment.",
    disciplines: [
      "Semiconductor Fabrication",
      "Research",
      "LIG",
      "Optical Instrumentation",
    ],
  },
  {
    period: "2025–2026",
    organization: "Robotics & AV Club, FoTE MSU",
    role: "Head of Programming",
    description:
      "Led programming activities and contributed to robotics, autonomous systems, software development, technical projects, and the club's web platform.",
    disciplines: [
      "Robotics",
      "Autonomous Systems",
      "Software Engineering",
      "Technical Leadership",
    ],
  },
  {
    organization: "Micron Technology, Hyderabad",
    role: "Industry Exposure — URAM Program",
    description:
      "Technical industrial exposure to semiconductor memory development, validation laboratories, SSD and RAM testing, PCIe technology, and the memory product lifecycle.",
    disciplines: ["Memory Systems", "Validation", "Semiconductor Industry", "PCIe"],
  },
] as const satisfies readonly ExperienceItemProps[];

const capabilityGroups = [
  {
    title: "Hardware & Electronics",
    capabilities: [
      "Semiconductor Devices",
      "Embedded Systems",
      "Sensors",
      "Optical Instrumentation",
      "Electronics",
    ],
  },
  {
    title: "AI & Autonomous Systems",
    capabilities: [
      "Computer Vision",
      "Robotics",
      "SLAM",
      "Autonomous Systems",
      "AI",
    ],
  },
  {
    title: "Software Engineering",
    capabilities: ["Python", "C/C++", "Java", "JavaScript", "TypeScript", "Next.js", "ROS 2"],
  },
  {
    title: "Engineering & Research",
    capabilities: [
      "Semiconductor Fabrication",
      "Linux",
      "Git",
      "Docker",
      "MATLAB",
      "Research & Prototyping",
    ],
  },
] as const satisfies readonly CapabilityGroupProps[];

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
                <span className="block">Built to sense.</span>
                <span className="block">Designed to think.</span>
                <span className="block">Engineered to adapt.</span>
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
                className="w-full rounded-md bg-accent px-space-xl py-space-md text-center text-body font-medium text-accent-foreground hover:bg-accent-strong sm:w-auto"
              >
                View Projects
              </Link>
              <Link
                href="/resume"
                className="w-full rounded-md border border-border px-space-xl py-space-md text-center text-body font-medium text-text-primary hover:border-border-strong hover:bg-surface-muted sm:w-auto"
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

      <Section id="research" tone="surface">
        <Container>
          <Stack space="3xl">
            <Stack space="md" className="max-w-reading">
              <p className="text-label font-medium tracking-label text-text-muted">
                RESEARCH
              </p>
              <h2 className="text-headline font-medium tracking-headline text-text-primary">
                From Materials to Devices.
              </h2>
              <p className="text-body text-text-secondary">
                Exploring semiconductor devices, functional materials, fabrication
                processes, and emerging computing technologies.
              </p>
              <p className="text-caption text-text-muted">
                Research Experience — CREST, BITS Pilani Hyderabad
              </p>
            </Stack>

            <div>
              {researchItems.map((item) => (
                <ResearchItem key={item.index} {...item} />
              ))}
            </div>
          </Stack>
        </Container>
      </Section>

      <Section id="experience">
        <Container>
          <Stack space="3xl">
            <Stack space="md" className="max-w-reading">
              <p className="text-label font-medium tracking-label text-text-muted">
                EXPERIENCE
              </p>
              <h2 className="text-headline font-medium tracking-headline text-text-primary">
                Where Engineering Meets Practice.
              </h2>
              <p className="text-body text-text-secondary">
                Research, technical leadership, and industry exposure across
                semiconductor technology, intelligent systems, and software engineering.
              </p>
            </Stack>

            <div>
              {experienceItems.map((item) => (
                <ExperienceItem key={`${item.organization}-${item.role}`} {...item} />
              ))}
            </div>
          </Stack>
        </Container>
      </Section>

      <Section id="capabilities" tone="surface" className="py-space-3xl">
        <Container>
          <Stack space="2xl">
            <Stack space="md" className="max-w-reading">
              <p className="text-label font-medium tracking-label text-text-muted">
                CAPABILITIES
              </p>
              <h2 className="text-headline font-medium tracking-headline text-text-primary">
                Across the Stack.
              </h2>
              <p className="text-body text-text-secondary">
                From semiconductor devices to intelligent systems and the software that
                connects them.
              </p>
            </Stack>

            <div className="grid gap-x-space-2xl gap-y-space-xl md:grid-cols-2">
              {capabilityGroups.map((group) => (
                <CapabilityGroup key={group.title} {...group} />
              ))}
            </div>
          </Stack>
        </Container>
      </Section>

      <Section id="contact" tone="muted">
        <Container>
          <Stack space="xl" className="max-w-reading">
            <Stack space="md">
              <p className="text-label font-medium tracking-label text-text-muted">
                LET&apos;S CONNECT
              </p>
              <h2 className="text-headline font-medium tracking-display text-text-primary sm:text-display">
                Ideas are better when they&apos;re built.
              </h2>
              <p className="text-body text-text-secondary">
                I&apos;m always interested in engineering, research, and software
                opportunities — especially where hardware, intelligent systems, and
                computation intersect.
              </p>
            </Stack>

          </Stack>
        </Container>
      </Section>
    </>
  );
}
