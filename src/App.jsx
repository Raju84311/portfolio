import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import SoftwareProjects from "./sections/SoftwareProjects";
import CyberSecurityProjects from "./sections/CyberSecurityProjects";
import Contact from "./sections/Contact";

import "./styles/theme.css";

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Hero />} />

        {/* SKILLS */}
        <Route path="/skills" element={<Skills />} />

        {/* EDUCATION */}
        <Route path="/education" element={<Education />} />

        {/* SOFTWARE PROJECTS */}
        <Route path="/software" element={<SoftwareProjects />} />

        {/* CYBERSECURITY PROJECTS */}
        <Route path="/cyber" element={<CyberSecurityProjects />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}
