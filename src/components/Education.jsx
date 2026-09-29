// export default function Education() {
//   const educationList = [
//     {
//       degree: "Master of Computer Applications (MCA)",
//       institution: "Jain College of Engineering (JCE), Belagavi",
//       duration: "Pursuing",
//       desc: "Advanced coursework in software engineering, modern web architectures, algorithmic problem solving, and data structures.",
//     },
//     {
//       degree: "Bachelor of Computer Applications (BCA)",
//       institution: "R.D.S. College, Muzaffarpur (Bihar)",
//       duration: "Completed",
//       desc: "Built solid foundations in core computer science, object-oriented programming, database management (DBMS), and web development.",
//     },
//     {
//       degree: "Intermediate of Science (12th / PUC)",
//       institution: "L.N.M.U, Bihar",
//       duration: "Completed",
//       desc: "Higher secondary education in the Science stream with a focus on Mathematics, Physics, and analytical logic.",
//     },
//     {
//       degree: "Matriculation (10th / SSLC)",
//       institution: "BSEB, Bihar",
//       duration: "Completed",
//       desc: "Secondary school education with strong fundamentals in Mathematics, Science, and general academics.",
//     },
//     {
//       degree: "Middle School (Class 5th - 8th)",
//       institution: "Md. Jan High School, Kolkata",
//       duration: "Completed",
//       desc: "Completed upper primary schooling with foundational academics, language, and core subjects.",
//     },
//     {
//       degree: "Primary School (Class 1st - 4th)",
//       institution: "Primary School, Bihar",
//       duration: "Completed",
//       desc: "Early foundational schooling and elementary education.",
//     },
//   ];

//   return (
//     <section
//       id="education"
//       className="w-full max-w-4xl mx-auto px-6 py-20 text-center z-10"
//     >
//       <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">
//         Background
//       </span>
//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4 tracking-tight">
//         Academic Journey
//       </h2>
//       <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
//         Formal education driving continuous software development and problem
//         solving.
//       </p>

//       <div className="space-y-6 text-left">
//         {educationList.map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 hover:border-teal-400/30 transition-all duration-300 relative pl-8 before:absolute before:left-4 before:top-8 before:bottom-8 before:w-0.5 before:bg-teal-400/40"
//           >
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
//               <h3 className="font-bold text-white text-lg">{item.degree}</h3>
//               <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-teal-400/10 text-teal-300 border border-teal-400/20 w-fit">
//                 {item.duration}
//               </span>
//             </div>
//             <p className="text-xs sm:text-sm text-teal-300/80 mb-2 font-medium">
//               {item.institution}
//             </p>
//             <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
//               {item.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

export default function Education() {
  const educationList = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Jain College of Engineering (JCE), Belagavi",
      duration: "Pursuing",
      tag: "Post Graduation",
      desc: "Specializing in advanced software engineering paradigms, modern web architectures, data structures, and algorithmic logic.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "R.D.S. College, Muzaffarpur (Bihar)",
      duration: "Completed",
      tag: "Graduation",
      desc: "Built solid fundamentals in Object-Oriented Programming (OOP), Database Management Systems (DBMS), and web technologies.",
    },
    {
      degree: "Intermediate of Science (12th / PUC)",
      institution: "L.N.M.U, Bihar",
      duration: "Completed",
      tag: "Higher Secondary",
      desc: "Focused on Mathematics, Physics, and analytical reasoning, developing strong quantitative and problem-solving skills.",
    },
    {
      degree: "Matriculation (10th / SSLC)",
      institution: "BSEB, Bihar",
      duration: "Completed",
      tag: "Secondary School",
      desc: "Completed secondary education with rigorous foundational coursework in Mathematics and Science.",
    },
    {
      degree: "Middle School (Class 5th – 8th)",
      institution: "Md. Jan High School, Kolkata",
      duration: "Completed",
      tag: "Foundational",
      desc: "Completed upper-primary education with a focus on languages, social sciences, and basic mathematics.",
    },
    {
      degree: "Primary School (Class 1st – 4th)",
      institution: "Primary School, Bihar",
      duration: "Completed",
      tag: "Early Education",
      desc: "Early foundational schooling focusing on basic literacy, numeracy, and essential learning habits.",
    },
  ];

  return (
    <section
      id="education"
      className="w-full max-w-5xl mx-auto px-6 py-20 text-center z-10"
    >
      {/* Section Header */}
      <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">
        Academic Journey
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4 tracking-tight">
        Education & Qualifications
      </h2>
      <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-14 font-normal">
        A structured overview of my academic background and foundational
        learning.
      </p>

      {/* Professional Timeline Layout */}
      <div className="relative border-l border-white/15 ml-4 sm:ml-32 md:ml-40 space-y-8 text-left">
        {educationList.map((item, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-8 group">
            {/* Timeline Node Point */}
            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-[#0b1320] border-2 border-teal-400 group-hover:scale-125 group-hover:bg-teal-400 transition-all duration-300 shadow-md shadow-teal-500/50" />

            {/* Left Year Badge (Desktop) */}
            <div className="hidden sm:block absolute -left-36 top-5 w-28 text-right">
              <span className="text-xs font-semibold text-teal-300/80 uppercase tracking-wider">
                {item.duration}
              </span>
            </div>

            {/* Content Glass Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 hover:bg-white/[0.08] hover:border-teal-400/30 transition-all duration-300 shadow-lg group-hover:-translate-y-1">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                  {item.degree}
                </h3>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-teal-400/10 text-teal-300 border border-teal-400/20">
                  {item.tag}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs sm:text-sm font-medium text-gray-300">
                  📍 {item.institution}
                </span>
                <span className="sm:hidden text-[11px] text-teal-400/80 font-semibold ml-auto">
                  ({item.duration})
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
