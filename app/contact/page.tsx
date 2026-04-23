import type { Metadata } from "next";
import ContactForm from "@/components/shared/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Devis Gratuit Meknès",
  description:
    "Contactez OctoPub pour un devis gratuit en 2h. Imprimerie & publicité à Meknès : bâches, enseignes, covering. Réponse garantie. +212 663 65 34 43",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+212 663 65 34 43",
    href: "tel:+212663653443",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@octopub.ma",
    href: "mailto:contact@octopub.ma",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Meknès, Maroc",
    href: null,
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun–Sam  8h30–19h00",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-brand-orange font-body text-xs tracking-[0.5px] font-medium mb-3">
            Parlons-en
          </p>
          <h1 className="font-display font-normal text-6xl md:text-8xl text-text-primary leading-tight mb-6">
            Contactez
            <br />
            <span className="text-brand-orange">OctoPub</span>
          </h1>
          <p className="font-body font-light text-text-secondary text-lg max-w-xl leading-[1.8]">
            Un projet en tête ? Remplissez le formulaire ou contactez-nous directement.
            Devis gratuit sous 24h.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left: contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display font-normal text-2xl text-text-primary mb-6">
                  Nos coordonnées
                </h2>
                <div className="space-y-5">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "#EEF3FF" }}
                      >
                        <Icon size={16} style={{ color: "#1D60F1" }} />
                      </div>
                      <div>
                        <p className="text-text-muted font-body text-xs tracking-[0.3px] mb-1">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-text-primary font-body text-sm hover:text-brand-blue transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-text-primary font-body text-sm">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="border border-border bg-bg-secondary rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle size={20} className="text-green-600" />
                  <h3 className="font-display font-normal text-lg text-text-primary">
                    WhatsApp
                  </h3>
                </div>
                <p className="text-text-secondary font-body font-light text-sm mb-4">
                  Pour une réponse rapide, contactez-nous directement sur WhatsApp.
                </p>
                <a
                  href="https://wa.me/212663653443"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white font-body font-medium tracking-[0.5px] text-xs px-5 py-3 rounded-md hover:bg-green-700 active:scale-95 transition-all duration-200"
                >
                  Ouvrir WhatsApp
                </a>
              </div>

              {/* Map placeholder */}
              <div className="aspect-video bg-bg-secondary border border-border rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-brand-orange mx-auto mb-2" />
                  <p className="text-text-muted font-body text-sm">Meknès, Maroc</p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-border rounded-lg p-8 md:p-10 shadow-soft">
                <h2 className="font-display font-normal text-2xl text-text-primary mb-2">
                  Demander un devis
                </h2>
                <p className="text-text-muted font-body font-light text-sm mb-8">
                  Réponse garantie sous 24h — Sans engagement
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
