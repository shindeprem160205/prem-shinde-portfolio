const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: ["Python", "SQL", "JavaScript", "HTML", "CSS"],
    },
    {
      category: "Backend",
      items: ["Django", "Django REST Framework", "REST APIs"],
    },
    {
      category: "Data & AI",
      items: ["Pandas", "NumPy", "Scikit-learn", "Power BI"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "MySQL", "VS Code"],
    },
  ]

  return (
    <section
      id="skills"
      className="border-t border-[#d6d2ca] px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Header */}
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-[#77736c]">
          <span>Tools & Skills / 03</span>
          <span>What I use</span>
        </div>

        {/* Heading */}
        <div className="mt-16 grid gap-10 md:grid-cols-12">

          <div className="md:col-span-7">
            <h2 className="font-serif text-6xl font-medium leading-[0.9] tracking-[-0.05em] md:text-8xl">
              TOOLS I
              <br />
              <span className="text-[#b85c38]">WORK WITH.</span>
            </h2>
          </div>

          <div className="md:col-span-4 md:col-start-9 md:pt-3">
            <p className="text-lg leading-8 text-[#77736c]">
              Technologies I use to build software, backend systems,
              APIs and data-driven applications.
            </p>
          </div>

        </div>

        {/* Skills */}
        <div className="mt-24 border-t border-[#d6d2ca]">
          {skills.map((group) => (
            <div
              key={group.category}
              className="grid border-b border-[#d6d2ca] py-8 md:grid-cols-12 md:py-10"
            >
              {/* Category */}
              <div className="md:col-span-3">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#77736c]">
                  {group.category}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 md:col-span-9">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xl font-medium tracking-tight text-[#171717] transition-colors duration-300 hover:text-[#b85c38] md:text-2xl"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills