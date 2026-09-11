"use client";

import React from "react";
import {
  ArrowLeftRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const COMPARISON_ROWS = [
  {
    category: "Statutory Reporting",
    manual: "Paper Form IV registers filled by hand at shift end; 14-day delay before regional review.",
    automated: "Instant edge capture with cryptographic timestamps and immediate cloud sync to MINECEL dashboard.",
  },
  {
    category: "Hazardous Gas Alerts",
    manual: "Periodic flame safety lamp checks recorded on paper; gas accumulations go unnoticed between shifts.",
    automated: "Continuous optical NDIR sensors streaming live telemetry; auto-trips auxiliary ventilation interlocks.",
  },
  {
    category: "Personnel Muster",
    manual: "Physical shift books prone to clerical discrepancies during underground emergency evacuations.",
    automated: "Live cap-lamp RFID transponder mesh monitoring worker location down to the section level.",
  },
  {
    category: "Corrective Actions (CARs)",
    manual: "Unenforced safety notices filed away in office cabinets; recurring violations persist for months.",
    automated: "Automated statutory SLA timers with automated escalation directly to Colliery GM and DGMS.",
  },
  {
    category: "Regulatory Auditing",
    manual: "High-friction panic preparation for quarterly inspections; frantic searches for lost calibration slips.",
    automated: "One-click export of tamper-proof statutory audit dossiers backed by immutable SHA-256 hashes.",
  },
];

export const TransformationComparison: React.FC = () => {
  return (
    <section id="transformation-section" className="relative py-24 bg-coal-900 border-t border-b border-white/10 overflow-hidden">
      <div className="absolute inset-0 hud-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header with Solid Typography */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-wider">
            <ArrowLeftRight className="w-3.5 h-3.5 text-amber-400" />
            <span>THE GOVERNANCE PARADIGM SHIFT</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-sans">
            FROM REACTIVE CRISIS <br />
            <span className="text-amber-400">
              TO PROACTIVE INTELLIGENCE.
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Compare the operational reality of traditional coal mine compliance against the MINECEL autonomous command standard.
          </p>
        </div>

        {/* Comparison Cards Matrix */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 font-mono">
          {/* Left: Traditional Fragmented & Reactive */}
          <div className="p-6 md:p-8 rounded-xl bg-coal-900 border border-coal-800 shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-coal-800">
              <div className="flex items-center gap-2 text-crimson-hazard font-bold text-sm uppercase">
                <XCircle className="w-5 h-5" />
                <span>TRADITIONAL / MANUAL / REACTIVE</span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-crimson-hazard/20 text-crimson-hazard">
                HIGH LIABILITY
              </span>
            </div>

            <div className="mt-6 space-y-6">
              {COMPARISON_ROWS.map((row, idx) => (
                <div key={idx} className="pb-4 border-b border-coal-800 last:border-0 last:pb-0">
                  <span className="text-[11px] text-slate-400 uppercase block mb-1">
                    {row.category}
                  </span>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {row.manual}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Modern Centralized & Proactive */}
          <div className="p-6 md:p-8 rounded-xl bg-coal-900 border border-emerald-500/40 shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase">
                <CheckCircle2 className="w-5 h-5" />
                <span>MINECEL / CENTRALIZED / PROACTIVE</span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                ZERO COMPROMISE
              </span>
            </div>

            <div className="mt-6 space-y-6">
              {COMPARISON_ROWS.map((row, idx) => (
                <div key={idx} className="pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <span className="text-[11px] text-emerald-400 uppercase block mb-1">
                    {row.category}
                  </span>
                  <p className="text-xs text-slate-200 font-sans leading-relaxed">
                    {row.automated}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
