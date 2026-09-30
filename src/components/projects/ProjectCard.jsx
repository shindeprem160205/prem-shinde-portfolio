const isValidUrl = (url) => Boolean(url) && url !== "#"

const ProjectCard = ({ project }) => {
  const hasGithub = isValidUrl(project.github)
  const hasLive = isValidUrl(project.live)

  return (
    <article className="group border-t border-[#d6d2ca] py-10 md:py-14">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-1">
          <span className="font-mono text-xs text-[#77736c]">
            {project.number}
          </span>
        </div>

        <div className="md:col-span-6">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#b85c38]">
            {project.category}
          </p>

          <h3 className="mt-4 font-serif text-4xl font-medium leading-none tracking-[-0.03em] text-[#171717] transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">
            {project.title}
          </h3>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <p className="text-base leading-7 text-[#77736c]">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#77736c]"
              >
                {technology}
              </span>
            ))}
          </div>

          {(hasGithub || hasLive) && (
            <div className="mt-8 flex gap-6 font-mono text-xs uppercase tracking-[0.14em]">
              {hasGithub && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#b85c38]"
                >
                  GitHub ↗
                </a>
              )}

              {hasLive && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#77736c] transition-colors hover:text-[#b85c38]"
                >
                  Live ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 overflow-hidden border border-[#d6d2ca] bg-[#e7e3dc] p-4 md:mt-14 md:p-8">
        {project.image ? (
          <div className="overflow-hidden border border-[#d6d2ca] bg-white shadow-sm">
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.015]"
            />
          </div>
        ) : (
          <div className="flex aspect-[16/8] items-center justify-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#77736c]">
              Project Preview
            </span>
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
