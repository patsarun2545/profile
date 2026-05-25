import { useState, useEffect } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLang } from "../hooks/useLang";
import TypingText from "../shared/TypingText";
import AnimatedNumber from "../shared/AnimatedNumber";
import { PROJECTS } from "../data/data";

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

  const fadeUp = (delay) => ({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.7s ${delay}s, transform 0.7s ${delay}s`,
  });

  const px = isMobile ? "20px" : isTablet ? "32px" : "48px";

  return (
    <section
      id="about"
      style={{
        minHeight: isMobile ? "auto" : "100vh",
        display: "flex",
        alignItems: "center",
        padding: `80px ${px} ${isMobile ? "80px" : "100px"}`,
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(rgba(34,197,94,0.10) 1px, transparent 1px)",
          backgroundSize: isMobile ? "28px 28px" : "40px 40px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 15% 50%, black, transparent)",
        }}
      />
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-15%",
          width: isMobile ? 280 : 500,
          height: isMobile ? 280 : 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 780,
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Hello label */}
        <div
          style={{
            ...fadeUp(0.1),
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 18,
          }}
        >
          <div
            style={{
              width: 24,
              height: 1,
              background: "#22c55e",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: isMobile ? 10 : 12,
              color: "#22c55e",
              letterSpacing: "0.15em",
            }}
          >
            {t.hero.hello}
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            ...fadeUp(0.2),
            margin: 0,
            fontFamily: "'Syne', sans-serif",
            fontSize: isMobile
              ? "clamp(28px, 9vw, 44px)"
              : "clamp(44px, 7vw, 80px)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: "#fff",
            wordBreak: "break-word",
          }}
        >
          Patsarun
          <br />
          <span style={{ color: "#22c55e" }}>Kathinthong</span>
        </h1>

        {/* Typing effect */}
        <div
          style={{
            ...fadeUp(0.28),
            marginTop: 14,
            fontFamily: "'Fira Code', monospace",
            fontSize: isMobile ? 13 : 16,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.04em",
            minHeight: isMobile ? 24 : 30,
          }}
        >
          <span style={{ color: "rgba(34,197,94,0.45)" }}>$ </span>
          <TypingText
            key={t.hero.typingWords[0]}
            words={t.hero.typingWords}
            speed={70}
            pause={2000}
          />
        </div>

        {/* Badges */}
        <div
          style={{
            ...fadeUp(0.35),
            marginTop: 16,
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              padding: isMobile ? "6px 14px" : "8px 18px",
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.25)",
              fontFamily: "'Fira Code', monospace",
              fontSize: isMobile ? 11 : 13,
              color: "#22c55e",
              letterSpacing: "0.04em",
              borderRadius: 2,
            }}
          >
            {t.hero.badge}
          </div>
          {["PERN", "MERN"].map((s) => (
            <span
              key={s}
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: 10,
                color: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "3px 8px",
                borderRadius: 2,
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p
          style={{
            ...fadeUp(0.42),
            margin: "22px 0 0",
            maxWidth: 560,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: isMobile ? 14 : 16,
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {t.hero.bio}
        </p>

        {/* CTAs */}
        <div
          style={{
            ...fadeUp(0.5),
            display: "flex",
            gap: 12,
            marginTop: 32,
            flexWrap: "wrap",
          }}
        >
          <a
            href="#projects"
            style={{
              padding: isMobile ? "11px 22px" : "13px 28px",
              background: "#22c55e",
              color: "#1a1a1a",
              fontFamily: "'Fira Code', monospace",
              fontSize: isMobile ? 11 : 12,
              letterSpacing: "0.08em",
              textDecoration: "none",
              fontWeight: 700,
              transition: "all 0.2s",
              borderRadius: 2,
            }}
          >
            {t.hero.cta1}
          </a>
          <a
            href="#contact"
            style={{
              padding: isMobile ? "11px 22px" : "13px 28px",
              border: "1px solid rgba(34,197,94,0.3)",
              color: "#22c55e",
              fontFamily: "'Fira Code', monospace",
              fontSize: isMobile ? 11 : 12,
              letterSpacing: "0.08em",
              textDecoration: "none",
              borderRadius: 2,
              transition: "all 0.2s",
            }}
          >
            {t.hero.cta2}
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            ...fadeUp(0.65),
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            marginTop: isMobile ? 44 : 60,
            borderTop: "1px solid rgba(255,255,255,0.10)",
            paddingTop: 32,
            gap: isMobile ? 24 : 0,
          }}
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
              style={{
                flex: 1,
                textAlign: isMobile ? "center" : "left",
                paddingRight: i < 2 && !isMobile ? 28 : 0,
                paddingLeft: i > 0 && !isMobile ? 28 : 0,
                borderRight:
                  i < 2 && !isMobile
                    ? "1px solid rgba(255,255,255,0.10)"
                    : "none",
                borderBottom:
                  i < 2 && isMobile
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
                paddingBottom: i < 2 && isMobile ? 24 : 0,
              }}
            >
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: isMobile ? 22 : 30,
                  fontWeight: 800,
                  color: "#22c55e",
                }}
              >
                <AnimatedNumber value={s.val} />
                <br />
                <span>{s.suffix}</span>
              </div>
              <div
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: 9,
                  color: "rgba(255,255,255,0.5)",
                  marginTop: 4,
                  letterSpacing: "0.1em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
