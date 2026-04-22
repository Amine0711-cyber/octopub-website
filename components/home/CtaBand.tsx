"use client";

import Image from "next/image";
import { useState } from "react";
import DevisModal from "@/components/shared/DevisModal";

export default function CtaBand() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section style={{ position: "relative", overflow: "hidden" }}>
        {/* Background image dimmed */}
        <Image
          src="/uploads/Impression machines.webp"
          alt=""
          fill
          loading="lazy"
          style={{ objectFit: "cover", filter: "brightness(0.3) saturate(0.8)" }}
        />
        {/* Orange overlay */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(254,94,23,0.82)" }} />

        <div
          style={{
            position: "relative", zIndex: 1,
            maxWidth: 1240, margin: "0 auto",
            padding: "80px 40px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 40, flexWrap: "wrap",
          }}
        >
          <div>
            <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "clamp(28px,3.5vw,44px)", color: "#fff", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              Votre projet mérite<br />la meilleure impression
            </h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 300, fontSize: 18, color: "rgba(255,255,255,0.85)", marginTop: 10 }}>
              Votre Image, Notre Mission — devis gratuit sous 2 heures.
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            style={{
              background: "#fff", color: "#FE5E17", border: "none", borderRadius: 8,
              padding: "18px 40px", fontFamily: "Inter,sans-serif", fontWeight: 500, fontSize: 16,
              cursor: "pointer", flexShrink: 0, transition: "all 0.2s",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            Demander un devis gratuit
          </button>
        </div>
      </section>

      <DevisModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
