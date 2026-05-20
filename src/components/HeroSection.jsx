import { useState, useEffect } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLang } from "../hooks/useLang";
import TypingText from "../shared/TypingText";
import AnimatedNumber from "../shared/AnimatedNumber";
import { PROJECTS } from "../data/data";
import styles from "../styles/sections.module.css";

export default function HeroSection() {
  const [show, setShow] = useState(false);
  const bp = useBreakpoint();
  const isMobile = bp === "xs" || bp === "sm";
  const isTablet = bp === "md";
  const { t } = useLang();
  const uniqueStacks = new Set(PROJECTS.map((p) => p.stack)).size;
  const internshipCount = t.data.experience.length;

  useEffect(() => {
    setTimeout(() => setShow(true), 80);
  }, []);

  return (
    <section
      id="about"
      className={`${styles.heroSection} ${isMobile ? styles.heroSectionMobile : ""} ${isTablet ? styles.heroSectionTablet : ""}`}
    >
      {/* Background grid */}
      <div
        className={`${styles.heroBackgroundGrid} ${isMobile ? styles.heroBackgroundGridMobile : ""}`}
      />
      {/* Glow */}
      <div
        className={`${styles.heroGlow} ${isMobile ? styles.heroGlowMobile : ""}`}
      />

      <div className={styles.heroContent}>
        {/* Hello label */}
        <div
          className={`${styles.heroHelloLabel} ${show ? styles.heroHelloLabelVisible : ""}`}
        >
          <div className={styles.heroHelloLine} />
          <span
            className={`${styles.heroHelloText} ${isMobile ? styles.heroHelloTextMobile : ""}`}
          >
            {t.hero.hello}
          </span>
        </div>

        {/* Name */}
        <h1
          className={`${styles.heroName} ${isMobile ? styles.heroNameMobile : ""} ${show ? styles.heroNameVisible : ""}`}
        >
          Patsarun
          <br />
          <span className={styles.heroNameHighlight}>Kathinthong</span>
        </h1>

        {/* Typing effect */}
        <div
          className={`${styles.heroTypingContainer} ${isMobile ? styles.heroTypingContainerMobile : ""} ${show ? styles.heroTypingContainerVisible : ""}`}
        >
          <span className={styles.heroPromptSymbol}>$ </span>
          <TypingText
            key={t.hero.typingWords[0]}
            words={t.hero.typingWords}
            speed={70}
            pause={2000}
          />
        </div>

        {/* Badges */}
        <div
          className={`${styles.heroBadges} ${show ? styles.heroBadgesVisible : ""}`}
        >
          <div
            className={`${styles.heroMainBadge} ${isMobile ? styles.heroMainBadgeMobile : ""}`}
          >
            {t.hero.badge}
          </div>
          {["PERN", "MERN"].map((s) => (
            <span key={s} className={styles.heroStackBadge}>
              {s}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p
          className={`${styles.heroBio} ${isMobile ? styles.heroBioMobile : ""} ${show ? styles.heroBioVisible : ""}`}
        >
          {t.hero.bio}
        </p>

        {/* CTAs */}
        <div
          className={`${styles.heroCtas} ${show ? styles.heroCtasVisible : ""}`}
        >
          <a
            href="#projects"
            className={`${styles.heroPrimaryButton} ${isMobile ? styles.heroPrimaryButtonMobile : ""}`}
          >
            {t.hero.cta1}
          </a>
          <a
            href="#contact"
            className={`${styles.heroSecondaryButton} ${isMobile ? styles.heroSecondaryButtonMobile : ""}`}
          >
            {t.hero.cta2}
          </a>
        </div>

        {/* Stats */}
        <div
          className={`${styles.heroStats} ${isMobile ? styles.heroStatsMobile : ""} ${show ? styles.heroStatsVisible : ""}`}
        >
          {[
            {
              val: PROJECTS.length,
              suffix: t.hero.stats[0].suffix,
              label: t.hero.stats[0].label,
            },
            {
              val: uniqueStacks,
              suffix: t.hero.stats[1].suffix,
              label: t.hero.stats[1].label,
            },
            {
              val: internshipCount,
              suffix: t.hero.stats[2].suffix,
              label: t.hero.stats[2].label,
            },
          ].map((s, i) => (
            <div
              key={i}
              className={`${styles.heroStatItem} ${isMobile ? styles.heroStatItemMobile : ""} ${i === 2 ? styles.heroStatItemLast : ""} ${isMobile && i === 2 ? styles.heroStatItemLastMobile : ""}`}
            >
              <div
                className={`${styles.heroStatValue} ${isMobile ? styles.heroStatValueMobile : ""}`}
              >
                <AnimatedNumber value={s.val} />
                <br />
                <span>{s.suffix}</span>
              </div>
              <div className={styles.heroStatLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
