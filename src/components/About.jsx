// import React from "react";

// export default function About() {
//   const highlights = [
//     {
//       icon: "⚡",
//       title: "Responsive & Modern UI",
//       desc: "Creating fast, fluid layouts that adapt seamlessly from mobile devices to large desktop screens.",
//     },
//     {
//       icon: "🛠️",
//       title: "Clean & Maintainable Code",
//       desc: "Writing modular, scalable components adhering to best practices and modern JavaScript standards.",
//     },
//     {
//       icon: "🎯",
//       title: "Performance & UX Focused",
//       desc: "Optimizing bundle sizes, rendering cycles, and visual transitions for exceptional user experiences.",
//     },
//   ];

//   return (
//     <section
//       id="about"
//       className="w-full max-w-6xl mx-auto px-6 py-20 text-center z-10"
//     >
//       <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">
//         Overview
//       </span>
//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4 tracking-tight">
//         About Me
//       </h2>
//       <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
//         I am a passionate frontend developer dedicated to turning ideas and UI
//         designs into high-performance, accessible, and elegant web solutions.
//       </p>

//       {/* Feature Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {highlights.map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-7 hover:bg-white/10 hover:border-teal-400/30 transition-all duration-300 group text-left flex flex-col justify-start"
//           >
//             <span className="text-3xl mb-4 p-3 bg-white/5 rounded-xl w-fit transform group-hover:scale-110 transition-transform">
//               {item.icon}
//             </span>
//             <h3 className="font-bold text-white text-lg mb-2 group-hover:text-teal-300 transition-colors">
//               {item.title}
//             </h3>
//             <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed">
//               {item.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// ___________________________

// src/components/About.jsx
export default function About() {
  const highlights = [
    {
      icon: "⚡",
      title: "Modern UI & Performance",
      desc: "Creating responsive, fast-loading interfaces that look clean and function seamlessly across all screen sizes.",
    },
    {
      icon: "🛠️",
      title: "Clean & Scalable Code",
      desc: "Writing modular components adhering to best practices, component reusability, and modern JavaScript standards.",
    },
    {
      icon: "🎯",
      title: "Problem Solver & Learner",
      desc: "Constantly expanding into modern architectures, integrating AI tools, and exploring backend APIs.",
    },
  ];

  return (
    <section
      id="about"
      className="w-full max-w-6xl mx-auto px-6 py-20 text-center z-10"
    >
      <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">
        Overview
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4 tracking-tight">
        About Me
      </h2>

      {/* Structured Bio */}
      <div className="max-w-3xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed mb-12 space-y-4">
        <p>
          I am an aspiring{" "}
          <strong className="text-white font-semibold">AI/ML Engineer</strong>{" "}
          and postgraduate student, actively working on machine learning while
          building practical expertise in modern web development.
        </p>
        <p className="text-gray-400 text-xs sm:text-sm">
          I focus on bridging the gap between intelligent models and clean user
          experiences—crafting responsive interfaces with React and Tailwind
          CSS, while integrating AI APIs and algorithmic logic to solve
          real-world problems.
        </p>
      </div>

      {/* Feature / Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-7 hover:bg-white/10 hover:border-teal-400/30 transition-all duration-300 group text-left flex flex-col justify-start"
          >
            <span className="text-3xl mb-4 p-3 bg-white/5 rounded-xl w-fit transform group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            <h3 className="font-bold text-white text-lg mb-2 group-hover:text-teal-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
