const Footer = () => {
  return (
    <footer className="border-t border-[#d6d2ca] bg-[#f2f0eb] px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#77736c] sm:flex-row">
        <span>© 2026 Prem Shinde</span>

        <span>Designed & Built with React</span>

        <a href="#home" className="transition-colors hover:text-[#171717]">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer
