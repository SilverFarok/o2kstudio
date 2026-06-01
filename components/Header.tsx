import { auditMailto, navigation } from "@/content/landing";

export function Header() {
  return (
    <header className="border-b border-line bg-white">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <a href="#" className="text-lg font-bold tracking-[-0.035em] text-ink">
          O2K <span className="text-accent">Studio</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href={auditMailto} className="button-primary px-4 py-2.5">
          Get a free audit
        </a>
      </div>
    </header>
  );
}
