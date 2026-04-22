const logos = [
  { name: "Valencia",      abbr: "V",  color: "#FE5E17", light: "#FFF0EA" },
  { name: "Maroc Telecom", abbr: "MT", color: "#1D60F1", light: "#EEF3FF" },
  { name: "Dahab Café",    abbr: "DC", color: "#FE5E17", light: "#FFF0EA" },
  { name: "SIAM",          abbr: "SI", color: "#1D60F1", light: "#EEF3FF" },
  { name: "InnoTech",      abbr: "IT", color: "#FE5E17", light: "#FFF0EA" },
  { name: "MediaPro",      abbr: "MP", color: "#1D60F1", light: "#EEF3FF" },
];

export default function ClientLogos() {
  return (
    <section className="py-12 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-body text-xs text-text-muted tracking-[0.5px] mb-8 uppercase">
          Ils nous font confiance
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 font-display font-semibold text-xs"
                style={{ background: logo.light, color: logo.color }}
              >
                {logo.abbr}
              </div>
              <span className="font-body font-medium text-sm tracking-[0.3px] text-text-secondary">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
