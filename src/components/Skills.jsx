export default function Skills() {
  const skillGroups = [
    {
      category: "Frontend Development",
      icon: "💻",
      skills: [
        "JavaScript (ES6+)",
        "React.js",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "Git & GitHub",
      ],
    },
    {
      category: "Programming & Data",
      icon: "🐍",
      skills: ["Python", "NumPy", "Pandas", "REST APIs", "Data Structures"],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full max-w-6xl mx-auto px-6 py-20 text-center z-10"
    >
      <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">
        Capabilities
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4 tracking-tight">
        Skills & Tech Stack
      </h2>
      <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
        Technologies and tools I use to build scalable web applications and
        analyze data.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {skillGroups.map((group, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-7 hover:border-teal-400/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl p-2.5 bg-white/5 rounded-xl border border-white/10">
                  {group.icon}
                </span>
                <h3 className="font-bold text-white text-lg">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5 mt-4">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-1.5 rounded-lg bg-black/30 border border-white/10 text-xs font-medium text-gray-200 hover:text-teal-300 hover:border-teal-400/40 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
