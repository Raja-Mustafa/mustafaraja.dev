import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-black/10 px-6 py-4 dark:border-white/10">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-6xl items-center"
      >
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Mustafa Raja
        </Link>
      </nav>
    </header>
  );
}
