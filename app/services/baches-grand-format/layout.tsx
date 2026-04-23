import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impression Bâche Meknès | OctoPub",
  description:
    "Impression bâche grand format à Meknès. PVC 510g, 1440 dpi, sur mesure jusqu'à 5m de large. Délai 24–48h. Devis gratuit en 2h. OctoPub Meknès. +212 663 65 34 43",
};

export default function BachesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
