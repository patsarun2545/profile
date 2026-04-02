import { useBreakpoint } from "../hooks/useBreakpoint";
import Reveal from "../shared/Reveal";
import SectionLabel from "../shared/SectionLabel";
import ProjectCard from "./ProjectCard";
import { buildProjects } from "../data/data";

// ─── Image imports ────────────────────────────────────────────────────────────
import img1 from "../assets/online_dress/image1.png";
import img2 from "../assets/online_dress/image2.png";
import img3 from "../assets/online_dress/image3.png";
import img4 from "../assets/online_dress/image4.png";
import img5 from "../assets/online_dress/image5.png";
import img6 from "../assets/online_dress/image6.png";
import img7 from "../assets/online_dress/image7.png";
import img8 from "../assets/online_dress/image8.png";
import img9 from "../assets/online_dress/image9.png";

import img01 from "../assets/admin_panel/image1.png";
import img02 from "../assets/admin_panel/image2.png";
import img03 from "../assets/admin_panel/image3.png";
import img04 from "../assets/admin_panel/image4.png";
import img05 from "../assets/admin_panel/image5.png";
import img06 from "../assets/admin_panel/image6.png";
import img07 from "../assets/admin_panel/image7.png";
import img08 from "../assets/admin_panel/image8.png";
import img09 from "../assets/admin_panel/image9.png";
import img010 from "../assets/admin_panel/image10.png";

import img001 from "../assets/nextjs_ecommerce/image1.png";
import img002 from "../assets/nextjs_ecommerce/image2.png";
import img003 from "../assets/nextjs_ecommerce/image3.png";
import img004 from "../assets/nextjs_ecommerce/image4.png";
import img005 from "../assets/nextjs_ecommerce/image5.png";
import img006 from "../assets/nextjs_ecommerce/image6.png";
import img007 from "../assets/nextjs_ecommerce/image7.png";
import img008 from "../assets/nextjs_ecommerce/image8.png";
import img009 from "../assets/nextjs_ecommerce/image9.png";
import img0010 from "../assets/nextjs_ecommerce/image10.png";
import img0011 from "../assets/nextjs_ecommerce/image11.png";
import img0012 from "../assets/nextjs_ecommerce/image12.png";
import img0013 from "../assets/nextjs_ecommerce/image13.png";

const PROJECTS = buildProjects({
  od: [img1, img2, img3, img4, img5, img6, img7, img8, img9],
  ap: [img01, img02, img03, img04, img05, img06, img07, img08, img09, img010],
  ne: [img001, img002, img003, img004, img005, img006, img007, img008, img009, img0010, img0011, img0012, img0013],
});

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