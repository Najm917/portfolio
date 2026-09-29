// src/components/Footer.jsx
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLink";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="w-full bg-[#0b1320]/80 border-t border-white/10 backdrop-blur-lg pt-16 pb-8 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Brief */}
          <div className="md:col-span-2 space-y-4">
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-tight flex items-center gap-1 w-fit"
            >
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Najmuddin
              </span>
              <span className="text-teal-400">.dev</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Frontend Developer passionate about building high-performance,
              accessible, and modern web applications with clean code.
            </p>
            <div className="flex items-center gap-2 text-xs text-teal-300/90 font-medium">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Available for full-time roles & freelance projects
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-teal-300 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Get in Touch */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">
              Get In Touch
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Have an opportunity or project in mind? Let's connect.
            </p>
            <Link
              to="/contact"
              className="inline-block px-5 py-2.5 rounded-xl bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs font-semibold hover:bg-teal-400 hover:text-[#0b1320] transition-all duration-300 shadow-sm"
            >
              Send a Message ✉️
            </Link>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} Najmuddin. Built with React & Tailwind CSS.
          </p>

          <div className="scale-90 sm:scale-100 -mt-6 sm:mt-0">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
