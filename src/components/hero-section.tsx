"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Mail, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-24 overflow-hidden z-10 border-b border-white/5"
      aria-labelledby="hero-name"
    >
      {/* Background Soft Crimson Ambient Radial Glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(200,30,40,0.22)_0%,rgba(9,6,7,0)_70%)] pointer-events-none z-0 blur-2xl"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
        {/* === LEFT COLUMN: Half-Body Portrait (waist up, clean cutout) === */}
        <motion.div
          initial={{ opacity: 0.9, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex justify-center lg:justify-start items-end relative"
        >
          {/* Subtle Halo Rim behind portrait */}
          <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] flex justify-center items-end">
            <div className="absolute inset-0 bg-gradient-to-t from-[#090607] via-transparent to-transparent z-10 pointer-events-none" />
            <Image
              src="/assets/img/farhan-hero-half.webp"
              alt="Farhan Ramadhan, S.I.Kom - Fotografer & Video Editor"
              width={682}
              height={580}
              priority
              className="w-full h-auto max-h-[480px] sm:max-h-[540px] lg:max-h-[640px] object-contain object-bottom filter contrast-[103%] brightness-[99%] drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] relative z-0"
            />
          </div>
        </motion.div>

        {/* === RIGHT COLUMN: Reference-Style Editorial Typographic Layout === */}
        <motion.div
          initial={{ opacity: 0.9, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* 1. Top Section Index Label: "(01) About me" */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <span className="text-[#e62e39] font-mono text-xs sm:text-sm font-bold tracking-wider">
              (01)
            </span>
            <span className="text-white font-pjs font-bold text-sm sm:text-base tracking-wide">
              About me
            </span>
          </div>

          {/* 2. Giant Name Headline: "Farhan Ramadhan" (Title Case, 2 Lines, Heavy Grotesk) */}
          <h1
            id="hero-name"
            className="font-pjs text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[0.92] mb-5 sm:mb-6"
          >
            Farhan <br />
            Ramadhan
          </h1>

          {/* 3. Narrative Lead Description (styled like reference text block) */}
          <p className="text-sm sm:text-base md:text-lg text-[#d1cece] leading-relaxed mb-8 sm:mb-10 max-w-2xl font-normal">
            A passionate creator in the fields of <strong className="text-white font-semibold">Photography</strong>, <strong className="text-white font-semibold">Videography</strong>, and <strong className="text-white font-semibold">Visual Storytelling</strong>. With over 3 years of experience in public communication and agency campaigns, I turn creative ideas into strong, meaningful visuals and constantly explore new concepts and push boundaries.
          </p>

          {/* 4. Metadata Footer Rows (Education, Role, Contact, Location) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 pt-6 sm:pt-8 border-t border-white/10 text-xs sm:text-sm">
            {/* Row 1: Education */}
            <div>
              <span className="font-pjs font-bold uppercase tracking-wider text-white text-[11px] block mb-1">
                Education
              </span>
              <p className="text-[#a39e9e] leading-snug">
                S1 Ilmu Komunikasi · Universitas Sriwijaya
              </p>
              <p className="text-[#e62e39] text-xs font-semibold mt-0.5">
                IPK 3,88 (Cumlaude)
              </p>
            </div>

            {/* Row 2: Roles & Focus */}
            <div>
              <span className="font-pjs font-bold uppercase tracking-wider text-white text-[11px] block mb-1">
                Field of Work
              </span>
              <p className="text-[#a39e9e] leading-snug">
                Commercial Photography &amp; Editorial
              </p>
              <p className="text-[#d1cece] text-xs mt-0.5">
                Video Editing Reels (9:16) · Color Grading
              </p>
            </div>

            {/* Row 3: Contact */}
            <div>
              <span className="font-pjs font-bold uppercase tracking-wider text-white text-[11px] block mb-1">
                Contact
              </span>
              <a
                href="mailto:farhanramadhan.fr23@gmail.com"
                className="text-[#a39e9e] hover:text-[#e62e39] transition-colors block truncate"
              >
                farhanramadhan.fr23@gmail.com
              </a>
              <div className="flex items-center gap-2 text-xs text-[#716c6d] mt-1">
                <a
                  href="https://instagram.com/haa_nnn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @haa_nnn
                </a>
                <span>·</span>
                <a
                  href="https://wa.me/62895604577003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +62 895-6045-77003
                </a>
              </div>
            </div>

            {/* Row 4: Location & Status */}
            <div>
              <span className="font-pjs font-bold uppercase tracking-wider text-white text-[11px] block mb-1">
                Location &amp; Status
              </span>
              <p className="text-[#a39e9e] leading-snug">
                Bengkulu, Indonesia
              </p>
              <p className="text-emerald-400 text-xs font-medium flex items-center gap-1.5 mt-1">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Projects &amp; Collaborations
              </p>
            </div>
          </div>

          {/* 5. Clean Action Links */}
          <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-white/5">
            <Link
              href="#humas"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#c81e28] hover:bg-[#e62e39] text-white text-xs sm:text-sm font-pjs font-bold uppercase tracking-wider transition-all shadow-[0_6px_20px_rgba(200,30,40,0.35)]"
            >
              <span>Lihat Portofolio Visual</span>
              <ArrowDown className="size-4" />
            </Link>

            <Link
              href="#kontak"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 text-white text-xs sm:text-sm font-pjs font-semibold tracking-wider transition-all"
            >
              <span>Hubungi Farhan</span>
              <ArrowUpRight className="size-4 text-[#e62e39]" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
