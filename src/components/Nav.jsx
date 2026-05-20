import { useState, useEffect } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLang } from "../hooks/useLang";
import { useTheme } from "../hooks/useTheme";
import Logo from "./Logo";
import styles from "../styles/layout.module.css";

export default function Nav({ active }) {
  const bp = useBreakpoint();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = bp === "xs" || bp === "sm";
  const { lang, toggle: toggleLang, t } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "skills", label: t.nav.skills },
    { id: "experience", label: t.nav.experience },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <>
      <nav
        className={`${styles.nav} ${isMobile ? styles.navMobile : ""} ${scrolled || menuOpen ? styles.navScrolled : ""}`}
      >
        {/* Logo */}
        <Logo />

        {/* Desktop links + toggle */}
        {!isMobile && (
          <div className={styles.desktopLinks}>
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`${styles.navLink} ${active === l.id ? styles.navLinkActive : ""}`}
              >
                {l.label}
              </a>
            ))}

            {/* Language toggle button */}
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              aria-pressed={lang === "th"}
              className={styles.langButton}
            >
              {lang === "en" ? "TH" : "EN"}
            </button>

            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              aria-pressed={theme === "light"}
              className={styles.langButton}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        )}

        {/* Mobile: lang toggle + theme toggle + hamburger */}
        {isMobile && (
          <div className={styles.mobileControls}>
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              aria-pressed={lang === "th"}
              className={`${styles.langButton} ${styles.langButtonMobile}`}
            >
              {lang === "en" ? "TH" : "EN"}
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              aria-pressed={theme === "light"}
              className={`${styles.langButton} ${styles.langButtonMobile}`}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className={styles.hamburger}
            >
              <span
                className={`${styles.hamburgerLine} ${styles.hamburgerLine1} ${menuOpen ? styles.hamburgerLine1Open : ""}`}
              />
              <span
                className={`${styles.hamburgerLine} ${styles.hamburgerLine2} ${menuOpen ? styles.hamburgerLine2Open : ""}`}
              />
              <span
                className={`${styles.hamburgerLine} ${styles.hamburgerLine3} ${menuOpen ? styles.hamburgerLine3Open : ""}`}
              />
            </button>
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      {isMobile && (
        <div
          className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setMenuOpen(false)}
              aria-current={active === l.id ? "page" : undefined}
              className={`${styles.mobileNavLink} ${active === l.id ? styles.mobileNavLinkActive : ""}`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
