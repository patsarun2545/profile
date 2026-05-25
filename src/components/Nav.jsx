import { useState, useEffect } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLang } from "../hooks/useLang";

export default function Nav({ active }) {
  const bp = useBreakpoint();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = bp === "xs" || bp === "sm";
  const { lang, toggle, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "about",      label: t.nav.about },
    { id: "projects",   label: t.nav.projects },
    { id: "skills",     label: t.nav.skills },
    { id: "experience", label: t.nav.experience },
    { id: "contact",    label: t.nav.contact },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: isMobile ? "0 20px" : "0 48px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backdropFilter: scrolled || menuOpen ? "blur(24px)" : "none",
          background: scrolled || menuOpen ? "rgba(26,26,26,0.95)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(34,197,94,0.08)" : "1px solid transparent",
          transition: "all 0.3s",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: 14,
            color: "#22c55e",
            letterSpacing: "0.05em",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span style={{ opacity: 0.5 }}>{"<"}</span>PS
          <span style={{ opacity: 0.5 }}>{"/>"}</span>
        </div>

        {/* Desktop links + toggle */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                style={{
                  padding: "7px 14px",
                  fontFamily: "'Fira Code', monospace",
                  fontSize: 11,
                  color: active === l.id ? "#22c55e" : "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  background: active === l.id ? "rgba(34,197,94,0.08)" : "transparent",
                  borderRadius: 4,
                  transition: "all 0.2s",
                  letterSpacing: "0.03em",
                }}
              >
                {l.label}
              </a>
            ))}

            {/* Language toggle button */}
            <button
              onClick={toggle}
              style={{
                marginLeft: 10,
                padding: "5px 12px",
                fontFamily: "'Fira Code', monospace",
                fontSize: 11,
                color: "#22c55e",
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.30)",
                borderRadius: 4,
                cursor: "pointer",
                letterSpacing: "0.08em",
                fontWeight: 700,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(34,197,94,0.18)";
                e.currentTarget.style.borderColor = "rgba(34,197,94,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(34,197,94,0.08)";
                e.currentTarget.style.borderColor = "rgba(34,197,94,0.30)";
              }}
            >
              {lang === "en" ? "TH" : "EN"}
            </button>
          </div>
        )}

        {/* Mobile: lang toggle + hamburger */}
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              onClick={toggle}
              style={{
                padding: "4px 10px",
                fontFamily: "'Fira Code', monospace",
                fontSize: 10,
                color: "#22c55e",
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.30)",
                borderRadius: 4,
                cursor: "pointer",
                letterSpacing: "0.05em",
                fontWeight: 700,
              }}
            >
              {lang === "en" ? "TH" : "EN"}
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 8,
                display: "flex",
                flexDirection: "column",
                gap: 5,
                alignItems: "flex-end",
              }}
            >
              <span style={{ display: "block", height: 2, borderRadius: 2, background: "#22c55e", width: 22, transition: "all 0.25s", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
              <span style={{ display: "block", height: 2, borderRadius: 2, background: "#22c55e", width: 16, transition: "all 0.25s", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: "block", height: 2, borderRadius: 2, background: "#22c55e", width: menuOpen ? 22 : 12, transition: "all 0.25s", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
            </button>
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 60,
            left: 0,
            right: 0,
            zIndex: 199,
            background: "rgba(26,26,26,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(34,197,94,0.1)",
            maxHeight: menuOpen ? 320 : 0,
            overflow: "hidden",
            transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "16px 24px",
                fontFamily: "'Fira Code', monospace",
                fontSize: 13,
                color: active === l.id ? "#22c55e" : "rgba(255,255,255,0.7)",
                textDecoration: "none",
                borderLeft: `3px solid ${active === l.id ? "#22c55e" : "transparent"}`,
                background: active === l.id ? "rgba(34,197,94,0.05)" : "transparent",
                transition: "all 0.2s",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}