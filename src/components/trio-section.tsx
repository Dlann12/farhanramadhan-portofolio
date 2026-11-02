"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Camera,
  Film,
  Sliders,
  Sparkles,
  Type,
  Share2,
  Layers,
  Cpu,
  GraduationCap,
} from "lucide-react";

export function TrioSection() {
  const creativeTools = [
    { name: "Adobe Premiere Pro", cat: "Video Editing" },
    { name: "Adobe Lightroom", cat: "Color Grading" },
    { name: "CapCut Pro", cat: "Reels & Shorts" },
    { name: "Adobe Photoshop", cat: "Asset & Cover" },
    { name: "DSLR / Mirrorless Ops", cat: "Camera" },
    { name: "Audio Sync & Mixing", cat: "Sound" },
    { name: "Canva Pro", cat: "Infografis" },
    { name: "Fast News Press", cat: "Editorial" },
  ];

  const creativeSkills = [
    "Framing & Komposisi",
    "Color Grading & LUTs",
    "Dynamic Video Pacing",
    "Photoshoot Editorial & Adat",
    "Motion Subtitle & Text",
    "Peliputan Protokoler",
    "Human Interest Photography",
    "Press Release Jurnalistik",
    "Social Media Curator",
  ];

  const workflowSteps = [
    {
      title: "1. Konsep & Shot List",
      desc: "Menyusun angle liputan, storyboard konten reels, dan observasi pencahayaan.",
      icon: Layers,
    },
    {
      title: "2. Capture & Framing",
      desc: "Pengambilan foto resolusi tinggi dan rekaman video B-roll di lokasi kegiatan.",
      icon: Camera,
    },
    {
      title: "3. Culling & Color Grade",
      desc: "Seleksi frame terbaik di Lightroom serta penyesuaian tone warna & kontras.",
      icon: Sliders,
    },
    {
      title: "4. Video Cutting & Pacing",
      desc: "Editing di Premiere Pro / CapCut dengan tempo dinamis dan transisi presisi.",
      icon: Film,
    },
    {
      title: "5. Motion Text & Audio",
      desc: "Pemberian subtitle bergerak komunikatif, sound effects, dan grafis informasi.",
      icon: Type,
    },
    {
      title: "6. Multi-Format Export",
      desc: "Rendering optimal untuk Reels (9:16), Feed (4:5), web portal, serta arsip pers.",
      icon: Share2,
    },
  ];

  return (
    <section id="pendidikan" className="max-w-[1240px] mx-auto px-4 sm:px-6 py-14 sm:py-20 relative z-10 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Column 1: Software & Creative Toolkit */}
        <motion.div
          initial={{ opacity: 0.95, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-[#120b0d] border border-[#c81e28]/25 rounded-lg p-6 sm:p-7 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Camera className="size-4 text-[#e62e39]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#e62e39] font-bold">
                Gear Rig &amp; NLE Suite
              </span>
            </div>
            <h2 className="font-anton text-xl sm:text-2xl uppercase tracking-wider text-white border-b border-white/10 pb-3 mb-5">
              Kamera, Lensa &amp; NLE Suite
            </h2>

            {/* Software badges */}
            <div className="mb-6">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#e62e39] mb-2.5">
                Software Editing Utama
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {creativeTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-2.5 rounded bg-black/40 border border-white/5 hover:border-[#c81e28]/50 transition-colors"
                  >
                    <p className="text-xs font-bold text-white leading-tight">{tool.name}</p>
                    <p className="text-[10px] text-[#a39e9e] font-mono mt-0.5">{tool.cat}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Keahlian Visual */}
            <div className="mb-6">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#e62e39] mb-2.5">
                Keahlian Teknis &amp; Visual
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {creativeSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-white/[0.03] border border-white/10 rounded text-[#a39e9e] hover:border-[#c81e28] hover:text-white hover:bg-[#c81e28]/15 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pendidikan */}
          <div className="pt-4 border-t border-white/10 flex items-start gap-3">
            <div className="p-2 rounded bg-[#c81e28]/15 border border-[#c81e28]/30 text-[#e62e39] mt-0.5 shrink-0">
              <GraduationCap className="size-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                S1 Ilmu Komunikasi (S.I.Kom)
              </p>
              <p className="text-[11px] text-[#e62e39] font-semibold">Universitas Sriwijaya · IPK 3,88</p>
              <p className="text-[10px] text-[#a39e9e] mt-0.5">Lulus Cumlaude · Lembaga Pers Mahasiswa</p>
            </div>
          </div>
        </motion.div>

        {/* Column 2: Creative Workflow */}
        <motion.div
          initial={{ opacity: 0.95, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-[#120b0d] border border-[#c81e28]/25 rounded-lg p-6 sm:p-7 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-2">
            <Film className="size-4 text-[#e62e39]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#e62e39] font-bold">
              Production Pipeline
            </span>
          </div>
          <h2 className="font-anton text-xl sm:text-2xl uppercase tracking-wider text-white border-b border-white/10 pb-3 mb-5">
            Workflow Produksi
          </h2>

          <div className="relative flex flex-col gap-3.5 before:content-[''] before:absolute before:top-4 before:bottom-4 before:left-[17px] before:w-[1px] before:bg-[#c81e28]/30">
            {workflowSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex items-start gap-3.5 relative z-10 group">
                  <div className="size-9 shrink-0 rounded-full bg-[#1c1013] border border-[#c81e28]/40 group-hover:border-[#c81e28] flex items-center justify-center text-[#e62e39] group-hover:scale-105 transition-all shadow-md">
                    <Icon className="size-4" />
                  </div>
                  <div className="flex flex-col pt-0.5">
                    <strong className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#e62e39] transition-colors">
                      {step.title}
                    </strong>
                    <span className="text-xs text-[#a39e9e] mt-0.5 leading-snug">
                      {step.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Column 3: Red Quote Aside Card */}
        <motion.aside
          initial={{ opacity: 0.95, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-gradient-to-br from-[#42080d] to-[#1a0507] border border-[#7a0e14] rounded-lg p-7 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Viewfinder Frame Corner */}
          <div className="absolute top-3 right-3 font-mono text-[9px] uppercase tracking-widest text-white/30 pointer-events-none">
            FRAME #2026 // REC
          </div>

          <div>
            <span
              className="font-anton text-7xl leading-none text-[#e62e39] block select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-white my-4">
              Setiap frame foto menangkap momen yang{" "}
              <em className="not-italic text-[#e62e39] font-bold">tak terulang</em>, dan setiap potongan video merangkainya menjadi narasi yang{" "}
              <em className="not-italic text-[#e62e39] font-bold">hidup di benak publik</em>.
            </blockquote>
          </div>

          <div className="pt-6 border-t border-white/10">
            <p className="font-script text-4xl sm:text-5xl text-white leading-none mb-4 -rotate-3 select-none">
              Farhan
            </p>
            <p className="text-[11px] font-mono uppercase tracking-widest text-white/70 mb-4">
              Fotografer · Video Editor · S.I.Kom
            </p>
            <Link
              href="#kontak"
              className="inline-flex items-center justify-between w-full px-5 py-3.5 bg-black/50 hover:bg-[#c81e28] border border-white/20 hover:border-[#c81e28] rounded text-xs uppercase tracking-wider font-bold text-white transition-all group shadow-lg"
            >
              <span>Mulai Kolaborasi Visual</span>
              <span className="text-[#e62e39] group-hover:text-white font-bold text-sm">+</span>
            </Link>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
