

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SocialLinks from "./SocialLink";

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Aapka WhatsApp & Contact Number
  const PHONE_NUMBER = "919525792916";
  const DISPLAY_PHONE = "+91 9525792916";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

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
        setError("Something went wrong, please try again.");
        console.error(err);
      }
    );
  };

  // WhatsApp par pre-filled message bhejne ke liye function
  const sendToWhatsApp = () => {
    const defaultText = `Hi Najmuddin, my name is ${formData.name || "a visitor"}. ${
      formData.message ? formData.message : "I would like to connect regarding a project opportunity."
    }`;
    const encodedText = encodeURIComponent(defaultText);
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="w-full max-w-3xl mx-auto px-6 py-20 text-center z-10"
    >
      <span className="text-teal-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-teal-400/10 border border-teal-400/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
        Get in Touch
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 mb-3 tracking-tight">
        Let's Connect
      </h2>
      <p className="text-xs sm:text-sm text-gray-300 mb-8 font-normal max-w-md mx-auto">
        Have a project idea, freelance opportunity, or question? Send me an email or reach out instantly via WhatsApp or Call!
      </p>

      {/* Main Claymorphic Card Container */}
      <div
        className="bg-[#131d2e]/90 border border-white/10 backdrop-blur-xl p-6 sm:p-10 rounded-3xl"
        style={{
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.15), inset 0 -3px 6px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* Instant WhatsApp Quick Connect Banner */}
        <div
          className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#25D366]/15 to-emerald-500/10 border border-[#25D366]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-left"
          style={{
            boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 8px 16px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shrink-0"
              style={{
                boxShadow: "0 8px 16px rgba(37, 211, 102, 0.35), inset 0 2px 3px rgba(255, 255, 255, 0.6), inset 0 -3px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 2C6.51 2 2.016 6.47 2.016 11.979c0 1.942.56 3.754 1.53 5.29L2 22l4.908-1.503c1.48.878 3.2 1.385 5.123 1.385 5.522 0 10.016-4.47 10.016-9.903C22.047 6.47 17.553 2 12.031 2zm0 18.067c-1.68 0-3.238-.47-4.57-1.3l-.328-.2-3.376 1.034 1.056-3.267-.215-.343a8.107 8.107 0 0 1-1.27-4.312c0-4.478 3.654-8.12 8.15-8.12 4.494 0 8.148 3.642 8.148 8.12 0 4.478-3.654 8.088-8.15 8.088zm4.498-6.07c-.247-.123-1.463-.72-1.69-.803-.227-.082-.392-.123-.557.123-.165.247-.64.803-.784.968-.144.165-.288.185-.535.062-.247-.124-1.043-.385-1.986-1.226-.734-.654-1.23-1.462-1.374-1.71-.144-.247-.015-.38.108-.503.111-.111.247-.288.371-.432.124-.144.165-.247.247-.412.082-.165.041-.309-.02-.432-.062-.124-.557-1.34-.763-1.836-.2-.484-.403-.418-.557-.426l-.474-.008c-.165 0-.432.062-.66.309-.227.247-.866.845-.866 2.062 0 1.217.887 2.392 1.01 2.557.124.165 1.745 2.665 4.227 3.738.59.255 1.05.408 1.41.522.593.189 1.133.162 1.56.098.476-.071 1.463-.598 1.669-1.175.206-.577.206-1.072.144-1.175-.062-.103-.227-.165-.474-.288z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Chat or Call Directly</h4>
              <p className="text-xs text-teal-300 font-medium">{DISPLAY_PHONE}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white/20 active:scale-95 text-center"
              style={{
                boxShadow: "0 6px 14px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
              }}
            >
              📞 Call
            </a>

            <button
              type="button"
              onClick={sendToWhatsApp}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#25D366] text-[#0b1320] text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
              style={{
                boxShadow: "0 8px 18px rgba(37, 211, 102, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.6), inset 0 -2px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <span>WhatsApp</span>
              <span>↗</span>
            </button>
          </div>
        </div>

        {/* Email Form */}
        {submitted ? (
          <div
            className="p-8 rounded-2xl bg-teal-500/10 border border-teal-400/30 text-teal-300 text-sm"
            style={{
              boxShadow: "inset 0 2px 4px rgba(255, 255, 255, 0.15), 0 8px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <p className="font-bold text-lg mb-1">Thank you for reaching out!</p>
            <p className="text-gray-300 text-xs">
              Your message was sent successfully. I'll get back to you shortly!
            </p>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 text-left">
            {error && (
              <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-xl">
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
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Najm Uddin"
                className="w-full px-4 py-3 rounded-2xl bg-[#090e17]/80 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-400/50 transition-all"
                style={{
                  boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.05)",
                }}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-gray-300 mb-1 tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-2xl bg-[#090e17]/80 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-400/50 transition-all"
                style={{
                  boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.05)",
                }}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-gray-300 mb-1 tracking-wider">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Type your message here..."
                className="w-full px-4 py-3 rounded-2xl bg-[#090e17]/80 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-400/50 resize-none transition-all"
                style={{
                  boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.05)",
                }}
              />
            </div>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-teal-400 to-blue-500 text-[#0b1320] text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.01] active:scale-95 disabled:opacity-50 cursor-pointer"
                style={{
                  boxShadow: "0 10px 20px rgba(45, 212, 191, 0.3), inset 0 2px 2px rgba(255, 255, 255, 0.7), inset 0 -3px 4px rgba(0, 0, 0, 0.3)",
                }}
              >
                {loading ? "Sending..." : "Send via Email ✉️"}
              </button>

              <button
                type="button"
                onClick={sendToWhatsApp}
                className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#25D366]/30 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                style={{
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.2), inset 0 -2px 3px rgba(0, 0, 0, 0.3)",
                }}
              >
                Send via WhatsApp
              </button>
            </div>
          </form>
        )}

        <SocialLinks />
      </div>
    </section>
  );
}