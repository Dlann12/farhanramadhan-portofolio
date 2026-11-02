"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  MapPin,
  Calendar,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BATIK_CAMPAIGN_ITEMS } from "@/data/portfolio-data";

export function JasaRaharjaSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = React.useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) =>
      prev === null ? null : prev === 0 ? BATIK_CAMPAIGN_ITEMS.length - 1 : prev - 1
    );
  }, []);

  const handleNext = React.useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) =>
      prev === null ? null : prev === BATIK_CAMPAIGN_ITEMS.length - 1 ? 0 : prev + 1
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <section id="humas" className="max-w-[1240px] mx-auto px-4 sm:px-6 py-14 sm:py-20 relative z-10 overflow-hidden">
      {/* 1. Header & Live Feed Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
        {/* Left Copy */}
        <motion.div
          initial={{ opacity: 0.95, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs uppercase tracking-widest text-[#e62e39] font-bold px-2.5 py-1 rounded bg-[#c81e28]/10 border border-[#c81e28]/25">
              <ShieldCheck className="size-3.5 text-[#e62e39]" />
              Pengalaman Terbaru & Kehumasan BUMN
            </span>
          </div>

          <h2 className="font-anton text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide leading-none mb-2 text-white">
            Humas <span className="text-[#e62e39]">Jasa Raharja</span>
          </h2>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#a39e9e] mb-4 sm:mb-6">
            PT Jasa Raharja, Kantor Wilayah Bengkulu
          </p>

          <p className="text-xs sm:text-sm md:text-base text-[#d1cece] leading-relaxed mb-6">
            Mengelola publikasi kegiatan kantor wilayah lewat akun resmi Instagram. Saya hadir langsung di lapangan bersama mitra strategis seperti Kepolisian, Samsat, dan Dinas Perhubungan, lalu mengolah dokumentasi menjadi foto, video reels, dan materi edukasi layanan keselamatan bagi masyarakat Bengkulu.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 text-xs sm:text-sm text-[#a39e9e]">
            <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:size-1.5 before:bg-[#c81e28] before:rounded-full bg-[#120b0d]/70 p-3 rounded border border-white/5">
              <strong className="text-white block font-semibold mb-0.5">
                Liputan keselamatan jalan
              </strong>
              Sosialisasi keselamatan transportasi dan Operasi Patuh Nala 2026.
            </li>
            <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:size-1.5 before:bg-[#c81e28] before:rounded-full bg-[#120b0d]/70 p-3 rounded border border-white/5">
              <strong className="text-white block font-semibold mb-0.5">
                Penyerahan santunan
              </strong>
              Dokumentasi santunan cepat bagi korban dan ahli waris kecelakaan lalu lintas.
            </li>
            <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:size-1.5 before:bg-[#c81e28] before:rounded-full bg-[#120b0d]/70 p-3 rounded border border-white/5">
              <strong className="text-white block font-semibold mb-0.5">
                Edukasi layanan publik
              </strong>
              Konten sosialisasi JASFREN, cek sisa plafon rawat jalan, dan etika berkendara.
            </li>
            <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:size-1.5 before:bg-[#c81e28] before:rounded-full bg-[#120b0d]/70 p-3 rounded border border-white/5">
              <strong className="text-white block font-semibold mb-0.5">
                Kegiatan & event publik
              </strong>
              Samsat Keliling di Car Free Day dan Kapolda Cup Road Race Championship 2026.
            </li>
          </ul>

          <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
            <a
              href="https://www.instagram.com/jasaraharja_bengkulu_/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants(),
                "bg-[#c81e28] hover:bg-[#e62e39] text-white font-bold text-xs uppercase tracking-wider px-5 sm:px-6 py-5 sm:py-6 rounded transition-all shadow-[0_8px_20px_rgba(200,30,40,0.3)] hover:-translate-y-0.5 inline-flex items-center gap-2"
              )}
            >
              <span>Buka Instagram @jasaraharja_bengkulu_</span>
              <ExternalLink className="size-4" />
            </a>

            <a
              href="#kampanye-batik"
              className="text-xs uppercase tracking-wider text-[#d1cece] hover:text-[#e62e39] underline underline-offset-4 font-semibold transition-colors py-2 px-1"
            >
              Lihat Kampanye Batik Besurek ↓
            </a>
          </div>
        </motion.div>

        {/* Right Phone Mockup Duo */}
        <motion.div
          initial={{ opacity: 0.95, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 relative flex justify-center items-center min-h-[360px] xs:min-h-[400px] sm:min-h-[460px] lg:min-h-[480px] group overflow-hidden py-4"
        >
          {/* Back Phone: Profile */}
          <div className="absolute w-[170px] xs:w-[200px] sm:w-[240px] bg-black rounded-[22px] sm:rounded-[28px] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_0_3px_#261618] overflow-hidden -translate-x-5 sm:-translate-x-8 -translate-y-4 sm:-translate-y-6 -rotate-4 z-[1] opacity-85 group-hover:-translate-x-7 sm:group-hover:-translate-x-12 group-hover:-translate-y-6 sm:group-hover:-translate-y-8 group-hover:-rotate-6 transition-transform duration-500">
            <Image
              src="/assets/img/jasaraharja/ig-profil.webp"
              alt="Tangkapan layar profil Instagram resmi Jasa Raharja Bengkulu"
              width={720}
              height={1355}
              className="rounded-[18px] sm:rounded-[22px] w-full"
            />
          </div>

          {/* Front Phone: Reels */}
          <div className="relative w-[180px] xs:w-[210px] sm:w-[250px] bg-black rounded-[22px] sm:rounded-[28px] p-2 shadow-[0_25px_50px_rgba(0,0,0,0.95),0_0_0_3px_#c81e28] overflow-hidden translate-x-5 sm:translate-x-8 translate-y-4 sm:translate-y-6 rotate-3 z-[2] group-hover:translate-x-7 sm:group-hover:translate-x-12 group-hover:translate-y-6 sm:group-hover:translate-y-8 group-hover:rotate-5 transition-transform duration-500">
            <Image
              src="/assets/img/jasaraharja/ig-reels.webp"
              alt="Tangkapan layar feed reels kegiatan Jasa Raharja Bengkulu"
              width={720}
              height={1262}
              className="rounded-[18px] sm:rounded-[22px] w-full"
            />
          </div>

          <div className="absolute bottom-0 sm:-bottom-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#e62e39] bg-[#090607]/95 px-3 py-1 rounded border border-[#c81e28]/25 z-[3]">
            Akun resmi @jasaraharja_bengkulu_
          </div>
        </motion.div>
      </div>

      {/* 2. Official Campaign Showcase: Hari Batik Nasional */}
      <div id="kampanye-batik" className="pt-8 scroll-mt-24">
        {/* Section Title Box */}
        <div className="relative border-t border-[#c81e28]/30 pt-12 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#e62e39] font-bold px-3 py-1 rounded-full bg-[#c81e28]/10 border border-[#c81e28]/30">
                  <Sparkles className="size-3.5 text-[#e62e39]" />
                  Kampanye Kreatif & Dokumentasi Budaya
                </span>
              </div>
              <h3 className="font-anton text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide text-white">
                Hari Batik Nasional: <span className="text-[#e62e39]">Batik Besurek Bengkulu</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#a39e9e] mt-2 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-[#e62e39]" />
                  Benteng Marlborough, Bengkulu
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="size-3.5 text-[#e62e39]" />
                  PT Jasa Raharja Kantor Wilayah Bengkulu
                </span>
              </p>
            </div>

            <p className="text-xs md:text-sm text-[#d1cece] max-w-md leading-relaxed">
              Karya dokumentasi visual dan penulisan narasi budaya resmi yang diproduksi untuk publikasi PT Jasa Raharja Bengkulu, merayakan keanggunan motif kaligrafi dan Rafflesia khas Besurek di situs cagar budaya bersejarah.
            </p>
          </div>
        </div>

        {/* 6 Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BATIK_CAMPAIGN_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0.95, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group"
            >
              <div
                onClick={() => handleOpenLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpenLightbox(index);
                  }
                }}
                className="w-full text-left bg-[#120b0d] hover:bg-[#1a0f12] border border-[#c81e28]/25 hover:border-[#c81e28] rounded-xl overflow-hidden transition-all duration-300 flex flex-col h-full cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(0,0,0,0.8),0_0_20px_rgba(200,30,40,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e62e39]"
              >
                {/* Photo Container */}
                <div className="relative aspect-[3/4] w-full bg-black overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[102%]"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090607] via-transparent to-black/30 opacity-70 group-hover:opacity-50 transition-opacity" />

                  {/* Card Index Badge */}
                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded text-[11px] font-mono text-[#e62e39] font-bold">
                    0{index + 1} / 06
                  </div>

                  {/* Zoom Preview Pill on Hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#c81e28] text-white p-2 rounded-full shadow-lg">
                    <ZoomIn className="size-4" />
                  </div>
                </div>

                {/* Content Footer */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-[#120b0d] border-t border-white/5">
                  <div>
                    <h4 className="font-anton text-lg tracking-wide uppercase text-white group-hover:text-[#e62e39] transition-colors mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#a39e9e] leading-relaxed italic flex gap-2">
                      <Quote className="size-3.5 text-[#c81e28] shrink-0 mt-0.5" />
                      <span>{item.caption}</span>
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#716c6d]">
                    <span className="uppercase tracking-wider">Benteng Marlborough</span>
                    <span className="text-[#e62e39] font-medium group-hover:underline">Perbesar foto →</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={handleCloseLightbox}
          >
            {/* Top Toolbar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-50">
              <div className="text-white">
                <span className="font-anton text-base sm:text-lg tracking-wider uppercase">
                  {BATIK_CAMPAIGN_ITEMS[lightboxIndex].title}
                </span>
                <span className="text-xs text-[#a39e9e] ml-3 hidden sm:inline">
                  {lightboxIndex + 1} dari {BATIK_CAMPAIGN_ITEMS.length}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCloseLightbox}
                className="bg-black/60 hover:bg-[#c81e28] text-white p-2.5 rounded-full transition-colors border border-white/10"
                aria-label="Tutup pratinjau"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Navigation Buttons */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-[#c81e28] text-white p-2 sm:p-3 rounded-full transition-all border border-white/10 z-50 hover:scale-110"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft className="size-5 sm:size-6" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-[#c81e28] text-white p-2 sm:p-3 rounded-full transition-all border border-white/10 z-50 hover:scale-110"
              aria-label="Foto selanjutnya"
            >
              <ChevronRight className="size-5 sm:size-6" />
            </button>

            {/* Main Lightbox Image & Quote */}
            <div
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-h-[68vh] aspect-[3/4] sm:aspect-[4/5] flex items-center justify-center">
                <Image
                  src={BATIK_CAMPAIGN_ITEMS[lightboxIndex].src}
                  alt={BATIK_CAMPAIGN_ITEMS[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Caption Card */}
              <div className="mt-4 bg-[#120b0d]/90 border border-[#c81e28]/30 p-4 rounded-lg max-w-2xl text-center shadow-2xl">
                <p className="text-xs sm:text-sm text-[#f5f5f7] italic leading-relaxed">
                  &ldquo;{BATIK_CAMPAIGN_ITEMS[lightboxIndex].caption}&rdquo;
                </p>
                <p className="text-[11px] text-[#a39e9e] uppercase tracking-wider mt-2 font-mono">
                  Dokumentasi Resmi PT Jasa Raharja (Persero) Wilayah Bengkulu — Benteng Marlborough
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
