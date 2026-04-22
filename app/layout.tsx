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
    default: "OctoPub — Votre Image, Notre Mission · Meknès",
    template: "%s | OctoPub Meknès",
  },
  description:
    "OctoPub, votre imprimerie et agence publicitaire à Meknès. Bâches grand format, enseignes LED, covering véhicules, impression offset, supports événementiels.",
  keywords: [
    "imprimerie Meknès",
    "publicité Meknès",
    "bâches grand format",
    "enseignes lumineuses",
    "covering véhicules",
    "flyers brochures",
    "OctoPub",
  ],
  openGraph: {
    title: "OctoPub — L'impression qui marque",
    description:
      "Imprimerie & publicité professionnelle à Meknès, Maroc. Devis gratuit sous 24h.",
    locale: "fr_MA",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
