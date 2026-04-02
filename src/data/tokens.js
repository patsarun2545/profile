export const FONTS = {
  mono: "'Fira Code', monospace",
  display: "'Syne', sans-serif",
  body: "'DM Sans', sans-serif",
};

export const COLORS = {
  green: "#22c55e",
  greenRgb: "34,197,94",
  bg: "#1a1a1a",
  white: "#fff",
  // Opacity helpers
  green10: "rgba(34,197,94,0.10)",
  green08: "rgba(34,197,94,0.08)",
  green05: "rgba(34,197,94,0.05)",
  green04: "rgba(34,197,94,0.04)",
  green02: "rgba(34,197,94,0.02)",
  border: "rgba(255,255,255,0.10)",
  borderSubtle: "rgba(255,255,255,0.08)",
  borderGreen: "rgba(34,197,94,0.25)",
  textMuted: "rgba(255,255,255,0.5)",
  textDim: "rgba(255,255,255,0.35)",
  textBody: "rgba(255,255,255,0.7)",
  textLabel: "rgba(255,255,255,0.4)",
};

// Reusable style objects
export const CARD_BASE = {
  border: `1px solid ${COLORS.border}`,
  borderRadius: 4,
  background: "rgba(255,255,255,0.05)",
  position: "relative",
  overflow: "hidden",
};

export const TAG_STYLE = {
  fontFamily: FONTS.mono,
  fontSize: 10,
  color: "rgba(255,255,255,0.6)",
  border: `1px solid ${COLORS.border}`,
  padding: "3px 8px",
  borderRadius: 2,
};

export const SECTION_PADDING = (isMobile, bp) => ({
  padding: `${isMobile ? 80 : 120}px ${isMobile ? "20px" : bp === "md" ? "32px" : "48px"}`,
});