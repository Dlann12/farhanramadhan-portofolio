"use client";

import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExperienceItem } from "@/data/portfolio-data";
import { ExternalLink } from "lucide-react";

interface ExperienceModalProps {
  item: ExperienceItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExperienceModal({ item, open, onOpenChange }: ExperienceModalProps) {
  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-[#120b0d] border border-[#c81e28]/25 text-[#f5f5f7] p-6 md:p-8 sm:max-w-2xl">
        <DialogHeader className="gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#e62e39] font-bold">
              {item.period}
            </span>
            {item.badge && (
              <Badge className="bg-[#c81e28] text-white text-[10px] uppercase font-bold tracking-wider">
                {item.badge}
              </Badge>
            )}
          </div>
          <DialogTitle className="font-anton text-3xl md:text-4xl uppercase text-white tracking-wide">
            {item.title}
          </DialogTitle>
          <DialogDescription className="text-sm font-medium text-[#a39e9e] border-b border-white/10 pb-3">
            {item.org}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-5 text-sm text-[#a39e9e] leading-relaxed">
          <p className="text-[#f5f5f7] font-medium">{item.summary}</p>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#e62e39] mb-3">
              Rincian Tanggung Jawab &amp; Pelaksanaan:
            </h4>
            <ul className="flex flex-col gap-2.5">
              {item.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#e62e39] font-bold shrink-0 mt-0.5">+</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {item.link && (
            <div className="pt-2">
              <a
                href={item.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#c81e28] hover:bg-[#e62e39] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded transition-all shadow-[0_4px_14px_rgba(200,30,40,0.3)]"
              >
                <span>{item.link.label}</span>
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          )}

          {item.shots && item.shots.length > 0 && (
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#e62e39] mb-3">
                Dokumentasi Kegiatan Terkait:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {item.shots.map((shot, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] rounded overflow-hidden border border-white/10 bg-black/40"
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

