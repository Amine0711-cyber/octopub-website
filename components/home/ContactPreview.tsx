"use client";

import Image from "next/image";
import { useState } from "react";
import { useReveal } from "@/lib/useReveal";

const infos = [
  {
    label: "Adresse", value: "Anassi - Meknès, Maroc",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
  {
    label: "Téléphone", value: "+212 663653443", href: "tel:+212663653443",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.22 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.14a16 16 0 006.95 6.95l1.41-1.41a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  },
  {
    label: "Email", value: "contact@octopub.ma", href: "mailto:contact@octopub.ma",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
  {
    label: "Horaires", value: "Lun–Sam : 9h30 – 19h00",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
];

export default function ContactPreview() {
  const { ref, rv } = useReveal();
  const [form, setForm] = useState({ nom: "", tel: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (!form.nom.trim()) e.nom = true;
    if (!form.tel.trim()) e.tel = true;
    if (!form.email.match(/.+@.+\..+/)) e.email = true;
    if (!form.message.trim()) e.message = true;
    return e;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  const iStyle = (f: string) => ({
    width: "100%", padding: "14px 16px",
    border: `1.5px solid ${errors[f] ? "#e44" : "#E0E0E0"}`,
    borderRadius: 8, fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 14,
    color: "#1A1A1A", background: "#fff", outline: "none", transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
  } as React.CSSProperties);

  return (
    <section id="contact" ref={ref} style={{ background: "#F4F4F4", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        {/* Header */}
        <div className={rv("reveal")} style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontFamily: "Inter,sans-serif", fontSize: 12, fontWeight: 500, color: "#FE5E17", textTransform: "uppercase", letterSpacing: "0.12em" }}>Contact</span>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "clamp(32px,4vw,48px)", color: "#1A1A1A", marginTop: 12, letterSpacing: "-0.02em" }}>
            Parlons de votre <span style={{ color: "#FE5E17" }}>projet</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 60, alignItems: "start" }} className="contact-grid">
          {/* ── LEFT: info ── */}
          <div className={rv("reveal-left")}>
            <p style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 16, color: "#555555", lineHeight: 1.8, marginBottom: 36 }}>
              Nous répondons à tous les devis dans les 2 heures ouvrables. Notre équipe est disponible du lundi au samedi.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 36 }}>
              {infos.map((info, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "#FE5E17", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "Inter,sans-serif", fontSize: 11, color: "#888888", marginBottom: 2 }}>{info.label}</div>
                    {info.href ? (
                      <a href={info.href} style={{ fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 15, color: "#1A1A1A", textDecoration: "none" }}>{info.value}</a>
                    ) : (
                      <div style={{ fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 15, color: "#1A1A1A" }}>{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Showroom photo */}
            <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #E0E0E0", position: "relative", height: 180 }}>
              <Image src="/uploads/Design sans titre.png" alt="OctoPub Showroom" fill loading="lazy" style={{ objectFit: "cover" }} />
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div className={rv("reveal-right")} style={{ background: "#fff", border: "1px solid #E0E0E0", borderRadius: 16, padding: 32 }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#F0FFF4", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 500, fontSize: 22, color: "#1A1A1A", marginBottom: 10 }}>Message envoyé !</h3>
                <p style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 15, color: "#555555" }}>Nous vous répondrons dans les 2 heures ouvrables.</p>
                <button onClick={() => { setSent(false); setForm({ nom: "", tel: "", email: "", service: "", message: "" }); }} style={{ marginTop: 24, background: "none", border: "1px solid #E0E0E0", borderRadius: 8, padding: "10px 20px", fontFamily: "Inter,sans-serif", fontSize: 14, color: "#555555", cursor: "pointer" }}>
                  Nouveau message
                </button>
              </div>
            ) : (
              <form onSubmit={submit}>
                {/* Name + Phone row — stacks to 1 col on mobile */}
                <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ fontFamily: "Inter,sans-serif", fontSize: 12, fontWeight: 500, color: "#555555", display: "block", marginBottom: 6 }}>Nom complet *</label>
                    <input className="form-input" style={iStyle("nom")} placeholder="Votre nom" value={form.nom} onChange={(e) => { setForm({ ...form, nom: e.target.value }); setErrors({ ...errors, nom: false }); }} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "Inter,sans-serif", fontSize: 12, fontWeight: 500, color: "#555555", display: "block", marginBottom: 6 }}>Téléphone *</label>
                    <input className="form-input" style={iStyle("tel")} placeholder="+212 6XX XX XX XX" value={form.tel} onChange={(e) => { setForm({ ...form, tel: e.target.value }); setErrors({ ...errors, tel: false }); }} />
                  </div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontFamily: "Inter,sans-serif", fontSize: 12, fontWeight: 500, color: "#555555", display: "block", marginBottom: 6 }}>Email *</label>
                  <input className="form-input" style={iStyle("email")} placeholder="votre@email.com" value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: false }); }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontFamily: "Inter,sans-serif", fontSize: 12, fontWeight: 500, color: "#555555", display: "block", marginBottom: 6 }}>Service souhaité</label>
                  <select className="form-input" style={{ ...iStyle("service"), cursor: "pointer", appearance: "none" as const }} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                    <option value="">Sélectionner un service</option>
                    <option>Bâches & Grand Format</option>
                    <option>Enseignes & Signalétique</option>
                    <option>Impression Offset & Digital</option>
                    <option>Covering & Stickers</option>
                    <option>Supports Événementiels</option>
                    <option>Publicité Digitale</option>
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontFamily: "Inter,sans-serif", fontSize: 12, fontWeight: 500, color: "#555555", display: "block", marginBottom: 6 }}>Message *</label>
                  <textarea className="form-input" style={{ ...iStyle("message"), height: 120, resize: "vertical" }} placeholder="Décrivez votre projet..." value={form.message} onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: false }); }} />
                </div>
                <button type="submit" disabled={loading} style={{ width: "100%", background: "#FE5E17", color: "#fff", border: "none", borderRadius: 8, padding: 15, fontFamily: "Inter,sans-serif", fontWeight: 500, fontSize: 15, cursor: "pointer", transition: "opacity 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; }} onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
                  {loading ? "Envoi…" : "Envoyer le message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
