import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLang } from "../hooks/useLang";
import Reveal from "../shared/Reveal";
import SectionLabel from "../shared/SectionLabel";
import { SKILLS } from "../data/data";

export default function SkillsSection() {
  const bp = useBreakpoint();
  const isMobile = bp === "xs" || bp === "sm";
  const px = isMobile ? "20px" : bp === "md" ? "32px" : "48px";
  const { t } = useLang();

  return (
    <section
      id="skills"
      style={{
        padding: `${isMobile ? 80 : 120}px ${px}`,
        background: "rgba(34,197,94,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel
            number="03"
            title={t.sections.skills}
            isMobile={isMobile}
          />
        </Reveal>
        <div
          style={{
            marginTop: isMobile ? 32 : 52,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {SKILLS.map((cat, catIdx) => (
            <Reveal key={cat.key} delay={0.08 + catIdx * 0.1}>
              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 4,
                  overflow: "hidden",
                  background: "#1a1a1a",
                }}
              >
                <div
                  style={{
                    padding: isMobile ? "10px 14px" : "12px 20px",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(34,197,94,0.04)",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#22c55e",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Fira Code', monospace",
                      fontSize: isMobile ? 10 : 11,
                      color: "#22c55e",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {t.skillCategories[cat.key]}
                  </span>
                </div>
                <div
                  style={{
                    padding: isMobile ? "14px" : "18px 20px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  {cat.items.map((skill, i) => (
                    <div
                      key={skill}
                      style={{
                        padding: isMobile ? "7px 11px" : "8px 14px",
                        border: "1px solid rgba(34,197,94,0.2)",
                        background: "rgba(34,197,94,0.04)",
                        fontFamily: "'Fira Code', monospace",
                        fontSize: isMobile ? 11 : 12,
                        color: "#fff",
                        letterSpacing: "0.03em",
                        borderRadius: 2,
                        animation: `fadeSlideIn 0.25s ease ${i * 0.04}s both`,
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
