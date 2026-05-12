import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MessageCircle,
} from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

const whatsappUrl =
  "https://wa.me/212663653443?text=Bonjour%20OctoPub%2C%20je%20souhaite%20un%20devis%20pour%20une%20enseigne%20ou%20une%20signal%C3%A9tique.";

export const metadata: Metadata = {
  title: "Enseignes & Signalétique Meknès | OctoPub",
  description:
    "Conception, fabrication et pose d'enseignes lumineuses, lettres relief, plaques, panneaux et signalétique professionnelle à Meknès. Devis gratuit.",
};

const serviceImages = {
  hero: "/uploads/enseignes-signaletique.jfif",
  led: "/uploads/enseignes-signaletique.jfif",
  facade: "/uploads/enseignes-signaletique.jfif",
  interior: "/uploads/design-sans-titre.png",
  plaques: "/uploads/carte-de-visite-octopub.png",
  vitrine: "/uploads/covering-stickers.jfif",
};

const enseigneTypes = [
  "Enseigne lumineuse LED",
  "Lettres boitiers",
  "Lettres relief PVC, plexiglas ou dibond",
  "Caisson lumineux simple ou double face",
  "Panneau dibond pour façade",
  "Enseigne plexiglas avec entretoises",
  "Enseigne boutique et devanture",
  "Enseigne intérieure d'accueil",
];

const signaletiqueTypes = [
  "Plaques directionnelles",
  "Panneaux d'orientation",
  "Plaques de bureau et plaques de porte",
  "Signalétique murale et vitrine",
  "Pictogrammes et panneaux informatifs",
  "Panneaux de sécurité",
  "Signalétique événementielle",
  "Totems simples et supports d'accueil",
];

const materials = [
  {
    name: "Dibond aluminium",
    desc: "Support rigide, léger et durable, adapté aux façades, panneaux extérieurs et plaques professionnelles.",
  },
  {
    name: "Plexiglas",
    desc: "Rendu premium, brillant ou diffusant, idéal pour lettres relief, plaques murales et enseignes lumineuses.",
  },
  {
    name: "PVC expansé",
    desc: "Solution économique et propre pour signalétique intérieure, lettrage relief et panneaux temporaires.",
  },
  {
    name: "Vinyle adhésif",
    desc: "Découpe ou impression pour vitrines, murs, portes, stickers directionnels et marquage de surfaces.",
  },
];

const specs = [
  { label: "Matériaux", value: "Dibond, plexiglas, PVC, vinyle, aluminium, LED" },
  { label: "Épaisseurs", value: "PVC 3 à 10 mm, dibond 3 mm, plexiglas 3 à 10 mm selon projet" },
  { label: "Finitions", value: "Brillant, mat, relief, rétroéclairage, découpe CNC, impression UV, film laminé" },
  { label: "Formats", value: "Sur mesure : plaque, panneau, façade, vitrine, totem, caisson" },
  { label: "Usage", value: "Intérieur, extérieur, façade, bureau, commerce, showroom, événement" },
  { label: "Résistance", value: "UV, humidité, poussière et usage quotidien selon support choisi" },
  { label: "Pose", value: "Entretoises, adhésif, rails, visserie, structure métallique ou installation sur site" },
  { label: "Personnalisation", value: "Couleurs, logo, typographie, dimensions, éclairage, orientation et pictogrammes" },
  { label: "Délais", value: "48h à 7 jours ouvrables selon dimensions, quantité, éclairage et pose" },
];

const benefits = [
  "Une présence visible et cohérente dès l'extérieur de votre local.",
  "Des supports adaptés à votre budget, à votre marque et à votre environnement.",
  "Une orientation plus claire pour vos clients, visiteurs et équipes.",
  "Une finition professionnelle qui renforce la confiance avant même le premier contact.",
];

const uses = ["Magasins", "Bureaux", "Restaurants", "Cliniques", "Écoles", "Showrooms"];

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl">
      <span className="font-body text-xs font-medium uppercase tracking-[0.12em] text-brand-orange">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-text-primary md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 font-body text-base font-light leading-[1.85] text-text-secondary">
        {text}
      </p>
    </div>
  );
}

