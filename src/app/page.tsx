import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ExperienceSection } from "@/components/experience-section";
import { JasaRaharjaSection } from "@/components/jasa-raharja-section";
import { TrioSection } from "@/components/trio-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#090607] text-[#f5f5f7] overflow-x-hidden selection:bg-[#c81e28] selection:text-white">
      {/* Persistent subtle background ambient radial gradient */}
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(160,20,30,0.12)_0%,transparent_65%)]"
        aria-hidden="true"
      />

      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <JasaRaharjaSection />
      <TrioSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
