import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://octopub.ma", lastModified: new Date(), priority: 1 },
    { url: "https://octopub.ma/services/baches-grand-format", lastModified: new Date(), priority: 0.9 },
    { url: "https://octopub.ma/services/enseignes-signaletique", lastModified: new Date(), priority: 0.9 },
    { url: "https://octopub.ma/services/impression-offset-digital", lastModified: new Date(), priority: 0.9 },
    { url: "https://octopub.ma/services/covering-stickers", lastModified: new Date(), priority: 0.9 },
    { url: "https://octopub.ma/services/supports-evenementiels", lastModified: new Date(), priority: 0.9 },
    { url: "https://octopub.ma/services/publicite-digitale", lastModified: new Date(), priority: 0.9 },
    { url: "https://octopub.ma/realisations", lastModified: new Date(), priority: 0.8 },
    { url: "https://octopub.ma/contact", lastModified: new Date(), priority: 0.8 },
  ];
}
