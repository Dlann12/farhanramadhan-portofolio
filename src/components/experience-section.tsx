"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EXPERIENCES, ExperienceItem } from "@/data/portfolio-data";
import { ExperienceModal } from "@/components/experience-modal";

export function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (item: ExperienceItem) => {
    setSelectedExp(item);
    setModalOpen(true);
  };

  return (
    <section id="pengalaman" className="max-w-[1240px] mx-auto px-4 sm:px-6 py-14 sm:py-16 relative z-10 overflow-hidden">
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8 border-b border-white/10 pb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="size-1.5 rounded-full bg-[#e62e39]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#e62e39]">Production &amp; Field Record</span>
          </div>
          <h2 className="font-anton text-2xl md:text-3xl uppercase tracking-wider text-[#f5f5f7]">
            Pengalaman Produksi &amp; Liputan
          </h2>
        </div>
        <p className="text-xs text-[#716c6d]">
          Pilih kartu untuk melihat rincian tugas visual, editing, dan dokumentasinya.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0.95, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="h-full"
          >
            <button
              type="button"
              onClick={() => handleCardClick(exp)}
              className="w-full text-left bg-[#120b0d] hover:bg-[#1c1013] border border-[#c81e28]/20 hover:border-[#c81e28] rounded-lg overflow-hidden transition-all duration-300 flex flex-col h-full group hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.6),0_0_15px_rgba(200,30,40,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e62e39]"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-[4/3] w-full bg-black overflow-hidden">
                {exp.image ? (
                  <>
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[102%]"
                    />
                    {exp.badge && (
                      <span className="absolute top-2.5 left-2.5 bg-[#c81e28] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                        {exp.badge}
                      </span>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1f0b0e] to-[#0d0608] p-4 text-center">
                    <span className="font-anton text-3xl uppercase tracking-wider text-[#e62e39] leading-none">
                      DPRD
                    </span>
                    <small className="text-[10px] uppercase tracking-widest text-[#a39e9e] mt-1">
                      Bengkulu Utara
                    </small>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-4 flex justify-between items-end gap-2 flex-grow">
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-[#f5f5f7] group-hover:text-white transition-colors leading-snug">
                    {exp.title}
                  </h3>
                  <span className="text-[11px] text-[#a39e9e] mt-0.5">
                    {exp.org.split(",")[0]}
                  </span>
                </div>

                <div className="font-anton text-xl text-[#e62e39] leading-none flex items-center gap-1 shrink-0">
                  <span>{exp.num}</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Experience Detail Modal */}
      <ExperienceModal
        item={selectedExp}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
