import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} Meknès | OctoPub`,
    description: `${service.shortDesc} à Meknès. ${service.description.slice(0, 80)}… Devis gratuit en 2h. +212 663 65 34 43`,
  };
}

const enseignesRichFeatures = [
  {
    title: "Caissons lumineux LED",
    image: "/uploads/enseignes-signaletique.jfif",
  },
  {
    title: "Lettres découpées 3D en relief",
    image: "/uploads/enseignes-signaletique.jfif",
  },
  {
    title: "Panneaux directionnels et totem",
    image: "/uploads/design-sans-titre.png",
  },
  {
    title: "Plaques de porte gravées",
    image: "/uploads/carte-de-visite-octopub.png",
  },
  {
    title: "Signalétique intérieure et extérieure",
    image: "/uploads/enseignes-signaletique.jfif",
  },
  {
    title: "Installation sur site à Meknès",
    image: "/uploads/impression-machines.webp",
  },
];

const offsetTechnicalSheet = [
  { label: "Formats disponibles", value: "A6, A5, A4, A3, formats personnalisés, cartes et affiches" },
  { label: "Types de papier", value: "Kraft, texturé, couché mat ou brillant, bristol, papier spécial" },
  { label: "Grammages", value: "De 90 g à 350 g selon le support et la finition" },
  { label: "Finitions", value: "Mat, brillant, vernis sélectif, pelliculage, rainage, pliage, reliure" },
  { label: "Couleurs", value: "Quadrichromie, noir et blanc, tons directs sur demande" },
  { label: "Quantités", value: "Petites séries en digital et grands volumes en offset" },
  { label: "Délais indicatifs", value: "Selon format, quantité, finition et validation du fichier" },
  { label: "Utilisation recommandée", value: "Communication commerciale, événementielle, institutionnelle et retail" },
];

const offsetAudiences = [
  "Entreprises",
  "Restaurants",
  "Agences",
  "Boutiques",
  "Écoles",
  "Événements",
  "Associations",
  "Marques personnelles",
];

const offsetWhatsappUrl =
  "https://wa.me/212663653443?text=Bonjour%20OctoPub%2C%20je%20souhaite%20commander%20ou%20demander%20un%20devis%20pour%20une%20impression%20offset%20ou%20digital.";

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  const isEnseignes = slug === "enseignes-signaletique";
  const isOffset = slug === "impression-offset-digital";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-text-muted hover:text-brand-orange text-sm font-body mb-8 transition-colors duration-200 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Tous les services
          </Link>

          <div className="relative mb-8 h-32 w-56 overflow-hidden rounded-2xl border border-border bg-white shadow-soft sm:h-40 sm:w-72">
            <Image
              src={service.coverImage || "/FavIcone OctoPub.png"}
              alt={service.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <h1 className="font-display font-semibold text-5xl md:text-7xl text-text-primary leading-tight mb-6">
            {service.title}
          </h1>
          <p className="font-body font-light text-text-secondary text-lg md:text-xl max-w-2xl leading-[1.8]">
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 ${isEnseignes ? 'lg:grid-cols-4' : 'lg:grid-cols-2'} gap-12`}>
            
            {/* Left: Other Services (Sidebar on desktop if Enseignes) */}
            <div className={`${isEnseignes ? 'lg:col-span-1 order-2 lg:order-1' : 'order-2'}`}>
              <div className={`${!isEnseignes && 'mt-12'}`}>
                <h3 className="font-display font-semibold text-xl text-text-primary mb-6">
                  Autres services
                </h3>
                <div className="space-y-3">
                  {others.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center justify-between p-4 bg-white border border-border rounded-xl hover:border-brand-orange group transition-all duration-200"
                      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="relative h-11 w-14 overflow-hidden rounded-lg border border-border bg-bg-secondary flex-shrink-0">
                          <Image
                            src={s.coverImage || "/FavIcone OctoPub.png"}
                            alt={s.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </span>
                        <span className="text-text-secondary font-body text-sm group-hover:text-text-primary transition-colors">
                          {s.title}
                        </span>
                      </div>
                      <ArrowRight
                        size={14}
                        className="text-text-muted group-hover:text-brand-orange transition-colors"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle: Features / Grid */}
            <div className={`${isEnseignes ? 'lg:col-span-2 order-1 lg:order-2' : 'order-1'}`}>
              <h2 className="font-display font-semibold text-3xl text-text-primary mb-10">
                Ce qui est inclus
              </h2>
              
              {isEnseignes ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {enseignesRichFeatures.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="group border border-border rounded-2xl bg-white overflow-hidden shadow-soft hover:shadow-card hover:border-brand-orange/30 transition-all duration-300"
                    >
                      {/* Image container */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-bg-secondary">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      {/* Content */}
                      <div className="p-5">
                        <h4 className="font-display font-medium text-[15px] text-text-primary leading-tight">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              ) : isOffset ? (
                <div className="space-y-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="rounded-2xl border border-border bg-white p-5 shadow-[0_8px_24px_rgba(26,26,26,0.04)]"
                      >
                        <div className="relative mb-4 h-28 overflow-hidden rounded-xl bg-bg-secondary">
                          <Image
                            src={service.coverImage || "/FavIcone OctoPub.png"}
                            alt={feature}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="font-body text-sm font-light leading-[1.7] text-text-secondary">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h2 className="font-display font-semibold text-3xl text-text-primary mb-6">
                      Fiche technique
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {offsetTechnicalSheet.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-xl border border-border bg-bg-secondary/40 p-4"
                        >
                          <p className="font-body text-xs font-medium uppercase tracking-[0.4px] text-brand-orange mb-2">
                            {item.label}
                          </p>
                          <p className="font-body text-sm font-light leading-[1.7] text-text-secondary">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="font-display font-semibold text-3xl text-text-primary mb-6">
                      Pour qui ?
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {offsetAudiences.map((audience) => (
                        <span
                          key={audience}
                          className="rounded-full border border-border bg-white px-4 py-2 font-body text-sm text-text-secondary shadow-[0_4px_14px_rgba(26,26,26,0.035)]"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-text-primary p-6 sm:p-8">
                    <h2 className="font-display font-semibold text-3xl text-white mb-3">
                      Lancer votre impression
                    </h2>
                    <p className="font-body font-light text-white/70 text-sm leading-[1.8] mb-6">
                      Envoyez vos formats, quantités et finitions souhaitées. OctoPub vous oriente vers la solution la plus adaptée entre digital et offset.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="#devis-service"
                        className="inline-flex items-center justify-center rounded-lg bg-brand-orange px-5 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-orange-600"
                      >
                        Demander un devis
                      </a>
                      <a
                        href={offsetWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-body text-sm font-medium text-white transition-colors hover:border-white/40"
                      >
                        Commander sur WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-brand-blue flex-shrink-0 mt-0.5"
                      />
                      <span className="font-body font-light text-text-secondary text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Right: Quote form */}
            <div className={`${isEnseignes ? 'lg:col-span-1 order-3' : 'order-3'}`}>
              <div id="devis-service" className="bg-white border border-border rounded-2xl p-8 shadow-soft sticky top-24">
                <h2 className="font-display font-semibold text-2xl text-text-primary mb-2">
                  Demander un devis
                </h2>
                <p className="font-body font-light text-text-muted text-sm mb-8">
                  Réponse sous 2 heures — Gratuit et sans engagement
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
