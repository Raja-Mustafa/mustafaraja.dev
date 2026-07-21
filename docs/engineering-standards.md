# Midnight Precision: Engineering Standards

## Purpose

Engineering quality is part of the user experience. A portfolio that looks precise but behaves inconsistently, loads slowly, or excludes users does not meet the Midnight Precision standard.

Consistent engineering practices improve maintainability, readability, accessibility, performance, and long-term evolution. They allow the project to grow without losing the clarity, restraint, and credibility established by the design, visual language, motion system, content strategy, and homepage blueprint.

## Engineering Philosophy

- **Simplicity over cleverness.** Choose the clearest solution that meets the current requirement and preserves future understanding.
- **Readability over brevity.** Code should make intent obvious to the next engineer, even when that requires a few more explicit lines.
- **Composition over duplication.** Assemble small, purposeful units instead of copying markup, behavior, or styling across the application.
- **Performance by default.** Treat rendering cost, bundle size, image weight, and hydration as design constraints from the start.
- **Accessibility is non-negotiable.** Semantic structure, keyboard use, contrast, and reduced-motion support are baseline quality requirements.
- **Every abstraction earns its existence.** Create an abstraction only when it removes real repetition, clarifies a stable concept, or protects an important invariant.
- **Every dependency increases maintenance cost.** Prefer platform and framework capabilities before adding a package; introduce a dependency only when its value clearly exceeds its operational cost.
- **Evidence over assumption.** Validate behavior with appropriate checks, real content, responsive states, and accessibility considerations rather than relying on visual intuition alone.

## Architecture Principles

### Server Components by Default

Use Server Components by default. They preserve a smaller client bundle, support direct server-side data access, and align with a content-first portfolio. A component remains on the server unless it needs browser-only state, event handling, effects, or a client-only API.

### Client Components Only for Required Interaction

Introduce Client Components only when interaction requires them. Keep the client boundary as low and narrow as possible: isolate interactive controls rather than converting an entire page or large section to client rendering.

### Presentation-Focused Shared UI

Shared UI components should remain presentation-focused. They accept explicit data and callbacks, render predictable states, and avoid owning application-specific data fetching, routing policy, or business decisions.

### Separate Business Logic from Rendering

Business logic, data transformation, validation rules, and reusable domain decisions belong outside rendering components whenever they can be expressed independently. Components should orchestrate clear inputs into semantic UI, not become containers for unrelated calculations or side effects.

### Composition Over Inheritance

Prefer composition through children, slots, and small focused primitives. Do not use inheritance-like component hierarchies to share superficial similarities. Shared behavior should be explicit and locally understandable.

## Folder Organization

The folder structure should reflect responsibility, not temporary implementation convenience. Create new top-level folders only when they provide durable organizational value.

### `app/`

Contains routes, route-level layouts, loading and error boundaries, metadata, and page composition. Route files coordinate page-level concerns; they should not become a dumping ground for reusable UI or domain logic.

### `components/`

Contains reusable React components that are not specific to one route. Components are grouped by visual and functional responsibility.

### `components/ui/`

Contains small, reusable presentation primitives such as actions, text treatments, inputs, tags, and accessible structural controls. These primitives follow the design tokens and should not encode portfolio-specific content or page narratives.

### `components/layout/`

Contains reusable structural elements such as headers, footers, page containers, and navigation shells. Layout components establish consistent spatial and navigational behavior across routes.

### `components/sections/`

Contains reusable content-section patterns that compose UI primitives into a recognizable section structure. Keep them content-driven and avoid coupling them to a single page unless the pattern has clear reuse value.

### `lib/`

Contains framework-independent utilities, data transformation, validation helpers, formatting, constants, and domain logic. Functions in this folder should be testable and usable without rendering a React component.

### `styles/`

Contains global style entry points, token definitions, and narrowly scoped shared styling resources when they cannot be represented cleanly through the established Tailwind system. Do not use it as a parallel component styling system.

### `public/`

Contains static, publicly served assets such as authentic project imagery, documents, icons, and other media. Assets must be optimized, appropriately named, and relevant to real content.

### `docs/`

Contains durable project specifications, decision records, and operational guidance. Documentation is part of the product system and must stay aligned with implemented behavior and accepted decisions.

## Component Standards

Every component must define and maintain the following:

- **Purpose:** one clear reason the component exists.
- **Responsibilities:** a bounded set of rendering or interaction responsibilities.
- **Explicit props:** typed inputs that reveal what callers may provide and what the component requires.
- **Minimal API:** the smallest flexible interface that supports valid use cases without speculative options.
- **Predictable behavior:** stable rendering, documented state expectations, and no hidden data or routing side effects.
- **Accessibility considerations:** semantic element choice, keyboard behavior, focus handling, labels, and state communication appropriate to the component.

