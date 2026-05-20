import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useLang } from "../hooks/useLang";
import styles from "../styles/shared.module.css";

export default function Lightbox({ images, initialIndex, onClose }) {
  const [idx, setIdx] = useState(initialIndex);
  const [animDir, setAnimDir] = useState(null);
  const { t } = useLang();

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const go = useCallback(
    (dir) => {
      setAnimDir(dir);
      setTimeout(() => {
        setIdx((i) => (i + dir + images.length) % images.length);
        setAnimDir(null);
      }, 180);
    },
    [images.length],
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  return createPortal(
    <div onClick={onClose} className={styles.lightboxOverlay}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.lightboxContent}
      >
        <button onClick={onClose} className={styles.lightboxCloseButton}>
          {t.lightbox.close}
        </button>

        <div className={styles.lightboxImageContainer}>
          <img
            src={images[idx]}
            alt={`screenshot ${idx + 1}`}
            className={`${styles.lightboxImage} ${animDir === 1 ? styles.lightboxImageFadeLeft : ""} ${animDir === -1 ? styles.lightboxImageFadeRight : ""}`}
          />
        </div>

        <div className={styles.lightboxControls}>
          <button onClick={() => go(-1)} className={styles.lightboxNavButton}>
            ‹
          </button>
          <span className={styles.lightboxCounter}>
            {idx + 1} <span className={styles.lightboxCounterSeparator}>/</span>{" "}
            {images.length}
          </span>
          <button onClick={() => go(1)} className={styles.lightboxNavButton}>
            ›
          </button>
        </div>

        {images.length > 1 && (
          <div className={styles.lightboxThumbnails}>
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setIdx(i)}
                className={`${styles.lightboxThumbnail} ${i === idx ? styles.lightboxThumbnailActive : ""}`}
              >
                <img
                  src={img}
                  alt=""
                  className={styles.lightboxThumbnailImage}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
