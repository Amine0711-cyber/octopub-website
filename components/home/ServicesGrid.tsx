"use client";

import Link from "next/link";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

const serviceData = [
  {
    num: "01", slug: "baches-grand-format",
    title: "Bâches & Grand Format",
    desc: "Impressions grand format haute définition pour façades, événements et affichages extérieurs durables.",
    tags: ["Bâches PVC", "Banderoles", "Kakémonos"],
    img: "/uploads/Impression sur baches.jpg",
    imgFilter: "hue-rotate(-30deg) saturate(1.6) brightness(0.95)",
  },
  {
    num: "02", slug: "enseignes-signaletique",
    title: "Enseignes & Signalétique",
    desc: "Enseignes lumineuses, lettres découpées, totems et signalétique intérieure professionnelle.",
    tags: ["LED", "Plexi", "Totems"],
    img: "/uploads/Enseignes & Signalétique.jfif",
    imgFilter: "none",
  },
  {
    num: "03", slug: "impression-offset-digital",
    title: "Impression Offset & Digital",
    desc: "Flyers, catalogues, cartes de visite et brochures en impression offset ou numérique haute qualité.",
    tags: ["Offset", "Digital", "Façonnage"],
    img: "/uploads/Impression Offset & Digital.png",
    imgFilter: "none",
  },
  {
    num: "04", slug: "covering-stickers",
    title: "Covering & Stickers",
    desc: "Habillage complet de véhicules, vitrines et surfaces pour une visibilité maximale.",
    tags: ["Véhicules", "Vitrines", "Adhésifs"],
    img: "/uploads/Covering & Stickers.jfif",
    imgFilter: "none",
  },
  {
    num: "05", slug: "supports-evenementiels",
    title: "Supports Événementiels",
    desc: "Roll-up, stands, backdrops et habillages pour salons, conférences et événements marquants.",
    tags: ["Stands", "Roll-up", "Backdrop"],
    img: "/uploads/Roll-up.jpeg",
    imgFilter: "none",
  },
  {
    num: "06", slug: "publicite-digitale",
    title: "Publicité Digitale",
    desc: "Campagnes Meta Ads ciblées pour amplifier votre visibilité en ligne à Meknès et au Maroc.",
    tags: ["Meta Ads", "Facebook", "Instagram"],
    img: "/uploads/Campagnes Meta Ads.jfif",
    imgFilter: "none",
  },
];

export default function ServicesGrid() {
  const { ref, rv } = useReveal();

  return (
    <section id="services" ref={ref} style={{ background: "#fff", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        {/* Header */}
        <div className={rv("reveal")} style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontFamily: "Inter,sans-serif", fontSize: 12, fontWeight: 500, color: "#FE5E17", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Nos Services
          </span>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "clamp(32px,4vw,48px)", color: "#1A1A1A", marginTop: 12, letterSpacing: "-0.02em" }}>
            Tout ce dont vous avez besoin
            <br />
            <span style={{ fontWeight: 300 }}>pour imprimer votre marque</span>
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="services-grid">
          {serviceData.map((c, i) => (
            <Link
              key={i}
              href={`/services/${c.slug}`}
              className={`service-card ${rv("reveal")}`}
              style={{
                transitionDelay: `${i * 0.08}s`,
                background: "#fff",
                border: "1px solid #E0E0E0",
                borderRadius: 12,
                overflow: "hidden",
                textDecoration: "none",
                display: "block",
              }}
            >
              <div className="card-img" style={{ height: 180, overflow: "hidden", background: "#f0f0f0", position: "relative" }}>
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover", filter: c.imgFilter }}
                />
              </div>
              <div style={{ padding: "24px 24px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 400, fontSize: 18, color: "#1A1A1A", lineHeight: 1.3 }}>{c.title}</h3>
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 22, color: "#FE5E17", opacity: 0.3 }}>{c.num}</span>
                </div>
                <p style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 14, color: "#555555", lineHeight: 1.7, marginBottom: 16 }}>{c.desc}</p>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {c.tags.map((t) => (
                    <span key={t} style={{ background: "#EEF3FF", color: "#1D60F1", borderRadius: 100, padding: "4px 12px", fontFamily: "Inter,sans-serif", fontSize: 12 }}>{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
