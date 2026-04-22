"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function OctoPubLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
      <svg width={40} height={40} viewBox="0 0 100 100" fill="none">
        <defs>
          <linearGradient id="login-og" x1="20" y1="10" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF8C00" />
            <stop offset="100%" stopColor="#FE5E17" />
          </linearGradient>
        </defs>
        <path d="M50 10 C28 10 12 26 12 48 C12 66 24 80 40 84 L40 72 C30 68 24 59 24 48 C24 33 36 22 50 22 C64 22 76 33 76 48 C76 59 70 68 60 72 L60 84 C76 80 88 66 88 48 C88 26 72 10 50 10Z" fill="url(#login-og)" />
        <ellipse cx="35" cy="88" rx="5" ry="8" fill="#FE5E17" transform="rotate(-15 35 88)" />
        <ellipse cx="44" cy="92" rx="5" ry="8" fill="#FE5E17" />
        <ellipse cx="56" cy="92" rx="5" ry="8" fill="#FE5E17" />
        <ellipse cx="65" cy="88" rx="5" ry="8" fill="#FE5E17" transform="rotate(15 65 88)" />
        <circle cx="50" cy="46" r="10" fill="rgba(255,255,255,0.9)" />
      </svg>
      <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 26, lineHeight: 1 }}>
        <span style={{ color: "#FE5E17" }}>Octo</span>
        <span style={{ color: "#1D60F1" }}>Pub</span>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin/dashboard");
      } else {
        const data = await res.json();
        setError(data.error ?? "Mot de passe incorrect");
      }
    } catch {
      setError("Erreur de connexion. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F4F4F4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: 380 }}>
        {/* Logo + title */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <OctoPubLogo />
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              fontSize: 22,
              color: "#1A1A1A",
              marginTop: 20,
              marginBottom: 6,
            }}
          >
            Administration
          </h1>
          <p style={{ fontSize: 14, color: "#888888", fontWeight: 300 }}>
            Accès réservé à l&apos;équipe OctoPub
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            border: "1px solid #E0E0E0",
            borderRadius: 14,
            padding: "36px 32px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
          }}
        >
          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                display: "block",
                fontSize: 12,
                fontWeight: 500,
                color: "#555555",
                marginBottom: 8,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              required
              autoFocus
              placeholder="••••••••••••"
              style={{
                width: "100%",
                padding: "13px 16px",
                border: `1.5px solid ${error ? "#ef4444" : "#E0E0E0"}`,
                borderRadius: 8,
                fontSize: 14,
                fontFamily: "Inter, sans-serif",
                color: "#1A1A1A",
                background: "#FAFAFA",
                outline: "none",
                transition: "border-color 0.2s",
                boxSizing: "border-box",
              }}
              onFocus={(e) => { if (!error) e.currentTarget.style.borderColor = "#1D60F1"; }}
              onBlur={(e) => { if (!error) e.currentTarget.style.borderColor = "#E0E0E0"; }}
            />
          </div>

          {error && (
            <div
              style={{
                marginBottom: 16,
                padding: "10px 14px",
                background: "#FEF2F2",
                border: "1px solid #FECACA",
                borderRadius: 8,
                fontSize: 13,
                color: "#ef4444",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            style={{
              width: "100%",
              background: loading || !password ? "#CCCCCC" : "#FE5E17",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "14px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: 15,
              cursor: loading || !password ? "not-allowed" : "pointer",
              transition: "background 0.2s, opacity 0.2s",
              letterSpacing: "0.02em",
            }}
          >
            {loading ? "Vérification…" : "Accéder"}
          </button>
        </form>
      </div>
    </div>
  );
}
