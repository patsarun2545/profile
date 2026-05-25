import { useState } from "react";
import { useLang } from "../hooks/useLang";
import Lightbox from "./Lightbox";

export default function ProjectCard({ project, isMobile }) {
  const [open, setOpen] = useState(true);
  const [lightbox, setLightbox] = useState(null);
  const hasImages = project.screens && project.screens.length > 0;
  const { t } = useLang();

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        style={{
          border: `1px solid ${open ? project.color + "50" : "rgba(255,255,255,0.10)"}`,
          background: open
            ? `rgba(${project.colorRgb},0.04)`
            : "rgba(255,255,255,0.02)",
          padding: isMobile ? "22px 18px" : "36px 40px",
          cursor: "pointer",
          transition: "all 0.35s",
          position: "relative",
          overflow: "hidden",
          borderRadius: 4,
        }}
      >
        {/* Top color bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: open ? "100%" : 60,
            height: 2,
            background: project.color,
            transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)",
          }}
        />

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
              <span
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: 10,
                  color: project.color,
                  background: project.color + "15",
                  padding: "3px 10px",
                  borderRadius: 2,
                  letterSpacing: "0.08em",
                  flexShrink: 0,
                }}
              >
                {project.stack}
              </span>
              <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(255,255,255,0.4)" }}>
                {project.period}
              </span>
            </div>
            <h3 style={{ margin: 0, fontFamily: "'Syne', sans-serif", fontSize: isMobile ? 17 : 22, fontWeight: 700, color: "#fff" }}>
              {project.title}
            </h3>
            <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(255,255,255,0.5)", marginTop: 3 }}>
              {project.subtitle}
            </div>
          </div>
          <div
            style={{
              width: 28,
              height: 28,
              border: `1px solid ${project.color}40`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: project.color,
              fontSize: 14,
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
              flexShrink: 0,
            }}
          >
            +
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: isMobile ? 9 : 10,
                color: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "3px 8px",
                borderRadius: 2,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Demo + repo links */}
        {(project.url || project.repo) && (
          <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
            {project.url &&
              (Array.isArray(project.url) ? project.url : [project.url]).map((href, i) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 14px",
                    background: project.color + "15",
                    border: `1px solid ${project.color}40`,
                    color: project.color,
                    fontFamily: "'Fira Code', monospace",
                    fontSize: 10,
                    letterSpacing: "0.08em",
                    textDecoration: "none",
                    borderRadius: 2,
                    transition: "all 0.2s",
                  }}
                >
                  ↗{" "}
                  {Array.isArray(project.url)
                    ? i === 0
                      ? t.projects.userDemo
                      : t.projects.adminDemo
                    : t.projects.liveDemo}
                </a>
              ))}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 14px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "'Fira Code', monospace",
                  fontSize: 10,
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  borderRadius: 2,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                }}
              >
                ⌥ {t.projects.viewCode}
              </a>
            )}
          </div>
        )}

        {/* Expandable content */}
        <div style={{ maxHeight: open ? 2000 : 0, overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)" }}>
          {/* Screenshots */}
          {hasImages && (
            <div style={{ display: "flex", gap: 10, overflowX: "auto", marginTop: 20, paddingBottom: 10 }}>
              {project.screens.map((img, i) => (
                <div
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox(i);
                  }}
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    cursor: "zoom-in",
                    borderRadius: 4,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(34,197,94,0.4)";
                    e.currentTarget.querySelector(".zoom-hint").style.opacity = 1;
                    e.currentTarget.querySelector(".zoom-overlay").style.background = "rgba(34,197,94,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.querySelector(".zoom-hint").style.opacity = 0;
                    e.currentTarget.querySelector(".zoom-overlay").style.background = "transparent";
                  }}
                >
                  <img src={img} alt="screenshot" style={{ width: isMobile ? 200 : 260, display: "block" }} />
                  <div
                    className="zoom-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "transparent",
                      transition: "background 0.2s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      className="zoom-hint"
                      style={{
                        fontFamily: "'Fira Code', monospace",
                        fontSize: 10,
                        color: "#22c55e",
                        opacity: 0,
                        transition: "opacity 0.2s",
                        background: "rgba(0,0,0,0.7)",
                        padding: "4px 10px",
                        borderRadius: 2,
                      }}
                    >
                      {t.lightbox.zoom}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bullets */}
          <div
            style={{
              marginTop: 22,
              paddingTop: 18,
              borderTop: "1px solid rgba(255,255,255,0.10)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {project.bullets.map((b, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: project.color,
                    flexShrink: 0,
                    marginTop: 8,
                  }}
                />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? 13 : 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.65 }}>
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightbox !== null && hasImages && (
        <Lightbox images={project.screens} initialIndex={lightbox} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}