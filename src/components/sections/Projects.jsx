import { projects } from "../../data/projects"
import ProjectCard from "../projects/ProjectCard"

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-t border-[#d6d2ca] px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Header */}
        <div className="projects-fade flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-[#77736c]">
          <span>Selected Work / 02</span>
          <span>2026</span>
        </div>

        {/* Intro */}
        <div className="mt-16 max-w-3xl">
          <h2 className="projects-title font-serif text-6xl font-medium leading-[0.9] tracking-[-0.05em] md:text-8xl">
            WORK I'M
            <br />
            <span className="text-[#b85c38]">PROUD OF.</span>
          </h2>

          <p className="projects-description mt-8 max-w-xl text-lg leading-8 text-[#77736c]">
            A selection of projects I've built across software development,
            backend engineering and data analytics.
          </p>
        </div>

        {/* Projects */}
        <div className="projects-list mt-24">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects