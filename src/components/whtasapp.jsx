// src/components/whtasapp.jsx
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  // Professional pre-filled message (bina prompt ke seedha WhatsApp khulega)
  const defaultMessage = encodeURIComponent(
    "Hello Najmuddin, I explored your portfolio and would like to discuss an opportunity / project with you.",
  );

  return (
    <a
      href={`https://wa.me/919525792916?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      style={{
        boxShadow:
          "0 10px 20px rgba(37, 211, 102, 0.4), inset 0 2px 2px rgba(255,255,255,0.7), inset 0 -3px 4px rgba(0,0,0,0.25)",
      }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-2xl text-white" />
    </a>
  );
}
