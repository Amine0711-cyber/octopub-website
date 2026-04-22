"use client";

import { useState } from "react";
import Button from "./Button";
import { services } from "@/lib/services";
import { CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  nom: string;
  telephone: string;
  email: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    nom: "",
    telephone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erreur lors de l'envoi");
      }

      setStatus("success");
      setForm({ nom: "", telephone: "", email: "", service: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur inconnue");
    }
  };

  const inputClass =
    "w-full bg-white border border-border text-text-primary placeholder-text-muted px-4 py-3 text-sm font-body rounded-md focus:outline-none focus:border-brand-blue transition-colors duration-200";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle size={48} className="text-brand-orange" />
        <h3 className="font-display font-normal text-2xl text-text-primary">
          Message envoyé !
        </h3>
        <p className="text-text-secondary font-body font-light max-w-sm">
          Nous vous recontacterons dans les plus brefs délais. Merci pour votre confiance.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-brand-orange text-sm font-body underline mt-2"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-body font-medium text-text-muted tracking-[0.3px] mb-2">
            Nom complet <span className="text-brand-orange">*</span>
          </label>
          <input
            type="text"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            required
            placeholder="Votre nom"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-body font-medium text-text-muted tracking-[0.3px] mb-2">
            Téléphone <span className="text-brand-orange">*</span>
          </label>
          <input
            type="tel"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            required
            placeholder="+212 6XX XX XX XX"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-body font-medium text-text-muted tracking-[0.3px] mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="votre@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs font-body font-medium text-text-muted tracking-[0.3px] mb-2">
          Service souhaité
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">Sélectionner un service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-body font-medium text-text-muted tracking-[0.3px] mb-2">
          Description du projet
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Décrivez votre projet, format souhaité, quantité, délai..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-500 text-sm font-body">
          <AlertCircle size={16} />
          <span>{errorMsg}</span>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "loading"}
        className="w-full"
      >
        {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande →"}
      </Button>
    </form>
  );
}
