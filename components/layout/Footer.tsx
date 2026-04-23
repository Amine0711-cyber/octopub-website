import Link from "next/link";

function OctoPubLogo({ size = 32 }: { size?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <defs>
          <linearGradient id="footer-og-w" x1="20" y1="10" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.7)" />
          </linearGradient>
        </defs>
        <path d="M50 10 C28 10 12 26 12 48 C12 66 24 80 40 84 L40 72 C30 68 24 59 24 48 C24 33 36 22 50 22 C64 22 76 33 76 48 C76 59 70 68 60 72 L60 84 C76 80 88 66 88 48 C88 26 72 10 50 10Z" fill="url(#footer-og-w)" />
        <ellipse cx="35" cy="88" rx="5" ry="8" fill="#fff" transform="rotate(-15 35 88)" />
        <ellipse cx="44" cy="92" rx="5" ry="8" fill="#fff" />
        <ellipse cx="56" cy="92" rx="5" ry="8" fill="#fff" />
        <ellipse cx="65" cy="88" rx="5" ry="8" fill="#fff" transform="rotate(15 65 88)" />
        <circle cx="50" cy="46" r="10" fill="rgba(255,255,255,0.3)" />
      </svg>
      <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: size * 0.55, lineHeight: 1 }}>
        <span style={{ color: "#fff" }}>Octo</span>
        <span style={{ color: "#fff" }}>Pub</span>
      </div>
    </div>
  );
}

const cols = [
  {
    title: "Services",
    links: [
      { label: "Bâches & Grand Format",    href: "/services/baches-grand-format" },
      { label: "Enseignes & Signalétique", href: "/services/enseignes-signaletique" },
      { label: "Impression Offset",        href: "/services/impression-offset-digital" },
      { label: "Covering & Stickers",      href: "/services/covering-stickers" },
      { label: "Supports Événementiels",   href: "/services/supports-evenementiels" },
      { label: "Publicité Digitale",       href: "/services/publicite-digitale" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "À propos",       href: "/#about" },
      { label: "Nos réalisations", href: "/realisations" },
      { label: "Processus",      href: "/#processus" },
      { label: "Témoignages",    href: "/#temoignages" },
      { label: "Contact",        href: "/#contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Anassi - Meknès, Maroc", href: "#" },
      { label: "+212 663653443",          href: "tel:+212663653443" },
      { label: "contact@octopub.co",      href: "mailto:contact@octopub.co" },
      { label: "Lun–Sam 9h30–19h00",     href: "#" },
    ],
  },
];

const socials = ["f", "in", "ig"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#1A1A1A", padding: "72px 40px 32px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 60, marginBottom: 60 }}>
          {/* Brand column */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "inline-block" }}>
              <OctoPubLogo size={32} />
            </Link>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 300, fontSize: 15, color: "rgba(255,255,255,0.55)", fontStyle: "italic", marginTop: 12 }}>
              Votre Image, Notre Mission
            </p>
            <p style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 14, color: "#AAAAAA", lineHeight: 1.8, marginTop: 12, maxWidth: 260 }}>
              Grand format, enseignes, offset et digital — toujours à temps, toujours au top.
            </p>
            <div className="footer-social" style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="social-icon"
                  style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#AAAAAA", fontFamily: "Inter,sans-serif", fontSize: 12, fontWeight: 500, textDecoration: "none" }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 500, fontSize: 14, color: "#fff", marginBottom: 20 }}>{col.title}</div>
              <div className="footer-links-col" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map((l) => (
                  <Link key={l.label} href={l.href} className="footer-link" style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 14, lineHeight: 1.4 }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{ borderTop: "1px solid #2A2A2A", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 13, color: "#666" }}>© {year} OctoPub — Meknès, Maroc</span>
          <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 300, fontSize: 13, color: "#666" }}>Impression · Publicité · Communication Visuelle</span>
        </div>
      </div>
    </footer>
  );
}
