"use client";

import React, { useState } from "react";
import {
  Bot,
  Send,
  Sparkles,
  Database,
  FileCheck,
  ExternalLink,
  ShieldCheck,
  Search,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { soundFx } from "@/lib/audio";
import { COPILOT_SAMPLE_QUERIES } from "@/lib/data";

export const AiCopilot: React.FC = () => {
  const [selectedQueryIdx, setSelectedQueryIdx] = useState<number>(0);
  const [isRetrieving, setIsRetrieving] = useState<boolean>(false);
  const [showEvidenceModal, setShowEvidenceModal] = useState<boolean>(false);

  const active = COPILOT_SAMPLE_QUERIES[selectedQueryIdx];

  const handleSelectQuery = (idx: number) => {
    soundFx.playClick(1300, 0.04);
    setIsRetrieving(true);
    setSelectedQueryIdx(idx);
    setTimeout(() => {
      setIsRetrieving(false);
      soundFx.playSuccess();
    }, 600);
  };

  return (
    <section id="copilot-section" className="relative py-24 bg-coal-900 border-t border-b border-white/10 overflow-hidden">
      <div className="absolute inset-0 hud-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header with Solid Typography */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-wider">
            <Bot className="w-3.5 h-3.5 text-amber-400" />
            <span>GROUNDED STATUTORY INTELLIGENCE</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-sans">
            AI GOVERNANCE COPILOT: <span className="text-amber-400">&ldquo;ASK THE MINE.&rdquo;</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base font-normal">
            Query thousands of pages of statutory circulars, live SCADA sensors, and shift handover registers in seconds.
          </p>
          <div className="mt-3 inline-block font-mono text-xs text-emerald-400 px-3 py-1 rounded bg-emerald-950/60 border border-emerald-500/30">
            “Grounded in your data. Not guesswork.”
          </div>
        </div>

        {/* Interactive Query Simulator Container */}
        <div data-tour="ai-copilot" className="mt-10 max-w-4xl mx-auto rounded-xl bg-coal-900 border border-coal-800 p-6 md:p-8 shadow-lg font-mono">
          {/* Preset Prompts Pills */}
          <div className="pb-4 mb-6 border-b border-white/10">
            <div className="text-xs text-slate-400 uppercase mb-3 flex items-center justify-between">
              <span>Quick Statutory Questions:</span>
              <span className="text-[10px] text-amber-400">SELECT TO TEST RETRIEVAL</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {COPILOT_SAMPLE_QUERIES.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectQuery(idx)}
                  className={`px-3 py-2 rounded-lg text-xs transition-all text-left border ${
                    selectedQueryIdx === idx
                      ? "bg-amber-500/20 border-amber-400 text-amber-300 shadow-md font-semibold"
                      : "bg-coal-900 border-white/5 text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  &ldquo;{q.query}&rdquo;
                </button>
              ))}
            </div>
          </div>

          {/* User Query Input Display */}
          <div className="p-3.5 rounded-lg bg-coal-900 border border-white/10 flex items-center gap-3">
            <Terminal className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="flex-1 text-sm text-white font-mono">
              {active.query}
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-coal-950 px-2.5 py-1 rounded border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>MINECEL RAG PIPELINE</span>
            </div>
          </div>

          {/* Retrieval Simulation Stage */}
          {isRetrieving ? (
            <div className="py-12 flex flex-col items-center justify-center gap-3 text-center">
              <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
              <div className="text-xs text-amber-400 font-mono tracking-wider">
                RETRIEVING FROM CMR 2017 GAZETTES &amp; SCADA SENSOR TELEMETRY...
              </div>
            </div>
          ) : (
            <div className="mt-6 space-y-4 animate-in fade-in duration-300">
              {/* AI Synthesized Answer Box */}
              <div className="p-5 rounded-lg bg-coal-900/90 border border-white/10 relative">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2 text-amber-400 font-bold">
                    <Sparkles className="w-4 h-4" />
                    <span>GROUNDED GOVERNANCE SYNTHESIS</span>
                  </div>
                  <span className="text-[10px] text-slate-400">
                    Confidence: 99.4% (Zero Hallucination Guardrail)
                  </span>
                </div>

                <div className="mt-4 text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-line">
                  {active.response}
                </div>

                {/* Evidence Modal Toggle */}
                <div className="mt-5 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <button
                    onClick={() => {
                      soundFx.playClick(1100, 0.04);
                      setShowEvidenceModal(!showEvidenceModal);
                    }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold transition-all"
                  >
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>{showEvidenceModal ? "Hide Evidence Dossier" : "View Evidence Dossier (3 Citations)"}</span>
                  </button>

                  <span className="text-slate-400 text-[11px]">
                    Validated against official statutory circulars
                  </span>
                </div>
              </div>

              {/* Evidence Dossier Accordion/Section */}
              {showEvidenceModal && (
                <div className="p-4 rounded-lg bg-coal-950 border border-emerald-500/40 animate-in fade-in duration-300">
                  <div className="text-xs text-emerald-400 font-bold uppercase mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>STATUTORY SOURCE CITATIONS &amp; SENSOR LOGS</span>
                  </div>

                  <div className="space-y-2.5">
                    {active.sources.map((src, i) => (
                      <div key={i} className="p-3 rounded bg-coal-900 border border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
                        <div>
                          <strong className="text-white block">{src.doc}</strong>
                          <span className="text-slate-400 text-[11px]">{src.page}</span>
                        </div>
                        <span className="text-amber-400 font-mono text-[11px] px-2 py-0.5 rounded bg-coal-950 border border-white/10">
                          {src.date}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
