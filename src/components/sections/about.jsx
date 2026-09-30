const About = () => {
  return (
    <section
      id="about"
      className="border-t border-[#d6d2ca] px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Section label */}
        <div className="about-fade flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-[#77736c]">
          <span>About / 01</span>
          <span>Who I am</span>
        </div>

        {/* Main statement */}
        <div className="mt-20 grid gap-16 md:grid-cols-12 md:gap-10">

          <div className="md:col-span-8">
            <h2 className="about-title font-serif text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-[#171717] md:text-7xl lg:text-8xl">
              I BUILD SOFTWARE
              <br />
              <span className="text-[#b85c38]">THAT SOLVES</span>
              <br />
              REAL PROBLEMS.
            </h2>
          </div>

          {/* Small intro */}
          <div className="about-text md:col-span-4 md:pt-3">
            <p className="text-lg leading-8 text-[#77736c]">
              I'm a Computer Engineering graduate focused on software
              development, backend engineering, data analytics and AI/ML.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#77736c]">
              I enjoy turning real-world problems into practical,
              scalable and user-friendly applications.
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="about-details mt-24 grid border-t border-[#d6d2ca] pt-8 md:grid-cols-3">

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#77736c]">
              Focus
            </p>

            <p className="mt-4 text-lg">
              Software Engineering
            </p>
          </div>

          <div className="mt-10 md:mt-0">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#77736c]">
              Based
            </p>

            <p className="mt-4 text-lg">
              India
            </p>
          </div>

          <div className="mt-10 md:mt-0">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#77736c]">
              Interests
            </p>

            <p className="mt-4 text-lg">
              Backend · Data · AI/ML
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About