### What Components Must Not Do

- Fetch unrelated data or own broad application state without a clear architectural reason.
- Combine multiple independent concepts simply because they appear near one another on a page.
- Recreate a browser-native behavior without preserving its accessibility and keyboard expectations.
- Hide critical semantics behind generic wrappers or opaque prop combinations.
- Embed placeholder content, fabricated data, or copy that belongs in route-level content sources.
- Introduce custom motion behavior that conflicts with the Motion System.

When a component exceeds a reasonable scope, separate it by responsibility rather than extracting arbitrary fragments that add indirection without clarity.

## Naming Conventions

Names should describe the responsibility of a file, value, or component. Avoid abbreviations unless they are established technical terms and improve clarity.

### Files

- Use `kebab-case` for file and directory names.
- Name component files after the component they export, for example `project-card.tsx`.
- Use descriptive suffixes for non-component modules when helpful, such as `project-data.ts`, `format-date.ts`, or `navigation.types.ts`.
- Keep route filenames and framework conventions exactly as required by the framework.

### Components

- Use `PascalCase` for component names.
- Use nouns or clear noun phrases that describe the rendered responsibility, such as `ProjectCard` or `SiteHeader`.
- Avoid vague names such as `Wrapper`, `Container`, `Common`, `Helper`, or `Section` unless the name is qualified by a meaningful responsibility.

### Hooks

- Use `camelCase` names beginning with `use`.
- A hook name must describe the stateful behavior or browser integration it provides, such as `useMediaQuery`.
- Do not create hooks merely to wrap a single local expression or avoid passing an explicit value.

### Utilities

- Use `camelCase` function names that begin with a verb when performing work, such as `formatDate` or `getProjectSlug`.
- Keep utilities pure where practical and locate them by domain rather than collecting unrelated helpers in a generic file.

### Constants

- Use `UPPER_SNAKE_CASE` for true module-level constants whose values are immutable and broadly referenced.
- Use descriptive `camelCase` names for locally scoped immutable values when upper-case would add noise.
- Do not use unnamed literals repeatedly; promote repeated, meaningful values to a named constant or design token.

### Types and Interfaces

- Use `PascalCase` for type aliases and interfaces.
- Name types after the domain concept they model, such as `Project`, `Publication`, or `NavigationItem`.
- Do not prefix interfaces with `I`.
- Prefer `Props` only for a component-local prop type; otherwise use a qualified name such as `ProjectCardProps`.

### CSS Variables

- Use semantic `kebab-case` custom-property names with a consistent project prefix when defined globally.
- Name by role rather than raw value, such as a canvas, surface, text, border, accent, spacing, or motion role.
- Do not encode implementation color values or one-off component names into global token names.

### Tailwind Utilities

- Compose utilities in a predictable order: layout, sizing, spacing, typography, visual treatment, interaction state, then responsive or state variants.
- Prefer existing semantic component patterns and token-aligned utilities over arbitrary values.
- Break a class list into a reusable component or clearly named variant when it becomes difficult to scan or repeats across locations.

## TypeScript Standards

TypeScript is used to make invalid states harder to express and maintenance safer.

### Prefer

- Strict typing throughout the project.
- Explicit interfaces or type aliases for component contracts, domain data, and public utility inputs and outputs.
- Discriminated unions for state that has mutually exclusive variants.
- `readonly` data and immutable operations when mutation is not required.
- Narrowing through guards, exhaustive handling, and clear runtime validation where external data is involved.
- Typed constants for domain-specific values instead of duplicated string literals.

### Avoid

- `any`.
- Implicitly inferred public contracts where an explicit type improves understanding.
- Magic strings for route names, categories, states, or repeated semantics.
- Unsafe type assertions used to silence an error rather than prove a condition.
- Broad object types that conceal required shape or permit unrelated data.
- Non-null assertions unless an invariant is established locally and cannot be represented more safely.

## Styling Standards

Use Tailwind intentionally as a composition tool, not as a substitute for visual judgment.

- Build visual decisions from the semantic roles defined in the Design System and Visual Language: canvas, surfaces, text hierarchy, borders, accents, spacing, shape, and elevation.
- Prefer semantic composition over long, unstructured utility chains.
- Keep utility combinations shallow and readable; avoid deeply nested variants, arbitrary values, and competing overrides.
- Preserve the established dark-first hierarchy. Every new visual treatment must be reviewed in dark mode before any optional light-mode consideration.
- Use shared primitives or variants when a visual pattern repeats, rather than copying class lists.
- Do not introduce decorative gradients, excessive shadows, glass effects, or high-saturation treatments that conflict with Midnight Precision.
- Let semantic HTML and component structure carry as much meaning as styling; styles should clarify structure, not compensate for its absence.

