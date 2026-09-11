"use client";

import React, { useState, useRef } from "react";
import { FileSpreadsheet, FileText, AlertOctagon, CheckCircle2, ArrowRight, ShieldCheck, Database, RefreshCw } from "lucide-react";
import { soundFx } from "@/lib/audio";
import { SILO_DOCUMENTS } from "@/lib/data";

export const ProblemFragmentation: React.FC = () => {
  const [isUnified, setIsUnified] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleUnify = () => {
    soundFx.playClick(isUnified ? 800 : 1600, 0.06);
    setIsUnified(!isUnified);
  };

  return (
    <section
      id="problem-section"
      ref={sectionRef}
      className="relative py-28 bg-coal-900 border-t border-b border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 hud-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header with Solid Typography Only */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-widest">
            <AlertOctagon className="w-3.5 h-3.5 text-amber-400" />
            <span>THE CHALLENGE IN MINING GOVERNANCE</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-sans">
            THE PROBLEM ISN&apos;T DATA. <br />
            <span className="text-amber-400">IT&apos;S FRAGMENTATION.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A single mine generates thousands of critical observations every week.
            Yet vital safety records, attendance logs, and compliance filings remain trapped across disconnected binders, local spreadsheets, and detached memos.
          </p>
        </div>

        {/* Interactive Unification Trigger */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={toggleUnify}
            className={`group inline-flex items-center gap-3 px-6 py-3 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-300 border ${
              isUnified
                ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.3)]"
                : "bg-coal-800 border-amber-500/50 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
            }`}
          >
            <RefreshCw className={`w-4 h-4 transition-transform duration-500 ${isUnified ? "rotate-180 text-emerald-400" : "text-amber-400"}`} />
            <span>{isUnified ? "System State: UNIFIED PLATFORM ACTIVE" : "Simulate: MERGE DISCONNECTED SYSTEMS"}</span>
          </button>
          <span className="text-xs font-mono text-slate-400">
            {isUnified ? "✓ All records synchronized to MINECEL unified platform" : "Click to merge disconnected records into one continuous system"}
          </span>
        </div>

        {/* Dynamic Matrix: Disconnected vs Unified View */}
        <div className="mt-12">
          {!isUnified ? (
            /* Disconnected Fragmented State */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SILO_DOCUMENTS.map((doc, idx) => (
                <div
                  key={doc.id}
                  className="relative p-5 rounded-lg bg-coal-950/80 border border-crimson-hazard/30 hover:border-crimson-hazard/60 transition-all duration-300 corner-bracket shadow-lg transform hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between">
                    <div className="p-2 rounded bg-coal-900 border border-white/5 text-amber-400">
                      {idx % 2 === 0 ? <FileText className="w-5 h-5 text-amber-400" /> : <FileSpreadsheet className="w-5 h-5 text-amber-300" />}
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-crimson-hazard/20 border border-crimson-hazard/40 text-crimson-hazard">
                      LATENCY: {doc.latency}
                    </span>
                  </div>

                  <h3 className="mt-3 text-sm font-bold text-slate-100 font-mono">{doc.name}</h3>
                  <div className="mt-2 space-y-1.5 text-xs text-slate-400 font-mono">
                    <div className="flex justify-between">
                      <span>Storage Medium:</span>
                      <span className="text-slate-300">{doc.format}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Synchronization:</span>
                      <span className="text-amber-400/90">{doc.age}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] text-rose-300/80">
                    <AlertOctagon className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>Risk: {doc.risk}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Unified Centralized Digital Spine */
            <div className="rounded-xl bg-coal-950 border border-emerald-500/40 p-6 md:p-8 corner-bracket shadow-[0_0_50px_rgba(16,185,129,0.15)] animate-in fade-in zoom-in-95 duration-500">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-400">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-mono">
                      MINECEL UNIFIED GOVERNANCE SPINE
                    </h3>
                    <p className="text-xs text-emerald-400 font-mono">
                      Zero-Latency Synchronization: All 6 operational feeds ingested into one real-time source of truth
                    </p>
                  </div>
                </div>
                <div className="font-mono text-xs px-3 py-1.5 rounded bg-emerald-950/50 border border-emerald-500/30 text-emerald-300">
                  STATUS: LIVE CONTINUOUS RECONCILIATION
                </div>
              </div>

              {/* Data Flow Convergence Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
                {SILO_DOCUMENTS.map((doc) => (
                  <div key={doc.id} className="p-3 rounded bg-coal-900 border border-emerald-500/20 text-center font-mono">
                    <div className="text-[10px] text-slate-400 uppercase">{doc.name.split(" ")[0]}</div>
                    <div className="text-xs font-bold text-emerald-300 mt-1 flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>REAL-TIME</span>
                    </div>
                    <div className="text-[9px] text-slate-500 mt-1">Direct System Sync</div>
                  </div>
                ))}
              </div>

              {/* Real-time Benefit Banner */}
              <div className="mt-6 p-4 rounded bg-coal-900/60 border border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-cyan-400" />
                  <span>Audit Trail: Immutable cryptographic logging across all operational shifts.</span>
                </div>
                <div className="text-amber-400 flex items-center gap-1">
                  <span>Eliminated blindspots &amp; sync delays</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
