"use client";

import React from "react";
import { motion } from "framer-motion";
import { Film, Camera, Palette, Newspaper, CheckCircle2 } from "lucide-react";

export function VideoEditorTimeline() {
  const services = [
    {
      icon: Film,
      title: "Video Editing (Reels & Short-Form)",
      desc: "Meracik video berorientasi vertikal (9:16) untuk Instagram Reels dan media sosial instansi dengan tempo dinamis, transisi presisi, dan teks bergerak yang komunikatif.",
      highlights: [
        "Pacing cut dinamis & beat matching musik",
        "Animasi subtitle kinetik & teks bergerak",
        "Optimalisasi retensi penonton pada durasi singkat",
      ],
      tag: "Reels · Shorts · TikTok",
    },
    {
      icon: Camera,
      title: "Fotografi Lapangan & Photoshoot",
      desc: "Pengambilan foto still beresolusi tinggi dengan kepekaan sudut pandang, baik untuk photoshoot berkonsep kebudayaan maupun dokumentasi langsung di lapangan.",
      highlights: [
        "Photoshoot berkonsep budaya & busana adat",
        "Dokumentasi protokoler, kedinasan & kemitraan",
        "Komposisi framing teliti & pencahayaan alami",
      ],
      tag: "Editorial · Human Interest · Liputan",
    },
    {
      icon: Palette,
      title: "Color Grading & Pasca-Produksi",
      desc: "Penyelarasan palet warna sinematik, penyesuaian kontras, serta penyempurnaan audio dialog agar setiap karya memiliki estetika visual yang konsisten dan matang.",
      highlights: [
        "Konsistensi tone warna (LUTs) di Premiere & Lightroom",
        "Retouching detail & estetika foto di Photoshop",
        "Pembersihan & normalisasi audio vokal",
      ],
      tag: "Lightroom · Premiere · Photoshop",
    },
    {
      icon: Newspaper,
      title: "Komunikasi Publik & Kehumasan",
      desc: "Menghubungkan karya visual dengan narasi publik yang informatif, etis, dan terpercaya untuk siaran pers, materi kampanye, serta edukasi masyarakat.",
      highlights: [
        "Penulisan narasi rilis pers & caption media",
        "Kurasi visual feed Instagram resmi instansi",
        "Penyampaian pesan layanan yang mudah dipahami",
      ],
      tag: "Humas · Publikasi · Komunikasi",
    },
  ];

  return (
    <section className="max-w-[1240px] mx-auto px-4 sm:px-6 py-14 sm:py-20 relative z-10 border-b border-white/5">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12 border-b border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="size-2 rounded-full bg-[#e62e39]" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#e62e39] font-bold">
              Spesialisasi Kreatif
            </span>
          </div>
          <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide text-white">
            Keahlian &amp; <span className="text-[#e62e39]">Layanan Produksi</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#a39e9e] max-w-md leading-relaxed">
          Kombinasi keterampilan teknis kamera, ritme editing video, dan komunikasi kehumasan untuk menghasilkan karya visual yang bernyawa dan berbobot.
        </p>
      </div>

      {/* Services Grid (Clean, Normal, High-End Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {services.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0.95, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#120b0d] hover:bg-[#180e11] border border-white/10 hover:border-[#c81e28]/60 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(200,30,40,0.12)]"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="size-11 rounded-lg bg-[#c81e28]/15 border border-[#c81e28]/30 flex items-center justify-center text-[#e62e39] group-hover:scale-110 transition-transform">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#a39e9e] bg-black/40 px-2.5 py-1 rounded border border-white/5">
                    {item.tag}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#e62e39] transition-colors mb-2.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#a39e9e] leading-relaxed mb-5">
                  {item.desc}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
                {item.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 text-xs text-[#d1cece]">
                    <CheckCircle2 className="size-3.5 text-[#e62e39] shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
