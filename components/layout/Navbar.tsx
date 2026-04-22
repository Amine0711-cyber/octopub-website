"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import DevisModal from "@/components/shared/DevisModal";

function OctoPubLogo({ white = false, size = 36 }: { white?: boolean; size?: number }) {
  const orange = white ? "#fff" : "#FE5E17";
  const blue = white ? "#fff" : "#1D60F1";
  const gid = white ? "nav-og-w" : "nav-og";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <defs>
          <linearGradient id={gid} x1="20" y1="10" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={white ? "#fff" : "#FF8C00"} />
            <stop offset="100%" stopColor={white ? "rgba(255,255,255,0.7)" : "#FE5E17"} />
          </linearGradient>
        </defs>
        <path d="M50 10 C28 10 12 26 12 48 C12 66 24 80 40 84 L40 72 C30 68 24 59 24 48 C24 33 36 22 50 22 C64 22 76 33 76 48 C76 59 70 68 60 72 L60 84 C76 80 88 66 88 48 C88 26 72 10 50 10Z" fill={`url(#${gid})`} />
        <ellipse cx="35" cy="88" rx="5" ry="8" fill={orange} transform="rotate(-15 35 88)" />
        <ellipse cx="44" cy="92" rx="5" ry="8" fill={orange} />
        <ellipse cx="56" cy="92" rx="5" ry="8" fill={orange} />
        <ellipse cx="65" cy="88" rx="5" ry="8" fill={orange} transform="rotate(15 65 88)" />
        <circle cx="50" cy="46" r="10" fill={white ? "rgba(255,255,255,0.3)" : "#fff"} />
      </svg>
      <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: size * 0.55, lineHeight: 1 }}>
        <span style={{ color: orange }}>Octo</span>
        <span style={{ color: blue }}>Pub</span>
      </div>
    </div>
  );
}

const navLinks = [
  { label: "Services",     href: "/#services" },
  { label: "À propos",    href: "/#about" },
  { label: "Réalisations", href: "/#portfolio" },
  { label: "Contact",      href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [devisOpen, setDevisOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          background: "#fff",
          borderBottom: `1px solid ${scrolled ? "#E0E0E0" : "transparent"}`,
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.07)" : "none",
          transition: "all 0.3s",
          padding: "0 24px",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", alignItems: "center", height: 72, gap: 32 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
            <OctoPubLogo size={34} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex" style={{ flex: 1, justifyContent: "center", gap: 36 }}>
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="nav-link"
                style={{ fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 15 }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 20, flexShrink: 0 }}>
            <a
              href="tel:+212663653443"
              style={{ fontFamily: "Inter,sans-serif", fontSize: 14, fontWeight: 500, color: "#555555", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FE5E17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.22 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.14a16 16 0 006.95 6.95l1.41-1.41a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +212 663 65 34 43
            </a>
            <button
              onClick={() => setDevisOpen(true)}
              style={{ background: "#FE5E17", color: "#fff", border: "none", borderRadius: 6, padding: "10px 22px", fontFamily: "Inter,sans-serif", fontWeight: 500, fontSize: 14, cursor: "pointer", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Devis Gratuit
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Ouvrir le menu"
            style={{ marginLeft: "auto", color: "#1A1A1A", padding: 8, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 1001,
            background: "#fff",
            display: "flex", flexDirection: "column",
          }}
        >
          {/* Top bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: "1px solid #F0F0F0", height: 72, flexShrink: 0 }}>
            <Link href="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
              <OctoPubLogo size={32} />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer le menu"
              style={{ background: "none", border: "none", cursor: "pointer", color: "#1A1A1A", padding: 8, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <X size={26} />
            </button>
          </div>

          {/* Nav links */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 0, padding: "24px 0" }}>
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Outfit',sans-serif", fontWeight: 400, fontSize: 26,
                  color: "#1A1A1A", textDecoration: "none",
                  padding: "16px 0", width: "100%", textAlign: "center",
                  borderBottom: "1px solid #F5F5F5", display: "block",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#FE5E17"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#1A1A1A"; }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ padding: "32px 24px", borderTop: "1px solid #F0F0F0", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <button
              onClick={() => { setMenuOpen(false); setDevisOpen(true); }}
              style={{
                width: "100%", maxWidth: 360,
                background: "#FE5E17", color: "#fff", border: "none", borderRadius: 8,
                padding: "15px", fontFamily: "Inter,sans-serif", fontWeight: 500, fontSize: 16,
                cursor: "pointer", transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Devis Gratuit
            </button>
            <a
              href="tel:+212663653443"
              style={{ fontFamily: "Inter,sans-serif", fontSize: 14, color: "#555555", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FE5E17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.22 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.14a16 16 0 006.95 6.95l1.41-1.41a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +212 663 65 34 43
            </a>
          </div>
        </div>
      )}

      <DevisModal open={devisOpen} onClose={() => setDevisOpen(false)} />
    </>
  );
}
