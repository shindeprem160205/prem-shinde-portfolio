import { useEffect, useState } from "react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#f2f0eb]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between border-b border-[#d6d2ca] px-6 md:px-10">
        <a
          href="#home"
          className="font-mono text-sm font-medium tracking-[0.18em]"
          onClick={closeMenu}
        >
          PREM SHINDE
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          <a
            href="#home"
            className="font-mono text-xs uppercase tracking-[0.16em] text-[#77736c] transition-colors hover:text-[#171717]"
          >
            Home
          </a>

          <a
            href="#about"
            className="font-mono text-xs uppercase tracking-[0.16em] text-[#77736c] transition-colors hover:text-[#171717]"
          >
            About
          </a>

          <a
            href="#projects"
            className="font-mono text-xs uppercase tracking-[0.16em] text-[#77736c] transition-colors hover:text-[#171717]"
          >
            Work
          </a>

          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-[0.16em] text-[#77736c] transition-colors hover:text-[#171717]"
          >
            Contact
          </a>
        </nav>

        <a
          href="/shinde_prem.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] md:flex"
        >
          Resume
          <span>↗</span>
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center border border-[#d6d2ca] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="font-mono text-lg" aria-hidden="true">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-b border-[#d6d2ca] bg-[#f2f0eb] px-6 py-8 md:hidden">
          <nav className="flex flex-col gap-6" aria-label="Mobile">
            <a
              href="#home"
              onClick={closeMenu}
              className="font-mono text-sm uppercase tracking-[0.16em]"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="font-mono text-sm uppercase tracking-[0.16em]"
            >
              About
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="font-mono text-sm uppercase tracking-[0.16em]"
            >
              Work
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="font-mono text-sm uppercase tracking-[0.16em]"
            >
              Contact
            </a>

            <a
              href="/shinde_prem.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="border-t border-[#d6d2ca] pt-6 font-mono text-sm uppercase tracking-[0.16em]"
            >
              Resume ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
