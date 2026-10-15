import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import {
  NavPage,
  HomePage,
  AboutPage,
  ContactPage,
  EducationPage,
  ProjectsPage,
  SkillsPage,
  FooterPage,
} from "./all_file";
export default function App() {
  const location = useLocation();

  useEffect(() => {
    // URL path ke according tab title map
    const pageTitles = {
      "/": "Najm - Home | Aspiring AI/ML & Web Developer",
      "/about": "Najm - About Me",
      "/skills": "Najm - Skills & Tech Stack",
      "/projects": "Najm - Featured Projects",
      "/education": "Najm - Education & Journey ",
      "/contact": "Najm - Get in Touch",
    };

    // Agar match na mile toh 404 / default title
    document.title =
      pageTitles[location.pathname] || "404 - Page Not Found | Najmuddin";
  }, [location]);
  return (
    <div className="bg-[#192b33] text-white min-h-screen selection:bg-blue-500 selection:text-white font-['Lato',sans-serif]">
      {/* Fixed Glass Navbar */}
      <NavPage />

      {/* Main Single Page Sections */}
      <main className="flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/education" element={<EducationPage />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <FooterPage />
      <a
  href="https://wa.me/919525792916?text=Hi%20Najmuddin,%20I%20saw%20your%20portfolio!"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
  style={{
    boxShadow:
      "0 10px 20px rgba(37, 211, 102, 0.4), inset 0 2px 2px rgba(255,255,255,0.7), inset 0 -3px 4px rgba(0,0,0,0.25)",
  }}
  aria-label="Chat on WhatsApp"
>
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12.031 2C6.51 2 2.016 6.47 2.016 11.979c0 1.942.56 3.754 1.53 5.29L2 22l4.908-1.503c1.48.878 3.2 1.385 5.123 1.385 5.522 0 10.016-4.47 10.016-9.903C22.047 6.47 17.553 2 12.031 2zm0 18.067c-1.68 0-3.238-.47-4.57-1.3l-.328-.2-3.376 1.034 1.056-3.267-.215-.343a8.107 8.107 0 0 1-1.27-4.312c0-4.478 3.654-8.12 8.15-8.12 4.494 0 8.148 3.642 8.148 8.12 0 4.478-3.654 8.088-8.15 8.088zm4.498-6.07c-.247-.123-1.463-.72-1.69-.803-.227-.082-.392-.123-.557.123-.165.247-.64.803-.784.968-.144.165-.288.185-.535.062-.247-.124-1.043-.385-1.986-1.226-.734-.654-1.23-1.462-1.374-1.71-.144-.247-.015-.38.108-.503.111-.111.247-.288.371-.432.124-.144.165-.247.247-.412.082-.165.041-.309-.02-.432-.062-.124-.557-1.34-.763-1.836-.2-.484-.403-.418-.557-.426l-.474-.008c-.165 0-.432.062-.66.309-.227.247-.866.845-.866 2.062 0 1.217.887 2.392 1.01 2.557.124.165 1.745 2.665 4.227 3.738.59.255 1.05.408 1.41.522.593.189 1.133.162 1.56.098.476-.071 1.463-.598 1.669-1.175.206-.577.206-1.072.144-1.175-.062-.103-.227-.165-.474-.288z" />
  </svg>
</a>
    
    </div>
  );
}
