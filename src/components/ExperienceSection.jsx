import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLang } from "../hooks/useLang";
import Reveal from "../shared/Reveal";
import SectionLabel from "../shared/SectionLabel";
import styles from "../styles/sections.module.css";

export default function ExperienceSection() {
  const bp = useBreakpoint();
  const isMobile = bp === "xs" || bp === "sm";
  const { t } = useLang();

  const EXPERIENCE = t.data.experience;
  const EDUCATION = t.data.education;

  return (
    <section
      id="experience"
      className={`${styles.experienceSection} ${isMobile ? styles.experienceSectionMobile : ""}`}
    >
      <div className={styles.experienceContainer}>
        <Reveal>
          <SectionLabel
            number="04"
            title={t.sections.experience}
            isMobile={isMobile}
          />
        </Reveal>
        <div
          className={`${styles.experienceContent} ${isMobile ? styles.experienceContentMobile : ""}`}
        >
          {/* Work Experience */}
          <div>
            <Reveal delay={0.05}>
              <div className={styles.experienceSectionLabel}>
                {t.experience.workLabel}
              </div>
            </Reveal>
            {EXPERIENCE.map((exp, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <div
                  className={`${styles.entryCard} ${isMobile ? styles.entryCardMobile : ""}`}
                >
                  <div className={styles.greenBorder} />
                  <div
                    className={`${styles.entryHeader} ${isMobile ? styles.entryHeaderMobile : ""}`}
                  >
                    <div>
                      <h3
                        className={`${styles.roleTitle} ${isMobile ? styles.roleTitleMobile : ""}`}
                      >
                        {exp.role}
                      </h3>
                      <div className={styles.companyName}>{exp.company}</div>
                    </div>
                    <div className={styles.periodBadge}>{exp.period}</div>
                  </div>
                  <div className={styles.bulletsList}>
                    {exp.bullets.map((b, j) => (
                      <div key={j} className={styles.bulletItem}>
                        <span className={styles.bulletArrow}>▸</span>
                        <span
                          className={`${styles.bulletText} ${isMobile ? styles.bulletTextMobile : ""}`}
                        >
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
              <div className={styles.experienceSectionLabel}>
                {t.experience.educationLabel}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div
                className={`${styles.entryCardEducation} ${isMobile ? styles.entryCardEducationMobile : ""}`}
              >
                <div className={styles.greenBorder} />
                <div>
                  <h3
                    className={`${styles.roleTitle} ${isMobile ? styles.roleTitleMobile : ""}`}
                  >
                    {EDUCATION.degree}
                  </h3>
                  <div className={styles.universityName}>
                    {EDUCATION.university}
                  </div>
                </div>
                <div className={styles.periodBadge}>{EDUCATION.period}</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
