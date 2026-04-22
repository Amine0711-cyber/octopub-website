"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import DevisModal from "@/components/shared/DevisModal";

const heroImgs = [
  { src: "/uploads/Impression machines.webp", filter: "brightness(0.45) saturate(1.1)" },
  { src: "/uploads/Impression sur baches.jpg", filter: "brightness(0.55) saturate(1.3) hue-rotate(-15deg)" },
  { src: "/uploads/Covering Véhicule.jpg", filter: "brightness(0.45) saturate(1.1)" },
];

const stats = [
  { value: "2500+", label: "Clients satisfaits",    color: "#FE5E17" },
  { value: "8+",    label: "Années d'expérience",    color: "#1D60F1" },
  { value: "24h",   label: "Délai de livraison",     color: "#FE5E17" },
  { value: "100%",  label: "Satisfaction garantie",  color: "#1D60F1" },
];

const clientLogos = [
  { src: "/uploads/vALENCIA logo jus.png",  name: "Valencia" },
  { src: "/uploads/Maroc telecom.jpg",       name: "Maroc Telecom" },
  { src: "/uploads/Dahab caffe.png",         name: "Dahab Café" },
  { src: "/uploads/SIAM.png",                name: "SIAM" },
];

export default function Hero() {
  const [imgIdx, setImgIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [devisOpen, setDevisOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setImgIdx((i) => (i + 1) % heroImgs.length);
      setAnimKey((k) => k + 1);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <section
        style={{
          background: "#0f0f0f",
          paddingTop: 72,
          minHeight: "100vh",
          display: "flex",
          alignItems: "stretch",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background slideshow */}
        {heroImgs.map((img, i) => (
          <div
            key={i}
            style={{
              position: "absolute", inset: 0,
              transition: "opacity 1.2s ease",
              opacity: i === imgIdx ? 1 : 0,
            }}
          >
            <Image
              key={`${i}-${animKey}`}
              src={img.src}
              alt=""
              fill
              className={i === imgIdx ? "hero-img-active" : ""}
              style={{ objectFit: "cover", filter: img.filter }}
              priority={i === 0}
            />
          </div>
        ))}

        {/* Dark overlay + orange vignette */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(105deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 60%, rgba(254,94,23,0.12) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative", zIndex: 2,
            maxWidth: 1240, margin: "0 auto",
            padding: "120px 40px 80px",
            display: "grid",
            gridTemplateColumns: "1fr 400px",
            gap: 60,
            alignItems: "center",
            width: "100%",
          }}
          className="hero-grid"
        >
          {/* ── LEFT ── */}
          <div>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.18)", borderRadius: 100,
                padding: "6px 16px", marginBottom: 28,
              }}
            >
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#FE5E17" }} />
              <span style={{ fontFamily: "Inter,sans-serif", fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.9)" }}>
                Impression &amp; Publicité · Meknès, Maroc
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "'Outfit',sans-serif", fontWeight: 600,
                fontSize: "clamp(36px,8vw,80px)", lineHeight: 1.08,
                color: "#fff", letterSpacing: "-0.02em",
                marginBottom: 10,
              }}
            >
              L&apos;impression qui
              <br />
              <span style={{ color: "#FE5E17" }}>marque</span> les esprits
            </h1>

            {/* Slogan */}
            <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 300, fontSize: 20, color: "rgba(255,255,255,0.7)", letterSpacing: "0.01em", marginBottom: 24 }}>
              Votre Image, Notre Mission
            </p>

            {/* Description */}
            <p style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, maxWidth: 480, marginBottom: 40 }}>
              Grand format, enseignes, covering, offset &amp; digital — OctoPub transforme vos idées en supports qui attirent, convainquent et vendent.
            </p>

            {/* CTAs */}
            <div className="hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button
                onClick={() => setDevisOpen(true)}
                style={{
                  background: "#FE5E17", color: "#fff", border: "none", borderRadius: 8,
                  padding: "16px 34px", fontFamily: "Inter,sans-serif", fontWeight: 500, fontSize: 15,
                  cursor: "pointer", transition: "all 0.2s", boxShadow: "0 6px 24px rgba(254,94,23,0.4)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(254,94,23,0.5)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 6px 24px rgba(254,94,23,0.4)"; }}
              >
                Demander un devis
              </button>
              <a
                href="#portfolio"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  border: "1.5px solid rgba(255,255,255,0.35)", borderRadius: 8,
                  padding: "16px 28px", fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 15,
                  color: "#fff", textDecoration: "none", transition: "all 0.2s", backdropFilter: "blur(4px)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; }}
              >
                Voir nos réalisations
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>

            {/* Client logos */}
            <div style={{ marginTop: 48, display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                {clientLogos.map((logo, i) => (
                  <div
                    key={i}
                    title={logo.name}
                    style={{
                      width: 52, height: 52, borderRadius: 10,
                      background: "rgba(255,255,255,0.97)",
                      border: "1.5px solid rgba(255,255,255,0.35)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: 6, boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
                      flexShrink: 0, overflow: "hidden", position: "relative",
                    }}
                  >
                    <Image src={logo.src} alt={logo.name} fill style={{ objectFit: "contain", filter: "contrast(1.1) saturate(1.1)", padding: 4 }} />
                  </div>
                ))}
              </div>
              <span style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                Rejoignez <strong style={{ color: "#fff" }}>2500+ entreprises</strong> qui nous font confiance
              </span>
            </div>
          </div>

          {/* ── RIGHT: stat cards (2×2 grid) ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  background: "rgba(255,255,255,0.1)", backdropFilter: "blur(16px)",
                  borderRadius: 16, padding: "28px 20px",
                  border: "1px solid rgba(255,255,255,0.18)",
                  textAlign: "center",
                  animation: "fadeUp 0.6s ease both",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 40, color: s.color, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 8, lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
            {/* Slide dots */}
            <div style={{ gridColumn: "1/-1", display: "flex", justifyContent: "center", gap: 8, paddingTop: 8 }}>
              {heroImgs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setImgIdx(i); setAnimKey((k) => k + 1); }}
                  style={{
                    width: i === imgIdx ? 24 : 8, height: 8, borderRadius: 4,
                    background: i === imgIdx ? "#FE5E17" : "rgba(255,255,255,0.3)",
                    border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 6, zIndex: 2,
          }}
        >
          <span style={{ fontFamily: "Inter,sans-serif", fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Défiler</span>
          <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)" }} />
        </div>
      </section>

      <DevisModal open={devisOpen} onClose={() => setDevisOpen(false)} />
    </>
  );
}
