"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ArrowRight, Check } from "lucide-react";

const serviceOptions = [
  { id: "baches", label: "Bâches & Grand Format", image: "/uploads/impression-sur-baches.jpg" },
  { id: "enseignes", label: "Enseignes & Signalétique", image: "/uploads/enseignes-signaletique.jfif" },
  { id: "offset", label: "Impression Offset", image: "/uploads/impression-offset-digital.png" },
  { id: "covering", label: "Covering & Stickers", image: "/uploads/covering-stickers.jfif" },
  { id: "evenementiel", label: "Supports Événementiels", image: "/uploads/roll-up.jpeg" },
  { id: "digital", label: "Publicité Digitale", image: "/uploads/campagnes-meta-ads.jfif" },
];

const budgetOptions = ["< 500 MAD", "500–2000 MAD", "2000–5000 MAD", "5000+ MAD"];
const delaiOptions = ["Express (24h)", "Standard (48–72h)", "1 semaine", "Flexible"];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DevisModal({ open, onClose }: Props) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [delai, setDelai] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setStep(1);
        setService("");
        setBudget("");
        setDelai("");
        setNom("");
        setTelephone("");
        setSuccess(false);
        setError("");
      }, 300);
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  async function handleSubmit() {
    if (!nom.trim() || !telephone.trim()) {
      setError("Veuillez remplir votre nom et numéro de téléphone.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom,
          telephone,
          service,
          budget,
          delai,
        }),
      });
      if (!res.ok) throw new Error();
      setSuccess(true);
    } catch {
      setError("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white rounded-xl w-full max-w-lg shadow-xl overflow-hidden"
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <p className="font-body text-xs text-brand-orange tracking-[0.5px] font-medium mb-0.5">
              Étape {success ? "✓" : step}/3
            </p>
            <h3 className="font-display font-semibold text-xl text-text-primary">
              {success
                ? "Demande envoyée !"
                : step === 1
                ? "Choisissez votre service"
                : step === 2
                ? "Budget & délai"
                : "Vos coordonnées"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-bg-secondary transition-colors"
          >
            <X size={16} className="text-text-muted" />
          </button>
        </div>

        {/* Progress bar */}
        {!success && (
          <div className="h-1 bg-bg-tertiary">
            <div
              className="h-full bg-brand-orange transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        {/* Body */}
        <div className="p-6">
          {success ? (
            <div className="text-center py-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "#EEF3FF" }}
              >
                <Check size={28} style={{ color: "#1D60F1" }} />
              </div>
              <p className="font-body text-text-secondary text-sm leading-[1.8]">
                Merci <strong>{nom}</strong> ! Notre équipe vous contactera sous 24h
                au <strong>{telephone}</strong> pour votre devis.
              </p>
              <button
                onClick={onClose}
                className="mt-6 font-body font-medium text-sm text-brand-orange hover:underline"
              >
                Fermer
              </button>
            </div>
          ) : step === 1 ? (
            <div className="grid grid-cols-2 gap-3">
              {serviceOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setService(opt.label);
                    setStep(2);
                  }}
                  className="flex flex-col items-start gap-2 p-4 rounded-lg border text-left transition-all duration-200"
                  style={{
                    borderColor: service === opt.label ? "#FE5E17" : "#E0E0E0",
                    background: service === opt.label ? "#FFF5F0" : "#FFFFFF",
                  }}
                >
                  <span className="relative h-16 w-full overflow-hidden rounded-md bg-bg-secondary">
                    <Image
                      src={opt.image || "/FavIcone OctoPub.png"}
                      alt={opt.label}
                      fill
                      className="object-cover"
                    />
                  </span>
                  <span className="font-body text-xs text-text-primary font-medium leading-tight">
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          ) : step === 2 ? (
            <div className="space-y-6">
              <div>
                <label className="font-body text-xs text-text-muted tracking-[0.3px] mb-3 block">
                  Budget estimé
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {budgetOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setBudget(opt)}
                      className="py-2.5 px-4 rounded-lg border font-body text-sm transition-all duration-200"
                      style={{
                        borderColor: budget === opt ? "#FE5E17" : "#E0E0E0",
                        background: budget === opt ? "#FFF5F0" : "#FFFFFF",
                        color: budget === opt ? "#FE5E17" : "#555555",
                        fontWeight: budget === opt ? 500 : 400,
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-body text-xs text-text-muted tracking-[0.3px] mb-3 block">
                  Délai souhaité
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {delaiOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setDelai(opt)}
                      className="py-2.5 px-4 rounded-lg border font-body text-sm transition-all duration-200"
                      style={{
                        borderColor: delai === opt ? "#FE5E17" : "#E0E0E0",
                        background: delai === opt ? "#FFF5F0" : "#FFFFFF",
                        color: delai === opt ? "#FE5E17" : "#555555",
                        fontWeight: delai === opt ? 500 : 400,
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 rounded-lg border border-border font-body font-medium text-sm text-text-muted hover:bg-bg-secondary transition-colors"
                >
                  Retour
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-brand-orange text-white font-body font-medium text-sm hover:bg-orange-600 transition-colors"
                >
                  Continuer <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="font-body text-xs text-text-muted tracking-[0.3px] mb-1.5 block">
                  Nom complet *
                </label>
                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  placeholder="Votre nom"
                  className="w-full border border-border rounded-lg px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-blue transition-colors"
                />
              </div>
              <div>
                <label className="font-body text-xs text-text-muted tracking-[0.3px] mb-1.5 block">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  placeholder="+212 6XX XX XX XX"
                  className="w-full border border-border rounded-lg px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-blue transition-colors"
                />
              </div>
              {error && (
                <p className="font-body text-xs text-red-500">{error}</p>
              )}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 rounded-lg border border-border font-body font-medium text-sm text-text-muted hover:bg-bg-secondary transition-colors"
                >
                  Retour
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-brand-orange text-white font-body font-medium text-sm hover:bg-orange-600 disabled:opacity-60 transition-colors"
                >
                  {loading ? "Envoi…" : "Envoyer ma demande"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
