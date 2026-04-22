"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/lib/useReveal";

const items = [
  { label: "Bâches Grand Format",    sub: "Impression grand format",  img: "/uploads/Impression sur baches.jpg",       filter: "hue-rotate(-30deg) saturate(1.5)", span: 2 },
  { label: "Enseignes Lumineuses",   sub: "LED & Signalétique",       img: "/uploads/Enseignes & Signalétique.jfif",   filter: "none", span: 1 },
  { label: "Covering Véhicule",      sub: "Habillage complet",        img: "/uploads/Covering Véhicule.jpg",           filter: "none", span: 1 },
  { label: "Impressions",            sub: "Offset & Digital",         img: "/uploads/Impression Offset & Digital.png", filter: "none", span: 1 },
  { label: "Supports Événementiels", sub: "Roll-up & Stands",         img: "/uploads/Roll-up.jpeg",                    filter: "none", span: 1 },
];

export default function Portfolio() {
  const { ref, rv } = useReveal();

  return (
    <section id="portfolio" ref={ref} style={{ background: "#F4F4F4", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        {/* Header */}
        <div className={rv("reveal")} style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontFamily: "Inter,sans-serif", fontSize: 12, fontWeight: 500, color: "#FE5E17", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Nos Réalisations
          </span>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "clamp(32px,4vw,48px)", color: "#1A1A1A", marginTop: 12, letterSpacing: "-0.02em" }}>
            Des projets qui <span style={{ color: "#FE5E17" }}>parlent</span>
            <br />
            <span style={{ fontWeight: 300 }}>d&apos;eux-mêmes</span>
          </h2>
        </div>

        {/* Masonry grid */}
        <div
          className="portfolio-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "280px 280px", gap: 16 }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`port-card ${rv("reveal")}`}
              style={{
                transitionDelay: `${i * 0.07}s`,
                gridColumn: `span ${item.span}`,
                borderRadius: 14, overflow: "hidden", position: "relative",
                border: "1px solid #E0E0E0",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <Image
                src={item.img}
                alt={item.label}
                fill
                loading="lazy"
                style={{ objectFit: "cover", filter: item.filter, transition: "transform 0.5s ease" }}
              />
              <div
                className="port-overlay"
                style={{ position: "absolute", inset: 0, background: "rgba(29,96,241,0.88)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}
              >
                <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 500, fontSize: i === 0 ? 24 : 18, color: "#fff", textAlign: "center", padding: "0 20px" }}>{item.label}</span>
                <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 13, color: "rgba(255,255,255,0.8)" }}>{item.sub}</span>
                <span style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>Voir le projet →</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link href="/realisations" style={{ fontFamily: "Inter,sans-serif", fontWeight: 500, fontSize: 14, color: "#FE5E17", textDecoration: "none", letterSpacing: "0.02em" }}>
            Voir toutes nos réalisations →
          </Link>
        </div>
      </div>
    </section>
  );
}
