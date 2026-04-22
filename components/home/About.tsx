"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/lib/useReveal";

const checks = [
  "Équipements d'impression haute performance",
  "Matériaux premium certifiés longue durée",
  "Délais garantis — livraison en 24h",
  "Accompagnement de la conception à la pose",
  "Devis gratuit et réponse sous 2 heures",
];

const statsRow = [
  { v: "2500+", l: "Clients",  c: "#FE5E17" },
  { v: "8+",    l: "Années",   c: "#1D60F1" },
  { v: "24h",   l: "Délai",    c: "#FE5E17" },
  { v: "3",     l: "Ateliers", c: "#1D60F1" },
];

export default function About() {
  const { ref, rv } = useReveal();

  return (
    <section id="about" ref={ref} style={{ background: "#F4F4F4", padding: "100px 40px" }}>
      <div
        style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}
        className="about-grid"
      >
        {/* ── LEFT visual ── */}
        <div className={rv("reveal-left")} style={{ position: "relative" }}>
          <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3", position: "relative", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
            <Image
              src="/uploads/Design sans titre.png"
              alt="OctoPub Showroom & Atelier — Meknès"
              fill
              loading="lazy"
              style={{ objectFit: "cover", filter: "brightness(1.12) contrast(1.18) saturate(1.25)" }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)", padding: "24px 24px 20px" }}>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 16, color: "#fff" }}>Showroom &amp; Atelier OctoPub</div>
              <div style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 13, color: "rgba(255,255,255,0.75)" }}>Anassi · Meknès, Maroc</div>
            </div>
          </div>

          <div style={{ position: "absolute", top: -16, left: -16, width: 56, height: 56, borderTop: "3px solid #FE5E17", borderLeft: "3px solid #FE5E17", borderRadius: "4px 0 0 0" }} />
          <div style={{ position: "absolute", bottom: -16, right: -16, width: 56, height: 56, borderBottom: "3px solid #FE5E17", borderRight: "3px solid #FE5E17", borderRadius: "0 0 4px 0" }} />

          <div style={{ position: "absolute", top: -20, right: -20, width: 82, height: 82, borderRadius: "50%", background: "#FE5E17", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(254,94,23,0.35)" }}>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 13, color: "#fff" }}>#1</div>
            <div style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 10, color: "rgba(255,255,255,0.85)", textAlign: "center" }}>Meknès</div>
          </div>

          <div className="about-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginTop: 20 }}>
            {statsRow.map((s) => (
              <div key={s.l} style={{ background: "#fff", border: "1px solid #E0E0E0", borderRadius: 12, padding: "16px 10px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 26, color: s.c }}>{s.v}</div>
                <div style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 11, color: "#888888", marginTop: 3 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT text ── */}
        <div className={rv("reveal-right")}>
          <span style={{ fontFamily: "Inter,sans-serif", fontSize: 12, fontWeight: 500, color: "#FE5E17", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            À propos d&apos;OctoPub
          </span>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 400, fontSize: "clamp(28px,3.5vw,42px)", color: "#1A1A1A", marginTop: 12, marginBottom: 10, lineHeight: 1.25, letterSpacing: "-0.02em" }}>
            Votre partenaire impression depuis <span style={{ fontWeight: 600 }}>plus de 8 ans</span> à Meknès
          </h2>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 300, fontSize: 19, color: "#FE5E17", marginBottom: 20, fontStyle: "italic" }}>
            &ldquo;Votre Image, Notre Mission&rdquo;
          </p>
          <p style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 16, color: "#555555", lineHeight: 1.8, marginBottom: 32 }}>
            Fondée à Meknès, OctoPub accompagne les entreprises marocaines dans leur communication visuelle. Du petit flyer à la bâche géante, nous apportons la même exigence de qualité et de précision à chaque projet.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
            {checks.map((c) => (
              <div key={c} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#FFF0EA", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FE5E17" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 14, color: "#555555" }}>{c}</span>
              </div>
            ))}
          </div>

          <Link
            href="/equipe"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, border: "1.5px solid #E0E0E0", borderRadius: 8, padding: "13px 24px", fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 14, color: "#555555", textDecoration: "none", background: "#fff", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#1D60F1"; e.currentTarget.style.color = "#1D60F1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E0E0E0"; e.currentTarget.style.color = "#555555"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
            Découvrir notre équipe
          </Link>
        </div>
      </div>
    </section>
  );
}
