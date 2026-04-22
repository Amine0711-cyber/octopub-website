"use client";

import { useReveal } from "@/lib/useReveal";

const testimonials = [
  {
    name: "Karim Benali",
    role: "Directeur, Auto Prestige Meknès",
    init: "KB",
    text: "OctoPub a réalisé le covering complet de notre flotte en un temps record. Qualité irréprochable, équipe professionnelle et délais respectés. Je recommande vivement.",
  },
  {
    name: "Fatima Zerhouni",
    role: "Gérante, Boutique Élégance",
    init: "FZ",
    text: "Nos enseignes et nos bâches événementielles ont transformé notre visibilité dans la ville. Un travail soigné et des conseils précieux pour le choix des supports.",
  },
  {
    name: "Ahmed Tazi",
    role: "Responsable Marketing, Groupe TM",
    init: "AT",
    text: "Partenaire de confiance depuis 5 ans. OctoPub gère l'intégralité de nos campagnes print et digitales. Réactivité exemplaire et résultats au rendez-vous.",
  },
];

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FE5E17" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function Testimonials() {
  const { ref, rv } = useReveal();

  return (
    <section className="testimonials-section" ref={ref} style={{ background: "#fff", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        {/* Header */}
        <div className={rv("reveal")} style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontFamily: "Inter,sans-serif", fontSize: 12, fontWeight: 500, color: "#FE5E17", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Témoignages
          </span>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "clamp(32px,4vw,48px)", color: "#1A1A1A", marginTop: 12, letterSpacing: "-0.02em" }}>
            Ce que disent<br /><span style={{ fontWeight: 300 }}>nos clients</span>
          </h2>
        </div>

        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={rv("reveal")}
              style={{
                transitionDelay: `${i * 0.1}s`,
                background: "#F8F8F8",
                border: "1px solid #E0E0E0",
                borderRadius: 16,
                padding: "32px 28px",
              }}
            >
              <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                {Array.from({ length: 5 }).map((_, si) => <StarIcon key={si} />)}
              </div>
              <p style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 15, color: "#555555", lineHeight: 1.8, marginBottom: 24 }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#EEF3FF", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 15, color: "#1D60F1", flexShrink: 0 }}>
                  {t.init}
                </div>
                <div>
                  <div style={{ fontFamily: "Inter,sans-serif", fontWeight: 500, fontSize: 14, color: "#1A1A1A" }}>{t.name}</div>
                  <div style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 12, color: "#888888" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
