"use client";

import { useReveal } from "@/lib/useReveal";

const testimonials = [
  {
    name: "Karim Benali",
    role: "Directeur",
    company: "Auto Prestige Meknès",
    project: "Covering flotte + signalétique",
    service: "Covering & Stickers",
    init: "KB",
    color: "#1D60F1",
    light: "#EEF3FF",
    text: "OctoPub nous a accompagnés sur l'habillage de plusieurs véhicules et la signalétique du showroom. Les visuels sont propres, les délais ont été respectés et le rendu reste cohérent avec notre image.",
  },
  {
    name: "Fatima Zerhouni",
    role: "Gérante",
    company: "Boutique Élégance",
    project: "Enseigne lumineuse + vitrine",
    service: "Enseignes",
    init: "FZ",
    color: "#FE5E17",
    light: "#FFF0EA",
    text: "Nous avions besoin d'une enseigne visible et d'une vitrine plus soignée. L'équipe a proposé des solutions adaptées à la façade et le résultat apporte une vraie présence à la boutique.",
  },
  {
    name: "Ahmed Tazi",
    role: "Responsable Marketing",
    company: "Groupe TM",
    project: "Campagnes print & digital",
    service: "Print & Digital",
    init: "AT",
    color: "#1D60F1",
    light: "#EEF3FF",
    text: "OctoPub intervient régulièrement sur nos supports imprimés et nos visuels de campagne. Les échanges sont clairs, les fichiers sont bien préparés et la production suit nos contraintes de planning.",
  },
];

function StarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="#FE5E17" stroke="none" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function Testimonials() {
  const { ref, rv } = useReveal();

  return (
    <section id="temoignages" className="testimonials-section" ref={ref} style={{ background: "#fff", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className={rv("reveal")} style={{ textAlign: "center", marginBottom: 58 }}>
          <span style={{ fontFamily: "Inter,sans-serif", fontSize: 12, fontWeight: 500, color: "#FE5E17", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Témoignages
          </span>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "clamp(32px,4vw,48px)", color: "#1A1A1A", marginTop: 12, letterSpacing: "-0.02em", lineHeight: 1.12 }}>
            Ce que disent<br /><span style={{ fontWeight: 300 }}>nos clients</span>
          </h2>
          <p style={{ maxWidth: 640, margin: "18px auto 0", fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 15, color: "#555555", lineHeight: 1.8 }}>
            Des entreprises locales nous font confiance pour leurs supports publicitaires, enseignes et campagnes visuelles.
          </p>
        </div>

        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={rv("reveal")}
              style={{
                transitionDelay: `${i * 0.1}s`,
                background: "#FFFFFF",
                border: "1px solid #E0E0E0",
                borderRadius: 18,
                padding: "28px",
                boxShadow: "0 10px 32px rgba(26,26,26,0.045)",
                transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#CCCCCC";
                e.currentTarget.style.boxShadow = "0 16px 44px rgba(26,26,26,0.08)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E0E0E0";
                e.currentTarget.style.boxShadow = "0 10px 32px rgba(26,26,26,0.045)";
                e.currentTarget.style.transform = "";
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    aria-hidden="true"
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${t.light} 0%, #FFFFFF 100%)`,
                      border: `1px solid ${t.light}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Outfit',sans-serif",
                      fontWeight: 600,
                      fontSize: 17,
                      color: t.color,
                      flexShrink: 0,
                      boxShadow: "inset 0 0 0 6px rgba(255,255,255,0.7)",
                    }}
                  >
                    {t.init}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 15, color: "#1A1A1A", margin: 0 }}>
                      {t.name}
                    </h3>
                    <p style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 12, color: "#555555", margin: "5px 0 0", lineHeight: 1.5 }}>
                      {t.role}
                    </p>
                    <p style={{ fontFamily: "Inter,sans-serif", fontWeight: 500, fontSize: 12, color: "#888888", margin: "2px 0 0", lineHeight: 1.5 }}>
                      {t.company}
                    </p>
                  </div>
                </div>
                <span style={{ borderRadius: 999, background: t.light, color: t.color, padding: "6px 10px", fontFamily: "Inter,sans-serif", fontWeight: 500, fontSize: 11, whiteSpace: "nowrap" }}>
                  {t.service}
                </span>
              </div>

              <div style={{ display: "flex", gap: 3, marginBottom: 16 }} aria-label="Note 5 étoiles">
                {Array.from({ length: 5 }).map((_, si) => <StarIcon key={si} />)}
              </div>

              <p style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 15, color: "#555555", lineHeight: 1.8, marginBottom: 22 }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div style={{ borderTop: "1px solid #E0E0E0", paddingTop: 18 }}>
                <p style={{ fontFamily: "Inter,sans-serif", fontSize: 11, fontWeight: 500, color: "#888888", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 6px" }}>
                  Projet réalisé
                </p>
                <p style={{ fontFamily: "Inter,sans-serif", fontSize: 13, fontWeight: 500, color: "#1A1A1A", lineHeight: 1.55, margin: 0 }}>
                  {t.project}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
