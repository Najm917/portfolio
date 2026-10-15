


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
      <span
        className="text-teal-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 inline-block mb-3"
        style={{
          boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.2)",
        }}
      >
        Capabilities
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
        Skills & Tech Stack
      </h2>
      <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
        Technologies and tools I use to build scalable web applications and analyze data.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {skillGroups.map((group, idx) => (
          <div
            key={idx}
            className="bg-[#121c2d]/80 border border-white/10 backdrop-blur-md rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5"
            style={{
              boxShadow: "0 18px 36px rgba(0, 0, 0, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.15), inset 0 -3px 5px rgba(0, 0, 0, 0.35)",
            }}
          >
            <div className="flex items-center gap-3.5 mb-6">
              <span
                className="text-2xl p-3 bg-[#0b1320] rounded-2xl border border-white/15"
                style={{
                  boxShadow: "0 6px 12px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.2)",
                }}
              >
                {group.icon}
              </span>
              <h3 className="font-bold text-white text-xl">
                {group.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-4 py-2 rounded-xl bg-[#090e17]/90 border border-white/10 text-xs font-semibold text-gray-200 hover:text-teal-300 hover:border-teal-400/40 transition-all cursor-default"
                  style={{
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -2px 3px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}