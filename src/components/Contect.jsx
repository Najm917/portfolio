import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SocialLinks from "./SocialLink";

export default function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // .env file se keys read ho rahi hain
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setLoading(false);
        setSubmitted(true);
      },
      (err) => {
        setLoading(false);
        setError("Something went wrong plesse try again");
        console.error(err);
      },
    );
  };

  return (
    <section
      id="contact"
      className="w-full max-w-2xl mx-auto px-6 py-20 text-center z-10"
    >
      <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">
        Get in Touch
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 mb-3 tracking-tight">
        Contact Me
      </h2>
      <p className="text-xs sm:text-sm text-blue-600 mb-8 font-normal max-w-md mx-auto">
        Have a project idea, freelance opportunity, or just want to say hello?
        Send me a message below!
      </p>

      <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-xl">
        {submitted ? (
          <div className="p-8 bg-teal-500/10 border border-teal-400/30 rounded-2xl text-teal-300 text-sm">
            <p className="font-bold text-base mb-1">
              Thank you for reaching out!
            </p>
            <p className="text-gray-300 text-xs">
              I'll get back to you shortly!{" "}
              <span className=" text-[20px] text-blue-400">
                feel free to connect with me on the platforms below.
              </span>
            </p>
          </div>
        ) : (
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 text-left"
          >
            {error && (
              <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
                {error}
              </p>
            )}

            <div>
              <label className="block text-xs font-semibold uppercase text-gray-300 mb-1 tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Aapka Naam"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-gray-300 mb-1 tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-gray-300 mb-1 tracking-wider">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Apna message yahan likhein..."
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent resize-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-3 py-3.5 px-8 bg-gradient-to-r from-teal-400 to-blue-500 text-[#0b1320] rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-95 hover:shadow-lg hover:shadow-teal-500/25 active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Sending Message..." : "Send Message"}
            </button>
          </form>
        )}
        {/* Social Links */}
        <SocialLinks />
      </div>
    </section>
  );
}
