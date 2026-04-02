import { useBreakpoint } from "../hooks/useBreakpoint";
import Reveal from "../shared/Reveal";
import SectionLabel from "../shared/SectionLabel";
import { EXPERIENCE, EDUCATION } from "../data/data";

export default function ExperienceSection() {
  const bp = useBreakpoint();
  const isMobile = bp === "xs" || bp === "sm";
  const px = isMobile ? "20px" : bp === "md" ? "32px" : "48px";

  return (
    <section id="experience" style={{ padding: `${isMobile ? 80 : 120}px ${px}` }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel number="04" title="Experience" isMobile={isMobile} />
        </Reveal>
        <div style={{ marginTop: isMobile ? 32 : 52, display: "flex", flexDirection: "column", gap: 28 }}>

          {/* Work Experience */}
          <div>
            <Reveal delay={0.05}>
              <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", marginBottom: 12 }}>
                WORK EXPERIENCE
              </div>
            </Reveal>
            {EXPERIENCE.map((exp, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <div
                  style={{
                    border: "1px solid rgba(255,255,255,0.10)",
                    padding: isMobile ? "18px 16px 18px 20px" : "28px 36px",
                    borderRadius: 4,
                    background: "rgba(255,255,255,0.05)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: "#22c55e" }} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: isMobile ? "column" : "row",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: isMobile ? 8 : 0,
                      marginBottom: 16,
                    }}
                  >
                    <div>
                      <h3 style={{ margin: 0, fontFamily: "'Syne', sans-serif", fontSize: isMobile ? 16 : 20, fontWeight: 700, color: "#fff" }}>
                        {exp.role}
                      </h3>
                      <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, color: "#22c55e", marginTop: 3 }}>
                        {exp.company}
                      </div>
                    </div>
                    <div
                      style={{
                        fontFamily: "'Fira Code', monospace",
                        fontSize: 10,
                        color: "rgba(255,255,255,0.5)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        padding: "5px 10px",
                        borderRadius: 2,
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {exp.period}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                    {exp.bullets.map((b, j) => (
                      <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "#22c55e", fontSize: 10, marginTop: 5, flexShrink: 0 }}>▸</span>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? 13 : 14, color: "rgba(255,255,255,0.72)", lineHeight: 1.6 }}>
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Education */}
          <div>
            <Reveal delay={0.05}>
              <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", marginBottom: 12 }}>
                EDUCATION
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.10)",
                  padding: isMobile ? "18px 16px 18px 20px" : "24px 36px",
                  borderRadius: 4,
                  background: "rgba(255,255,255,0.05)",
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  justifyContent: "space-between",
                  alignItems: isMobile ? "flex-start" : "center",
                  gap: isMobile ? 10 : 0,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: "#22c55e" }} />
                <div>
                  <h3 style={{ margin: 0, fontFamily: "'Syne', sans-serif", fontSize: isMobile ? 16 : 20, fontWeight: 700, color: "#fff" }}>
                    {EDUCATION.degree}
                  </h3>
                  <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, color: "#86efac", marginTop: 3 }}>
                    {EDUCATION.university}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.5)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    padding: "5px 10px",
                    borderRadius: 2,
                    flexShrink: 0,
                  }}
                >
                  {EDUCATION.period}
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}