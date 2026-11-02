"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
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
      className="relative min-h-[clamp(640px,90vh,920px)] max-w-[1240px] mx-auto px-6 pt-10 pb-16 flex flex-col justify-end overflow-hidden z-10"
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
        className="absolute top-2 left-1/2 -translate-x-1/2 font-anton text-[clamp(6.5rem,18vw,16.5rem)] leading-[0.88] uppercase text-[#7a0e14] opacity-45 select-none pointer-events-none z-[1] text-center w-full [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_45%,rgba(0,0,0,0.05)_95%)]"
        aria-hidden="true"
      >
        Portfolio
      </div>

      {/* Centered Portrait Cutout */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[3] pointer-events-none w-auto max-h-[clamp(540px,86vh,820px)] flex justify-center">
        <Image
          src="/assets/img/farhan-hero.webp"
          alt="Farhan Ramadhan mengenakan setelan jas formal hitam"
          width={682}
          height={1024}
          priority
          className="max-h-[clamp(540px,86vh,820px)] w-auto object-contain filter contrast-[104%] brightness-[98%] drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
        />
      </div>

      {/* Main Grid Content on Bottom */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full">
        {/* Bottom Left Card */}
        <motion.div
          initial={{ opacity: 0.9, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-6 max-w-[480px] bg-gradient-to-br from-[#090607]/90 to-[#090607]/45 p-6 rounded-lg backdrop-blur-md border-l-2 border-[#c81e28]"
        >
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
          <p className="text-sm md:text-base text-[#a39e9e] leading-relaxed mb-4">
            Lulusan Ilmu Komunikasi Universitas Sriwijaya. Saya meliput kegiatan, menulis press release, mendokumentasikan lewat foto dan video, lalu memastikan informasinya sampai ke masyarakat dengan tepat.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e62e39]">
            <MapPin className="size-4" />
            <span>Berbasis di Bengkulu</span>
          </div>
        </motion.div>

        {/* Bottom Right Card */}
        <motion.div
          initial={{ opacity: 0.9, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-6 lg:justify-self-end max-w-[340px] bg-gradient-to-br from-[#090607]/90 to-[#090607]/35 p-6 rounded-lg backdrop-blur-md border-r-2 border-[#c81e28]"
        >
          <div className="flex items-start gap-3 mb-4">
            <span
              className="size-6 shrink-0 rounded-full border border-[#c81e28] flex items-center justify-center text-[#e62e39] text-sm font-bold mt-0.5"
              aria-hidden="true"
            >
              +
            </span>
            <p className="text-sm font-semibold leading-snug text-[#f5f5f7]">
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
              Pelayanan Publik
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
