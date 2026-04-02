import { useState, useEffect } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";

export default function Nav({ active }) {
  const bp = useBreakpoint();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = bp === "xs" || bp === "sm";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
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

        {!isMobile && (
          <div style={{ display: "flex", gap: 2 }}>
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
          </div>
        )}

        {isMobile && (
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
        )}
      </nav>

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