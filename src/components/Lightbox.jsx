import { useState, useEffect, useCallback } from "react";

export default function Lightbox({ images, initialIndex, onClose }) {
  const [idx, setIdx] = useState(initialIndex);
  const [animDir, setAnimDir] = useState(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
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

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: "90vw",
          maxHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: -44,
            right: 0,
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.6)",
            fontSize: 13,
            fontFamily: "'Fira Code', monospace",
            cursor: "pointer",
            letterSpacing: "0.05em",
          }}
        >
          [ ESC ] close
        </button>

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 4,
            border: "1px solid rgba(34,197,94,0.2)",
          }}
        >
          <img
            src={images[idx]}
            alt={`screenshot ${idx + 1}`}
            style={{
              maxWidth: "85vw",
              maxHeight: "72vh",
              objectFit: "contain",
              display: "block",
              opacity: animDir ? 0 : 1,
              transform: animDir === 1 ? "translateX(-20px)" : animDir === -1 ? "translateX(20px)" : "none",
              transition: "opacity 0.18s, transform 0.18s",
            }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <button
            onClick={() => go(-1)}
            style={{
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.3)",
              color: "#22c55e",
              width: 36,
              height: 36,
              borderRadius: 2,
              cursor: "pointer",
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ‹
          </button>
          <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
            {idx + 1} <span style={{ color: "rgba(255,255,255,0.25)" }}>/</span> {images.length}
          </span>
          <button
            onClick={() => go(1)}
            style={{
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.3)",
              color: "#22c55e",
              width: 36,
              height: 36,
              borderRadius: 2,
              cursor: "pointer",
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ›
          </button>
        </div>

        {images.length > 1 && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center", maxWidth: "85vw" }}>
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setIdx(i)}
                style={{
                  width: 44,
                  height: 34,
                  borderRadius: 2,
                  overflow: "hidden",
                  border: `1px solid ${i === idx ? "#22c55e" : "rgba(255,255,255,0.12)"}`,
                  cursor: "pointer",
                  opacity: i === idx ? 1 : 0.5,
                  transition: "all 0.2s",
                  flexShrink: 0,
                }}
              >
                <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}