export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  icon: string;
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
    icon: "🖼️",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600",
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
    icon: "💡",
    image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600",
  },
  {
    slug: "impression-offset-digital",
    title: "Impression Offset & Digital",
    shortDesc: "Cartes de visite, flyers, brochures, catalogues, affiches.",
    description:
      "De la carte de visite au catalogue produit, nous maîtrisons l'impression offset pour les grands volumes et le numérique pour les petites séries. Qualité irréprochable, délais rapides.",
    features: [
      "Cartes de visite vernis sélectif / pelliculage",
      "Flyers A6, A5, A4, A3",
      "Brochures et catalogues reliés",
      "Affiches tous formats",
      "Papiers spéciaux (krafts, texturés)",
      "Offset 4 couleurs haute fidélité",
    ],
    icon: "🖨️",
    image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=600",
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
    icon: "🚗",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600",
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
    icon: "🎪",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
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
    icon: "📱",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
