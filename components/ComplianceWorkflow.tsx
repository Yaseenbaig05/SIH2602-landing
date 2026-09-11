"use client";

import React, { useState, useEffect } from "react";
import {
  ClipboardCheck,
  Eye,
  AlertOctagon,
  Wrench,
  Camera,
  CheckCheck,
  Award,
  Play,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { soundFx } from "@/lib/audio";
import { WORKFLOW_STAGES } from "@/lib/data";

export const ComplianceWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) => {
          const next = prev + 1;
          if (next >= WORKFLOW_STAGES.length) {
            setIsPlaying(false);
            soundFx.playSuccess();
            return WORKFLOW_STAGES.length - 1;
          }
          soundFx.playClick(1000 + next * 150, 0.03);
          return next;
        });
      }, 1500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleStepClick = (idx: number) => {
    setIsPlaying(false);
    setActiveStep(idx);
    if (idx === WORKFLOW_STAGES.length - 1) {
      soundFx.playSuccess();
    } else {
      soundFx.playClick(1000 + idx * 150, 0.03);
    }
  };

  const currentStage = WORKFLOW_STAGES[activeStep];
  const isClosed = activeStep === WORKFLOW_STAGES.length - 1;

  return (
    <section
      id="workflow-section"
      className="relative py-24 bg-coal-900 border-t border-b border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 hud-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <ClipboardCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>STATUTORY AUDIT RECONCILIATION</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
              FROM OBSERVATION <span className="text-emerald-400">TO RESOLUTION.</span>
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-xl">
              An unalterable 7-stage digital lifecycle closing the loop from frontline hazards to statutory DGMS sign-off with zero paperwork latency.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono">
            <button
              onClick={() => {
                if (isClosed) {
                  setActiveStep(0);
                  setIsPlaying(true);
                } else {
                  setIsPlaying(!isPlaying);
                }
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded bg-amber-500 hover:bg-amber-400 text-coal-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              {isClosed ? (
                <>
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Replay Workflow</span>
                </>
              ) : isPlaying ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-coal-950" />
                  <span>Simulating...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Auto-Advance Stages</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Horizontal Stepper Progress Bar */}
        <div data-tour="inspections" className="mt-10 overflow-x-auto pb-4">
          <div className="flex items-center min-w-[760px] justify-between relative">
            {/* Connecting Track Line */}
            <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-1 bg-coal-800 -z-0">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-cyan-400 to-emerald-400 transition-all duration-500"
                style={{
                  width: `${(activeStep / (WORKFLOW_STAGES.length - 1)) * 100}%`,
                }}
              />
            </div>

            {WORKFLOW_STAGES.map((stg, i) => {
              const isPast = i < activeStep;
              const isCurrent = i === activeStep;
              return (
                <button
                  key={stg.step}
                  onClick={() => handleStepClick(i)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                      isCurrent
                        ? "bg-amber-400 text-coal-950 scale-110 shadow-sm ring-2 ring-amber-400/50"
                        : isPast
                        ? "bg-emerald-500 text-coal-950"
                        : "bg-coal-800 text-slate-400 border border-white/10 group-hover:border-white/30"
                    }`}
                  >
                    {isPast ? <CheckCircle2 className="w-4 h-4" /> : stg.step}
                  </div>
                  <span
                    className={`mt-3 font-mono text-[11px] font-medium tracking-tight uppercase whitespace-nowrap transition-colors ${
                      isCurrent ? "text-amber-400 font-bold" : isPast ? "text-emerald-400" : "text-slate-500"
                    }`}
                  >
                    {stg.title.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Panel */}
        <div data-tour="corrective-actions" className="mt-8 rounded-xl bg-coal-900 border border-coal-800 p-6 md:p-8 relative shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 font-mono">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  STAGE {currentStage.step} // 07
                </span>
                <span className="px-2.5 py-0.5 rounded bg-coal-900 border border-amber-500/40 text-amber-300 text-xs font-semibold">
                  {currentStage.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 font-sans uppercase">
                {currentStage.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal leading-relaxed font-sans">
                {currentStage.desc}
              </p>

              <div className="mt-6 pt-4 border-t border-coal-800 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div>
                  <span className="block text-[10px] uppercase text-slate-500">Authorized Stakeholder</span>
                  <span className="text-slate-200 font-bold">{currentStage.role}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-slate-500">Statutory Governance Rule</span>
                  <span className="text-cyan-300">Coal Mines Regulations (CMR) 2017</span>
                </div>
              </div>
            </div>

            {/* Right: Stage Visual Badge / Grand Final Stamp */}
            <div className="lg:col-span-4 flex items-center justify-center">
              {isClosed ? (
                /* Dramatic Verified & Closed Stamp */
                <div className="relative p-6 rounded-xl bg-emerald-950/60 border border-emerald-500 text-center shadow-md animate-in zoom-in-95 duration-500">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto mb-3">
                    <ShieldCheck className="w-10 h-10" />
                  </div>
                  <div className="text-lg font-black text-emerald-300 uppercase tracking-wider font-mono">
                    ✓ VERIFIED &amp; CLOSED
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400/90 mt-1">
                    DGMS AUDIT TOKEN ISSUED
                  </div>
                  <div className="mt-3 pt-3 border-t border-emerald-500/30 text-[10px] font-mono text-slate-400">
                    HASH: #DGMS-2026-9041-CX
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-xl bg-coal-900 border border-white/10 text-center font-mono w-full max-w-xs">
                  <div className="text-slate-400 text-xs mb-2">LIFECYCLE STATUS</div>
                  <div className="text-amber-400 font-bold text-base flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>IN PROGRESS</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-3">
                    Click next stages above or auto-play to trigger statutory cryptographic sign-off.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
