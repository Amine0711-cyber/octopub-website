import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
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

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-text-muted hover:text-brand-blue text-sm font-body mb-8 transition-colors duration-200 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Tous les services
          </Link>

          <div className="text-6xl mb-6">{service.icon}</div>

          <h1 className="font-display font-normal text-5xl md:text-7xl text-text-primary leading-tight mb-6">
            {service.title}
          </h1>
          <p className="font-body font-light text-text-secondary text-lg md:text-xl max-w-2xl leading-[1.8]">
            {service.description}
          </p>
        </div>
      </section>

      {/* Features + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Features */}
            <div>
              <h2 className="font-display font-normal text-3xl text-text-primary mb-8">
                Ce qui est inclus
              </h2>
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

              {/* Other services */}
              <div className="mt-12">
                <h3 className="font-display font-normal text-xl text-text-primary mb-6">
                  Autres services
                </h3>
                <div className="space-y-3">
                  {others.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center justify-between p-4 bg-white border border-border rounded-lg hover:border-brand-orange group transition-all duration-200"
                      style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{s.icon}</span>
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

            {/* Quote form */}
            <div>
              <div className="bg-white border border-border rounded-lg p-8 shadow-soft">
                <h2 className="font-display font-normal text-2xl text-text-primary mb-2">
                  Demander un devis
                </h2>
                <p className="font-body font-light text-text-muted text-sm mb-8">
                  Réponse sous 24h — Gratuit et sans engagement
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
