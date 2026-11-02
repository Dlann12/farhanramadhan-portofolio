"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCtaClick = (_e?: React.MouseEvent) => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1 },
      colors: ["#c81e28", "#e62e39", "#ffffff"],
    });
  };

  const navLinks = [
    { label: "Keahlian", href: "#spesialisasi" },
    { label: "Video & Reels", href: "#humas" },
    { label: "Photoshoot", href: "#kampanye-batik" },
    { label: "Workflow & Tools", href: "#pendidikan" },
    { label: "Galeri Foto", href: "#dokumentasi" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-[#090607]/95 backdrop-blur-md border-b border-[#c81e28]/25 shadow-[0_4px_25px_rgba(0,0,0,0.85)] py-3 sm:py-3.5"
          : "bg-[#090607]/80 backdrop-blur-md border-b border-white/[0.08] py-4"
      )}
    >
      <div className="max-w-[1240px] mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link
          href="#beranda"
          className="flex items-center gap-2.5 group"
          onClick={() => setMobileMenuOpen(false)}
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

        {/* Mobile Menu Toggle (min 44px tap target) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden size-11 flex items-center justify-center text-[#f5f5f7] hover:text-[#e62e39] hover:bg-white/5 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e62e39]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown (Fixed underneath header) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-[#c81e28]/30 bg-[#0e080a]/98 backdrop-blur-2xl px-6 py-5 shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto"
          >
            <div className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-wider text-[#d1cece] hover:text-[#e62e39] font-medium py-1.5 transition-colors border-b border-white/5 last:border-none flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#e62e39] font-mono">→</span>
                </Link>
              ))}
              <div className="pt-3 border-t border-white/10 mt-1">
                <Link
                  href="#kontak"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleCtaClick();
                  }}
                  className={cn(
                    buttonVariants(),
                    "w-full bg-[#c81e28] hover:bg-[#e62e39] text-xs uppercase tracking-wider font-semibold text-white h-11"
                  )}
                >
                  Kolaborasi Visual <span className="ml-1 font-bold">+</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
