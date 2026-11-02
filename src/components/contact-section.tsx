"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Copy, Check } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/aceternity/3d-card";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function ContactSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const contactList = [
    {
      key: "email",
      label: "Email",
      value: "farhanramadhan.fr23@gmail.com",
      display: "farhanramadhan.fr23@gmail.com",
      href: "mailto:farhanramadhan.fr23@gmail.com",
      icon: Mail,
    },
    {
      key: "wa",
      label: "WhatsApp",
      value: "+62 895-6045-77003",
      display: "+62 895-6045-77003",
      href: "https://wa.me/62895604577003",
      icon: Phone,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/farhan-ramadhan-ab6194222/",
      display: "Farhan Ramadhan, S.I.Kom",
      href: "https://www.linkedin.com/in/farhan-ramadhan-ab6194222/",
      icon: LinkedInIcon,
    },
    {
      key: "instagram",
      label: "Instagram",
      value: "@haa_nnn",
      display: "@haa_nnn",
      href: "https://www.instagram.com/haa_nnn/",
      icon: InstagramIcon,
    },
  ];

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="kontak" className="max-w-[1240px] mx-auto px-6 py-20 border-t border-white/10 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Col: Lead */}
        <motion.div
          initial={{ opacity: 0.95, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4"
        >
          <h2 className="font-anton text-[clamp(2.4rem,4.2vw,3.8rem)] uppercase tracking-wide leading-[0.96] text-white mb-4">
            Mari Bekerja <br />
            <span className="text-[#e62e39]">
              Sama <span className="font-bold text-4xl align-middle">+</span>
            </span>
          </h2>
          <p className="text-sm text-[#a39e9e] leading-relaxed">
            Saya terbuka untuk peran kehumasan, komunikasi publik, dan peliputan kegiatan. Kirim pesan atau hubungi langsung melalui kontak berikut.
          </p>
        </motion.div>

        {/* Middle Col: Contact Links */}
        <motion.div
          initial={{ opacity: 0.95, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col gap-3.5"
        >
          {contactList.map((contact) => {
            const Icon = contact.icon;
            return (
              <div
                key={contact.key}
                className="flex items-center justify-between p-3.5 px-4 bg-[#120b0d] hover:bg-[#1c1013] border border-[#c81e28]/20 hover:border-[#c81e28] rounded-lg transition-all group"
              >
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 flex-grow"
                >
                  <div className="size-9 rounded-full bg-[#c81e28]/15 border border-[#c81e28]/30 flex items-center justify-center text-[#e62e39] group-hover:scale-110 transition-transform">
                    <Icon className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#e62e39]">
                      {contact.label}
                    </span>
                    <span className="text-xs md:text-sm font-medium text-white group-hover:text-[#e62e39] transition-colors">
                      {contact.display}
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy(contact.key, contact.value)}
                  className="p-2 text-[#a39e9e] hover:text-white transition-colors ml-2"
                  title="Salin ke clipboard"
                  aria-label={`Salin ${contact.label}`}
                >
                  {copiedKey === contact.key ? (
                    <Check className="size-4 text-green-400" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </button>
              </div>
            );
          })}
        </motion.div>

        {/* Right Col: 3D Tilt Card Photo */}
        <motion.div
          initial={{ opacity: 0.95, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-3 flex justify-center"
        >
          <CardContainer className="inter-var">
            <CardBody className="bg-[#120b0d] relative group/card border-[#c81e28]/25 w-auto sm:w-[260px] h-auto rounded-xl p-4 border">
              <CardItem translateZ="50" className="w-full">
                <Image
                  src="/assets/img/farhan-formal.jpg"
                  alt="Potret formal Farhan Ramadhan, S.I.Kom"
                  width={600}
                  height={900}
                  className="h-80 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                />
              </CardItem>
              <div className="text-center mt-3">
                <CardItem
                  translateZ="40"
                  className="font-anton text-sm uppercase tracking-wider text-white inline-block"
                >
                  Farhan Ramadhan, S.I.Kom
                </CardItem>
                <CardItem
                  translateZ="30"
                  as="p"
                  className="text-[10px] uppercase tracking-widest text-[#e62e39] font-semibold mt-0.5"
                >
                  Humas &amp; Komunikasi Publik
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </motion.div>
      </div>
    </section>
  );
}
