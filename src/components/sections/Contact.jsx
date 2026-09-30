const Contact = () => {
  return (
    <section
      id="contact"
      className="border-t border-[#d6d2ca] px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-350">

        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-[#77736c]">
          <span>Contact / 05</span>
          <span>Let's connect</span>
        </div>

        <div className="mt-20">
          <h2 className="max-w-5xl font-serif text-7xl font-medium leading-[0.82] tracking-[-0.06em] md:text-[10rem]">
            LET'S
            <br />
            <span className="ml-[10vw] text-[#b85c38]">TALK.</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-10 border-t border-[#d6d2ca] pt-8 md:grid-cols-12">

          <div className="md:col-span-5">
            <p className="max-w-md text-lg leading-8 text-[#77736c]">
              Have an opportunity, project or just want to connect?
              Feel free to reach out.
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <a
              href="mailto:your-email@example.com"
              className="group flex items-center justify-between border-b border-[#171717] pb-4 text-lg"
            >
              <span>Email me</span>
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                ↗
              </span>
            </a>

            <a
              href="https://github.com/shindeprem160205"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 flex items-center justify-between border-b border-[#d6d2ca] pb-4 text-lg"
            >
              <span>GitHub</span>
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                ↗
              </span>
            </a>

            <a
  href="https://www.linkedin.com/in/prem-shinde-407170245"
  target="_blank"
  rel="noopener noreferrer"
  className="group mt-6 flex items-center justify-between border-b border-[#d6d2ca] pb-4 text-lg"
>
  <span>LinkedIn</span>
  <span className="transition-transform duration-300 group-hover:translate-x-2">
    ↗
  </span>
</a>    
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact