// src/components/Projects.jsx
export default function Projects() {
  const project = {
    title: "AI Business Growth Platform",
    desc: "An AI-powered digital growth platform designed to help businesses analyze operational pain points, optimize workflow efficiency, and scale effectively using intelligent solutions.",
    tags: ["React.js", "Vite", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com/Najm917/ai-business-growth-platform",
  };

  return (
    <section
      id="projects"
      className="w-full max-w-4xl mx-auto px-6 py-20 text-center z-10"
    >
      <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">
        Portfolio
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4 tracking-tight">
        Featured Project
      </h2>
      <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
        Practical web application and AI-driven solutions built using modern
        tools and architectures.
      </p>

      {/* Single Featured Project Card */}
      <div className="max-w-2xl mx-auto text-left">
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-7 sm:p-8 hover:bg-white/[0.08] hover:border-teal-400/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-2xl p-2.5 bg-white/5 border border-white/10 rounded-xl">
                🚀
              </span>

              {/* GitHub Repository Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-teal-400/10 border border-teal-400/30 text-teal-300 hover:bg-teal-400 hover:text-[#0b1320] transition-all duration-300 shadow-sm"
              >
                <span>View Code</span>
                <span>↗</span>
              </a>
            </div>

            <h3 className="font-bold text-white text-xl sm:text-2xl mb-3 group-hover:text-teal-300 transition-colors">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-normal">
              {project.desc}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-[11px] font-medium px-3 py-1 rounded-md bg-black/30 text-teal-300/90 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
