"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowDown, Camera, Film, Sparkles, SlidersHorizontal, Eye } from "lucide-react";
import { Spotlight } from "@/components/aceternity/spotlight";

// Dynamic import for React Three Fiber Cine Lens system
const HeroCanvas = dynamic(() => import("@/components/3d/hero-canvas"), {
  ssr: false,
});

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative max-w-[1240px] mx-auto px-4 sm:px-6 pt-6 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 overflow-hidden z-10 lg:min-h-[clamp(720px,94vh,980px)] lg:flex lg:flex-col lg:justify-end border-b border-white/5"
      aria-labelledby="hero-name"
    >
      {/* 1. 35mm Film Edge Runner (Analog Cinema Film Sprockets Motif) */}
      <div
        className="hidden md:flex items-center justify-between font-mono text-[9px] text-white/30 uppercase tracking-[0.25em] border-b border-white/10 pb-2 mb-3 select-none pointer-events-none"
        aria-hidden="true"
      >
        <span>▪ ▪ ▪ KODAK VISION3 500T 7219 ▪ ▪ ▪</span>
        <span className="text-[#e62e39]/70 font-bold">SAFETY FILM · 35MM FULL FRAME</span>
        <span>▪ ▪ ▪ FRAME ▸ 24A ▪ ▪ ▪ 25 ▪ ▪ ▪</span>
      </div>

      {/* 2. Cine Viewfinder Camera Telemetry HUD Overlay */}
      <div
        className="hidden sm:flex items-center justify-between font-mono text-[10px] text-white/60 uppercase tracking-widest absolute top-12 left-6 right-6 z-[4] select-none pointer-events-none"
        aria-hidden="true"
      >
        {/* Left Telemetry: Live Rec & Resolution */}
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded">
          <span className="size-2 rounded-full bg-[#e62e39] animate-pulse" />
          <span className="text-white font-bold tracking-wider">REC [●] 00:04:22:15</span>
          <span className="text-[#e62e39]">·</span>
          <span>4K UHD 60P</span>
          <span className="text-[#e62e39]">·</span>
          <span className="text-[#e62e39] font-semibold">PRORES 422 HQ</span>
        </div>

        {/* Center: Live Stereo Audio VU Meter */}
        <div className="hidden lg:flex items-center gap-3 bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1 rounded">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] text-white/50">CH1</span>
            <div className="w-16 h-1.5 bg-black rounded overflow-hidden flex">
              <div className="w-[75%] bg-gradient-to-r from-emerald-500 via-yellow-400 to-red-500" />
            </div>
            <span className="text-[9px] text-white/70">-12dB</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] text-white/50">CH2</span>
            <div className="w-16 h-1.5 bg-black rounded overflow-hidden flex">
              <div className="w-[68%] bg-gradient-to-r from-emerald-500 via-yellow-400 to-red-500" />
            </div>
            <span className="text-[9px] text-white/70">-18dB</span>
          </div>
        </div>

        {/* Right Telemetry: Lens & Exposure Values */}
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded text-white/80">
          <span>ISO 100</span>
          <span className="text-[#e62e39]">·</span>
          <span>50MM F/1.8</span>
          <span className="text-[#e62e39]">·</span>
          <span>1/120s (180°)</span>
          <span className="text-[#e62e39]">·</span>
          <span className="border border-[#e62e39]/40 bg-[#c81e28]/20 px-1 py-0.2 rounded text-[9px] text-[#e62e39] font-bold">
            9:16 / 4:5
          </span>
        </div>
      </div>

      {/* Optical Rule-of-Thirds Grid Markers (Cinema Monitor Crosshairs) */}
      <div className="absolute inset-0 pointer-events-none z-[2] select-none opacity-20 hidden md:block" aria-hidden="true">
        {/* Horizontal guide marks */}
        <div className="absolute top-1/3 left-0 right-0 border-b border-dashed border-white/30" />
        <div className="absolute top-2/3 left-0 right-0 border-b border-dashed border-white/30" />
        {/* Vertical guide marks */}
        <div className="absolute left-1/3 top-0 bottom-0 border-r border-dashed border-white/30" />
        <div className="absolute left-2/3 top-0 bottom-0 border-r border-dashed border-white/30" />
        {/* Center Reticle Crosshairs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-xl text-white/50">
          +
        </div>
      </div>

      {/* Aceternity Spotlight Effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#e62e39" />

      {/* React Three Fiber 3D Cine Camera Lens Aperture & Focus Ring */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        <HeroCanvas />
      </div>

      {/* Giant Background Word: PORTFOLIO / EXPOSURE */}
      <div
        className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 font-anton text-[clamp(4.2rem,16vw,16.5rem)] leading-[0.88] uppercase text-[#7a0e14] opacity-35 sm:opacity-45 select-none pointer-events-none z-[1] text-center w-full [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_45%,rgba(0,0,0,0.05)_95%)]"
        aria-hidden="true"
      >
        Portfolio
      </div>

      {/* === DESKTOP ONLY: Centered Absolute Portrait Cutout with Eye-AF Framing === */}
      <div className="hidden lg:flex absolute bottom-0 left-1/2 -translate-x-1/2 z-[3] pointer-events-none w-auto max-h-[clamp(560px,78vh,740px)] justify-center [mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)]">
        {/* Eye-AF Auto-Focus Lock Indicator */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none animate-pulse">
          <div className="size-16 sm:size-20 border border-white/40 rounded flex items-center justify-center relative">
            <span className="absolute -top-1 -left-1 size-2 border-t-2 border-l-2 border-[#e62e39]" />
            <span className="absolute -top-1 -right-1 size-2 border-t-2 border-r-2 border-[#e62e39]" />
            <span className="absolute -bottom-1 -left-1 size-2 border-b-2 border-l-2 border-[#e62e39]" />
            <span className="absolute -bottom-1 -right-1 size-2 border-b-2 border-r-2 border-[#e62e39]" />
            <Eye className="size-3.5 text-[#e62e39]/80" />
          </div>
          <span className="bg-[#c81e28] text-white text-[8px] font-mono font-bold px-1.5 py-0.5 rounded mt-1 shadow tracking-wider">
            [ ⛶ EYE-AF · LOCKED ]
          </span>
        </div>

        <Image
          src="/assets/img/farhan-hero-half.webp"
          alt="Farhan Ramadhan mengenakan setelan jas formal hitam"
          width={682}
          height={580}
          priority
          className="max-h-[clamp(560px,78vh,740px)] w-auto object-contain filter contrast-[104%] brightness-[98%] drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
        />
      </div>

      {/* === MOBILE ONLY: Top Header (Greeting + Name) === */}
      <div className="lg:hidden relative z-10 text-center mb-2 pt-2">
        <p className="font-script text-4xl sm:text-5xl text-[#e62e39] leading-none mb-1 -rotate-2 select-none">
          Halo, saya
        </p>
        <h1
          id="hero-name-mobile"
          className="font-anton text-4xl sm:text-5xl uppercase tracking-wider text-[#f5f5f7] mb-1.5"
        >
          Farhan Ramadhan
        </h1>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c81e28]/15 border border-[#c81e28]/30 mb-2">
          <Camera className="size-3 text-[#e62e39]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#e62e39]">
            Fotografer &amp; Video Editor
          </span>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-xs text-[#a39e9e]">
          <MapPin className="size-3.5 text-[#e62e39]" />
          <span>Bengkulu, Indonesia</span>
        </div>
      </div>

      {/* === MOBILE ONLY: Unobstructed Hero Portrait Showcase === */}
      <div className="lg:hidden relative z-[3] flex justify-center my-2 pointer-events-none">
        <div className="relative w-auto max-h-[300px] sm:max-h-[360px] flex justify-center [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
          {/* Eye-AF Mobile Indicator */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
            <span className="bg-[#c81e28] text-white text-[8px] font-mono font-bold px-1.5 py-0.5 rounded shadow">
              [ ⛶ EYE-AF ]
            </span>
          </div>
          <Image
            src="/assets/img/farhan-hero-half.webp"
            alt="Farhan Ramadhan mengenakan setelan jas formal hitam"
            width={682}
            height={580}
            priority
            className="max-h-[300px] sm:max-h-[360px] w-auto object-contain filter contrast-[104%] brightness-[98%] drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
          />
        </div>
      </div>

      {/* === MAIN CONTENT: Production Slate & Director Monitoring Cards === */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-end w-full">
        {/* Left Card: Director's Slate & Bio Summary */}
        <motion.div
          initial={{ opacity: 0.9, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-6 lg:max-w-[460px] bg-gradient-to-br from-[#120a0d]/95 to-[#0b0507]/90 p-5 sm:p-6 rounded-lg backdrop-blur-md border-l-2 border-[#c81e28] shadow-[0_15px_35px_rgba(0,0,0,0.7)] relative overflow-hidden"
        >
          {/* Slate Corner Framing Accents */}
          <span className="absolute top-2 left-2 size-2 border-t border-l border-white/20" />
          <span className="absolute top-2 right-2 size-2 border-t border-r border-white/20" />
          <span className="absolute bottom-2 left-2 size-2 border-b border-l border-white/20" />
          <span className="absolute bottom-2 right-2 size-2 border-b border-r border-white/20" />

          {/* Desktop Only Heading Details */}
          <div className="hidden lg:block">
            {/* Clapperboard Slate Bar */}
            <div className="flex items-center gap-2 mb-2 font-mono text-[9px] uppercase tracking-wider text-[#a39e9e] border-b border-white/10 pb-1.5">
              <span className="text-[#e62e39] font-bold">SLATE #01</span>
              <span>·</span>
              <span>TAKE 03</span>
              <span>·</span>
              <span>ROLL A01</span>
              <span>·</span>
              <span className="text-white/80 font-bold">SCENE: BENGKULU</span>
            </div>

            <p className="font-script text-5xl md:text-6xl text-[#e62e39] leading-none mb-1 -rotate-3 select-none">
              Halo, saya
            </p>
            <h1
              id="hero-name"
              className="font-anton text-[clamp(2.5rem,5.2vw,4.2rem)] leading-[0.92] uppercase tracking-wide text-[#f5f5f7] mb-2"
            >
              Farhan <br /> Ramadhan
            </h1>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-widest font-mono text-[#e62e39] font-bold px-2 py-0.5 rounded bg-[#c81e28]/15 border border-[#c81e28]/30">
                Fotografer · Video Editor · Visual Storyteller
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-[#d1cece] leading-relaxed mb-4">
            Lulusan Ilmu Komunikasi Universitas Sriwijaya. Saya menggabungkan kepekaan mata fotografer, ritme editing video bertempo dinamis, dan narasi komunikasi publik untuk melahirkan karya audio-visual yang bercerita dan sampai ke hati masyarakat.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2.5 border-t border-white/10">
            <div className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e62e39]">
              <MapPin className="size-4" />
              <span>Berbasis di Bengkulu</span>
            </div>

            <Link
              href="#humas"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#e62e39] hover:text-white transition-colors py-1 group"
            >
              <span>Lihat Portofolio Visual</span>
              <ArrowDown className="size-3.5 group-hover:translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Right Card: Cinema Pillars & Monitoring Suite */}
        <motion.div
          initial={{ opacity: 0.9, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-6 lg:justify-self-end lg:max-w-[340px] bg-gradient-to-br from-[#120a0d]/95 to-[#0b0507]/90 p-5 sm:p-6 rounded-lg backdrop-blur-md border-r-2 border-[#c81e28] shadow-[0_15px_35px_rgba(0,0,0,0.7)] relative overflow-hidden"
        >
          {/* Top Monitoring Header */}
          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-white/50 border-b border-white/10 pb-2 mb-3">
            <div className="flex items-center gap-1.5 text-[#e62e39] font-bold">
              <Film className="size-3 text-[#e62e39]" />
              <span>MONITOR 01: CINEMA SUITE</span>
            </div>
            <span className="text-emerald-400 font-bold">● 24 FPS</span>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <div className="size-6 shrink-0 rounded-full bg-[#c81e28]/20 border border-[#c81e28] flex items-center justify-center text-[#e62e39] text-xs font-bold mt-0.5">
              <Camera className="size-3.5" />
            </div>
            <p className="text-xs sm:text-sm font-semibold leading-snug text-[#f5f5f7]">
              Membingkai momen menjadi karya audio-visual yang menggerakkan
            </p>
          </div>

          <ul className="flex flex-col gap-2.5 text-xs text-[#a39e9e]">
            <li className="flex items-center gap-2 p-1.5 rounded bg-black/40 border border-white/5">
              <Camera className="size-3.5 text-[#e62e39] shrink-0" />
              <div>
                <span className="text-white font-medium block">Fotografi Lapangan &amp; Photoshoot</span>
                <span className="text-[10px] text-white/50 font-mono">50mm f/1.8 · Natural Light &amp; Flash</span>
              </div>
            </li>
            <li className="flex items-center gap-2 p-1.5 rounded bg-black/40 border border-white/5">
              <Film className="size-3.5 text-[#e62e39] shrink-0" />
              <div>
                <span className="text-white font-medium block">Video Editing Reels (9:16)</span>
                <span className="text-[10px] text-white/50 font-mono">Dynamic Pacing · Beat-Matching 128 BPM</span>
              </div>
            </li>
            <li className="flex items-center gap-2 p-1.5 rounded bg-black/40 border border-white/5">
              <SlidersHorizontal className="size-3.5 text-[#e62e39] shrink-0" />
              <div>
                <span className="text-white font-medium block">Color Grading &amp; Sound Mix</span>
                <span className="text-[10px] text-white/50 font-mono">Rec.709 · Cinema LUTs · Dialogue EQ</span>
              </div>
            </li>
          </ul>

          {/* Exposure Meter Bar at bottom */}
          <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between font-mono text-[9px] text-white/60">
            <span>EXP: [-2 · · -1 · · 0 · · +1 · · +2]</span>
            <span className="text-emerald-400 font-bold">±0.0 EV OK</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
