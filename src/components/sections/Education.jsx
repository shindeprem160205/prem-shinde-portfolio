const Education = () => {
  return (
    <section
      id="education"
      className="border-t border-[#d6d2ca] px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Header */}
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-[#77736c]">
          <span>Education / 04</span>
          <span>Background</span>
        </div>

        {/* Main */}
        <div className="mt-16 grid gap-12 md:grid-cols-12">

          <div className="md:col-span-7">
            <h2 className="font-serif text-6xl font-medium leading-[0.9] tracking-[-0.05em] md:text-8xl">
              ALWAYS
              <br />
              <span className="text-[#b85c38]">LEARNING.</span>
            </h2>
          </div>

          <div className="md:col-span-4 md:col-start-9 md:pt-3">
            <p className="text-lg leading-8 text-[#77736c]">
              My academic background in Computer Engineering gave me
              a strong foundation in software development, databases,
              data structures and machine learning.
            </p>
          </div>

        </div>

        {/* Education item */}
        <div className="mt-24 border-t border-[#d6d2ca]">

          <div className="grid gap-8 py-10 md:grid-cols-12 md:py-14">

            <div className="md:col-span-2">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#77736c]">
                2022 — 2026
              </span>
            </div>

            <div className="md:col-span-7">
              <h3 className="font-serif text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
                Bachelor of Engineering
              </h3>

              <p className="mt-3 text-lg text-[#77736c]">
                Computer Engineering
              </p>

              <p className="mt-6 max-w-xl leading-7 text-[#77736c]">
                Shivajirao S. Jhondale College of Engineering &
                Technology
              </p>
            </div>

            <div className="md:col-span-3 md:text-right">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#77736c]">
                Mumbai University
              </p>
            </div>

          </div>

        </div>

        {/* Relevant areas */}
        <div className="border-t border-[#d6d2ca] pt-8">

          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#77736c]">
            Relevant Areas
          </p>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {[
              "Data Structures",
              "Database Management",
              "Machine Learning",
              "Big Data Analytics",
              "Software Engineering",
            ].map((item) => (
              <span
                key={item}
                className="text-lg text-[#171717]"
              >
                {item}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Education