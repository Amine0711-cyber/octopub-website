import Link from "next/link";
import Image from "next/image";
import { Service } from "@/lib/services";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative block bg-white border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-[5px]"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Image area */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.06]"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        {/* Number badge */}
        <div
          className="absolute top-4 right-4 font-display font-semibold text-sm px-2.5 py-1 rounded-md"
          style={{ background: "#1D60F1", color: "#fff" }}
        >
          {num}
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="font-display font-normal text-xl text-text-primary mb-2 group-hover:text-brand-orange transition-colors duration-200">
          {service.title}
        </h3>
        <p className="font-body font-light text-text-secondary text-sm leading-[1.8] mb-5">
          {service.shortDesc}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {service.features.slice(0, 2).map((feat: string) => (
            <span
              key={feat}
              className="text-xs font-body px-2.5 py-1 rounded-full"
              style={{ background: "#EEF3FF", color: "#1D60F1" }}
            >
              {feat}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-brand-orange text-sm font-body font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span>Découvrir</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}
