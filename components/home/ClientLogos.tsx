import Image from "next/image";

type ClientLogo =
  | {
      name: string;
      logo: string;
      imageClassName: string;
    }
  | {
      name: string;
      mark: string;
      accent: string;
      color: string;
      light: string;
    };

const clients: ClientLogo[] = [
  {
    name: "Valencia",
    logo: "/uploads/valencia-logo-jus.png",
    imageClassName: "max-h-12 max-w-[132px]",
  },
  {
    name: "Maroc Telecom",
    logo: "/uploads/maroc-telecom.jpg",
    imageClassName: "max-h-12 max-w-[148px]",
  },
  {
    name: "Dahab Caf\u00e9",
    logo: "/uploads/dahab-caffe.png",
    imageClassName: "max-h-14 max-w-[132px]",
  },
  {
    name: "SIAM",
    logo: "/uploads/siam.png",
    imageClassName: "max-h-12 max-w-[116px]",
  },
  {
    name: "InnoTech",
    mark: "Inno",
    accent: "Tech",
    color: "#FE5E17",
    light: "#FFF0EA",
  },
  {
    name: "MediaPro",
    mark: "Media",
    accent: "Pro",
    color: "#1D60F1",
    light: "#EEF3FF",
  },
];

export default function ClientLogos() {
  return (
    <section className="py-14 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-body text-xs text-text-muted tracking-[0.5px] mb-9 uppercase">
          Ils nous font confiance
        </p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex min-h-[108px] items-center justify-center rounded-2xl border border-border bg-white px-4 py-5 shadow-[0_10px_30px_rgba(26,26,26,0.045)] transition duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-card"
            >
              {"logo" in client ? (
                <Image
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  width={180}
                  height={80}
                  className={`h-auto w-auto object-contain transition duration-300 group-hover:scale-[1.03] ${client.imageClassName}`}
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-center">
                  <div
                    className="rounded-xl px-3 py-2 font-display text-lg font-semibold tracking-[0.2px]"
                    style={{ background: client.light, color: client.color }}
                  >
                    {client.mark}
                    <span className="text-text-primary">{client.accent}</span>
                  </div>
                  <span
                    className="h-0.5 w-10 rounded-full"
                    style={{ background: client.color }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
