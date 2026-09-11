"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Cpu,
  Database,
  Search,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  FileCheck,
  CheckCircle2,
} from "lucide-react";
import { soundFx } from "@/lib/audio";

const RAG_STEPS = [
  {
    step: "01",
    title: "Government Documents",
    desc: "Mines Act 1952, Coal Mines Regulations 2017, DGMS Technical Circulars, and State Pollution Control norms.",
    badge: "Statutory PDF/Gazettes",
  },
  {
    step: "02",
    title: "Processing & OCR",
    desc: "Intelligent document parsing, legal clause segmentation, and hierarchy tree preservation for amendments.",
    badge: "Semantic Chunking",
  },
  {
    step: "03",
    title: "Knowledge Base",
    desc: "Dense vector embeddings tailored to Indian colliery safety, ventilation mathematics, and strata control.",
    badge: "Vector Indexing",
  },
  {
    step: "04",
    title: "Hybrid RAG Engine",
    desc: "Keyword exact match on regulation numbers combined with dense semantic context matching.",
    badge: "Zero-Hallucination",
  },
  {
    step: "05",
    title: "Governance Copilot",
    desc: "Instant compliance clarity with exact statutory section citation, penalty exposure, and corrective SOP.",
    badge: "Executive Action",
  },
];

export const RegulatoryRag: React.FC = () => {
  const [activePipelineStep, setActivePipelineStep] = useState<number>(3);

  const handleStepSelect = (idx: number) => {
    soundFx.playClick(1000 + idx * 100, 0.03);
    setActivePipelineStep(idx);
  };

  return (
    <section id="rag-section" className="relative py-24 bg-coal-950 hud-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>STATUTORY KNOWLEDGE RETRIEVAL ARCHITECTURE</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            TURN REGULATIONS <span className="text-amber-400">INTO ANSWERS.</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Never second-guess complex mining bylaws. Our domain-tuned RAG pipeline parses decades of Indian mining gazettes into instant statutory directives.
          </p>
        </div>

        {/* 5-Stage RAG Pipeline Visualizer */}
        <div data-tour="documents" className="mt-12 rounded-xl bg-coal-900 border border-coal-800 p-6 md:p-8 shadow-lg font-mono">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-coal-800 text-xs">
            <span className="text-slate-400 font-bold uppercase">
              RAG PIPELINE FLOW: INGESTION TO DECISION
            </span>
            <span className="text-amber-400">CLICK ANY NODE TO INSPECT PIPELINE STAGE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {RAG_STEPS.map((step, idx) => {
              const isSelected = idx === activePipelineStep;
              return (
                <button
                  key={step.step}
                  onClick={() => handleStepSelect(idx)}
                  className={`p-4 rounded-lg text-left border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? "bg-amber-500/15 border-amber-400 text-white shadow-sm"
                      : "bg-coal-950 border-coal-800 text-slate-400 hover:border-coal-700 hover:text-slate-200"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold ${isSelected ? "text-amber-400" : "text-slate-500"}`}>
                        NODE {step.step}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-coal-900 border border-white/10 text-slate-300">
                        {step.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mt-3 font-sans">{step.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 font-sans leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
                    <span className="text-emerald-400">Latency: 45ms</span>
                    <ArrowRight className={`w-3 h-3 ${isSelected ? "text-amber-400" : "text-slate-600"}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Live Regulation Question & Answer Demonstration Box */}
          <div className="mt-8 p-6 rounded-lg bg-coal-950 border border-amber-500/30">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10 text-xs">
              <span className="text-amber-400 font-bold flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-amber-400" />
                DEMONSTRATION QUERY: STATUTORY BENCH HEIGHT DIRECTIVE
              </span>
              <span className="text-slate-400 text-[11px]">
                SOURCE: COAL MINES REGULATIONS 2017 (REGULATION 106)
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6 font-mono text-xs">
              <div className="p-4 rounded bg-coal-900 border border-white/5">
                <span className="text-slate-400 text-[10px] uppercase block mb-1">01. STATUTORY REQUIREMENT</span>
                <p className="text-slate-200 font-sans leading-relaxed">
                  In all open cast workings, bench height shall not exceed maximum excavator digging reach. Bench slope shall not exceed 45° in unconsolidated strata.
                </p>
              </div>

              <div className="p-4 rounded bg-coal-900 border border-white/5">
                <span className="text-slate-400 text-[10px] uppercase block mb-1">02. OFFICIAL STATUTORY SOURCE</span>
                <p className="text-cyan-300 font-sans leading-relaxed">
                  CMR 2017 Reg 106(1) read alongside DGMS Circular No. 02/2010 (Dump Stability Protocol &amp; Factor of Safety &gt; 1.3).
                </p>
              </div>

              <div className="p-4 rounded bg-coal-900 border border-emerald-500/30">
                <span className="text-emerald-400 text-[10px] uppercase block mb-1">03. RECOMMENDED ACTION</span>
                <p className="text-slate-200 font-sans leading-relaxed">
                  Dispatch drone photogrammetry team to scan Bench 03 slope angle. Issue immediate geotechnical sign-off prior to next shift blasting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
