import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://octopub.co", lastModified: new Date(), priority: 1 },
    { url: "https://octopub.co/services/baches-grand-format", lastModified: new Date(), priority: 0.9 },
    { url: "https://octopub.co/services/enseignes-signaletique", lastModified: new Date(), priority: 0.9 },
    { url: "https://octopub.co/services/impression-offset-digital", lastModified: new Date(), priority: 0.9 },
    { url: "https://octopub.co/services/covering-stickers", lastModified: new Date(), priority: 0.9 },
    { url: "https://octopub.co/services/supports-evenementiels", lastModified: new Date(), priority: 0.9 },
    { url: "https://octopub.co/services/publicite-digitale", lastModified: new Date(), priority: 0.9 },
    { url: "https://octopub.co/realisations", lastModified: new Date(), priority: 0.8 },
    { url: "https://octopub.co/contact", lastModified: new Date(), priority: 0.8 },
  ];
}