## Accessibility Standards

Accessibility is a baseline for every change.

- Use semantic HTML first. Choose native elements that match the intended interaction before adding ARIA attributes or custom behavior.
- Ensure complete keyboard navigation, logical tab order, and reliable keyboard operation for every interactive element.
- Maintain an obvious, high-contrast focus-visible state that cannot be obscured by other layers.
- Meet or exceed applicable contrast expectations for text, controls, icons, data displays, and focus indicators.
- Use ARIA only when native semantics cannot express the required relationship or state; ARIA must supplement, not replace, correct HTML.
- Do not communicate essential information through color, motion, position, or hover alone.
- Respect reduced-motion preferences according to the Motion System, while keeping state changes clear without animation.
- Ensure forms have visible labels, useful instructions, clear errors, and accessible status feedback.
- Verify responsive reflow, zoom behavior, touch target comfort, and content order at narrow viewport sizes.

## Performance Standards

Performance is part of perceived quality and must support a calm, immediate experience.

### Images

- Use authentic, relevant images only.
- Serve appropriately sized and optimized assets.
- Reserve layout space to prevent visual instability.
- Prioritize only the imagery that contributes to the initial viewport; defer non-critical media.

### Fonts

- Keep font families, weights, and styles intentionally limited.
- Load only what supports the established typography hierarchy.
- Avoid blocking rendering or requesting unused font variants.

### Bundle Size and Hydration

- Keep Client Components small and isolated.
- Avoid shipping data, dependencies, or behavior to the browser when server rendering can satisfy the need.
- Review the cost of any new client-side library, especially animation, visualization, or UI packages.
- Remove unused code and imports as part of ordinary implementation work.

### Server Rendering and Streaming

- Prefer server rendering for content and page composition.
- Use streaming and loading boundaries when they improve perceived responsiveness for meaningful asynchronous work.
- Do not introduce loading choreography or artificial delay merely to make an interface appear active.

## Animation Standards

All animation follows the Motion System. There is no separate component-level motion philosophy.

- Implement only motion that communicates hierarchy, state, continuity, or direct response.
- Keep interactions calm, tactile, physically believable, and restrained.
- Use the semantic motion categories and easing philosophy already defined by the Motion System; do not introduce arbitrary timing or custom effects without updating the specification.
- Respect reduced-motion preferences and ensure all state changes remain understandable without animation.
- Prohibit parallax, autoplay, infinite decorative loops, large bounce effects, delayed reveals, and motion that competes with reading.

Implementation serves the specification, not the other way around.

## Content Standards

All content follows the Content Strategy and supports the evidence-first narrative.

- Use real, attributable, and contextualized information.
- Do not use placeholder copy or lorem ipsum.
- Do not represent unfinished, fabricated, or unverifiable work as a completed project.
- Do not use fake projects, fabricated metrics, unsupported percentages, or inflated claims.
- Describe collaboration, ownership, constraints, and outcomes accurately.
- Use structured project storytelling: problem, context, constraints, approach, engineering decisions, outcome, and lessons.
- Keep content concise at the homepage level and link to deeper material when it adds real evidence.

## Code Review Checklist

Before merging, verify:

- Design consistency with the Design System and Visual Language.
- Motion consistency with the Motion System, including reduced-motion behavior where applicable.
- Content consistency with the Content Strategy and evidence-first principles.
- Semantic HTML, keyboard navigation, focus visibility, contrast, and accessible state communication.
- Responsive behavior at narrow, typical, wide, and text-zoomed layouts.
- Image, font, rendering, bundle, and hydration impact appropriate to the change.
- Type safety, explicit public contracts, and safe handling of external data.
- No duplicated logic, styling, or component behavior where a clear shared composition exists.
- No unnecessary dependency, abstraction, client boundary, or configuration change.
- Readable names, focused modules, and code that makes its intent clear.

## Anti-Patterns

The following are explicitly prohibited:

- Over-engineering a simple requirement.
- Premature optimization without evidence of a meaningful bottleneck.
- Unused abstractions or generic frameworks created for hypothetical future work.
- Massive components that combine multiple independent responsibilities.
- Prop drilling when composition, colocated state, or a narrowly scoped context solves the actual problem more clearly.
- Anonymous utility functions scattered throughout rendering code when a named, testable helper would clarify intent.
- Deep nesting in component trees, conditional rendering, or utility-class variants that obscures structure.
- Magic numbers, strings, or visual values that should be named as a semantic token or constant.
- Copy-pasted code, styles, or behavior that creates maintenance divergence.

When an implementation feels clever but difficult to explain, simplify it before merging.

## Closing Principle

"Good engineering is invisible until it isn't."

— Midnight Precision
