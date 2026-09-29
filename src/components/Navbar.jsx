import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isSticky
            ? "bg-[#0b1320]/80 backdrop-blur-lg py-3.5 shadow-lg border-b border-white/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="w-[90%] max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-white flex items-center gap-1"
          >
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Najmuddin
            </span>
            <span className="text-teal-400">.dev</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-8 font-medium">
            {navLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm transition-colors ${
                      isActive
                        ? "text-teal-400 font-semibold"
                        : "text-gray-300 hover:text-teal-400"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0b1320] bg-teal-400 rounded-full hover:bg-teal-300 transition-all shadow-md active:scale-95"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
            className="md:hidden text-2xl text-gray-300 hover:text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 md:hidden"
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-[270px] bg-[#0f172a] border-l border-white/10 z-50 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
            <span className="font-bold text-white tracking-wider">
              Najmuddin<span className="text-teal-400">.dev</span>
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>

          <ul className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-lg transition-colors text-sm ${
                      isActive
                        ? "text-teal-400 bg-white/5 font-semibold"
                        : "text-gray-300 hover:text-teal-400 hover:bg-white/5"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <Link
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="w-full text-center py-3 bg-teal-400 text-[#0b1320] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-teal-300 transition-colors"
        >
          Get In Touch
        </Link>
      </aside>
    </>
  );
}
