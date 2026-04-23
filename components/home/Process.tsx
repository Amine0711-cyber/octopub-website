"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

const steps = [
  { n: "01", title: "Consultation", desc: "Nous analysons vos besoins, votre budget et vos délais pour définir la solution idéale." },
  { n: "02", title: "Conception",   desc: "Notre équipe créative prépare les fichiers et maquettes prêts à imprimer." },
  { n: "03", title: "Production",   desc: "Impression haute définition sur nos équipements de dernière génération." },
  { n: "04", title: "Livraison",    desc: "Livraison ou pose dans les délais convenus, partout dans la région de Meknès." },
];

export default function Process() {
  const { ref, rv } = useReveal();

  return (
    <section className="process-section" ref={ref} style={{ background: "#fff", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        {/* Header */}
        <div className={rv("reveal")} style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontFamily: "Inter,sans-serif", fontSize: 12, fontWeight: 500, color: "#FE5E17", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Notre Processus
          </span>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "clamp(32px,4vw,48px)", color: "#1A1A1A", marginTop: 12, letterSpacing: "-0.02em" }}>
            De l&apos;idée à la réalisation<br /><span style={{ fontWeight: 300 }}>en 4 étapes</span>
          </h2>
        </div>

        {/* Image strip banner */}
        <div className={rv("reveal")} style={{ marginBottom: 56, borderRadius: 16, overflow: "hidden", height: 220, position: "relative" }}>
          <Image src="/uploads/impression-machines.webp" alt="Atelier impression OctoPub Meknès" fill sizes="100vw" loading="lazy" style={{ objectFit: "cover", filter: "brightness(0.7)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(254,94,23,0.55) 0%, transparent 60%)" }} />
          <div style={{ position: "absolute", top: "50%", left: 48, transform: "translateY(-50%)" }}>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 28, color: "#fff" }}>Votre Image, Notre Mission</div>
            <div style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 15, color: "rgba(255,255,255,0.8)", marginTop: 6 }}>Meknès · Maroc</div>
          </div>
        </div>

        {/* 4-step timeline */}
        <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, position: "relative" }}>
          <div className="process-connector" style={{ position: "absolute", top: 44, left: "12.5%", right: "12.5%", height: 1, background: "#E9E9E9", zIndex: 0 }} />
          {steps.map((s, i) => (
            <div
              key={i}
              className={`process-step ${rv("reveal")}`}
              style={{ transitionDelay: `${i * 0.1}s`, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 20px", position: "relative", zIndex: 1 }}
            >
              <div
                className="step-circle"
                style={{ width: 88, height: 88, borderRadius: "50%", border: "2px solid #FE5E17", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28, background: "#fff" }}
              >
                <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 24, color: "#FE5E17" }}>{s.n}</span>
              </div>
              <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 500, fontSize: 18, color: "#1A1A1A", marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 14, color: "#555555", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
