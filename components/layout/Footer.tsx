export function Footer() {
  return (
    <footer className="border-t border-black/10 px-6 py-4 text-sm text-black/60 dark:border-white/10 dark:text-white/60">
      <div className="mx-auto w-full max-w-6xl">
        © {new Date().getFullYear()} Mustafa Raja
      </div>
    </footer>
  );
}
