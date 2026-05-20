import { useState, useEffect } from "react";
import "./styles/index.css";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { LangProvider } from "./context/LangProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import styles from "./styles/layout.module.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = ["about", "projects", "skills", "experience", "contact"];

    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.4;
      let current = "about";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <ThemeProvider>
        <LangProvider>
          <a href="#main-content" className={styles.skipLink}>
            Skip to main content
          </a>
          <Nav active={activeSection} />
          <main id="main-content" className={styles.main}>
            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
            <ExperienceSection />
            <ContactSection />
          </main>
          <Footer />
        </LangProvider>
      </ThemeProvider>
    </>
  );
}
