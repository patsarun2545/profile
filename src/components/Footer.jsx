import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLang } from "../hooks/useLang";

export default function Footer() {
  const bp = useBreakpoint();
  const isMobile = bp === "xs" || bp === "sm";
  const { t } = useLang();

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
        © {new Date().getFullYear()} Patsarun Kathinthong
      </span>
      <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(255,255,255,0.3)" }}>
        {t.footer.role}
      </span>
    </footer>
  );
}