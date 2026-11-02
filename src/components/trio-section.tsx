"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mic, Camera, PenTool, CheckCircle, Upload, BarChart3 } from "lucide-react";

export function TrioSection() {
  const skills = [
    "Peliputan Kegiatan",
    "Press Release",
    "Fotografi",
    "Videografi",
    "Media Sosial",
    "Notulensi Rapat",
    "Naskah Pandangan Fraksi",
    "Verifikasi Data & Dokumen",
    "Koordinasi Antarinstansi",
    "Administrasi & Pelaporan",
    "Pelayanan Prima",
  ];

  const processSteps = [
    {
      title: "Liput",
      desc: "Hadir di lokasi kegiatan kepemerintahan & kedinasan",
      icon: Mic,
    },
    {
      title: "Dokumentasi",
      desc: "Pengambilan foto dan video kegiatan di lapangan",
      icon: Camera,
    },
    {
      title: "Tulis",
      desc: "Menyusun press release, caption, & notulensi",
      icon: PenTool,
    },
    {
      title: "Verifikasi",
      desc: "Cek akurasi data korban, ahli waris, & dokumen",
      icon: CheckCircle,
    },
    {
      title: "Publikasi",
      desc: "Unggah konten ke media sosial & portal resmi",
      icon: Upload,
    },
    {
      title: "Laporan",
      desc: "Rekap data kantor, evaluasi layanan, & arsip",
      icon: BarChart3,
    },
  ];

  return (
    <section id="pendidikan" className="max-w-[1240px] mx-auto px-6 py-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Column 1: Pendidikan & Keahlian */}
        <motion.div
          initial={{ opacity: 0.95, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-[#120b0d] border border-[#c81e28]/20 rounded-lg p-7 flex flex-col"
        >
          <h2 className="font-anton text-xl uppercase tracking-wider text-white border-b border-white/10 pb-3 mb-5">
            Pendidikan &amp; Keahlian
          </h2>

          <div className="mb-5">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#e62e39] mb-1.5">
              Pendidikan
            </h3>
            <p className="font-bold text-sm text-white">S1 Ilmu Komunikasi (S.I.Kom)</p>
            <p className="text-xs font-semibold text-[#e62e39] mt-0.5">Lulus Jan 2024</p>
            <p className="text-xs text-[#a39e9e] mt-0.5">Universitas Sriwijaya, IPK 3,88</p>
          </div>

          <div className="mb-5">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#e62e39] mb-2">
              Organisasi
            </h3>
            <ul className="flex flex-col gap-1.5 text-xs text-[#a39e9e]">
              <li className="flex items-center gap-2">
                <span className="text-[#e62e39] font-bold">+</span>
                Lembaga Pers Mahasiswa
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#e62e39] font-bold">+</span>
                UKM Basket Unsri
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#e62e39] font-bold">+</span>
                OSIS
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#e62e39] mb-2.5">
              Keahlian
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] uppercase tracking-wider px-2.5 py-1 bg-white/[0.03] border border-white/10 rounded text-[#a39e9e] hover:border-[#c81e28] hover:text-white hover:bg-[#c81e28]/15 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Column 2: Cara Kerja */}
        <motion.div
          initial={{ opacity: 0.95, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-[#120b0d] border border-[#c81e28]/20 rounded-lg p-7 flex flex-col"
        >
          <h2 className="font-anton text-xl uppercase tracking-wider text-white border-b border-white/10 pb-3 mb-5">
            Cara Kerja
          </h2>

          <div className="relative flex flex-col gap-4 before:content-[''] before:absolute before:top-4 before:bottom-4 before:left-[17px] before:w-[1px] before:bg-[#c81e28]/25">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex items-start gap-3.5 relative z-10">
                  <div className="size-9 shrink-0 rounded-full bg-[#1c1013] border border-[#c81e28]/35 flex items-center justify-center text-[#e62e39]">
                    <Icon className="size-4" />
                  </div>
                  <div className="flex flex-col pt-0.5">
                    <strong className="text-xs font-bold uppercase tracking-wider text-white">
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
          className="bg-gradient-to-br from-[#42080d] to-[#1a0507] border border-[#7a0e14] rounded-lg p-8 flex flex-col justify-between"
        >
          <div>
            <span
              className="font-anton text-7xl leading-none text-[#e62e39] block select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-white my-4">
              Informasi yang baik itu{" "}
              <em className="not-italic text-[#e62e39] font-bold">cepat, tepat,</em> dan tetap
              manusiawi.
            </blockquote>
          </div>

          <div>
            <p className="font-script text-5xl text-white leading-none mb-6 -rotate-3 select-none">
              Farhan
            </p>
            <Link
              href="#kontak"
              className="inline-flex items-center justify-between w-full px-5 py-3.5 bg-black/40 hover:bg-[#c81e28] border border-white/10 hover:border-[#c81e28] rounded text-xs uppercase tracking-wider font-bold text-white transition-all group"
            >
              <span>Mari bekerja sama</span>
              <span className="text-[#e62e39] group-hover:text-white font-bold text-sm">+</span>
            </Link>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
