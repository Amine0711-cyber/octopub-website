"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight, Check, Phone, ArrowDown } from "lucide-react";

// ─── Colors ────────────────────────────────────────────────
const C = {
  orange: "#FE5E17",
  blue: "#1D60F1",
  bgSoft: "#F4F4F4",
  bgLight: "#E9E9E9",
  border: "#E0E0E0",
  text: "#1A1A1A",
  textSec: "#555555",
  textMuted: "#888888",
  blueLight: "#EEF3FF",
  dark: "#1A1A1A",
};

// ─── Scroll Reveal Hook ────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, dir = "up", delay = 0, className = "", style: extraStyle = {} }: {
  children: React.ReactNode; dir?: "up" | "left" | "right"; delay?: number; className?: string; style?: React.CSSProperties;
}) {
  const { ref, visible } = useReveal();
  const tx = dir === "left" ? "translateX(-36px)" : dir === "right" ? "translateX(36px)" : "translateY(28px)";
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : tx,
      transition: `opacity 0.65s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.65s cubic-bezier(.16,1,.3,1) ${delay}s`,
      ...extraStyle,
    }}>
      {children}
    </div>
  );
}

// ─── 1. HERO ───────────────────────────────────────────────
function Hero({ onDevis }: { onDevis: () => void }) {
  return (
    <section style={{ position: "relative", minHeight: "88vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#111" }}>
      <Image
        src="/uploads/Impression sur baches.jpg"
        alt="Bâches grand format OctoPub"
        fill
        priority
        className="object-cover object-center"
        style={{ filter: "brightness(0.45) saturate(1.2) hue-rotate(-20deg)" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(0,0,0,0.75) 0%, rgba(254,94,23,0.1) 100%)" }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1240, margin: "0 auto", padding: "120px 40px 80px", width: "100%" }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
          <Link href="/" style={{ fontFamily: "Inter", fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Accueil</Link>
          <ChevronRight size={12} color="rgba(255,255,255,0.35)" />
          <Link href="/#services" style={{ fontFamily: "Inter", fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Services</Link>
          <ChevronRight size={12} color="rgba(255,255,255,0.35)" />
          <span style={{ fontFamily: "Inter", fontSize: 13, color: C.orange }}>Bâches & Grand Format</span>
        </div>

        <div style={{ maxWidth: 680 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(254,94,23,0.2)", border: "1px solid rgba(254,94,23,0.35)", borderRadius: 100, padding: "5px 16px", marginBottom: 22 }}>
            <span style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500, color: C.orange, letterSpacing: "0.08em", textTransform: "uppercase" }}>Service 01</span>
          </div>
          <h1 style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "clamp(44px,5.5vw,72px)", color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 24 }}>
            Bâches &<br /><span style={{ color: C.orange }}>Grand Format</span>
          </h1>
          <p style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 18, color: "rgba(255,255,255,0.72)", lineHeight: 1.8, marginBottom: 40, maxWidth: 520 }}>
            Impression haute définition sur PVC, textile ou papier — pour façades, événements, salons et affichages extérieurs de toutes dimensions.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button onClick={onDevis}
              style={{ background: C.orange, color: "#fff", border: "none", borderRadius: 8, padding: "16px 34px", fontFamily: "Inter", fontWeight: 500, fontSize: 15, cursor: "pointer", boxShadow: "0 6px 24px rgba(254,94,23,0.4)", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}>
              Demander un devis
            </button>
            <a href="#description"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1.5px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "16px 28px", fontFamily: "Inter", fontWeight: 400, fontSize: 15, color: "#fff", textDecoration: "none", transition: "border-color 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.7)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; }}>
              En savoir plus <ArrowDown size={16} />
            </a>
          </div>
        </div>

        {/* Floating stats */}
        <div style={{ position: "absolute", right: 40, bottom: 60, display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { v: "Sur mesure", l: "toutes dimensions" },
            { v: "24h", l: "délai express" },
            { v: "HD", l: "impression 1440 dpi" },
          ].map((s, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12, padding: "14px 20px", textAlign: "right" }}>
              <div style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: 20, color: i === 1 ? C.orange : "#fff" }}>{s.v}</div>
              <div style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 3 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 2. DESCRIPTION ────────────────────────────────────────
function Description() {
  const useCases = [
    { title: "Façades commerciales", desc: "Habillage de devantures, stores et vitrines avec des bâches grand format personnalisées aux couleurs de votre marque.", orange: true },
    { title: "Événements & salons", desc: "Backdrops, fonds de scène, banderoles et habillages pour stands de salon, conférences et événements d'entreprise.", orange: false },
    { title: "Affichage publicitaire", desc: "Panneaux publicitaires, bâches de chantier, palissades et supports extérieurs haute résistance aux intempéries.", orange: true },
    { title: "Promotions & soldes", desc: "Bâches promotionnelles pour vitrine, entrée de magasin ou parking — rapides à produire, impactantes à l'œil.", orange: false },
  ];
  const icons = [
    <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>,
    <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
    <><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></>,
    <><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></>,
  ];
  return (
    <section id="description" style={{ background: "#fff", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <Reveal dir="left">
          <span style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500, color: C.orange, textTransform: "uppercase", letterSpacing: "0.12em" }}>Le service</span>
          <h2 style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "clamp(28px,3.5vw,44px)", color: C.text, marginTop: 12, marginBottom: 20, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            Votre message,<br /><span style={{ fontWeight: 300 }}>en grand et en clair</span>
          </h2>
          <p style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 16, color: C.textSec, lineHeight: 1.85, marginBottom: 20 }}>
            L'impression sur bâche grand format est la solution la plus visible, la plus économique et la plus rapide pour communiquer à grande échelle. Que ce soit pour 1 m² ou 100 m², OctoPub imprime avec la même exigence de qualité.
          </p>
          <p style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 16, color: C.textSec, lineHeight: 1.85 }}>
            Notre parc machines grand format à Meknès produit des impressions jusqu'à <strong style={{ color: C.text }}>5 mètres de large</strong>, avec une résolution jusqu'à <strong style={{ color: C.text }}>1440 dpi</strong> — couleurs fidèles, finitions nettes, durée de vie garantie.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["PVC 510g", "PVC 440g", "Textile", "Papier brillant", "Toile", "One-Way Vision"].map(m => (
              <span key={m} style={{ background: C.blueLight, color: C.blue, borderRadius: 100, padding: "6px 14px", fontFamily: "Inter", fontSize: 13 }}>{m}</span>
            ))}
          </div>
        </Reveal>

        <Reveal dir="right">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {useCases.map((u, i) => (
              <div key={i} style={{ background: C.bgSoft, border: `1px solid ${C.border}`, borderRadius: 14, padding: "24px 20px" }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: u.orange ? "#FFF0EA" : C.blueLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={u.orange ? C.orange : C.blue} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {icons[i]}
                  </svg>
                </div>
                <h4 style={{ fontFamily: "Outfit", fontWeight: 500, fontSize: 15, color: C.text, marginBottom: 8 }}>{u.title}</h4>
                <p style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 13, color: C.textSec, lineHeight: 1.65 }}>{u.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── 3. SPECS ──────────────────────────────────────────────
function Specs() {
  const specs = [
    { label: "Dimensions max", value: "5 m × ∞", note: "largeur d'impression maximale", icon: "↔", orange: true },
    { label: "Résolution", value: "1440 dpi", note: "impression haute définition", icon: "◎", orange: false },
    { label: "Matières", value: "6 types", note: "PVC, textile, papier, toile…", icon: "◈", orange: true },
    { label: "Finitions", value: "8 options", note: "ourlet, œillets, entoilage…", icon: "◉", orange: false },
    { label: "Délai standard", value: "48h", note: "commande validée", icon: "◷", orange: true },
    { label: "Délai express", value: "24h", note: "sur demande, même semaine", icon: "⚡", orange: false },
  ];
  const materials = [
    { name: "PVC Frontlit 510g", desc: "Bâche épaisse ultra-résistante, idéale pour l'extérieur longue durée. Résistance UV, eau, vent.", best: "Façades, palissades, panneaux", orange: true },
    { name: "PVC Frontlit 440g", desc: "Version plus légère mais toujours robuste. Rapport qualité-prix optimal pour l'événementiel.", best: "Stands, salons, promotions", orange: true },
    { name: "Mesh / One-Way Vision", desc: "Bâche perforée laissant passer l'air et la lumière. Parfait pour les vitrines et clôtures.", best: "Vitrines, grillages, barrières", orange: false },
    { name: "Textile polyester", desc: "Surface douce et premium pour intérieur. Rendu photographique exceptionnel.", best: "Showrooms, hôtels, restaurants", orange: false },
  ];
  return (
    <section style={{ background: C.bgSoft, padding: "100px 40px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500, color: C.orange, textTransform: "uppercase", letterSpacing: "0.12em" }}>Spécifications</span>
            <h2 style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "clamp(28px,3.5vw,44px)", color: C.text, marginTop: 12, letterSpacing: "-0.02em" }}>
              Caractéristiques techniques
            </h2>
          </div>
        </Reveal>

        {/* Quick specs grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 16, marginBottom: 48 }}>
          {specs.map((s, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 14, padding: "24px 16px", textAlign: "center", cursor: "default", transition: "border-color 0.22s, transform 0.22s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = C.orange; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = C.border; (e.currentTarget as HTMLElement).style.transform = ""; }}>
                <div style={{ fontFamily: "monospace", fontSize: 20, color: s.orange ? C.orange : C.blue, marginBottom: 10 }}>{s.icon}</div>
                <div style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: 22, color: C.text, marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontFamily: "Inter", fontWeight: 500, fontSize: 12, color: s.orange ? C.orange : C.blue, marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 11, color: C.textMuted, lineHeight: 1.4 }}>{s.note}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Materials */}
        <Reveal>
          <h3 style={{ fontFamily: "Outfit", fontWeight: 500, fontSize: 24, color: C.text, marginBottom: 24 }}>Matériaux disponibles</h3>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {materials.map((m, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 14, padding: "28px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: m.orange ? C.orange : C.blue, flexShrink: 0 }} />
                  <span style={{ fontFamily: "Outfit", fontWeight: 500, fontSize: 15, color: C.text }}>{m.name}</span>
                </div>
                <p style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 13, color: C.textSec, lineHeight: 1.65, marginBottom: 14 }}>{m.desc}</p>
                <div style={{ paddingTop: 12, borderTop: `1px solid ${C.border}` }}>
                  <span style={{ fontFamily: "Inter", fontSize: 11, color: C.textMuted }}>Idéal pour : </span>
                  <span style={{ fontFamily: "Inter", fontWeight: 400, fontSize: 11, color: m.orange ? C.orange : C.blue }}>{m.best}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. GALERIE ────────────────────────────────────────────
function Galerie() {
  const items = [
    { img: "/uploads/Impression sur baches.jpg", label: "Bâche façade grand format", col: 2, row: 2 },
    { img: "/uploads/Impression machines.webp", label: "Atelier grand format", col: 1, row: 1 },
    { img: "/uploads/Impression Offset & Digital.png", label: "Impression haute définition", col: 1, row: 1 },
    { img: "/uploads/Covering & Stickers.jfif", label: "Habillage vitrine", col: 1, row: 1 },
    { img: "/uploads/Roll-up.jpeg", label: "Kakémono & Roll-up", col: 1, row: 1 },
  ];
  return (
    <section style={{ background: "#fff", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500, color: C.orange, textTransform: "uppercase", letterSpacing: "0.12em" }}>Galerie</span>
            <h2 style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "clamp(28px,3.5vw,44px)", color: C.text, marginTop: 12, letterSpacing: "-0.02em" }}>
              Quelques exemples<br /><span style={{ fontWeight: 300 }}>de nos réalisations</span>
            </h2>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "280px 240px", gap: 16 }}>
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.07} style={{ gridColumn: `span ${item.col}`, gridRow: `span ${item.row}` }}>
              <div style={{ borderRadius: 14, overflow: "hidden", position: "relative", border: `1px solid ${C.border}`, height: "100%", cursor: "zoom-in", transition: "transform 0.28s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}>
                <Image src={item.img} alt={item.label} fill className="object-cover" style={{ transition: "transform 0.45s ease" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)", padding: "20px 20px 16px" }}>
                  <span style={{ fontFamily: "Inter", fontWeight: 400, fontSize: 13, color: "#fff" }}>{item.label}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. PROCESSUS ──────────────────────────────────────────
function Processus() {
  const steps = [
    { n: "01", title: "Consultation & devis", desc: "Vous nous envoyez vos dimensions, le fichier ou l'idée. Nous répondons avec un devis précis sous 2 heures." },
    { n: "02", title: "Validation du BAT", desc: "Notre studio prépare le bon à tirer (BAT). Vous validez les couleurs, textes et mise en page avant impression." },
    { n: "03", title: "Impression", desc: "Votre fichier validé part sur nos machines grand format. Impression 1440 dpi, découpe, finitions selon vos specs." },
    { n: "04", title: "Livraison ou pose", desc: "Récupération en atelier sous 24–48h, ou livraison + pose sur site par notre équipe à Meknès et environs." },
  ];
  return (
    <section style={{ background: C.bgSoft, padding: "100px 40px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500, color: C.orange, textTransform: "uppercase", letterSpacing: "0.12em" }}>Processus</span>
            <h2 style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "clamp(28px,3.5vw,44px)", color: C.text, marginTop: 12, letterSpacing: "-0.02em" }}>
              De votre fichier<br /><span style={{ fontWeight: 300 }}>à votre bâche installée</span>
            </h2>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, position: "relative" }}>
          <div style={{ position: "absolute", top: 44, left: "12.5%", right: "12.5%", height: 1, background: C.bgLight }} />
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 12px", position: "relative", zIndex: 1 }}>
                <StepDot number={s.n} />
                <h3 style={{ fontFamily: "Outfit", fontWeight: 500, fontSize: 17, color: C.text, marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 14, color: C.textSec, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepDot({ number }: { number: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ width: 88, height: 88, borderRadius: "50%", border: `2px solid ${C.orange}`, background: hovered ? C.orange : "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, transition: "all 0.25s", cursor: "default" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <span style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: 24, color: hovered ? "#fff" : C.orange, transition: "color 0.25s" }}>{number}</span>
    </div>
  );
}

// ─── 6. TARIFS ─────────────────────────────────────────────
function Tarifs({ onDevis }: { onDevis: () => void }) {
  const plans = [
    {
      name: "Petite bâche", size: "Jusqu'à 2 m²", from: "80", unit: "MAD",
      features: ["PVC 440g ou 510g", "Résolution 1440 dpi", "Ourlets + œillets inclus", "Délai 48h", "Fichier fourni par client"],
      highlight: false,
    },
    {
      name: "Bâche événementielle", size: "2 à 10 m²", from: "70", unit: "MAD/m²",
      features: ["PVC 510g résistant UV", "HD couleurs CMJN", "Finitions au choix", "Livraison possible", "BAT gratuit"],
      highlight: true, badge: "Le plus demandé",
    },
    {
      name: "Grand format façade", size: "10 m² et plus", from: "Devis", unit: "sur mesure",
      features: ["Tous matériaux disponibles", "Pose incluse sur demande", "Rabat volume dès 50 m²", "Délai négocié", "Suivi de chantier"],
      highlight: false,
    },
  ];
  return (
    <section style={{ background: "#fff", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <span style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500, color: C.orange, textTransform: "uppercase", letterSpacing: "0.12em" }}>Tarifs indicatifs</span>
            <h2 style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "clamp(28px,3.5vw,44px)", color: C.text, marginTop: 12, letterSpacing: "-0.02em" }}>
              Des prix transparents,<br /><span style={{ fontWeight: 300 }}>adaptés à votre projet</span>
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ textAlign: "center", fontFamily: "Inter", fontWeight: 300, fontSize: 15, color: C.textMuted, marginBottom: 56 }}>
            Les tarifs indiqués sont indicatifs. Demandez un devis précis gratuit pour votre projet.
          </p>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, alignItems: "start" }}>
          {plans.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <PriceCard plan={p} onDevis={onDevis} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PriceCard({ plan, onDevis }: { plan: any; onDevis: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ background: plan.highlight ? C.dark : "#fff", border: plan.highlight ? "none" : `1px solid ${C.border}`, borderRadius: 16, padding: "36px 32px", position: "relative", boxShadow: plan.highlight ? "0 20px 60px rgba(0,0,0,0.18)" : hovered ? "0 16px 48px rgba(0,0,0,0.1)" : "0 2px 12px rgba(0,0,0,0.04)", transform: hovered ? "translateY(-5px)" : "", transition: "transform 0.22s, box-shadow 0.22s" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {plan.badge && (
        <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: C.orange, color: "#fff", borderRadius: 100, padding: "5px 18px", fontFamily: "Inter", fontSize: 12, fontWeight: 500, whiteSpace: "nowrap" }}>
          {plan.badge}
        </div>
      )}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontFamily: "Outfit", fontWeight: 500, fontSize: 20, color: plan.highlight ? "#fff" : C.text, marginBottom: 6 }}>{plan.name}</div>
        <div style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 13, color: plan.highlight ? "rgba(255,255,255,0.6)" : C.textMuted }}>{plan.size}</div>
      </div>
      <div style={{ marginBottom: 28 }}>
        <span style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.6)" : C.textMuted }}>À partir de </span>
        <span style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: plan.from === "Devis" ? 32 : 44, color: C.orange, lineHeight: 1 }}>{plan.from}</span>
        {plan.from !== "Devis" && <span style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.6)" : C.textMuted }}> {plan.unit}</span>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
        {plan.features.map((f: string) => (
          <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 18, height: 18, borderRadius: "50%", background: plan.highlight ? "rgba(254,94,23,0.2)" : "#FFF0EA", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Check size={10} color={C.orange} strokeWidth={3} />
            </div>
            <span style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.8)" : C.textSec }}>{f}</span>
          </div>
        ))}
      </div>
      <button onClick={onDevis} style={{ width: "100%", padding: "14px", borderRadius: 8, border: plan.highlight ? "none" : `1.5px solid ${C.border}`, background: plan.highlight ? C.orange : "#fff", color: plan.highlight ? "#fff" : C.text, fontFamily: "Inter", fontWeight: 500, fontSize: 14, cursor: "pointer", transition: "opacity 0.2s" }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}>
        Demander un devis
      </button>
    </div>
  );
}

