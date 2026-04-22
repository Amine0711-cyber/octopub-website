"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Lead {
  id: string;
  created_at: string;
  nom: string;
  telephone: string;
  email: string | null;
  service: string | null;
  message: string | null;
  statut: "nouveau" | "en_cours" | "traite";
}

const STATUT_CYCLE: Record<Lead["statut"], Lead["statut"]> = {
  nouveau:  "en_cours",
  en_cours: "traite",
  traite:   "nouveau",
};

const STATUT_LABELS: Record<Lead["statut"], string> = {
  nouveau:  "Nouveau",
  en_cours: "En cours",
  traite:   "Traité",
};

const STATUT_STYLES: Record<Lead["statut"], React.CSSProperties> = {
  nouveau:  { background: "rgba(254,94,23,0.12)",  color: "#FE5E17", border: "1px solid rgba(254,94,23,0.3)" },
  en_cours: { background: "rgba(29,96,241,0.10)",  color: "#1D60F1", border: "1px solid rgba(29,96,241,0.3)" },
  traite:   { background: "rgba(22,163,74,0.10)",  color: "#16a34a", border: "1px solid rgba(22,163,74,0.3)" },
};

export default function AdminDashboard({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [updating, setUpdating] = useState<string | null>(null);
  const router = useRouter();

  const handleStatusClick = async (lead: Lead) => {
    const nextStatut = STATUT_CYCLE[lead.statut];
    setUpdating(lead.id);
    try {
      const res = await fetch("/api/admin/update-status", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: lead.id, status: nextStatut }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === lead.id ? { ...l, statut: nextStatut } : l))
        );
      }
    } finally {
      setUpdating(null);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  };

  const handleExportCSV = () => {
    const headers = ["Date", "Nom", "Téléphone", "Email", "Service", "Message", "Statut"];
    const rows = leads.map((l) => [
      new Date(l.created_at).toLocaleString("fr-FR"),
      l.nom,
      l.telephone,
      l.email ?? "",
      l.service ?? "",
      (l.message ?? "").replace(/\n/g, " "),
      STATUT_LABELS[l.statut],
    ]);
    const csv = [headers, ...rows]
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `octopub-leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const counts = {
    total:    leads.length,
    nouveau:  leads.filter((l) => l.statut === "nouveau").length,
    en_cours: leads.filter((l) => l.statut === "en_cours").length,
    traite:   leads.filter((l) => l.statut === "traite").length,
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F4F4F4", fontFamily: "Inter, sans-serif" }}>

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #E0E0E0", position: "sticky", top: 0, zIndex: 40 }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 20 }}>
              <span style={{ color: "#FE5E17" }}>Octo</span>
              <span style={{ color: "#1D60F1" }}>Pub</span>
            </div>
            <span style={{ fontSize: 11, color: "#AAAAAA", textTransform: "uppercase" as const, letterSpacing: "0.1em", borderLeft: "1px solid #E0E0E0", paddingLeft: 16 }}>
              Administration
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button onClick={() => router.refresh()} style={btnStyle}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
                <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
              </svg>
              Actualiser
            </button>
            <button onClick={handleExportCSV} style={btnStyle}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Export CSV
            </button>
            <button onClick={handleLogout} style={{ ...btnStyle, color: "#ef4444" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "32px 24px" }}>

        {/* Stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 32 }}>
          {[
            { label: "Total",    value: counts.total,    color: "#1A1A1A" },
            { label: "Nouveaux", value: counts.nouveau,  color: "#FE5E17" },
            { label: "En cours", value: counts.en_cours, color: "#1D60F1" },
            { label: "Traités",  value: counts.traite,   color: "#16a34a" },
          ].map((s) => (
            <div key={s.label} style={{ background: "#fff", border: "1px solid #E0E0E0", borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 36, color: s.color, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#AAAAAA", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div style={{ background: "#fff", border: "1px solid #E0E0E0", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" as const }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #E0E0E0", background: "#FAFAFA" }}>
                  {["Date", "Nom", "Téléphone", "Email", "Service", "Message", "Statut"].map((col) => (
                    <th key={col} style={{ textAlign: "left" as const, padding: "12px 16px", fontSize: 11, fontWeight: 500, color: "#888888", textTransform: "uppercase" as const, letterSpacing: "0.08em", whiteSpace: "nowrap" as const }}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 && (
                  <tr>
                    <td colSpan={7} style={{ textAlign: "center" as const, padding: "60px 0", color: "#AAAAAA", fontSize: 14 }}>
                      Aucune demande reçue pour le moment.
                    </td>
                  </tr>
                )}
                {leads.map((lead, i) => (
                  <tr
                    key={lead.id}
                    style={{ borderBottom: i < leads.length - 1 ? "1px solid #F0F0F0" : "none" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLTableRowElement).style.background = "#FAFAFA"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLTableRowElement).style.background = ""; }}
                  >
                    <td style={{ padding: "14px 16px", fontSize: 12, color: "#888888", whiteSpace: "nowrap" as const }}>
                      {new Date(lead.created_at).toLocaleDateString("fr-FR", {
                        day: "2-digit", month: "2-digit", year: "2-digit",
                        hour: "2-digit", minute: "2-digit",
                      })}
                    </td>
                    <td style={{ padding: "14px 16px", fontSize: 14, fontWeight: 500, color: "#1A1A1A", whiteSpace: "nowrap" as const }}>
                      {lead.nom}
                    </td>
                    <td style={{ padding: "14px 16px", whiteSpace: "nowrap" as const }}>
                      <a href={`tel:${lead.telephone}`} style={{ fontSize: 13, color: "#FE5E17", textDecoration: "none", fontWeight: 500 }}>
                        {lead.telephone}
                      </a>
                    </td>
                    <td style={{ padding: "14px 16px", fontSize: 12, color: "#555555" }}>
                      {lead.email ? (
                        <a href={`mailto:${lead.email}`} style={{ color: "#1D60F1", textDecoration: "none" }}>
                          {lead.email}
                        </a>
                      ) : "—"}
                    </td>
                    <td style={{ padding: "14px 16px", fontSize: 12, color: "#555555", whiteSpace: "nowrap" as const }}>
                      {lead.service || "—"}
                    </td>
                    <td style={{ padding: "14px 16px", fontSize: 12, color: "#555555", maxWidth: 220 }}>
                      <span
                        title={lead.message ?? ""}
                        style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" } as React.CSSProperties}
                      >
                        {lead.message || "—"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px" }}>
                      <button
                        onClick={() => handleStatusClick(lead)}
                        disabled={updating === lead.id}
                        style={{
                          ...STATUT_STYLES[lead.statut],
                          padding: "5px 12px",
                          borderRadius: 100,
                          fontSize: 12,
                          fontWeight: 500,
                          cursor: updating === lead.id ? "not-allowed" : "pointer",
                          opacity: updating === lead.id ? 0.5 : 1,
                          transition: "opacity 0.15s",
                          whiteSpace: "nowrap" as const,
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {STATUT_LABELS[lead.statut]}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p style={{ marginTop: 16, fontSize: 12, color: "#AAAAAA", textAlign: "right" as const }}>
          {leads.length} demande{leads.length !== 1 ? "s" : ""} au total · Cliquez sur le badge pour changer le statut
        </p>
      </div>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  background: "none",
  border: "1px solid #E0E0E0",
  borderRadius: 6,
  padding: "7px 12px",
  fontSize: 12,
  fontFamily: "Inter, sans-serif",
  color: "#555555",
  cursor: "pointer",
  transition: "border-color 0.15s, color 0.15s",
};
