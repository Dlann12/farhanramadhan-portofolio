import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { VideoEditorTimeline } from "@/components/video-editor-timeline";
import { JasaRaharjaSection } from "@/components/jasa-raharja-section";
import { ExperienceSection } from "@/components/experience-section";
import { TrioSection } from "@/components/trio-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#090607] text-[#f5f5f7] overflow-x-hidden selection:bg-[#c81e28] selection:text-white">
      {/* Subtle cinema darkroom ambient glow */}
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_15%,rgba(200,30,40,0.14)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <Navbar />
      <HeroSection />
      <div id="spesialisasi">
        <VideoEditorTimeline />
      </div>
      <JasaRaharjaSection />
      <ExperienceSection />
      <TrioSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
