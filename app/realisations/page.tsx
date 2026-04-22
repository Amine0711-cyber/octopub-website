import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez les réalisations d'OctoPub : enseignes, bâches, covering, impression et supports événementiels à Meknès.",
};

const categories = ["Tous", "Grand Format", "Enseignes", "Covering", "Événementiel", "Impression"];

const projects = [
  { id: 1, title: "Enseigne LED façade restaurant", category: "Enseignes", img: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800" },
  { id: 2, title: "Covering flotte véhicules auto-école", category: "Covering", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800" },
  { id: 3, title: "Bâche publicitaire grand format", category: "Grand Format", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800" },
  { id: 4, title: "Stand salon de l'emploi Meknès", category: "Événementiel", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800" },
  { id: 5, title: "Catalogue produits 32 pages", category: "Impression", img: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=800" },
  { id: 6, title: "Vitrophanie boutique mode", category: "Covering", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800" },
  { id: 7, title: "Panneaux directionnels hôtel", category: "Enseignes", img: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800" },
  { id: 8, title: "Roll-up et kakémonos séminaire", category: "Événementiel", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800" },
  { id: 9, title: "Flyers et affiches festival", category: "Impression", img: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=800" },
  { id: 10, title: "Mur d'image événement corporate", category: "Événementiel", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800" },
  { id: 11, title: "Oriflammes route commerciale", category: "Grand Format", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800" },
  { id: 12, title: "Lettres découpées 3D boutique", category: "Enseignes", img: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800" },
];

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-brand-orange font-body text-xs tracking-[0.5px] font-medium mb-3">
            Notre portfolio
          </p>
          <h1 className="font-display font-normal text-6xl md:text-8xl text-text-primary leading-tight mb-6">
            Réalisations
          </h1>
          <p className="font-body font-light text-text-secondary text-lg max-w-xl mx-auto leading-[1.8]">
            Découvrez nos derniers travaux — de l&apos;impression offset aux enseignes
            lumineuses, en passant par le covering véhicules.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`font-body text-xs tracking-[0.3px] px-4 py-2 rounded-full border transition-all duration-200 ${
                  cat === "Tous"
                    ? "bg-brand-orange border-brand-orange text-white"
                    : "border-border text-text-muted hover:border-brand-blue hover:text-brand-blue"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-[4/3] overflow-hidden bg-bg-tertiary border border-border rounded-lg cursor-pointer"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  style={{ background: "rgba(29,96,241,0.85)" }}
                />

                <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white/80 font-body text-xs tracking-[0.3px] mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-display font-normal text-base text-white leading-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="absolute top-3 left-3">
                  <span
                    className="font-body text-xs tracking-[0.3px] px-3 py-1 rounded-full"
                    style={{ background: "#EEF3FF", color: "#1D60F1" }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg-secondary border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-normal text-4xl md:text-5xl text-text-primary leading-tight mb-4">
            Votre projet, notre
            <br />
            <span className="text-brand-orange">prochaine réalisation</span>
          </h2>
          <p className="font-body font-light text-text-secondary text-base mb-8">
            Contactez-nous pour un devis gratuit et personnalisé sous 24h.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-body font-medium tracking-[0.5px] text-sm px-8 py-4 rounded-md hover:bg-orange-600 active:scale-[0.98] transition-all duration-200"
          >
            Démarrer mon projet <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
