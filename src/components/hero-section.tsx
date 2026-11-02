"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowDown, Camera, Film, Sparkles } from "lucide-react";
import { Spotlight } from "@/components/aceternity/spotlight";
import { SparklesCore } from "@/components/aceternity/sparkles";

// Dynamic import for React Three Fiber to avoid SSR issues
const HeroCanvas = dynamic(() => import("@/components/3d/hero-canvas"), {
  ssr: false,
});

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative max-w-[1240px] mx-auto px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 overflow-hidden z-10 lg:min-h-[clamp(700px,94vh,980px)] lg:flex lg:flex-col lg:justify-end"
      aria-labelledby="hero-name"
    >
      {/* Viewfinder Telemetry Overlay (Photographer / Cinema HUD) */}
      <div
        className="hidden sm:flex items-center justify-between font-mono text-[10px] text-white/50 uppercase tracking-widest absolute top-4 left-6 right-6 z-[4] select-none pointer-events-none"
        aria-hidden="true"
      >
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-[#c81e28] animate-pulse" />
          <span className="text-white/80 font-bold">REC [●] 00:04:22:15</span>
          <span className="text-[#e62e39]/60">·</span>
          <span>4K UHD 60FPS</span>
          <span className="text-[#e62e39]/60">·</span>
          <span className="text-[#e62e39]">PRORES RAW</span>
        </div>
        <div className="flex items-center gap-2 text-white/70">
          <span>ISO 100</span>
          <span className="text-[#e62e39]/60">·</span>
          <span>50MM F/1.8</span>
          <span className="text-[#e62e39]/60">·</span>
          <span>1/250s</span>
          <span className="text-[#e62e39]/60">·</span>
          <span className="border border-white/20 px-1 py-0.5 rounded text-[9px]">9:16 / 4:5</span>
        </div>
      </div>

      {/* Aceternity Spotlight Effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#e62e39" />

      {/* React Three Fiber 3D Interactive Floating Constellation */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        <HeroCanvas />
      </div>

      {/* Aceternity Sparkles Core */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.4}
          particleDensity={40}
          particleColor="#e62e39"
          speed={0.6}
        />
      </div>

      {/* Giant Background Word: PORTFOLIO / EXPOSURE */}
      <div
        className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 font-anton text-[clamp(4.2rem,16vw,16.5rem)] leading-[0.88] uppercase text-[#7a0e14] opacity-35 sm:opacity-45 select-none pointer-events-none z-[1] text-center w-full [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_45%,rgba(0,0,0,0.05)_95%)]"
        aria-hidden="true"
      >
        Portfolio
      </div>

      {/* === DESKTOP ONLY: Centered Absolute Portrait Cutout (lg and up) === */}
      <div className="hidden lg:flex absolute bottom-0 left-1/2 -translate-x-1/2 z-[3] pointer-events-none w-auto max-h-[clamp(560px,78vh,740px)] justify-center [mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)]">
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
      <div className="lg:hidden relative z-10 text-center mb-3 pt-2">
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

      {/* === MAIN CONTENT: Desktop Grid / Mobile Stacked Cards === */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-end w-full">
        {/* Left Card: Full Intro on Desktop; Bio Summary on Mobile */}
        <motion.div
          initial={{ opacity: 0.9, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-6 lg:max-w-[460px] bg-gradient-to-br from-[#090607]/95 to-[#090607]/75 p-5 sm:p-6 rounded-lg backdrop-blur-md border-l-2 border-[#c81e28] shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
        >
          {/* Desktop Only Heading Details */}
          <div className="hidden lg:block">
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
                Fotografer · Video Editor · Humas
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-[#d1cece] leading-relaxed mb-4">
            Lulusan Ilmu Komunikasi Universitas Sriwijaya. Saya menggabungkan kepekaan mata fotografer, ritme editing video bertempo dinamis, dan narasi komunikasi publik untuk melahirkan karya audio-visual yang bercerita dan sampai ke hati masyarakat.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5">
            <div className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e62e39]">
              <MapPin className="size-4" />
              <span>Berbasis di Bengkulu</span>
            </div>

            <Link
              href="#kampanye-batik"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#e62e39] hover:text-white transition-colors py-1 group"
            >
              <span>Lihat Portofolio Visual</span>
              <ArrowDown className="size-3.5 group-hover:translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Right Card: Value & Pillars */}
        <motion.div
          initial={{ opacity: 0.9, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-6 lg:justify-self-end lg:max-w-[340px] bg-gradient-to-br from-[#090607]/95 to-[#090607]/75 p-5 sm:p-6 rounded-lg backdrop-blur-md border-r-2 border-[#c81e28] shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="size-6 shrink-0 rounded-full bg-[#c81e28]/20 border border-[#c81e28] flex items-center justify-center text-[#e62e39] text-xs font-bold mt-0.5">
              <Camera className="size-3.5" />
            </div>
            <p className="text-xs sm:text-sm font-semibold leading-snug text-[#f5f5f7]">
              Membingkai momen menjadi karya audio-visual yang menggerakkan
            </p>
          </div>
          <ul className="flex flex-col gap-2.5 text-xs text-[#a39e9e]">
            <li className="flex items-center gap-2">
              <Camera className="size-3.5 text-[#e62e39] shrink-0" />
              <span>Fotografi Lapangan &amp; Photoshoot Adat</span>
            </li>
            <li className="flex items-center gap-2">
              <Film className="size-3.5 text-[#e62e39] shrink-0" />
              <span>Video Editing Reels (9:16) &amp; Pacing</span>
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="size-3.5 text-[#e62e39] shrink-0" />
              <span>Color Grading &amp; Komunikasi Visual</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