function ImageCard({
  src,
  title,
  text,
}: {
  src: string;
  title: string;
  text: string;
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-white">
      <div className="relative aspect-[16/10] bg-bg-secondary">
        <Image src={src} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-medium text-text-primary">{title}</h3>
        <p className="mt-3 font-body text-sm font-light leading-[1.75] text-text-secondary">{text}</p>
      </div>
    </article>
  );
}

export default function EnseignesSignaletiquePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-text-primary pt-32 text-white">
        <Image
          src={serviceImages.hero}
          alt="Enseignes et signalétique professionnelle OctoPub Meknès"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <Link
            href="/#services"
            className="mb-10 inline-flex items-center gap-2 font-body text-sm text-white/70 transition-colors hover:text-brand-orange"
          >
            <ArrowLeft size={14} />
            Tous les services
          </Link>
          <div className="max-w-[calc(100vw-32px)] sm:max-w-3xl">
            <span className="inline-flex rounded-full border border-brand-orange/40 bg-brand-orange/15 px-4 py-1.5 font-body text-xs font-medium uppercase tracking-[0.12em] text-brand-orange">
              Fabrication sur mesure à Meknès
            </span>
            <h1 className="mt-6 max-w-full break-words font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-7xl">
              Enseignes &<span className="block">Signalétique</span>
            </h1>
            <p className="mt-6 max-w-full break-words font-body text-base font-light leading-[1.85] text-white/78 sm:max-w-2xl md:text-lg">
              OctoPub conçoit, fabrique et pose des enseignes et supports de signalétique pour rendre votre marque visible,
              guider vos visiteurs et donner une finition professionnelle à vos espaces commerciaux.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#devis"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3 font-body text-sm font-medium text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Demander un devis
                <ArrowRight size={16} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/35 px-6 py-3 font-body text-sm font-medium text-white transition-colors hover:border-white sm:w-auto"
              >
                <MessageCircle size={16} />
                Commander sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <SectionHeader
            eyebrow="Service enseigne"
            title="Des enseignes visibles, durables et adaptées à votre façade"
            text="Nous réalisons des enseignes pour boutiques, restaurants, agences, showrooms et locaux professionnels. Chaque projet est étudié selon l'emplacement, la distance de lecture, l'éclairage, les contraintes de pose et l'image de marque recherchée."
          />
          <div className="grid grid-cols-2 gap-3">
            {[
              { image: serviceImages.led, label: "LED et lumineux" },
              { image: serviceImages.facade, label: "Sur mesure" },
              { image: serviceImages.vitrine, label: "Extérieur durable" },
              { image: serviceImages.interior, label: "Délais maîtrisés" },
            ].map((item) => (
              <div key={item.label} className="overflow-hidden rounded-xl border border-border bg-bg-secondary">
                <div className="relative h-24 bg-white">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="px-5 pb-5 pt-4 font-body text-sm font-medium text-text-primary">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Solutions proposées"
            title="Enseigne et signalétique, séparées mais cohérentes"
            text="Nous pouvons intervenir sur un seul support ou construire un ensemble complet : façade, vitrine, accueil, circulation intérieure, plaques de bureaux et panneaux informatifs."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <ImageCard
              src={serviceImages.led}
              title="Enseignes lumineuses"
              text="Caissons LED, lettres boitiers, rétroéclairage et enseignes façade pour une visibilité jour et nuit."
            />
            <ImageCard
              src={serviceImages.interior}
              title="Signalétique intérieure"
              text="Orientation, plaques de bureau, pictogrammes, panneaux muraux et supports d'accueil pour espaces professionnels."
            />
            <ImageCard
              src={serviceImages.vitrine}
              title="Vitrines & adhésifs"
              text="Stickers vitrine, marquage dépoli, lettrage adhésif, horaires, promotions et habillage de surfaces."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-xl border border-border bg-white p-7 shadow-soft">
            <h2 className="font-display text-2xl font-semibold text-text-primary">Types d'enseignes</h2>
            <div className="mt-6 grid gap-3">
              {enseigneTypes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 flex-shrink-0 text-brand-orange" size={17} />
                  <span className="font-body text-sm font-light leading-6 text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-white p-7 shadow-soft">
            <h2 className="font-display text-2xl font-semibold text-text-primary">Types de signalétique</h2>
            <div className="mt-6 grid gap-3">
              {signaletiqueTypes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 flex-shrink-0 text-brand-blue" size={17} />
                  <span className="font-body text-sm font-light leading-6 text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Matériaux et finitions"
            title="Des supports choisis selon l'usage réel"
            text="Une enseigne extérieure, une plaque de bureau et un sticker vitrine n'ont pas les mêmes contraintes. Nous recommandons le support, l'épaisseur et la finition selon la durée d'utilisation, l'exposition et le rendu souhaité."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {materials.map((item) => (
              <article key={item.name} className="rounded-xl border border-border bg-white p-6">
                <h3 className="font-display text-lg font-medium text-text-primary">{item.name}</h3>
                <p className="mt-3 font-body text-sm font-light leading-[1.75] text-text-secondary">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Fiche technique"
            title="Spécifications professionnelles"
            text="Les caractéristiques exactes sont validées au devis après dimensions, photo de l'emplacement, contraintes de pose et objectif de visibilité."
          />
          <div className="mt-12 overflow-hidden rounded-xl border border-border bg-white">
            {specs.map((row, index) => (
              <div
                key={row.label}
                className={`grid grid-cols-1 gap-2 px-5 py-4 md:grid-cols-[230px_1fr] md:px-7 ${
                  index !== specs.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="font-body text-sm font-medium text-text-primary">{row.label}</div>
                <div className="font-body text-sm font-light leading-6 text-text-secondary">{row.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-border bg-white">
            <Image src={serviceImages.facade} alt="Panneaux et enseignes façade" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div>
            <SectionHeader
              eyebrow="Avantages entreprise"
              title="Une signalétique qui travaille pour vos clients"
              text="Un bon système de signalétique réduit les hésitations, clarifie les parcours et donne une image organisée. Pour une enseigne, l'objectif est simple : être vu rapidement, être compris facilement et rester cohérent avec votre marque."
            />
            <div className="mt-8 grid gap-4">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg bg-white p-4">
                  <Check className="mt-0.5 flex-shrink-0 text-brand-orange" size={17} />
                  <p className="font-body text-sm font-light leading-6 text-text-secondary">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {uses.map((item) => (
                <span key={item} className="rounded-full bg-[#EEF3FF] px-4 py-2 font-body text-xs text-brand-blue">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="devis" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <span className="font-body text-xs font-medium uppercase tracking-[0.12em] text-brand-orange">
              Devis gratuit
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-text-primary md:text-5xl">
              Envoyez votre besoin, nous préparons la solution adaptée
            </h2>
            <p className="mt-5 font-body text-base font-light leading-[1.85] text-text-secondary">
              Pour un chiffrage précis, indiquez les dimensions, l'emplacement, l'usage intérieur ou extérieur, le support souhaité
              et joignez votre logo si disponible. Un conseiller OctoPub vous répond avec les options possibles.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-orange px-6 py-3 font-body text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle size={16} />
              Commander sur WhatsApp
            </a>
            <div className="mt-8 overflow-hidden rounded-xl border border-border">
              <Image
                src={serviceImages.plaques}
                alt="Plaques professionnelles et signalétique de bureau"
                width={900}
                height={520}
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
          <div className="rounded-xl border border-border bg-white p-6 shadow-soft md:p-8">
            <h3 className="font-display text-2xl font-semibold text-text-primary">Demander un devis</h3>
            <p className="mb-7 mt-2 font-body text-sm font-light text-text-muted">
              Réponse sous 2 heures ouvrables, gratuit et sans engagement.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
