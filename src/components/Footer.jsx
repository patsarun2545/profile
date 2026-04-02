import { useBreakpoint } from "../hooks/useBreakpoint";

export default function Footer() {
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
      <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(255,255,255,0.35)" }}>
        © 2025 Patsarun Kathinthong
      </span>
      <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(255,255,255,0.3)" }}>
        Full Stack Developer · PERN · MERN
      </span>
    </footer>
  );
}