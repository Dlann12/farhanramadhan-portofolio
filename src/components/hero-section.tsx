"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowDown } from "lucide-react";
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
      className="relative max-w-[1240px] mx-auto px-4 sm:px-6 pt-6 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 overflow-hidden z-10 lg:min-h-[clamp(680px,92vh,960px)] lg:flex lg:flex-col lg:justify-end"
      aria-labelledby="hero-name"
    >
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

      {/* Giant Background Word: PORTFOLIO */}
      <div
        className="absolute top-0 sm:top-2 left-1/2 -translate-x-1/2 font-anton text-[clamp(4.2rem,16vw,16.5rem)] leading-[0.88] uppercase text-[#7a0e14] opacity-35 sm:opacity-45 select-none pointer-events-none z-[1] text-center w-full [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_45%,rgba(0,0,0,0.05)_95%)]"
        aria-hidden="true"
      >
        Portfolio
      </div>

      {/* === DESKTOP ONLY: Centered Absolute Portrait Cutout (lg and up) === */}
      <div className="hidden lg:flex absolute bottom-0 left-1/2 -translate-x-1/2 z-[3] pointer-events-none w-auto max-h-[clamp(560px,88vh,840px)] justify-center">
        <Image
          src="/assets/img/farhan-hero.webp"
          alt="Farhan Ramadhan mengenakan setelan jas formal hitam"
          width={682}
          height={1024}
          priority
          className="max-h-[clamp(560px,88vh,840px)] w-auto object-contain filter contrast-[104%] brightness-[98%] drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
        />
      </div>

      {/* === MOBILE ONLY: Top Header (Greeting + Name) === */}
      <div className="lg:hidden relative z-10 text-center mb-4 pt-2">
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
          <span className="text-xs font-bold uppercase tracking-wider text-[#e62e39]">
            Humas &amp; Komunikasi Publik
          </span>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-xs text-[#a39e9e]">
          <MapPin className="size-3.5 text-[#e62e39]" />
          <span>Berbasis di Bengkulu</span>
        </div>
      </div>

      {/* === MOBILE ONLY: Unobstructed Hero Portrait Showcase === */}
      <div className="lg:hidden relative z-[3] flex justify-center my-2 pointer-events-none">
        <div className="relative w-auto max-h-[420px] sm:max-h-[480px] flex justify-center">
          <Image
            src="/assets/img/farhan-hero.webp"
            alt="Farhan Ramadhan mengenakan setelan jas formal hitam"
            width={682}
            height={1024}
            priority
            className="max-h-[420px] sm:max-h-[480px] w-auto object-contain filter contrast-[104%] brightness-[98%] drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
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
            <p className="text-base md:text-lg font-bold uppercase tracking-[0.12em] text-[#e62e39] mb-3">
              Humas &amp; Komunikasi Publik
            </p>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-[#d1cece] leading-relaxed mb-4">
            Lulusan Ilmu Komunikasi Universitas Sriwijaya. Saya meliput kegiatan, menulis press release, mendokumentasikan lewat foto dan video, lalu memastikan informasinya sampai ke masyarakat dengan tepat.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e62e39]">
              <MapPin className="size-4" />
              <span>Berbasis di Bengkulu</span>
            </div>

            <Link
              href="#pengalaman"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#e62e39] hover:text-white transition-colors py-1 group"
            >
              <span>Eksplorasi Portofolio</span>
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
            <span
              className="size-6 shrink-0 rounded-full border border-[#c81e28] flex items-center justify-center text-[#e62e39] text-sm font-bold mt-0.5"
              aria-hidden="true"
            >
              +
            </span>
            <p className="text-xs sm:text-sm font-semibold leading-snug text-[#f5f5f7]">
              Mengubah kegiatan menjadi informasi yang sampai ke publik
            </p>
          </div>
          <ul className="flex flex-col gap-2.5 text-xs text-[#a39e9e]">
            <li className="flex items-center gap-2">
              <span className="text-[#e62e39] font-bold">+</span>
              Peliputan &amp; Press Release
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#e62e39] font-bold">+</span>
              Foto &amp; Video Kegiatan
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#e62e39] font-bold">+</span>
              Pelayanan Publik &amp; Kehumasan
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
