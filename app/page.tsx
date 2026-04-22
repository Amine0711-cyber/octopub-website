import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import ClientLogos from "@/components/home/ClientLogos";
import Marquee from "@/components/home/Marquee";
import ServicesGrid from "@/components/home/ServicesGrid";
import About from "@/components/home/About";
import Process from "@/components/home/Process";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import CtaBand from "@/components/home/CtaBand";
import ContactPreview from "@/components/home/ContactPreview";

/* Blank fallback that takes up space so layout doesn't jump */
function SectionFallback({ height = 400 }: { height?: number }) {
  return <div style={{ minHeight: height, background: "transparent" }} />;
}

export default function HomePage() {
  return (
    <>
      {/* Hero is above the fold — no Suspense delay needed */}
      <Hero />

      <Suspense fallback={<SectionFallback height={80} />}>
        <ClientLogos />
      </Suspense>

      <Suspense fallback={<SectionFallback height={56} />}>
        <Marquee />
      </Suspense>

      <Suspense fallback={<SectionFallback height={600} />}>
        <ServicesGrid />
      </Suspense>

      <Suspense fallback={<SectionFallback height={500} />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionFallback height={500} />}>
        <Process />
      </Suspense>

      <Suspense fallback={<SectionFallback height={600} />}>
        <Portfolio />
      </Suspense>

      <Suspense fallback={<SectionFallback height={400} />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionFallback height={240} />}>
        <CtaBand />
      </Suspense>

      <Suspense fallback={<SectionFallback height={600} />}>
        <ContactPreview />
      </Suspense>
    </>
  );
}
