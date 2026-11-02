"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/portfolio-data";

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { label: "Semua", value: "all" },
    { label: "Jasa Raharja", value: "jr" },
    { label: "Liputan & Pemerintahan", value: "liputan" },
    { label: "Kampus & Magang", value: "kampus" },
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
    <section id="dokumentasi" className="max-w-[1240px] mx-auto px-6 py-20 relative z-10">
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8 border-b border-white/10 pb-4">
        <h2 className="font-anton text-2xl md:text-3xl uppercase tracking-wider text-[#f5f5f7]">
          Dokumentasi Kegiatan
        </h2>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Saring dokumentasi">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded transition-all ${
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

      {/* Grid of photos */}
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence>
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              className="aspect-[4/3] relative rounded-md overflow-hidden bg-black border border-white/10 hover:border-[#c81e28] transition-all group cursor-pointer shadow-md hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
              onClick={() => handleOpenLightbox(idx)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <p className="text-[11px] text-white/90 line-clamp-2 leading-tight">
                  {item.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleCloseLightbox}
              className="fixed top-5 right-5 size-11 rounded-full bg-white/10 hover:bg-[#c81e28] text-white flex items-center justify-center transition-colors z-50"
              aria-label="Tutup pratinjau foto"
            >
              <X className="size-6" />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 hover:bg-[#c81e28] text-white flex items-center justify-center transition-colors z-50"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft className="size-7" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 hover:bg-[#c81e28] text-white flex items-center justify-center transition-colors z-50"
              aria-label="Foto berikutnya"
            >
              <ChevronRight className="size-7" />
            </button>

            {/* Photo Container */}
            <div
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[65vh] max-h-[700px] flex items-center justify-center">
                <Image
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].alt}
                  fill
                  className="object-contain rounded"
                  sizes="(max-width: 1200px) 90vw, 1000px"
                />
              </div>
              <p className="mt-4 text-xs md:text-sm text-[#a39e9e] text-center max-w-xl">
                {filteredItems[lightboxIndex].alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