// ─── 7. FAQ ────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "Quels formats de fichiers acceptez-vous ?", a: "Nous acceptons les fichiers PDF, AI, PSD, EPS en haute résolution (300 dpi minimum au format final). Pour un grand format, une résolution de 50–100 dpi au format réel est suffisante. Nous pouvons aussi travailler à partir de votre logo et créer le visuel entier." },
    { q: "Quel est le délai de production pour une bâche ?", a: "Le délai standard est de 48h après validation du bon à tirer (BAT). Nous proposons un service express en 24h pour les urgences. Pour les grandes quantités ou formats spéciaux, comptez 3–5 jours." },
    { q: "Quelle est la durée de vie d'une bâche PVC extérieure ?", a: "Une bâche PVC 510g de qualité résiste 3 à 5 ans en extérieur, avec une résistance UV, à l'eau et au vent. Pour un usage prolongé, nous recommandons l'entoilage et la fixation avec œillets galvanisés." },
    { q: "Proposez-vous la pose et l'installation ?", a: "Oui, notre équipe intervient pour la pose sur façades, échafaudages, vitrines et structures événementielles dans toute la région de Meknès. Contactez-nous pour un devis pose inclus." },
    { q: "Puis-je commander en petite quantité ?", a: "Absolument. Il n'y a pas de quantité minimale chez OctoPub. Nous imprimons à partir d'1 exemplaire. Les prix dégressifs s'appliquent à partir de 5 m² ou de commandes récurrentes." },
  ];
  return (
    <section style={{ background: C.bgSoft, padding: "100px 40px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500, color: C.orange, textTransform: "uppercase", letterSpacing: "0.12em" }}>FAQ</span>
            <h2 style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "clamp(28px,3.5vw,44px)", color: C.text, marginTop: 12, letterSpacing: "-0.02em" }}>
              Questions fréquentes
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <div>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${C.border}` }}>
                <button onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 20 }}>
                  <span style={{ fontFamily: "Outfit", fontWeight: 400, fontSize: 17, color: C.text, lineHeight: 1.3 }}>{f.q}</span>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: open === i ? C.orange : C.blueLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.2s" }}>
                    <ChevronDown size={14} color={open === i ? "#fff" : C.textMuted} style={{ transition: "transform 0.25s", transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }} />
                  </div>
                </button>
                <div style={{ maxHeight: open === i ? 200 : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
                  <p style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 15, color: C.textSec, lineHeight: 1.8, paddingBottom: 22 }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── 8. CTA FORM ───────────────────────────────────────────
function CTAForm() {
  const [form, setForm] = useState({ nom: "", tel: "", email: "", dims: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (!form.nom.trim()) e.nom = true;
    if (!form.tel.trim()) e.tel = true;
    if (form.email && !form.email.match(/.+@.+\..+/)) e.email = true;
    return e;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom: form.nom, telephone: form.tel, email: form.email, dimensions: form.dims, message: form.message, service: "Bâches & Grand Format" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const iStyle = (f: string) => ({
    width: "100%", padding: "13px 15px",
    border: `1.5px solid ${errors[f] ? "#e44" : C.border}`,
    borderRadius: 8, fontFamily: "Inter", fontWeight: 300, fontSize: 14, color: C.text,
    background: "#fff", outline: "none", transition: "border-color 0.2s",
  });

  return (
    <section id="devis" style={{ background: "#fff", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
        {/* Left */}
        <Reveal dir="left">
          <span style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500, color: C.orange, textTransform: "uppercase", letterSpacing: "0.12em" }}>Devis gratuit</span>
          <h2 style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "clamp(32px,4vw,50px)", color: C.text, marginTop: 12, marginBottom: 16, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Prêt à commencer<br /><span style={{ color: C.orange }}>votre projet ?</span>
          </h2>
          <p style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 16, color: C.textSec, lineHeight: 1.8, marginBottom: 32 }}>
            Envoyez-nous les dimensions, le visuel ou juste l'idée — notre équipe vous répond avec un devis précis <strong style={{ color: C.text }}>sous 2 heures</strong>.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "Réponse garantie", val: "Sous 2 heures ouvrables" },
              { label: "Devis sans engagement", val: "100% gratuit" },
              { label: "Livraison express", val: "Dès 24h à Meknès" },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "#FFF0EA", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Check size={18} color={C.orange} />
                </div>
                <div>
                  <div style={{ fontFamily: "Inter", fontWeight: 500, fontSize: 14, color: C.text }}>{item.label}</div>
                  <div style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 13, color: C.textSec }}>{item.val}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36, borderRadius: 14, overflow: "hidden", height: 180, border: `1px solid ${C.border}`, position: "relative" }}>
            <Image src="/uploads/Impression machines.webp" alt="Machines impression grand format" fill className="object-cover" style={{ filter: "brightness(0.9) saturate(1.1)" }} />
          </div>
        </Reveal>

        {/* Right form */}
        <Reveal dir="right">
          <div style={{ background: C.bgSoft, border: `1px solid ${C.border}`, borderRadius: 16, padding: 40 }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#FFF0EA", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <Check size={28} color={C.orange} strokeWidth={2.5} />
                </div>
                <h3 style={{ fontFamily: "Outfit", fontWeight: 500, fontSize: 22, color: C.text, marginBottom: 10 }}>Demande envoyée !</h3>
                <p style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 15, color: C.textSec, lineHeight: 1.7 }}>
                  Merci {form.nom} — notre équipe vous recontacte dans les 2 heures avec votre devis bâche grand format.
                </p>
                <button onClick={() => { setStatus("idle"); setForm({ nom: "", tel: "", email: "", dims: "", message: "" }); }}
                  style={{ marginTop: 24, background: "none", border: `1px solid ${C.border}`, borderRadius: 8, padding: "10px 20px", fontFamily: "Inter", fontSize: 14, color: C.textSec, cursor: "pointer" }}>
                  Nouveau devis
                </button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3 style={{ fontFamily: "Outfit", fontWeight: 500, fontSize: 20, color: C.text, marginBottom: 24 }}>Demande de devis — Bâches</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                  <div>
                    <label style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500, color: C.textSec, display: "block", marginBottom: 6 }}>Nom *</label>
                    <input style={iStyle("nom")} placeholder="Votre nom" value={form.nom}
                      onChange={e => { setForm({ ...form, nom: e.target.value }); setErrors({ ...errors, nom: false }); }}
                      onFocus={e => { (e.target as HTMLInputElement).style.borderColor = C.blue; (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(29,96,241,0.08)"; }}
                      onBlur={e => { (e.target as HTMLInputElement).style.borderColor = errors.nom ? "#e44" : C.border; (e.target as HTMLInputElement).style.boxShadow = "none"; }} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500, color: C.textSec, display: "block", marginBottom: 6 }}>Téléphone *</label>
                    <input style={iStyle("tel")} placeholder="+212 6XX" value={form.tel}
                      onChange={e => { setForm({ ...form, tel: e.target.value }); setErrors({ ...errors, tel: false }); }}
                      onFocus={e => { (e.target as HTMLInputElement).style.borderColor = C.blue; (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(29,96,241,0.08)"; }}
                      onBlur={e => { (e.target as HTMLInputElement).style.borderColor = errors.tel ? "#e44" : C.border; (e.target as HTMLInputElement).style.boxShadow = "none"; }} />
                  </div>
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500, color: C.textSec, display: "block", marginBottom: 6 }}>Email</label>
                  <input type="email" style={iStyle("email")} placeholder="votre@email.com" value={form.email}
                    onChange={e => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: false }); }}
                    onFocus={e => { (e.target as HTMLInputElement).style.borderColor = C.blue; (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(29,96,241,0.08)"; }}
                    onBlur={e => { (e.target as HTMLInputElement).style.borderColor = C.border; (e.target as HTMLInputElement).style.boxShadow = "none"; }} />
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500, color: C.textSec, display: "block", marginBottom: 6 }}>Dimensions souhaitées</label>
                  <input style={iStyle("dims")} placeholder="Ex: 3m × 1.5m, ou précisez la surface" value={form.dims}
                    onChange={e => setForm({ ...form, dims: e.target.value })}
                    onFocus={e => { (e.target as HTMLInputElement).style.borderColor = C.blue; (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(29,96,241,0.08)"; }}
                    onBlur={e => { (e.target as HTMLInputElement).style.borderColor = C.border; (e.target as HTMLInputElement).style.boxShadow = "none"; }} />
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500, color: C.textSec, display: "block", marginBottom: 6 }}>Détails du projet</label>
                  <textarea style={{ ...iStyle("message"), height: 110, resize: "vertical" }} placeholder="Matière, finitions, délai souhaité, usage prévu…" value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={e => { (e.target as HTMLTextAreaElement).style.borderColor = C.blue; (e.target as HTMLTextAreaElement).style.boxShadow = "0 0 0 3px rgba(29,96,241,0.08)"; }}
                    onBlur={e => { (e.target as HTMLTextAreaElement).style.borderColor = C.border; (e.target as HTMLTextAreaElement).style.boxShadow = "none"; }} />
                </div>
                {status === "error" && (
                  <p style={{ fontFamily: "Inter", fontSize: 13, color: "#e44", marginBottom: 12 }}>Une erreur s'est produite. Réessayez.</p>
                )}
                <button type="submit" disabled={status === "loading"}
                  style={{ width: "100%", background: C.orange, color: "#fff", border: "none", borderRadius: 8, padding: 15, fontFamily: "Inter", fontWeight: 500, fontSize: 15, cursor: "pointer", opacity: status === "loading" ? 0.7 : 1, transition: "opacity 0.2s" }}>
                  {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande de devis"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── DEVIS MODAL ───────────────────────────────────────────
function DevisModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ budget: "", delai: "", nom: "", tel: "" });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) setTimeout(() => { setStep(0); setDone(false); setData({ budget: "", delai: "", nom: "", tel: "" }); }, 300);
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSend = async () => {
    setLoading(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom: data.nom, telephone: data.tel, service: "Bâches & Grand Format", budget: data.budget, delai: data.delai }),
      });
    } catch {}
    setLoading(false);
    setDone(true);
  };

  if (!open) return null;

  const steps = [
    {
      content: (
        <div>
          <h3 style={{ fontFamily: "Outfit", fontWeight: 500, fontSize: 20, color: C.text, marginBottom: 8 }}>Budget estimé</h3>
          <p style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 14, color: C.textMuted, marginBottom: 20 }}>Quel est votre budget approximatif ?</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["< 500 MAD", "500–2000 MAD", "2000–10 000 MAD", "10 000+ MAD"].map(b => (
              <button key={b} onClick={() => setData({ ...data, budget: b })}
                style={{ padding: "12px 16px", border: `1.5px solid ${data.budget === b ? C.orange : C.border}`, borderRadius: 8, background: data.budget === b ? "#FFF0EA" : "#fff", fontFamily: "Inter", fontSize: 13, color: data.budget === b ? C.orange : C.text, cursor: "pointer", transition: "all 0.15s" }}>
                {b}
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      content: (
        <div>
          <h3 style={{ fontFamily: "Outfit", fontWeight: 500, fontSize: 20, color: C.text, marginBottom: 8 }}>Délai souhaité</h3>
          <p style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 14, color: C.textMuted, marginBottom: 20 }}>Quand avez-vous besoin de votre bâche ?</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Urgent < 24h", "Standard 48h", "1 semaine", "Flexible"].map(d => (
              <button key={d} onClick={() => setData({ ...data, delai: d })}
                style={{ padding: "12px 16px", border: `1.5px solid ${data.delai === d ? C.orange : C.border}`, borderRadius: 8, background: data.delai === d ? "#FFF0EA" : "#fff", fontFamily: "Inter", fontSize: 13, color: data.delai === d ? C.orange : C.text, cursor: "pointer", transition: "all 0.15s" }}>
                {d}
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      content: (
        <div>
          <h3 style={{ fontFamily: "Outfit", fontWeight: 500, fontSize: 20, color: C.text, marginBottom: 20 }}>Vos coordonnées</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <label style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500, color: C.textSec, display: "block", marginBottom: 6 }}>Nom</label>
              <input style={{ width: "100%", padding: "12px 14px", border: `1.5px solid ${C.border}`, borderRadius: 8, fontFamily: "Inter", fontSize: 14, color: C.text, outline: "none" }} placeholder="Votre nom" value={data.nom} onChange={e => setData({ ...data, nom: e.target.value })} />
            </div>
            <div>
              <label style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500, color: C.textSec, display: "block", marginBottom: 6 }}>Téléphone / WhatsApp</label>
              <input style={{ width: "100%", padding: "12px 14px", border: `1.5px solid ${C.border}`, borderRadius: 8, fontFamily: "Inter", fontSize: 14, color: C.text, outline: "none" }} placeholder="+212 663 65 34 43" value={data.tel} onChange={e => setData({ ...data, tel: e.target.value })} />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(5px)" }} onClick={onClose}>
      <div style={{ background: "#fff", borderRadius: 20, padding: 40, width: "100%", maxWidth: 480, position: "relative", boxShadow: "0 28px 80px rgba(0,0,0,0.2)" }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, width: 32, height: 32, borderRadius: "50%", border: `1px solid ${C.border}`, background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: C.textMuted, fontSize: 16 }}>✕</button>
        {!done ? (
          <>
            <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
              {steps.map((_, i) => (
                <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= step ? C.orange : C.bgLight, transition: "background 0.3s" }} />
              ))}
            </div>
            {steps[step].content}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 32 }}>
              {step > 0
                ? <button onClick={() => setStep(step - 1)} style={{ border: `1px solid ${C.border}`, borderRadius: 8, padding: "11px 24px", fontFamily: "Inter", fontSize: 14, color: C.textSec, background: "#fff", cursor: "pointer" }}>Retour</button>
                : <div />
              }
              {step < steps.length - 1
                ? <button onClick={() => setStep(step + 1)} style={{ background: C.orange, color: "#fff", border: "none", borderRadius: 8, padding: "11px 28px", fontFamily: "Inter", fontWeight: 500, fontSize: 14, cursor: "pointer" }}>Continuer</button>
                : <button onClick={handleSend} disabled={loading} style={{ background: C.orange, color: "#fff", border: "none", borderRadius: 8, padding: "11px 28px", fontFamily: "Inter", fontWeight: 500, fontSize: 14, cursor: "pointer", opacity: loading ? 0.7 : 1 }}>{loading ? "Envoi…" : "Envoyer"}</button>
              }
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#FFF0EA", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <Check size={28} color={C.orange} strokeWidth={2.5} />
            </div>
            <h3 style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: 22, color: C.text, marginBottom: 10 }}>Demande envoyée !</h3>
            <p style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 15, color: C.textSec, lineHeight: 1.7 }}>
              Merci {data.nom || ""} — nous vous revenons dans les 2 heures avec votre devis bâche grand format.
            </p>
            <button onClick={onClose} style={{ marginTop: 24, background: C.orange, color: "#fff", border: "none", borderRadius: 8, padding: "13px 32px", fontFamily: "Inter", fontWeight: 500, fontSize: 15, cursor: "pointer" }}>Fermer</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── PAGE ──────────────────────────────────────────────────
export default function BachesPage() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Hero onDevis={() => setModal(true)} />
      <Description />
      <Specs />
      <Galerie />
      <Processus />
      <Tarifs onDevis={() => setModal(true)} />
      <FAQ />
      <CTAForm />
      <DevisModal open={modal} onClose={() => setModal(false)} />
    </>
  );
}
