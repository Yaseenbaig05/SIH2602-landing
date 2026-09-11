"use client";

import React from "react";
import { ArrowRight, Layers, ShieldAlert, Cpu, Sparkles } from "lucide-react";

interface HeroProps {
  onExploreClick?: () => void;
  onViewArchitecture?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onViewArchitecture }) => {
  return (
    <section id="hero" className="relative pt-12 pb-20 overflow-hidden bg-coal-950 hud-grid">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Category Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-[11px] font-bold uppercase tracking-wider mb-6">
          <span>✦</span>
          <span>SIH 2024 MINISTRY OF COAL INITIATIVE</span>
        </div>

        {/* Big Narrative Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-sans leading-[1.08] max-w-4xl mx-auto">
          From Compliance Monitoring to <br />
          <span className="text-amber-400">Compliance Intelligence.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          MineCell links mine personnel, statutory inspections, real-time safety telemetry, and CAPA corrective actions into one accountable, zero-loss ecosystem.
        </p>

        {/* 4 Status Metric Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 font-mono text-[11px]">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-coal-900 border border-white/10 text-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            <span className="font-bold text-white">412 IN-PIT</span>
            <span className="text-slate-400">100% RFID MUSTER</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-coal-900 border border-white/10 text-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
            <span className="font-bold text-white">94.2%</span>
            <span className="text-slate-400">CMR 2017 COMPLIANT</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-coal-900 border border-white/10 text-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
            <span className="font-bold text-white">0 Overdue</span>
            <span className="text-slate-400">STATUTORY NOTICES</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-coal-900 border border-white/10 text-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
            <span className="font-bold text-white">~760 SLA</span>
            <span className="text-slate-400">SAFE MAN-HOURS</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={onExploreClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-coal-950 font-bold font-mono text-xs uppercase tracking-wider transition-all duration-150 shadow-md hover:shadow-amber-500/20 active:scale-95"
          >
            <span>Explore Live Console</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onViewArchitecture}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-coal-900 hover:bg-coal-800 text-slate-200 border border-white/15 font-mono text-xs uppercase tracking-wider transition-all duration-150 active:scale-95"
          >
            <Layers className="w-4 h-4 text-amber-400" />
            <span>View Architecture</span>
          </button>
        </div>

        {/* Live Command Center Mockup Display */}
        <div className="mt-14 rounded-xl bg-coal-950 border border-white/10 p-4 sm:p-6 shadow-2xl text-left font-mono max-w-5xl mx-auto">
          {/* Top Window Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              </div>
              <span className="text-slate-300 font-bold text-xs pl-2">
                MineCell Command Center • Jharia 07 Seam 3A
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>850m Live  100 FPS IoT Telemetry</span>
            </div>
          </div>

          {/* 4 Stat Boxes */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3 rounded bg-coal-900 border border-white/5">
              <div className="text-[10px] text-slate-400 uppercase">SUBSURFACE PERSONNEL</div>
              <div className="text-xl font-bold text-white mt-1">412 Pit</div>
              <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Muster Safe</span>
              </div>
            </div>

            <div className="p-3 rounded bg-coal-900 border border-white/5">
              <div className="text-[10px] text-slate-400 uppercase">STATUTORY COMPLIANCE</div>
              <div className="text-xl font-bold text-white mt-1">94.2%</div>
              <div className="text-[10px] text-slate-400 mt-1">DGMS 2017</div>
            </div>

            <div className="p-3 rounded bg-coal-900 border border-white/5">
              <div className="text-[10px] text-slate-400 uppercase">ACTIVE VIOLATIONS</div>
              <div className="text-xl font-bold text-amber-400 mt-1">1 Open</div>
              <div className="text-[10px] text-slate-400 mt-1">0 Escalated</div>
            </div>

            <div className="p-3 rounded bg-coal-900 border border-white/5">
              <div className="text-[10px] text-slate-400 uppercase">AUDIT ROLL STATUS</div>
              <div className="text-xl font-bold text-white mt-1">184/184</div>
              <div className="text-[10px] text-emerald-400 mt-1">Verified</div>
            </div>
          </div>

          {/* Bottom Dual Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mt-3">
            {/* Left: Active Statutory Dispatch */}
            <div className="lg:col-span-7 p-3.5 rounded bg-coal-900 border border-white/5 space-y-2.5">
              <div className="flex items-center justify-between text-[10px] pb-2 border-b border-white/5">
                <span className="text-slate-300 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson-hazard inline-block" />
                  ACTIVE STATUTORY DISPATCH
                </span>
                <span className="text-slate-500">Escalated to Corporate Level 1</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 p-2 rounded bg-coal-950 border border-crimson-hazard/30 text-[11px]">
                <div className="text-slate-200 truncate">
                  <span className="text-crimson-hazard font-bold">[CRITICAL 01]</span> Conveyor 2 Joint Overheating (76°C) · Re-Pipe Air Line
                </div>
                <span className="px-2 py-0.5 rounded bg-crimson-hazard/20 text-crimson-hazard font-bold text-[10px]">
                  CAR: 24h SLA Left
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 p-2 rounded bg-coal-950 border border-amber-500/30 text-[11px]">
                <div className="text-slate-200 truncate">
                  <span className="text-amber-400 font-bold">[NOTICE]</span> Seam 3A Automatic Vent – Shaft Fan RPM: 0, Methane (CH4: 0.88%)
                </div>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[10px]">
                  Tripped Off
                </span>
              </div>
            </div>

            {/* Right: AI Regulatory Copilot Grounding */}
            <div className="lg:col-span-5 p-3.5 rounded bg-coal-900 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] pb-2 border-b border-white/5">
                  <span className="text-amber-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    AI REGULATORY COPILOT
                  </span>
                  <span className="text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-[9px] font-bold">
                    RAG Grounded
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-300 italic leading-relaxed">
                  &ldquo;CMR Reg 104 mandates dual auxiliary fan interlocks whenever methane &gt; 0.75% in gassy seams of third degree.&rdquo;
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                <span>Ref: DGMS Circular 02/2010</span>
                <span className="text-emerald-400 font-bold">100% Mine Logs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
