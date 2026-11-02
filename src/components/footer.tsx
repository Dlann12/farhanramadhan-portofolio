"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-[#070405] relative z-10 py-6">
      <div className="max-w-[1240px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#716c6d] uppercase tracking-wider">
        <p>&copy; 2026 Farhan Ramadhan, S.I.Kom &middot; Fotografer &amp; Video Editor. All rights reserved.</p>

        <a
          href="#beranda"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 hover:text-[#e62e39] transition-colors"
        >
          <span>Kembali ke atas</span>
          <ArrowUp className="size-3.5" />
        </a>
      </div>
    </footer>
  );
}

