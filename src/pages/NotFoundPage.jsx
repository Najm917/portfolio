// src/pages/NotFoundPage.jsx
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20 z-10">
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 max-w-lg shadow-2xl">
        <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">
          Error 404
        </span>
        <h1 className="text-6xl sm:text-7xl font-extrabold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text mt-2 mb-4">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Page Not Found
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-8">
          Aap jis page ko dhoondh rahe hain wo exist nahi karta ya move ho chuka
          hai.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 text-[#0b1320] rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-95 hover:shadow-lg hover:shadow-teal-500/25 active:scale-95 transition-all"
        >
          <span>←</span> Back to Home
        </Link>
      </div>
    </section>
  );
}
