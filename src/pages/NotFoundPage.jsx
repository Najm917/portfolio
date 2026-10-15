// src/pages/NotFoundPage.jsx
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="w-full min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-20 z-10">
      <div
        className="bg-[#121c2d]/85 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-12 max-w-lg"
        style={{
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.45), inset 0 2px 2px rgba(255, 255, 255, 0.15), inset 0 -3px 5px rgba(0, 0, 0, 0.4)",
        }}
      >
        <span
          className="text-teal-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 inline-block"
          style={{
            boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.2)",
          }}
        >
          Error 404
        </span>

        <h1 className="text-7xl sm:text-8xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text mt-3 mb-2 drop-shadow-md">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Page Not Found
        </h2>

        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-8">
          Aap jis page ko dhoondh rahe hain wo exist nahi karta ya move ho chuka hai.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 text-[#0b1320] rounded-2xl text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            boxShadow: "0 10px 20px rgba(45, 212, 191, 0.35), inset 0 2px 2px rgba(255, 255, 255, 0.7), inset 0 -2px 3px rgba(0, 0, 0, 0.25)",
          }}
        >
          <span>←</span> Back to Home
        </Link>
      </div>
    </section>
  );
}