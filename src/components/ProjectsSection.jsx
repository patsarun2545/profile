import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLang } from "../hooks/useLang";
import Reveal from "../shared/Reveal";
import SectionLabel from "../shared/SectionLabel";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/data";
import styles from "../styles/sections.module.css";

export default function ProjectsSection() {
  const bp = useBreakpoint();
  const isMobile = bp === "xs" || bp === "sm";
  const { t } = useLang();

  const projects = PROJECTS.map((p) => {
    const tr = (t.data.projects ?? []).find((tp) => tp.id === p.id);
    return {
      ...p,
      period: tr?.period ?? "",
      subtitle: tr?.subtitle ?? "",
      bullets: tr?.bullets ?? [],
    };
  });

  return (
    <section
      id="projects"
      className={`${styles.projectsSection} ${isMobile ? styles.projectsSectionMobile : ""}`}
    >
      <div className={styles.projectsContainer}>
        <Reveal>
          <SectionLabel
            number="02"
            title={t.sections.projects}
            isMobile={isMobile}
          />
        </Reveal>
        <div
          className={`${styles.projectsList} ${isMobile ? styles.projectsListMobile : ""}`}
        >
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.12}>
              <ProjectCard project={p} isMobile={isMobile} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className={styles.projectsHint}>{t.projects.hint}</p>
        </Reveal>
      </div>
    </section>
  );
}
