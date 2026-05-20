import { useState } from "react";
import { useLang } from "../hooks/useLang";
import Lightbox from "./Lightbox";
import styles from "../styles/shared.module.css";

export default function ProjectCard({ project, isMobile }) {
  const [open, setOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const hasImages = project.screens && project.screens.length > 0;
  const { t } = useLang();

  const cardStyle = {
    "--card-color": project.color,
    "--card-bg": `rgba(${project.colorRgb},0.025)`,
    "--card-badge-bg": project.color + "15",
    "--card-icon-border": project.color + "40",
  };

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onKeyPress={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(!open);
          }
        }}
        className={`${styles.projectCard} ${isMobile ? styles.projectCardMobile : ""} ${open ? styles.projectCardOpen : ""}`}
        style={cardStyle}
      >
        {/* Top color bar */}
        <div
          className={`${styles.projectCardTopBar} ${open ? styles.projectCardTopBarOpen : ""}`}
        />

        {/* Header */}
        <div className={styles.projectCardHeader}>
          <div className={styles.projectCardHeaderContent}>
            <div className={styles.projectCardBadges}>
              <span className={styles.projectCardStackBadge}>
                {project.stack}
              </span>
              <span className={styles.projectCardPeriodBadge}>
                {project.period}
              </span>
            </div>
            <h3
              className={`${styles.projectCardTitle} ${isMobile ? styles.projectCardTitleMobile : ""}`}
            >
              {project.title}
            </h3>
            <div className={styles.projectCardSubtitle}>{project.subtitle}</div>
          </div>

          {hasImages && !open && (
            <div className={styles.projectCardPreview}>
              {project.screens.slice(0, 2).map((img, i) => (
                <div key={i} className={styles.projectCardPreviewThumb}>
                  <img
                    src={img}
                    alt=""
                    className={styles.projectCardPreviewThumbImg}
                  />
                </div>
              ))}
            </div>
          )}

          <div
            className={`${styles.projectCardExpandIcon} ${open ? styles.projectCardExpandIconOpen : ""}`}
          >
            +
          </div>
        </div>

        {/* Tags */}
        <div className={styles.projectCardTags}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`${styles.projectCardTag} ${isMobile ? styles.projectCardTagMobile : ""}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Demo + repo links */}
        {(project.url || project.repo) && (
          <div className={styles.projectCardLinks}>
            {project.url &&
              (Array.isArray(project.url) ? project.url : [project.url]).map(
                (href, i) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={styles.projectCardLinkButton}
                  >
                    ↗{" "}
                    {Array.isArray(project.url)
                      ? i === 0
                        ? t.projects.userDemo
                        : t.projects.adminDemo
                      : t.projects.liveDemo}
                  </a>
                ),
              )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`${styles.projectCardLinkButton} ${styles.projectCardRepoButton}`}
              >
                ⌥ {t.projects.viewCode}
              </a>
            )}
          </div>
        )}

        {/* Expandable content */}
        <div
          className={`${styles.projectCardExpandableContent} ${open ? styles.projectCardExpandableContentOpen : ""}`}
        >
          {/* Screenshots */}
          {hasImages && (
            <div className={styles.projectCardScreenshots}>
              {project.screens.map((img, i) => (
                <div
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox(i);
                  }}
                  className={styles.projectCardScreenshotWrapper}
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    loading="lazy"
                    className={`${styles.projectCardScreenshot} ${isMobile ? styles.projectCardScreenshotMobile : ""}`}
                  />
                  <div
                    className={`${styles.projectCardZoomOverlay} zoom-overlay`}
                  >
                    <span className={`${styles.projectCardZoomHint} zoom-hint`}>
                      {t.lightbox.zoom}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bullets */}
          <div className={styles.projectCardBullets}>
            {project.bullets.map((b, i) => (
              <div key={i} className={styles.projectCardBulletItem}>
                <div className={styles.projectCardBulletDot} />
                <span
                  className={`${styles.projectCardBulletText} ${isMobile ? styles.projectCardBulletTextMobile : ""}`}
                >
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightbox !== null && hasImages && (
        <Lightbox
          images={project.screens}
          initialIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
