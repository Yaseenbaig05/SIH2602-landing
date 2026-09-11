"use client";

import React, { useState } from "react";
import {
  Users,
  ShieldCheck,
  Radio,
  AlertOctagon,
  Clock,
  ArrowRight,
  HardHat,
  CheckCircle2,
  AlertTriangle,
  Flame,
  RotateCcw,
} from "lucide-react";
import { soundFx } from "@/lib/audio";

export const PersonnelAccountability: React.FC = () => {
  const [isAlertActive, setIsAlertActive] = useState<boolean>(false);
  const [headcount, setHeadcount] = useState<number>(487);

  const triggerAlert = () => {
    soundFx.playAlarm();
    setIsAlertActive(true);
  };

  const resolveAlert = () => {
    soundFx.playSuccess();
    setIsAlertActive(false);
  };

  return (
    <section
      id="personnel-section"
      className="relative py-24 bg-coal-900 border-t border-b border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />

      {/* Atmospheric Alert Overlay if Active */}
      {isAlertActive && (
        <div className="absolute inset-0 bg-crimson-hazard/10 pointer-events-none z-0" />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header with Solid Typography */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-wider">
            <HardHat className="w-3.5 h-3.5 text-amber-400" />
            <span>PERSONNEL SAFETY &amp; ACCOUNTABILITY</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-sans">
            KNOW WHO IS <span className="text-amber-400">INSIDE.</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base">
            Every minute counts in hazardous mining operations. Engineered strictly for <strong className="text-white">worker life safety, emergency muster, and operational accountability</strong>—never intrusive surveillance.
          </p>
        </div>

        {/* Live Headcount & Interactive Alert Simulation Bar */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 flex flex-wrap items-center gap-4 font-mono">
            <div className="p-4 rounded-lg bg-coal-950 border border-white/10 flex items-center gap-4 min-w-[220px]">
              <div className="p-3 rounded-full bg-amber-500/20 text-amber-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">TOTAL UNDERGROUND</span>
                <span className="text-3xl font-extrabold text-white tabular-nums">
                  {headcount} <span className="text-xs text-slate-400 font-normal">Miners</span>
                </span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-coal-950 border border-white/10 flex items-center gap-4 min-w-[200px]">
              <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">TAG STATUS</span>
                <span className="text-base font-bold text-emerald-400">100% RFID SYNC</span>
                <span className="text-[10px] text-slate-500 block">Cap-lamp transponders</span>
              </div>
            </div>

            <div
              className={`p-4 rounded-lg border flex items-center gap-4 min-w-[220px] transition-all duration-300 ${
                isAlertActive
                  ? "bg-crimson-hazard/20 border-crimson-hazard text-crimson-hazard shadow-md"
                  : "bg-coal-950 border-coal-800 text-slate-300"
              }`}
            >
              <div
                className={`p-3 rounded-full ${
                  isAlertActive ? "bg-crimson-hazard text-white" : "bg-coal-800 text-slate-400"
                }`}
              >
                <AlertOctagon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block">DISCREPANCY ALERT</span>
                <span className={`text-base font-bold ${isAlertActive ? "text-crimson-hazard font-mono" : "text-emerald-400"}`}>
                  {isAlertActive ? "1 UNACCOUNTED!" : "0 UNACCOUNTED"}
                </span>
                <span className="text-[10px] text-slate-400 block">
                  {isAlertActive ? "Muster Failure in Zone 3B" : "Muster verified at shift gate"}
                </span>
              </div>
            </div>
          </div>

          <div data-tour="notifications" className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 font-mono">
            {!isAlertActive ? (
              <button
                onClick={triggerAlert}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded bg-crimson-hazard/20 hover:bg-crimson-hazard/30 border border-crimson-hazard/60 text-rose-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                <AlertTriangle className="w-4 h-4 text-crimson-hazard" />
                <span>Simulate Unaccounted Personnel Alert</span>
              </button>
            ) : (
              <button
                onClick={resolveAlert}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded bg-emerald-500 hover:bg-emerald-400 text-coal-950 font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
              >
                <RotateCcw className="w-4 h-4 text-coal-950" />
                <span>Resolve Alert &amp; Verify Safe Muster</span>
              </button>
            )}
            <span className="text-[11px] text-slate-400 text-center">
              {isAlertActive
                ? "Simulated emergency drill: Paging rescue team & triangulating transponder."
                : "Test real-time emergency dispatch protocol under simulated muster failure."}
            </span>
          </div>
        </div>

        {/* 4-Stage Lifecycle Pipeline */}
        <div data-tour="personnel" className="mt-12 rounded-xl bg-coal-900 border border-coal-800 p-6">
          <div className="pb-4 mb-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <span className="text-slate-300 font-bold uppercase tracking-wider">
              CONTINUOUS ACCOUNTABILITY PIPELINE
            </span>
            <span className="text-amber-400">DGMS STATUTORY CMR 2017 REGULATION 144</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stage 1 */}
            <div className="relative p-5 rounded-lg bg-coal-900 border border-white/5 flex flex-col justify-between font-mono">
              <div className="flex items-center justify-between">
                <span className="text-xs text-amber-400 font-bold">01 // PIT HEAD GATE</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="my-4">
                <h4 className="text-base font-bold text-white">Check-in &amp; Transponder</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Worker/contractor biometric scan paired to intrinsically safe cap-lamp RFID chip.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Latency: 0.2s</span>
                <span className="text-emerald-400">Gate #01 Sync</span>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="relative p-5 rounded-lg bg-coal-900 border border-white/5 flex flex-col justify-between font-mono">
              <div className="flex items-center justify-between">
                <span className="text-xs text-amber-400 font-bold">02 // SAFETY CHECK</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="my-4">
                <h4 className="text-base font-bold text-white">Authorization Matrix</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Autonomous check of CMR gas testing certificate, medical clearance, and PPE compliance.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Access: Granted</span>
                <span className="text-emerald-400">Statutory Certified</span>
              </div>
            </div>

            {/* Stage 3 */}
            <div className={`relative p-5 rounded-lg border flex flex-col justify-between font-mono transition-all duration-300 ${
              isAlertActive ? "bg-crimson-hazard/15 border-crimson-hazard" : "bg-coal-900 border-white/5"
            }`}>
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold ${isAlertActive ? "text-crimson-hazard" : "text-amber-400"}`}>
                  03 // UNDERGROUND ZONE
                </span>
                <span className={`w-2 h-2 rounded-full ${isAlertActive ? "bg-crimson-hazard" : "bg-emerald-400"}`} />
              </div>
              <div className="my-4">
                <h4 className="text-base font-bold text-white">Zone 3B Working Face Tracking</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Mesh reader grid monitors miner presence at coal cutting face, auxiliary shafts, and air locks.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 text-[11px] flex items-center justify-between">
                <span className="text-slate-500">Zone Mesh: Active</span>
                <span className={isAlertActive ? "text-crimson-hazard font-bold" : "text-emerald-400"}>
                  {isAlertActive ? "TAG #9042 LOST" : "Heartbeat OK"}
                </span>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="relative p-5 rounded-lg bg-coal-900 border border-white/5 flex flex-col justify-between font-mono">
              <div className="flex items-center justify-between">
                <span className="text-xs text-emerald-400 font-bold">04 // SHIFT HANDOVER</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="my-4">
                <h4 className="text-base font-bold text-white">Safe Check-out &amp; Closure</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Surfaced miner passes optical turnstile; automatic shift reconciliation closes daily statutory muster.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Muster: Reconciled</span>
                <span className="text-emerald-400">DGMS Signed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
