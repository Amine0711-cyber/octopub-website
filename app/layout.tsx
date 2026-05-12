import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/layout/ScrollReveal";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OctoPub — Impression Numérique & Publicité à Meknès",
    template: "%s | OctoPub Meknès",
  },
  description:
    "Imprimerie professionnelle à Meknès. Bâches, enseignes, covering, impression offset. Devis gratuit en 2h. +212 663 65 34 43",
  keywords: [
    "imprimerie meknès",
    "impression numérique maroc",
    "bâche publicitaire meknès",
    "enseigne lumineuse meknès",
    "covering véhicule meknès",
    "octopub",
  ],
  openGraph: {
    title: "OctoPub — Impression Numérique Meknès",
    description: "Votre partenaire impression à Meknès",
    url: "https://octopub.ma",
    siteName: "OctoPub",
    locale: "fr_MA",
    type: "website",
  },
  icons: {
    icon: "/FavIcone OctoPub.png",
    shortcut: "/FavIcone OctoPub.png",
    apple: "/FavIcone OctoPub.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "OctoPub",
  description: "Imprimerie numérique et publicité à Meknès",
  "@id": "https://octopub.ma",
  url: "https://octopub.ma",
  telephone: "+212663653443",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Anassi",
    addressLocality: "Meknès",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.8935,
    longitude: -5.5473,
  },
  openingHours: "Mo-Sa 08:30-19:00",
  priceRange: "$$",
  image: "https://octopub.ma/logo.png",
  sameAs: [
    "https://www.facebook.com/octopub",
    "https://www.instagram.com/octopub",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
