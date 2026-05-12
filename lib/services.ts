export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  coverImage: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: "baches-grand-format",
    title: "Bâches & Grand Format",
    shortDesc: "Impression haute résolution sur PVC, mesh, polyester.",
    description:
      "Nos solutions d'impression grand format donnent à votre marque une visibilité maximale. Du PVC bâché aux mesh ventilés, chaque support est produit avec des encres UV résistantes aux intempéries.",
    features: [
      "Bâches PVC haute résistance",
      "Mesh ventilé pour grandes surfaces",
      "Banderoles et oriflammes",
      "Résolution jusqu'à 1440 dpi",
      "Finitions renforcées (œillets, ourlets)",
      "Livraison sous 48h",
    ],
    coverImage: "/uploads/impression-sur-baches.jpg",
    image: "/uploads/impression-sur-baches.jpg",
  },
  {
    slug: "enseignes-signaletique",
    title: "Enseignes & Signalétique",
    shortDesc: "Caissons lumineux LED, lettres découpées 3D, panneaux directionnels.",
    description:
      "Faites-vous remarquer avec des enseignes professionnelles. Nos caissons LED éclairent votre marque jour et nuit, tandis que nos lettres 3D découpées au laser ajoutent du relief à votre devanture.",
    features: [
      "Caissons lumineux LED économiques",
      "Lettres découpées 3D en relief",
      "Panneaux directionnels et totem",
      "Plaques de porte gravées",
      "Signalétique intérieure et extérieure",
      "Installation sur site à Meknès",
    ],
    coverImage: "/uploads/enseignes-signaletique.jfif",
    image: "/uploads/enseignes-signaletique.jfif",
  },
  {
    slug: "impression-offset-digital",
    title: "Impression Offset & Digital",
    shortDesc: "Cartes de visite, flyers, brochures, catalogues, affiches.",
    description:
      "OctoPub est spécialiste de l'impression offset et numérique pour supports professionnels : cartes de visite, flyers, brochures, catalogues, affiches et supports commerciaux. Nous adaptons le procédé, le papier et les finitions selon vos objectifs, vos quantités et vos délais.",
    features: [
      "Cartes de visite avec finition mate, brillante, vernis sélectif ou pelliculage",
      "Flyers A6, A5, A4, A3",
      "Brochures et catalogues reliés",
      "Affiches tous formats",
      "Dépliants commerciaux",
      "Menus restaurants",
      "Chemises à rabat",
      "Papier spécial : kraft, texturé, couché, bristol",
      "Impression petite série en digital",
      "Impression grand volume en offset",
    ],
    coverImage: "/uploads/impression-offset-digital.png",
    image: "/uploads/impression-offset-digital.png",
  },
  {
    slug: "covering-stickers",
    title: "Covering & Stickers",
    shortDesc: "Habillage véhicules, vitrophanie, stickers découpe, décoration murale.",
    description:
      "Transformez vos véhicules en supports publicitaires mobiles. Notre covering vinyle total ou partiel utilise des films premium 3M pour un rendu impeccable et une durabilité de 5 ans en extérieur.",
    features: [
      "Covering total et partiel véhicules",
      "Vitrophanie (translucide, opaque, microperforé)",
      "Stickers découpe et impression",
      "Décoration murale vinyle",
      "Films 3M et Avery certifiés",
      "Pose professionnelle garantie",
    ],
    coverImage: "/uploads/covering-stickers.jfif",
    image: "/uploads/covering-stickers.jfif",
  },
  {
    slug: "supports-evenementiels",
    title: "Supports Événementiels",
    shortDesc: "Stands, kakémonos, roll-up, murs d'images, arches, structures.",
    description:
      "Pour vos événements, salons et expositions, OctoPub conçoit et fabrique tous vos supports de communication événementielle. Montage facile, transport pratique, impact visuel maximum.",
    features: [
      "Roll-up et kakémonos rétractables",
      "Stands parapluies et modulaires",
      "Murs d'images tissu et PVC",
      "Arches et portiques gonflables",
      "Structures pop-up",
      "Kit complet avec sac de transport",
    ],
    coverImage: "/uploads/roll-up.jpeg",
    image: "/uploads/roll-up.jpeg",
  },
  {
    slug: "publicite-digitale",
    title: "Publicité Digitale",
    shortDesc: "Campagnes Meta Ads, visuels publicitaires, stratégie communication.",
    description:
      "Développez votre présence en ligne avec nos services de publicité digitale ciblée. Nous créons et gérons vos campagnes Meta Ads pour toucher vos clients à Meknès et dans toute la région.",
    features: [
      "Campagnes Facebook & Instagram Ads",
      "Création de visuels publicitaires",
      "Ciblage géographique Meknès / Fès",
      "Stratégie de communication locale",
      "Reporting mensuel de performance",
      "Gestion de budget optimisée",
    ],
    coverImage: "/uploads/campagnes-meta-ads.jfif",
    image: "/uploads/campagnes-meta-ads.jfif",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
