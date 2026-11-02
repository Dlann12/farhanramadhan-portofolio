"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCtaClick = (_e?: React.MouseEvent) => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1 },
      colors: ["#c81e28", "#e62e39", "#ffffff"],
    });
  };

  const navLinks = [
    { label: "Timeline Edit", href: "#timeline" },
    { label: "Video & Reels", href: "#humas" },
    { label: "Photoshoot", href: "#kampanye-batik" },
    { label: "Workflow & Tools", href: "#pendidikan" },
    { label: "Galeri Foto", href: "#dokumentasi" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#090607]/85 backdrop-blur-md">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link
          href="#beranda"
          className="flex items-center gap-2.5 group"
        >
          <div className="size-2 rounded-full bg-[#c81e28] animate-pulse" />
          <div className="flex flex-col text-xs uppercase tracking-[0.14em] font-bold leading-tight">
            <span className="text-[#f5f5f7] group-hover:text-[#e62e39] transition-colors">Farhan Ramadhan</span>
            <span className="text-[10px] text-[#a39e9e] font-mono tracking-wider font-normal">Visual Creator • Editor</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navigasi Utama">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.08em] text-[#a39e9e] hover:text-white font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#c81e28] hover:after:w-full after:transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="#kontak"
            onClick={handleCtaClick}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-white/10 hover:border-[#c81e28] bg-transparent hover:bg-[#c81e28]/15 text-xs uppercase tracking-wider font-semibold text-[#f5f5f7] rounded-sm transition-all h-9 px-4"
            )}
          >
            Kolaborasi Visual <span className="text-[#e62e39] ml-1 font-bold">+</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#f5f5f7] hover:text-[#e62e39] focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[#c81e28]/20 bg-[#0e080a]/95 backdrop-blur-xl px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-wider text-[#a39e9e] hover:text-[#e62e39] font-medium py-1 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-white/10">
                <Link
                  href="#kontak"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleCtaClick();
                  }}
                  className={cn(
                    buttonVariants(),
                    "w-full bg-[#c81e28] hover:bg-[#e62e39] text-xs uppercase tracking-wider font-semibold text-white h-10"
                  )}
                >
                  Terbuka untuk peluang <span className="ml-1 font-bold">+</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
