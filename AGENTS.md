<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: mustafaraja.dev

## Project Goal

This repository is the long-term personal portfolio of Mustafa Raja.

The website should present a professional engineering identity focused on:

- Semiconductor Engineering
- Embedded Systems
- Robotics
- Research
- Software Engineering
- Leadership

The codebase should be production quality and easy to maintain.

---

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS

---

## Rules

### Never

- Never downgrade package versions.
- Never modify package.json unless explicitly requested.
- Never install new dependencies unless explicitly requested.
- Never create placeholder lorem ipsum content.
- Never add unnecessary animations.
- Never generate huge components (>200 lines) when smaller reusable components are possible.
- Never duplicate code.

### Always

- Prefer Server Components.
- Use semantic HTML.
- Follow accessibility best practices.
- Keep components reusable.
- Keep files organized.
- Explain architectural decisions before making major changes.

---

## Architecture Principles

- Organize components by responsibility.
- Prefer reusable UI primitives over page-specific components.
- Introduce new top-level folders only when they provide clear organizational value.
- Keep the directory structure simple until the project naturally grows.

---

## Code Style

- TypeScript only.
- Strict typing.
- Small reusable components.
- Performance first.
- Readability over cleverness.

---

## Workflow

Think before coding.

If a task is large:

1. Explain the plan.
2. Wait for approval if architecture changes are significant.
3. Implement incrementally.

Avoid making unrelated changes.
