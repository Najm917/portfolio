// import { Link } from "react-router-dom";
// import SocialLinks from "./SocialLink";

// export default function Home({ onExplore }) {
//   return (
//     <section
//       id="home"
//       className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16 lg:py-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
//     >
//       {/* Background Glows */}
//       <div className="absolute -left-20 top-1/3 w-80 h-80 bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute right-0 bottom-10 w-80 h-80 bg-blue-500/15 rounded-full blur-[120px] pointer-events-none" />

//       {/* Hero Content */}
//       <div className="flex-1 text-center lg:text-left z-10">
//         <span className="inline-block py-1.5 px-4 rounded-full bg-teal-500/10 border border-teal-400/20 text-xs font-semibold tracking-wider text-teal-300 uppercase mb-5">
//           👋 Available for New Opportunities
//         </span>

//         <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight leading-tight">
//           Hi, I'm{" "}
//           <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
//             Najmuddin
//           </span>
//         </h1>

//         <p className="text-lg sm:text-xl font-medium text-teal-300/90 mb-4">
//           Frontend Developer & Problem Solver
//         </p>

//         <p className="text-sm sm:text-base text-gray-300 mb-8 font-normal max-w-xl leading-relaxed">
//           I build performant, interactive, and responsive web applications with
//           clean code and modern frontend architectures.
//         </p>

//         <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
//           <Link
//             to="/about"
//             onClick={onExplore}
//             className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 text-[#0b1320] rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-teal-400/30 hover:scale-105 active:scale-95 transition-all duration-300"
//           >
//             About Me
//           </Link>
//           <Link
//             to="/contact"
//             className="px-7 py-3.5 bg-white/5 border border-white/15 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#0b1320] transition-all duration-300"
//           >
//             Contact Me
//           </Link>
//         </div>
//         <div className="mt-8 flex justify-center lg:justify-start">
//           <SocialLinks />
//         </div>
//       </div>

//       {/* Visual Avatar / Tech Circle */}
//       <div className="flex-1 flex justify-center items-center relative z-10">
//         <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
//           <div className="absolute inset-0 bg-gradient-to-tr from-teal-400 to-blue-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-all duration-500" />

//           <div className="w-full h-full rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
//             <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 p-1 mb-4 shadow-lg">
//               <div className="w-full h-full rounded-full bg-[#0f172a] flex items-center justify-center text-4xl sm:text-5xl font-extrabold text-white">
//                 👨‍💻
//               </div>
//             </div>
//             <h3 className="text-xl font-bold text-white">Najmuddin</h3>
//             <p className="text-xs text-teal-300 mt-1">Frontend Engineer</p>
//             <div className="flex gap-2 mt-4">
//               {["React", "JavaScript", "Tailwind"].map((tech) => (
//                 <span
//                   key={tech}
//                   className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/10 text-gray-200 border border-white/10"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// ___________________________

// src/components/Home.jsx
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLink";

export default function Home() {
  return (
    <section
      id="home"
      className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16 lg:py-32 flex flex-col md:flex-row items-center justify-between gap-12"
    >
      {/* Background Glows */}
      <div className="absolute -left-20 top-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content (Left Side on Desktop) */}
      <div className="flex-1 text-center md:text-left z-10">
        <span className="inline-block py-1.5 px-4 rounded-full bg-teal-500/15 border border-teal-400/30 text-xs font-bold tracking-wider text-teal-300 uppercase mb-5 shadow-sm">
          👋 Available for Opportunities
        </span>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-blue-400 bg-clip-text text-transparent">
            Najmuddin
          </span>
        </h1>

        <p className="text-lg sm:text-xl font-semibold text-teal-300 mb-4 drop-shadow-sm">
          Aspiring AI/ML Engineer & Frontend Developer
        </p>

        <p className="text-sm sm:text-base text-gray-200 mb-8 font-normal max-w-xl leading-relaxed">
          I build responsive, high-performance web applications with React and
          Tailwind CSS, while actively integrating AI solutions and exploring
          machine learning.
        </p>

        {/* Action Buttons (Only About & Contact) */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
          <Link
            to="/about"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 text-[#0b1320] rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-teal-400/30 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3.5 bg-white/10 border border-white/20 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#0b1320] transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>

        <div className="mt-8 flex justify-center md:justify-start">
          <SocialLinks />
        </div>
      </div>

      {/* Visual Avatar / Profile Card (Right Side on Desktop) */}
      <div className="flex-1 flex justify-center items-center relative z-10 w-full">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-blue-600 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition-all duration-500" />

          <div className="w-full h-full rounded-3xl border border-white/20 bg-[#0f172a]/70 backdrop-blur-xl p-6 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 p-1 mb-4 shadow-lg">
              <div className="w-full h-full rounded-full bg-[#0b1320] flex items-center justify-center text-4xl sm:text-5xl">
                👨‍💻
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              Najmuddin
            </h3>

            <p className="text-xs sm:text-sm font-semibold text-teal-300 mt-1 mb-4">
              AI/ML & Frontend
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {["React", "Python", "Tailwind", "AI/ML"].map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white/10 text-white border border-white/15 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
