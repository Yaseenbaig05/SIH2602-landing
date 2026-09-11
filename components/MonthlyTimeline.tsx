"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Calendar,
  Sparkles,
  BarChart3,
  AlertTriangle,
  Wind,
  CheckCircle,
  ArrowRight,
  Zap,
} from "lucide-react";
import { soundFx } from "@/lib/audio";
import { MONTHLY_TIMELINE_DATA } from "@/lib/data";

export const MonthlyTimeline: React.FC = () => {
  const [selectedMonthIdx, setSelectedMonthIdx] = useState<number>(3); // Apr as default high-drama month

  const currentMonth = MONTHLY_TIMELINE_DATA[selectedMonthIdx];

  const handleMonthClick = (idx: number) => {
    soundFx.playClick(900 + idx * 100, 0.03);
    setSelectedMonthIdx(idx);
  };

  return (
    <section id="timeline-section" className="relative py-24 bg-coal-950 hud-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
            <span>HISTORICAL GOVERNANCE PATTERN ANALYZER</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            SEE THE STORY <span className="text-amber-400">BEHIND THE NUMBERS.</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Raw incident logs tell you what happened. Our temporal analytics uncover the systemic root causes before disasters materialize.
          </p>
        </div>

        {/* 3-Stage Visual Progression Pill: DATA -> TREND -> INSIGHT */}
        <div className="mt-10 flex items-center justify-center">
          <div className="inline-flex flex-wrap items-center gap-2 sm:gap-4 p-2 rounded-xl bg-coal-900 border border-white/10 font-mono text-xs">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-coal-950 border border-white/10 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              <span>01. RAW DATA</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500 hidden sm:block" />
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-coal-950 border border-amber-500/40 text-amber-300">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>02. CORRELATED TREND</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500 hidden sm:block" />
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-coal-950 border border-emerald-500/40 text-emerald-300">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span>03. PREDICTIVE INSIGHT</span>
            </div>
          </div>
        </div>

        {/* Timeline Scrubber Component */}
        <div data-tour="timeline" className="mt-12 rounded-xl bg-coal-900 border border-coal-800 p-6 md:p-8 shadow-lg">
          {/* Month Selector Buttons */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 pb-6 border-b border-coal-800 font-mono">
            {MONTHLY_TIMELINE_DATA.map((m, idx) => {
              const isSelected = idx === selectedMonthIdx;
              return (
                <button
                  key={m.month}
                  onClick={() => handleMonthClick(idx)}
                  className={`py-3 px-2 rounded-lg border text-center transition-all duration-200 ${
                    isSelected
                      ? "bg-amber-500/20 border-amber-400 text-amber-300 shadow-sm"
                      : "bg-coal-950 border-coal-800 text-slate-400 hover:bg-coal-800 hover:text-white"
                  }`}
                >
                  <div className="text-xs uppercase font-bold">{m.month} 2026</div>
                  <div className={`text-[11px] mt-1 font-semibold ${m.compliance < 85 ? "text-crimson-hazard" : "text-emerald-400"}`}>
                    {m.compliance}% Comp.
                  </div>
                </button>
              );
            })}
          </div>

          {/* Month Analysis Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-center">
            {/* Left: Telemetry Metrics Bars */}
            <div className="lg:col-span-6 space-y-4 font-mono">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>TELEMETRY METRIC SNAPSHOT</span>
                <span className="text-amber-400 font-bold">{currentMonth.month} REPORT</span>
              </div>

              {/* Metric 1 */}
              <div className="p-3.5 rounded bg-coal-950 border border-white/5">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    Methane Sensor Spike Events
                  </span>
                  <span className={`font-bold ${currentMonth.methaneAlerts > 30 ? "text-crimson-hazard" : "text-amber-400"}`}>
                    {currentMonth.methaneAlerts} Alarms
                  </span>
                </div>
                <div className="w-full bg-coal-800 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${currentMonth.methaneAlerts > 30 ? "bg-crimson-hazard" : "bg-amber-400"}`}
                    style={{ width: `${(currentMonth.methaneAlerts / 50) * 100}%` }}
                  />
                </div>
              </div>

              {/* Metric 2 */}
              <div className="p-3.5 rounded bg-coal-950 border border-white/5">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5 text-cyan-400" />
                    Auxiliary Fan Unscheduled Downtime
                  </span>
                  <span className={`font-bold ${currentMonth.ventDowntimeHrs > 15 ? "text-crimson-hazard" : "text-cyan-300"}`}>
                    {currentMonth.ventDowntimeHrs} Hours
                  </span>
                </div>
                <div className="w-full bg-coal-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-400"
                    style={{ width: `${(currentMonth.ventDowntimeHrs / 35) * 100}%` }}
                  />
                </div>
              </div>

              {/* Metric 3 */}
              <div className="p-3.5 rounded bg-coal-950 border border-white/5">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                    Statutory Field Inspections Completed
                  </span>
                  <span className="font-bold text-emerald-400">
                    {currentMonth.inspections} Audits
                  </span>
                </div>
                <div className="w-full bg-coal-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-400"
                    style={{ width: `${(currentMonth.inspections / 70) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Right: AI Root-Cause Synthesis & Predictive Output */}
            <div className="lg:col-span-6 rounded-lg bg-coal-950 border border-amber-500/30 p-6 font-mono relative">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                <span className="text-amber-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  TEMPORAL ROOT-CAUSE SYNTHESIS
                </span>
                <span className="text-[10px] text-slate-400">AI PATTERN ID: #PAT-2026</span>
              </div>

              <div className="mt-4 text-sm text-slate-200 leading-relaxed font-sans">
                <strong className="text-white block font-mono text-xs uppercase mb-1 text-cyan-300">
                  Detected Correlation:
                </strong>
                &ldquo;{currentMonth.insight}&rdquo;
              </div>

              <div className="mt-5 p-3.5 rounded bg-coal-900 border border-white/10 text-xs text-slate-300 font-mono">
                <div className="text-[10px] uppercase text-slate-400">RECOMMENDED PREDICTIVE POLICY</div>
                <p className="mt-1 text-emerald-400">
                  {selectedMonthIdx >= 4
                    ? "✓ Dual redundancy fan loops established. Methane threshold excursions reduced by 79%."
                    : "⚠️ DGMS Notice CMR Reg 124 recommends immediate auto-cutout interlock on fan bearing sensor."}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Reconciled with 184 Shift Handover Logs</span>
                <span className="text-amber-400 font-bold">100% Traceability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
