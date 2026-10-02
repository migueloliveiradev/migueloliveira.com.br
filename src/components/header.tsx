import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Wordmark } from "./wordmark";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

// O menu mobile abre e fecha pelo script inline do layout.
export function Header() {
  return (
    <header className="gutter sticky top-0 z-50 bg-bg">
      <div className="rule-b flex h-18 items-center justify-between gap-4">
        <Link href="/" aria-label="Início">
          <Wordmark className="text-2xl sm:text-3xl" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="kicker text-muted transition-colors hover:text-text">
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            data-menu-toggle
            aria-expanded="false"
            aria-controls="mobile-menu"
            aria-label="Abrir menu"
            className="group btn btn-line size-11 px-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path className="hidden group-aria-expanded:block" d="M18 6 6 18M6 6l12 12" />
              <path className="group-aria-expanded:hidden" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <nav id="mobile-menu" hidden className="rule-b md:hidden">
        <ul>
          {links.map((link) => (
            <li key={link.href} className="border-b-[1.5px] border-border/20 last:border-0">
              <a href={link.href} className="type-display block py-3 text-3xl hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
