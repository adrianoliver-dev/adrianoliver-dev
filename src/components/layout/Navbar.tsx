import Link from "next/link"

const navLinks = [
  { label: "Work", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm text-text-secondary hover:text-accent transition-colors duration-200"
        >
          adrianoliver.dev
        </Link>
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="text-sm px-4 py-2 border border-border text-text-primary hover:border-accent hover:text-accent transition-colors duration-200"
        >
          Hire me
        </Link>
      </nav>
    </header>
  )
}
