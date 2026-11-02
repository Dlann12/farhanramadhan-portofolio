"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera, Film, ZoomIn, Play } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/portfolio-data";

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { label: "Semua Karya", value: "all" },
    { label: "Photoshoot & Budaya", value: "editorial" },
    { label: "Fotografi Lapangan", value: "lapangan" },
    { label: "Video Reels & Media", value: "reels" },
    { label: "Akademik & Arsip", value: "kampus" },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeFilter === "all" ? true : item.cat === activeFilter
  );

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null || prev === 0 ? filteredItems.length - 1 : prev - 1
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null || prev === filteredItems.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="dokumentasi" className="max-w-[1240px] mx-auto px-4 sm:px-6 py-14 sm:py-20 relative z-10">
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <Camera className="size-4 text-[#e62e39]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#e62e39] font-bold">
              Visual Archive &amp; Portfolio
            </span>
          </div>
          <h2 className="font-anton text-2xl md:text-3xl uppercase tracking-wider text-[#f5f5f7]">
            Galeri Fotografi &amp; Karya Audio-Visual
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Saring galeri karya">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`text-xs uppercase tracking-wider font-semibold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded transition-all ${
                activeFilter === filter.value
                  ? "bg-[#c81e28] text-white shadow-[0_4px_12px_rgba(200,30,40,0.35)]"
                  : "bg-[#120b0d] hover:bg-[#1c1013] border border-white/10 text-[#a39e9e] hover:text-white"
              }`}
              aria-pressed={activeFilter === filter.value}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of photos with Viewfinder Camera Corners */}
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        <AnimatePresence>
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              className="aspect-[4/3] relative rounded-lg overflow-hidden bg-black border border-white/10 hover:border-[#c81e28] transition-all group cursor-pointer shadow-md hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]"
              onClick={() => handleOpenLightbox(idx)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-108 transition-transform duration-500"
              />

              {/* Viewfinder Framing Marks on Card */}
              <div className="absolute top-2 left-2 size-2.5 border-t border-l border-white/40 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <div className="absolute top-2 right-2 size-2.5 border-t border-r border-white/40 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <div className="absolute bottom-2 left-2 size-2.5 border-b border-l border-white/40 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <div className="absolute bottom-2 right-2 size-2.5 border-b border-r border-white/40 opacity-0 group-hover:opacity-100 transition-opacity z-10" />

              {/* Video Play Badge if reels */}
              {item.cat === "reels" && (
                <div className="absolute top-2.5 right-2.5 size-7 rounded-full bg-black/75 border border-white/20 flex items-center justify-center text-white z-10">
                  <Play className="size-3.5 fill-white ml-0.5" />
                </div>
              )}

              {/* Subtle Tag Badge */}
              <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded text-[9px] font-mono text-white/90 z-10">
                {item.tag}
              </div>

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 z-10">
                <p className="text-[11px] text-white font-medium line-clamp-2 leading-tight">
                  {item.alt}
                </p>
                {item.meta && (
                  <p className="text-[10px] font-mono text-[#e62e39] mt-1">
                    {item.meta}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal with Camera Viewfinder Meta */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleCloseLightbox}
              className="fixed top-4 right-4 size-10 md:size-11 rounded-full bg-black/80 hover:bg-[#c81e28] text-white flex items-center justify-center transition-colors z-50 border border-white/20"
              aria-label="Tutup pratinjau foto"
            >
              <X className="size-5 md:size-6" />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="fixed left-2 md:left-8 top-1/2 -translate-y-1/2 size-10 md:size-12 rounded-full bg-black/75 hover:bg-[#c81e28] text-white flex items-center justify-center transition-colors z-50 border border-white/10"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft className="size-6 md:size-7" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="fixed right-2 md:right-8 top-1/2 -translate-y-1/2 size-10 md:size-12 rounded-full bg-black/75 hover:bg-[#c81e28] text-white flex items-center justify-center transition-colors z-50 border border-white/10"
              aria-label="Foto berikutnya"
            >
              <ChevronRight className="size-6 md:size-7" />
            </button>

            {/* Photo Container */}
            <div
              className="relative max-w-4xl max-h-[88vh] flex flex-col items-center justify-center w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[62vh] sm:h-[68vh] max-h-[700px] flex items-center justify-center">
                <Image
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].alt}
                  fill
                  className="object-contain rounded"
                  sizes="(max-width: 1200px) 90vw, 1000px"
                  priority
                />
              </div>

              {/* Caption & EXIF Details Bar */}
              <div className="mt-3 bg-[#120b0d]/90 border border-white/15 px-4 py-2.5 rounded-lg text-center max-w-xl shadow-2xl">
                <div className="flex items-center justify-center gap-2 font-mono text-[11px] text-[#e62e39] mb-1">
                  <span className="uppercase font-bold tracking-wider">
                    {filteredItems[lightboxIndex].tag}
                  </span>
                  {filteredItems[lightboxIndex].meta && (
                    <>
                      <span className="text-white/40">·</span>
                      <span className="text-white/80">{filteredItems[lightboxIndex].meta}</span>
                    </>
                  )}
                </div>
                <p className="text-xs text-[#d1cece] leading-relaxed">
                  {filteredItems[lightboxIndex].alt}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
