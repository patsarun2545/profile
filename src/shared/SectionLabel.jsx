export default function SectionLabel({ number, title, isMobile }) {
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
      >{`// 0${number}.`}</div>
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