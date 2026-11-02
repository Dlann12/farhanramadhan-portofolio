"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Scissors, MousePointer, Volume2, Film, Layers, Sparkles } from "lucide-react";

export function VideoEditorTimeline() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeClip, setActiveClip] = useState<string>("v1-1");
  const [timecode, setTimecode] = useState("00:01:24:18");

  // Simulate subtle timecode ticker when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      const frames = Math.floor(Math.random() * 24);
      const secs = (24 + Math.floor(Math.random() * 5)).toString().padStart(2, "0");
      setTimecode(`00:01:${secs}:${frames.toString().padStart(2, "0")}`);
    }, 400);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const clipDetails: Record<
    string,
    { title: string; track: string; technique: string; specs: string; impact: string }
  > = {
    "v3-1": {
      title: "Kinetic Animated Subtitle",
      track: "Track V3 · Motion Typography",
      technique: "CapCut Pro & Premiere Essential Graphics · Pop-up 0.15s with spring bounce",
      specs: "Font: Archivo Bold 48pt · Color: #ffffff with #e62e39 outline · Shadow: 30%",
      impact: "Meningkatkan retention rate penonton Reels hingga 78% pada 3 detik pertama.",
    },
    "v3-2": {
      title: "Branded Lower Thirds & Callout",
      track: "Track V3 · Motion Graphics",
      technique: "Custom Motion Graphics Template (.mogrt) Jasa Raharja & Besurek",
      specs: "Duration: 3.5s · In-transition: Smooth wipe · Out: Fade 0.3s",
      impact: "Memperkuat identitas instansi resmi tanpa mengganggu estetika visual.",
    },
    "v2-1": {
      title: "B-Roll: Benteng Marlborough Pan",
      track: "Track V2 · Cutaway B-Roll",
      technique: "Speed Ramp (200% -> 50% slow motion 60fps) pada transisi drum beat",
      specs: "4K 60FPS · 50mm f/1.8 · Shutter 1/120s · Stabilized on Gimbal",
      impact: "Memberikan kedalaman atmosfer sejarah dan sinematik pada video publik.",
    },
    "v2-2": {
      title: "Macro Texture Kain Batik Besurek",
      track: "Track V2 · Detail Shot",
      technique: "Extreme Close-Up (ECU) kaligrafi Arab-Melayu & bunga Rafflesia",
      specs: "85mm f/2.0 · Shallow Depth of Field · Highlights rolloff",
      impact: "Menonjolkan keunikan budaya lokal Bengkulu dengan tekstur visual premium.",
    },
    "v1-1": {
      title: "A-Roll: Model Runway & Posing",
      track: "Track V1 · Main Storyline",
      technique: "J-Cut (audio musik mendahului pergantian visual 12 frame)",
      specs: "Sony Cinema Profile · S-Log3 to Rec.709 Besurek Warm LUT",
      impact: "Pondasi ritme visual yang sinkron sempurna dengan tempo ketukan musik 128 BPM.",
    },
    "v1-2": {
      title: "A-Roll: Photoshoot Live Coverage",
      track: "Track V1 · Main Storyline",
      technique: "Match Cut & Flash Transition menandai momen pemotretan kamera",
      specs: "4K ProRes · Balanced skin tones 70 IRE on vectorscope",
      impact: "Transisi natural antara hasil foto still dan proses di balik layar (BTS).",
    },
    "a1-1": {
      title: "Master Dialogue & Voiceover",
      track: "Track A1 · Narasi & Ambience",
      technique: "Parametric EQ (high-pass 80Hz, air boost 10kHz) + multiband compression",
      specs: "Lavalier Mic 48kHz 24-bit · Peak normalized to -12 dBFS",
      impact: "Vokal terdengar jernih, hangat, dan berwibawa di speaker HP mana pun.",
    },
    "a2-1": {
      title: "Modern Ethnic Beat (128 BPM)",
      track: "Track A2 · Music & SFX",
      technique: "Beat-matching cut marks + auto-ducking (-18dB saat suara narator aktif)",
      specs: "Stereo Master · Whoosh & Impact SFX pada setiap pergantian scene",
      impact: "Membangun energi dinamis yang membuat penonton tidak me-skip video.",
    },
  };

  const selected = clipDetails[activeClip] || clipDetails["v1-1"];

  return (
    <section className="max-w-[1240px] mx-auto px-4 sm:px-6 py-14 sm:py-16 relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="size-2 rounded-full bg-[#e62e39] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#e62e39] font-bold">
              Non-Linear Editing (NLE) Workflow
            </span>
          </div>
          <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide text-white">
            Behind The Edit: <span className="text-[#e62e39]">Timeline Multi-Track</span>
          </h2>
        </div>
        <p className="text-xs text-[#a39e9e] max-w-md">
          Simulasi timeline editing Premiere Pro &amp; CapCut yang digunakan Farhan dalam meracik video Instagram Reels bertempo dinamis dan campaign publik.
        </p>
      </div>

      {/* Editor Mockup Window */}
      <div className="bg-[#0f090b] border border-[#c81e28]/30 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(200,30,40,0.15)]">
        {/* Editor Top Bar (Title & Tools) */}
        <div className="bg-[#180e11] px-4 py-2.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* File Project Name & Timecode */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-white/90">
              <Film className="size-3.5 text-[#e62e39]" />
              <span className="font-semibold text-[#e62e39]">REELS_BATIK_MASTER_v04.prproj</span>
            </div>
            <span className="text-white/20">|</span>
            <div className="font-mono text-[11px] px-2 py-0.5 rounded bg-black/60 border border-white/10 text-emerald-400 font-bold tracking-wider">
              {timecode}
            </div>
          </div>

          {/* NLE Tool Palette */}
          <div className="flex items-center gap-1 bg-black/40 p-1 rounded border border-white/5">
            <button
              type="button"
              className="p-1.5 rounded bg-[#c81e28]/20 text-[#e62e39] hover:bg-[#c81e28]/30 transition-colors"
              title="Selection Tool (V)"
            >
              <MousePointer className="size-3" />
            </button>
            <button
              type="button"
              className="p-1.5 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              title="Razor Cut Tool (C)"
            >
              <Scissors className="size-3" />
            </button>
            <button
              type="button"
              className="p-1.5 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              title="Layer Overlays (L)"
            >
              <Layers className="size-3" />
            </button>
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-2.5 py-1 rounded bg-[#c81e28] text-white hover:bg-[#e62e39] transition-colors flex items-center gap-1 font-mono text-[10px] font-bold"
            >
              {isPlaying ? <Pause className="size-2.5" /> : <Play className="size-2.5" />}
              <span>{isPlaying ? "PAUSE" : "PLAY"}</span>
            </button>
          </div>

          {/* Color & Render Tag */}
          <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-white/60">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            <span>Rec.709</span>
            <span>·</span>
            <span>4K UHD 60FPS</span>
            <span>·</span>
            <span className="text-[#e62e39] font-semibold">100% Rendered</span>
          </div>
        </div>

        {/* Timeline Tracks Area */}
        <div className="p-4 sm:p-5 overflow-x-auto">
          <div className="min-w-[680px] flex flex-col gap-2">
            {/* Timeline Ruler */}
            <div className="flex items-center text-[9px] font-mono text-white/40 border-b border-white/5 pb-1 select-none">
              <span className="w-20 shrink-0 font-bold text-white/60">TRACKS</span>
              <div className="flex-grow grid grid-cols-6 text-center">
                <span>00:00:00</span>
                <span>00:00:15</span>
                <span>00:00:30</span>
                <span>00:00:45</span>
                <span>00:01:00</span>
                <span>00:01:15</span>
              </div>
            </div>

            {/* Track V3: Motion Typography & Lower Thirds */}
            <div className="flex items-center gap-2">
              <div className="w-20 shrink-0 flex items-center gap-1.5 font-mono text-[10px] font-bold text-purple-400 bg-purple-950/40 border border-purple-500/20 px-2 py-1 rounded">
                <span>V3</span>
                <span className="text-[9px] text-purple-300 font-normal">SUBS</span>
              </div>
              <div className="flex-grow grid grid-cols-12 gap-1.5 h-7">
                <button
                  type="button"
                  onClick={() => setActiveClip("v3-1")}
                  className={`col-span-5 rounded px-2.5 text-left text-[10px] font-mono truncate transition-all border ${
                    activeClip === "v3-1"
                      ? "bg-purple-600/40 border-purple-400 text-white shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                      : "bg-purple-900/30 border-purple-500/30 text-purple-200 hover:border-purple-400/60"
                  }`}
                >
                  ⚡ [Subtitles] Kinetic Pop-In Captions
                </button>
                <button
                  type="button"
                  onClick={() => setActiveClip("v3-2")}
                  className={`col-span-7 rounded px-2.5 text-left text-[10px] font-mono truncate transition-all border ${
                    activeClip === "v3-2"
                      ? "bg-purple-600/40 border-purple-400 text-white shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                      : "bg-purple-900/30 border-purple-500/30 text-purple-200 hover:border-purple-400/60"
                  }`}
                >
                  🏷️ [Graphic] Lower Third: Farhan Ramadhan
                </button>
              </div>
            </div>

            {/* Track V2: B-Roll Cutaways & Macro Shots */}
            <div className="flex items-center gap-2">
              <div className="w-20 shrink-0 flex items-center gap-1.5 font-mono text-[10px] font-bold text-amber-400 bg-amber-950/40 border border-amber-500/20 px-2 py-1 rounded">
                <span>V2</span>
                <span className="text-[9px] text-amber-300 font-normal">B-ROLL</span>
              </div>
              <div className="flex-grow grid grid-cols-12 gap-1.5 h-7">
                <button
                  type="button"
                  onClick={() => setActiveClip("v2-1")}
                  className={`col-span-6 rounded px-2.5 text-left text-[10px] font-mono truncate transition-all border ${
                    activeClip === "v2-1"
                      ? "bg-amber-600/40 border-amber-400 text-white shadow-[0_0_12px_rgba(251,191,36,0.4)]"
                      : "bg-amber-900/30 border-amber-500/30 text-amber-200 hover:border-amber-400/60"
                  }`}
                >
                  🏛️ [B-Roll] Benteng Pan 60fps Speed-Ramp
                </button>
                <button
                  type="button"
                  onClick={() => setActiveClip("v2-2")}
                  className={`col-span-6 rounded px-2.5 text-left text-[10px] font-mono truncate transition-all border ${
                    activeClip === "v2-2"
                      ? "bg-amber-600/40 border-amber-400 text-white shadow-[0_0_12px_rgba(251,191,36,0.4)]"
                      : "bg-amber-900/30 border-amber-500/30 text-amber-200 hover:border-amber-400/60"
                  }`}
                >
                  🧵 [Detail] Macro Kain Besurek 85mm
                </button>
              </div>
            </div>

            {/* Track V1: Main A-Roll Storyline */}
            <div className="flex items-center gap-2">
              <div className="w-20 shrink-0 flex items-center gap-1.5 font-mono text-[10px] font-bold text-[#e62e39] bg-[#c81e28]/20 border border-[#c81e28]/40 px-2 py-1 rounded">
                <span>V1</span>
                <span className="text-[9px] text-red-300 font-normal">A-ROLL</span>
              </div>
              <div className="flex-grow grid grid-cols-12 gap-1.5 h-8">
                <button
                  type="button"
                  onClick={() => setActiveClip("v1-1")}
                  className={`col-span-7 rounded px-2.5 text-left text-[10px] font-mono truncate transition-all border ${
                    activeClip === "v1-1"
                      ? "bg-[#c81e28]/50 border-[#e62e39] text-white shadow-[0_0_15px_rgba(230,46,57,0.5)] font-bold"
                      : "bg-[#c81e28]/20 border-[#c81e28]/30 text-red-200 hover:border-[#e62e39]"
                  }`}
                >
                  🎬 [A-Roll] Runway Walk &amp; Pacing Cut (128 BPM)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveClip("v1-2")}
                  className={`col-span-5 rounded px-2.5 text-left text-[10px] font-mono truncate transition-all border ${
                    activeClip === "v1-2"
                      ? "bg-[#c81e28]/50 border-[#e62e39] text-white shadow-[0_0_15px_rgba(230,46,57,0.5)] font-bold"
                      : "bg-[#c81e28]/20 border-[#c81e28]/30 text-red-200 hover:border-[#e62e39]"
                  }`}
                >
                  📸 [A-Roll] Photoshoot Live BTS
                </button>
              </div>
            </div>

            {/* Track A1: Voiceover & Dialogue */}
            <div className="flex items-center gap-2">
              <div className="w-20 shrink-0 flex items-center gap-1.5 font-mono text-[10px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-1 rounded">
                <span>A1</span>
                <span className="text-[9px] text-emerald-300 font-normal">VOICE</span>
              </div>
              <div className="flex-grow grid grid-cols-12 gap-1.5 h-7">
                <button
                  type="button"
                  onClick={() => setActiveClip("a1-1")}
                  className={`col-span-12 rounded px-2.5 text-left text-[10px] font-mono truncate transition-all border ${
                    activeClip === "a1-1"
                      ? "bg-emerald-600/40 border-emerald-400 text-white shadow-[0_0_12px_rgba(52,211,153,0.4)]"
                      : "bg-emerald-900/30 border-emerald-500/30 text-emerald-200 hover:border-emerald-400/60"
                  }`}
                >
                  🎙️ [Voiceover] Master Audio (EQ High-Pass · De-Noised -12dB)
                </button>
              </div>
            </div>

            {/* Track A2: Soundtrack & Foley SFX */}
            <div className="flex items-center gap-2">
              <div className="w-20 shrink-0 flex items-center gap-1.5 font-mono text-[10px] font-bold text-sky-400 bg-sky-950/40 border border-sky-500/20 px-2 py-1 rounded">
                <span>A2</span>
                <span className="text-[9px] text-sky-300 font-normal">BEAT</span>
              </div>
              <div className="flex-grow grid grid-cols-12 gap-1.5 h-7">
                <button
                  type="button"
                  onClick={() => setActiveClip("a2-1")}
                  className={`col-span-12 rounded px-2.5 text-left text-[10px] font-mono truncate transition-all border ${
                    activeClip === "a2-1"
                      ? "bg-sky-600/40 border-sky-400 text-white shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                      : "bg-sky-900/30 border-sky-500/30 text-sky-200 hover:border-sky-400/60"
                  }`}
                >
                  🎵 [Music Track] Modern Gamelan × Electronic Beat + Auto-Ducking
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Clip Inspector / Color Grading Panel */}
        <div className="bg-[#140b0e] border-t border-white/10 p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Clip Info */}
          <div className="md:col-span-7 flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#c81e28]/20 border border-[#c81e28]/40 text-[#e62e39] font-bold">
                {selected.track}
              </span>
              <h4 className="text-sm font-bold text-white font-mono">{selected.title}</h4>
            </div>
            <p className="text-xs text-[#d1cece] leading-relaxed">
              <strong className="text-white">Teknik:</strong> {selected.technique}
            </p>
            <p className="text-[11px] font-mono text-emerald-400/90">
              <strong>Spesifikasi:</strong> {selected.specs}
            </p>
            <p className="text-xs text-[#a39e9e] italic">
              &ldquo;{selected.impact}&rdquo;
            </p>
          </div>

          {/* Colorist Vector & Audio VU Meter */}
          <div className="md:col-span-5 bg-black/50 border border-white/10 p-3 rounded-lg flex flex-col gap-2 font-mono text-[10px]">
            <div className="flex items-center justify-between text-white/70">
              <span className="flex items-center gap-1 text-[#e62e39] font-bold">
                <Sparkles className="size-3" />
                COLOR GRADE: BESUREK WARM LUT
              </span>
              <span className="text-emerald-400">70 IRE SKIN</span>
            </div>

            {/* Simulated SMPTE Color Grade Bar */}
            <div className="h-3 rounded overflow-hidden flex border border-white/20">
              <span className="flex-1 bg-white" />
              <span className="flex-1 bg-yellow-400" />
              <span className="flex-1 bg-cyan-400" />
              <span className="flex-1 bg-emerald-500" />
              <span className="flex-1 bg-fuchsia-500" />
              <span className="flex-1 bg-red-600" />
              <span className="flex-1 bg-blue-600" />
            </div>

            {/* Stereo Audio VU Peak Meter */}
            <div className="flex flex-col gap-1 pt-1">
              <div className="flex items-center gap-2">
                <span className="w-6 text-white/50 text-[9px]">L:</span>
                <div className="flex-grow bg-black/60 rounded h-1.5 overflow-hidden flex">
                  <div className="w-[72%] bg-gradient-to-r from-emerald-500 via-amber-400 to-red-500" />
                </div>
                <span className="text-white/60 text-[9px] w-10 text-right">-12 dB</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 text-white/50 text-[9px]">R:</span>
                <div className="flex-grow bg-black/60 rounded h-1.5 overflow-hidden flex">
                  <div className="w-[65%] bg-gradient-to-r from-emerald-500 via-amber-400 to-red-500" />
                </div>
                <span className="text-white/60 text-[9px] w-10 text-right">-16 dB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

