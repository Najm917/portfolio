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
    </div>
  );
}
