import { Routes, Route } from "react-router-dom";
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
