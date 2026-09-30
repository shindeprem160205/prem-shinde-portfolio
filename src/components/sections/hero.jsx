const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pt-20 md:px-10"
    >
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-[1400px] flex-col justify-between py-10 md:py-14">

        {/* Top meta */}
        <div className="hero-fade flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[#77736c] md:text-xs">
          <span>Software Engineer</span>

          <span className="hidden text-right md:block">
            Based in India
            <br />
            Available for opportunities
          </span>
        </div>

        {/* Main heading */}
        <div className="mt-20">
          <p className="hero-fade mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#b85c38]">
            Hello, I'm
          </p>

          <h1 className="hero-title max-w-[1100px] font-serif text-[clamp(4.5rem,13vw,12rem)] font-medium leading-[0.8] tracking-[-0.06em] text-[#171717]">
            PREM
            <br />
            <span className="ml-[8vw]">SHINDE</span>
          </h1>
        </div>

        {/* Bottom information */}
        <div className="hero-bottom mt-20 flex flex-col justify-between gap-10 border-t border-[#d6d2ca] pt-6 md:flex-row md:items-end">

          <p className="max-w-md text-base leading-7 text-[#77736c] md:text-lg">
            I build practical software solutions, backend systems and
            data-driven applications with Python, modern web technologies
            and AI/ML.
          </p>

          <div className="hero-scroll flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-[#171717]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#171717]">
              ↓
            </span>

            <span>Scroll to explore</span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero