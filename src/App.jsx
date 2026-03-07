import { useState, useEffect, useRef } from "react";

import img1 from "./assets/dress_rental/image1.png";
import img2 from "./assets/dress_rental/image2.png";
import img3 from "./assets/dress_rental/image3.png";
import img4 from "./assets/dress_rental/image4.png";
import img5 from "./assets/dress_rental/image5.png";
import img6 from "./assets/dress_rental/image6.png";
import img7 from "./assets/dress_rental/image7.png";
import img8 from "./assets/dress_rental/image8.png";
import img9 from "./assets/dress_rental/image9.png";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const PROFILE = {
  name: "Patsarun Kathinthong",
  title: "Full Stack Developer",
  email: "patsarun2545@gmail.com",
  phone: "061-651-6187",
  github: "github.com/patsarun2545",
  location: "Huai Khwang, Bangkok",
  bio: "Full Stack Developer specializing in PERN/MERN Stack. Experienced in secure RESTful APIs, JWT authentication, RBAC authorization, and relational database design. Passionate about building scalable systems and improving software quality.",
};

const SKILLS = {
  Languages: [
    "JavaScript (ES6+)",
    "TypeScript",
    "SQL",
    "Python",
    "HTML5",
    "CSS3",
  ],
  "Frameworks & Libs": [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Nest.js",
    "Tailwind CSS",
    "Bootstrap",
  ],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM"],
  "Tools & Platforms": ["Git", "GitHub", "Postman", "Ubuntu Linux", "PM2"],
};

const PROJECTS = [
  {
    id: 1,
    title: "Online Dress Rental System",
    subtitle: "Graduation Project",
    period: "Dec 2024 – Feb 2025",
    stack: "PERN Stack",
    color: "#22c55e",
    screens: [img1, img2, img3, img4, img5, img6, img7, img8, img9],
    tags: ["PostgreSQL", "Express.js", "React.js", "Node.js", "JWT", "RBAC"],
    bullets: [
      "Developed full-stack dress rental management system using PERN stack",
      "Designed optimized PostgreSQL schema supporting booking workflows",
      "Built RESTful APIs for users, products, and reservation management",
      "Implemented JWT authentication with role-based authorization middleware",
      "Prevented double-booking through validation and conflict-checking logic",
    ],
  },
  {
    id: 2,
    title: "Mobile Shop System",
    subtitle: "Web Application",
    period: "Jul 2024 – Oct 2024",
    stack: "MERN Stack",
    color: "#86efac",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "JWT",
      "PM2",
      "Ubuntu",
    ],
    bullets: [
      "Built responsive store management web app using Next.js and Tailwind CSS",
      "Designed MongoDB schema optimized for product and order management",
      "Developed RESTful APIs for product, order, and authentication workflows",
      "Implemented JWT-based middleware authorization for secure API access",
      "Deployed and maintained the system on Ubuntu Linux using PM2",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "IT Support Intern",
    company: "NAGA METAL SHEET CO.",
    period: "Mar 2024 – Jun 2024",
    bullets: [
      "Installed and configured engineering/design software for internal workflows",
      "Created structured documentation and user guides for operational efficiency",
      "Managed internal communication tools and visual materials for staff coordination",
      "Provided technical troubleshooting and daily IT support for employees",
    ],
  },
];

const EDUCATION = {
  degree: "Business Computer",
  university: "Mahasarakham University",
  period: "Jun 2021 – May 2025",
};

// ─── BREAKPOINT HOOK ──────────────────────────────────────────────────────────
function useBreakpoint() {
  const [bp, setBp] = useState("lg");
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setBp("xs");
      else if (w < 640) setBp("sm");
      else if (w < 900) setBp("md");
      else setBp("lg");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return bp;
}

// ─── ANIMATED NUMBER ──────────────────────────────────────────────────────────
function AnimatedNumber({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let n = 0;
        const step = () => {
          n += value / 35;
          if (n < value) {
            setCount(Math.floor(n));
            requestAnimationFrame(step);
          } else setCount(value);
        };
        requestAnimationFrame(step);
        obs.disconnect();
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav({ active }) {
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
          background:
            scrolled || menuOpen ? "rgba(26,26,26,0.95)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(34,197,94,0.08)"
            : "1px solid transparent",
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
                  background:
                    active === l.id ? "rgba(34,197,94,0.08)" : "transparent",
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
            <span
              style={{
                display: "block",
                height: 2,
                borderRadius: 2,
                background: "#22c55e",
                width: 22,
                transition: "all 0.25s",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                height: 2,
                borderRadius: 2,
                background: "#22c55e",
                width: 16,
                transition: "all 0.25s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                height: 2,
                borderRadius: 2,
                background: "#22c55e",
                width: menuOpen ? 22 : 12,
                transition: "all 0.25s",
                transform: menuOpen
                  ? "translateY(-7px) rotate(-45deg)"
                  : "none",
              }}
            />
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
                background:
                  active === l.id ? "rgba(34,197,94,0.05)" : "transparent",
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

// ─── SECTION LABEL ────────────────────────────────────────────────────────────
function SectionLabel({ number, title, isMobile }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: 11,
          color: "rgba(34,197,94,0.5)",
          letterSpacing: "0.2em",
          marginBottom: 10,
        }}
      >
        {`// 0${number}.`}
      </div>
      <h2
        style={{
          margin: 0,
          fontFamily: "'Syne', sans-serif",
          fontSize: isMobile ? 30 : 44,
          fontWeight: 800,
          color: "#fff",
          lineHeight: 1,
          display: "flex",
          alignItems: "baseline",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        {title}
        <span
          style={{
            width: 48,
            height: 2,
            background: "#22c55e",
            display: "inline-block",
            marginBottom: 5,
          }}
        />
      </h2>
    </div>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  const [show, setShow] = useState(false);
  const bp = useBreakpoint();
  const isMobile = bp === "xs" || bp === "sm";
  const isTablet = bp === "md";

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
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: `80px ${px} ${isMobile ? "60px" : "0"}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
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
            HELLO, I'M
          </span>
        </div>

        <h1
          style={{
            ...fadeUp(0.2),
            margin: 0,
            fontFamily: "'Syne', sans-serif",
            fontSize: isMobile
              ? "clamp(36px, 11vw, 52px)"
              : "clamp(44px, 7vw, 80px)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: "#fff",
          }}
        >
          Patsarun
          <br />
          <span style={{ color: "#22c55e" }}>Kathinthong</span>
        </h1>

        <div
          style={{
            ...fadeUp(0.3),
            marginTop: 18,
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
            Full Stack Developer
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

        <p
          style={{
            ...fadeUp(0.4),
            margin: "22px 0 0",
            maxWidth: 560,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: isMobile ? 14 : 16,
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {PROFILE.bio}
        </p>

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
            View Projects →
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
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
            Get in Touch
          </a>
        </div>

        <div
          style={{
            ...fadeUp(0.65),
            display: "flex",
            marginTop: isMobile ? 44 : 60,
            borderTop: "1px solid rgba(255,255,255,0.10)",
            paddingTop: 32,
            gap: 0,
          }}
        >
          {[
            { val: 2, suffix: " Projects", label: "Completed" },
            { val: 4, suffix: " Stacks", label: "Tech Mastered" },
            { val: 1, suffix: " Internship", label: "Experience" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                textAlign: isMobile ? "center" : "left",
                paddingRight: i < 2 ? (isMobile ? 0 : 28) : 0,
                paddingLeft: i > 0 ? (isMobile ? 0 : 28) : 0,
                borderRight:
                  i < 2 && !isMobile
                    ? "1px solid rgba(255,255,255,0.10)"
                    : "none",
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
                <AnimatedNumber value={s.val} suffix={s.suffix} />
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

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
function ProjectCard({ project, isMobile }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        border: `1px solid ${open ? project.color + "50" : "rgba(255,255,255,0.10)"}`,
        background: open
          ? `rgba(${project.color === "#22c55e" ? "34,197,94" : "34,211,238"},0.04)`
          : "rgba(255,255,255,0.02)",
        padding: isMobile ? "22px 18px" : "36px 40px",
        cursor: "pointer",
        transition: "all 0.35s",
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
      }}
    >
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 12,
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 10,
              flexWrap: "wrap",
            }}
          >
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
            <span
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: 10,
                color: "rgba(255,255,255,0.4)",
              }}
            >
              {project.period}
            </span>
          </div>
          <h3
            style={{
              margin: 0,
              fontFamily: "'Syne', sans-serif",
              fontSize: isMobile ? 17 : 22,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            {project.title}
          </h3>
          <div
            style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: 10,
              color: "rgba(255,255,255,0.5)",
              marginTop: 3,
            }}
          >
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

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
        {project.tags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: isMobile ? 9 : 10,
              color: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "3px 8px",
              borderRadius: 2,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div
        style={{
          maxHeight: open ? 600 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {project.screens && (
          <div
            style={{
              display: "flex",
              gap: 10,
              overflowX: "auto",
              marginTop: 20,
              paddingBottom: 10,
            }}
          >
            {project.screens.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="screenshot"
                style={{
                  width: isMobile ? 200 : 260,
                  borderRadius: 4,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
            ))}
          </div>
        )}
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
            <div
              key={i}
              style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
            >
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
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: isMobile ? 13 : 14,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.65,
                }}
              >
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const bp = useBreakpoint();
  const isMobile = bp === "xs" || bp === "sm";
  const px = isMobile ? "20px" : bp === "md" ? "32px" : "48px";
  return (
    <section
      id="projects"
      style={{ padding: `${isMobile ? 80 : 120}px ${px}` }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionLabel number="02" title="Projects" isMobile={isMobile} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            marginTop: isMobile ? 36 : 52,
          }}
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} isMobile={isMobile} />
          ))}
        </div>
        <p
          style={{
            marginTop: 14,
            fontFamily: "'Fira Code', monospace",
            fontSize: 10,
            color: "rgba(255,255,255,0.35)",
            textAlign: "right",
          }}
        >
          // tap card to expand details
        </p>
      </div>
    </section>
  );
}

// ─── SKILLS ───────────────────────────────────────────────────────────────────
function SkillsSection() {
  const [active, setActive] = useState("Languages");
  const bp = useBreakpoint();
  const isMobile = bp === "xs" || bp === "sm";
  const px = isMobile ? "20px" : bp === "md" ? "32px" : "48px";
  const cats = Object.keys(SKILLS);

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
        <SectionLabel number="03" title="Skills" isMobile={isMobile} />
        <div style={{ marginTop: isMobile ? 32 : 52 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 18,
            }}
          >
            {cats.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: isMobile ? "7px 12px" : "9px 16px",
                  background:
                    active === cat
                      ? "rgba(34,197,94,0.12)"
                      : "rgba(255,255,255,0.05)",
                  border: `1px solid ${active === cat ? "#22c55e" : "rgba(255,255,255,0.12)"}`,
                  borderRadius: 4,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  fontFamily: "'Fira Code', monospace",
                  fontSize: isMobile ? 10 : 11,
                  color: active === cat ? "#22c55e" : "rgba(255,255,255,0.65)",
                  letterSpacing: "0.04em",
                  whiteSpace: "nowrap",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 4,
              padding: isMobile ? "18px 14px" : "24px 28px",
              background: "#1a1a1a",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {SKILLS[active].map((skill, i) => (
                <div
                  key={`${active}-${skill}`}
                  style={{
                    padding: isMobile ? "7px 11px" : "10px 16px",
                    border: "1px solid rgba(34,197,94,0.2)",
                    background: "rgba(34,197,94,0.04)",
                    fontFamily: "'Fira Code', monospace",
                    fontSize: isMobile ? 11 : 12,
                    color: "#fff",
                    letterSpacing: "0.03em",
                    transition: "all 0.2s",
                    borderRadius: 2,
                    animation: `fadeSlideIn 0.25s ease ${i * 0.04}s both`,
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
function ExperienceSection() {
  const bp = useBreakpoint();
  const isMobile = bp === "xs" || bp === "sm";
  const px = isMobile ? "20px" : bp === "md" ? "32px" : "48px";

  return (
    <section
      id="experience"
      style={{ padding: `${isMobile ? 80 : 120}px ${px}` }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionLabel number="04" title="Experience" isMobile={isMobile} />
        <div
          style={{
            marginTop: isMobile ? 32 : 52,
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: 9,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.15em",
                marginBottom: 12,
              }}
            >
              WORK EXPERIENCE
            </div>
            {EXPERIENCE.map((exp, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid rgba(255,255,255,0.10)",
                  padding: isMobile ? "18px 16px 18px 20px" : "28px 36px",
                  borderRadius: 4,
                  background: "rgba(255,255,255,0.05)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 3,
                    height: "100%",
                    background: "#22c55e",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: "space-between",
                    alignItems: isMobile ? "flex-start" : "flex-start",
                    gap: isMobile ? 8 : 0,
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontFamily: "'Syne', sans-serif",
                        fontSize: isMobile ? 16 : 20,
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      style={{
                        fontFamily: "'Fira Code', monospace",
                        fontSize: 11,
                        color: "#22c55e",
                        marginTop: 3,
                      }}
                    >
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
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 9 }}
                >
                  {exp.bullets.map((b, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        gap: 10,
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          color: "#22c55e",
                          fontSize: 10,
                          marginTop: 5,
                          flexShrink: 0,
                        }}
                      >
                        ▸
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: isMobile ? 13 : 14,
                          color: "rgba(255,255,255,0.72)",
                          lineHeight: 1.6,
                        }}
                      >
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <div
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: 9,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.15em",
                marginBottom: 12,
              }}
            >
              EDUCATION
            </div>
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
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 3,
                  height: "100%",
                  background: "#22c55e",
                }}
              />
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Syne', sans-serif",
                    fontSize: isMobile ? 16 : 20,
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {EDUCATION.degree}
                </h3>
                <div
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: 11,
                    color: "#86efac",
                    marginTop: 3,
                  }}
                >
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
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function ContactSection() {
  const [copied, setCopied] = useState(null);
  const bp = useBreakpoint();
  const isMobile = bp === "xs" || bp === "sm";
  const px = isMobile ? "20px" : bp === "md" ? "32px" : "48px";

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const contacts = [
    {
      key: "email",
      icon: "✉",
      label: "Email",
      value: PROFILE.email,
      copyable: true,
    },
    {
      key: "phone",
      icon: "✆",
      label: "Phone",
      value: PROFILE.phone,
      copyable: true,
    },
    {
      key: "github",
      icon: "⌥",
      label: "GitHub",
      value: PROFILE.github,
      copyable: false,
    },
    {
      key: "location",
      icon: "◎",
      label: "Location",
      value: PROFILE.location,
      copyable: false,
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: `${isMobile ? 80 : 120}px ${px} ${isMobile ? 60 : 100}px`,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionLabel number="05" title="Contact" isMobile={isMobile} />
        <div style={{ marginTop: isMobile ? 32 : 52 }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: isMobile ? 14 : 16,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "0 0 28px",
            }}
          >
            Currently looking for new opportunities — whether it's a full-time
            role, freelance project, or just a chat about tech. My inbox is
            always open.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 10,
            }}
          >
            {contacts.map((c) => (
              <div
                key={c.key}
                onClick={() => c.copyable && copy(c.value, c.key)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: isMobile ? "14px 16px" : "18px 22px",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 4,
                  cursor: c.copyable ? "pointer" : "default",
                  transition: "all 0.2s",
                  background:
                    copied === c.key
                      ? "rgba(34,197,94,0.08)"
                      : "rgba(255,255,255,0.02)",
                }}
              >
                <span
                  style={{
                    fontSize: 15,
                    color: "#22c55e",
                    fontFamily: "'Fira Code', monospace",
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: "'Fira Code', monospace",
                      fontSize: 8,
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: "0.15em",
                      marginBottom: 2,
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: isMobile ? 12 : 13,
                      color: "rgba(255,255,255,0.7)",
                      wordBreak: "break-all",
                    }}
                  >
                    {copied === c.key ? "✓ Copied!" : c.value}
                  </div>
                </div>
                {c.copyable && (
                  <span
                    style={{
                      fontFamily: "'Fira Code', monospace",
                      fontSize: 8,
                      color: "rgba(255,255,255,0.35)",
                      flexShrink: 0,
                    }}
                  >
                    copy
                  </span>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 36, textAlign: "center" }}>
            <a
              href={`mailto:${PROFILE.email}`}
              style={{
                display: "inline-block",
                padding: isMobile ? "12px 32px" : "15px 48px",
                background: "#22c55e",
                color: "#1a1a1a",
                fontFamily: "'Fira Code', monospace",
                fontSize: isMobile ? 12 : 13,
                letterSpacing: "0.1em",
                textDecoration: "none",
                fontWeight: 700,
                borderRadius: 2,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#4ade80";
                e.target.style.boxShadow = "0 8px 30px rgba(34,197,94,0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#22c55e";
                e.target.style.boxShadow = "none";
              }}
            >
              Say Hello →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  const bp = useBreakpoint();
  const isMobile = bp === "xs" || bp === "sm";
  return (
    <footer
      style={{
        padding: `18px ${isMobile ? "20px" : "48px"}`,
        borderTop: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: isMobile ? 4 : 0,
        textAlign: "center",
      }}
    >
      <span
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: 10,
          color: "rgba(255,255,255,0.35)",
        }}
      >
        © 2025 Patsarun Kathinthong
      </span>
      <span
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: 10,
          color: "rgba(255,255,255,0.3)",
        }}
      >
        Full Stack Developer · PERN · MERN
      </span>
    </footer>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = ["about", "projects", "skills", "experience", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Fira+Code:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; background: #1a1a1a; }
        body { background: #1a1a1a; color: #fff; -webkit-font-smoothing: antialiased; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #1a1a1a; }
        ::-webkit-scrollbar-thumb { background: rgba(34,197,94,0.4); }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (hover: none) {
          a, button { -webkit-tap-highlight-color: rgba(34,197,94,0.12); }
        }
      `}</style>

      <Nav active={activeSection} />
      <main style={{ background: "#1a1a1a" }}>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
