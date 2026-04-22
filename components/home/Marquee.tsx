const items = [
  "Bâches Grand Format",
  "Enseignes Lumineuses",
  "Impression Offset",
  "Covering Véhicule",
  "Bannières Événementielles",
  "Publicité Meta Ads",
  "Roll-up & Kakémonos",
  "Stickers & Adhésifs",
  "PLV & Présentoirs",
  "Flyers & Catalogues",
];

const doubled = [...items, ...items];

export default function Marquee() {
  return (
    <div
      style={{
        background: "#F4F4F4",
        borderTop: "1px solid #E0E0E0",
        borderBottom: "1px solid #E0E0E0",
        padding: "16px 0",
        overflow: "hidden",
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex", alignItems: "center", gap: 20,
              padding: "0 28px",
              fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 14,
              color: "#888888", letterSpacing: "0.02em", whiteSpace: "nowrap",
            }}
          >
            {item}
            <span style={{ color: "#FE5E17", fontSize: 7 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
