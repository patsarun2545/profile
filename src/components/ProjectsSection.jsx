import { useBreakpoint } from "../hooks/useBreakpoint";
import Reveal from "../shared/Reveal";
import SectionLabel from "../shared/SectionLabel";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/data";

export default function ProjectsSection() {
  const bp = useBreakpoint();
  const isMobile = bp === "xs" || bp === "sm";
  const px = isMobile ? "20px" : bp === "md" ? "32px" : "48px";

  return (
    <section id="projects" style={{ padding: `${isMobile ? 80 : 120}px ${px}` }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel number="02" title="Projects" isMobile={isMobile} />
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: isMobile ? 36 : 52 }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.12}>
              <ProjectCard project={p} isMobile={isMobile} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p style={{ marginTop: 14, fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(255,255,255,0.35)", textAlign: "right" }}>
            // tap card to expand · click image to zoom
          </p>
        </Reveal>
      </div>
    </section>
  );
}