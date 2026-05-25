import { FONTS, COLORS } from "../data/tokens";

export default function SectionLabel({ number, title, isMobile }) {
  return (
    <div>
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 11,
          color: "rgba(34,197,94,0.5)",
          letterSpacing: "0.2em",
          marginBottom: 10,
        }}
      >{`// 0${number}.`}</div>
      <h2
        style={{
          margin: 0,
          fontFamily: FONTS.display,
          fontSize: isMobile ? 30 : 44,
          fontWeight: 800,
          color: COLORS.white,
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
            background: COLORS.green,
            display: "inline-block",
            marginBottom: 5,
          }}
        />
      </h2>
    </div>
  );
}