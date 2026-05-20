import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLang } from "../hooks/useLang";
import Reveal from "../shared/Reveal";
import SectionLabel from "../shared/SectionLabel";
import { SKILLS } from "../data/data";
import styles from "../styles/sections.module.css";

export default function SkillsSection() {
  const bp = useBreakpoint();
  const isMobile = bp === "xs" || bp === "sm";
  const { t } = useLang();

  return (
    <section
      id="skills"
      className={`${styles.skillsSection} ${isMobile ? styles.skillsSectionMobile : ""}`}
    >
      <div className={styles.skillsContainer}>
        <Reveal>
          <SectionLabel
            number="03"
            title={t.sections.skills}
            isMobile={isMobile}
          />
        </Reveal>
        <div
          className={`${styles.skillsList} ${isMobile ? styles.skillsListMobile : ""}`}
        >
          {SKILLS.map((cat, catIdx) => (
            <Reveal key={cat.key} delay={0.08 + catIdx * 0.1}>
              <div className={styles.categoryCard}>
                <div
                  className={`${styles.categoryHeader} ${isMobile ? styles.categoryHeaderMobile : ""}`}
                >
                  <div className={styles.categoryDot} />
                  <span
                    className={`${styles.categoryTitle} ${isMobile ? styles.categoryTitleMobile : ""}`}
                  >
                    {t.skillCategories[cat.key]}
                  </span>
                </div>
                <div
                  className={`${styles.skillsInnerContainer} ${isMobile ? styles.skillsInnerContainerMobile : ""}`}
                >
                  {cat.items.map((skill, i) => (
                    <div
                      key={skill}
                      className={`${styles.skillBadge} ${isMobile ? styles.skillBadgeMobile : ""}`}
                      style={{ "--delay": `${i * 0.04}s` }}
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
