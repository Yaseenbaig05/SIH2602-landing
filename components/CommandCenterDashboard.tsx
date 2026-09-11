"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Gauge,
  MapPin,
  Shield,
  ShieldAlert,
  Wind,
  Flame,
  Search,
  Filter,
  Eye,
  ChevronRight,
  TrendingDown,
  TrendingUp,
  FileText,
  Radio,
} from "lucide-react";
import { soundFx } from "@/lib/audio";
import { COAL_MINES, CoalMineNode } from "@/lib/data";

export const CommandCenterDashboard: React.FC = () => {
  const [selectedMine, setSelectedMine] = useState<CoalMineNode>(COAL_MINES[0]);
  const [filterType, setFilterType] = useState<"All" | "Critical" | "Underground" | "Open Cast">("All");
  const dashboardRef = useRef<HTMLDivElement>(null);

  const filteredMines = COAL_MINES.filter((m) => {
    if (filterType === "Critical") return m.status === "Critical" || m.status === "Watch";
    if (filterType === "Underground") return m.type === "Underground" || m.type === "Mixed";
    if (filterType === "Open Cast") return m.type === "Open Cast";
    return true;
  });

  return (
    <section
      id="command-center-section"
      ref={dashboardRef}
      className="relative py-24 bg-coal-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-coal-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Gauge className="w-3.5 h-3.5 text-amber-400" />
              <span>CENTRAL STATUTORY GOVERNANCE ENGINE</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
              ONE VIEW. <span className="text-amber-400">EVERY MINE.</span>
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-xl">
              High-throughput national governance console monitoring statutory DGMS compliance, hazardous gas anomalies, and overdue corrective orders across all subsidiaries.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <div className="px-3 py-2 rounded bg-coal-900 border border-coal-800 text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>LIVE EDGE POLLING: 100ms</span>
            </div>
            <div className="px-3 py-2 rounded bg-coal-900 border border-coal-800 text-amber-300">
              DGMS PORTAL LINK: VERIFIED
            </div>
          </div>
        </div>

        {/* Global Key Governance Metric HUD Tiles */}
        <div data-tour="dashboard-overview" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 font-mono">
          <div className="p-4 rounded-lg bg-coal-900 border border-coal-800">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>OVERALL COMPLIANCE</span>
              <Shield className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-emerald-400 mt-2">
              94.8%
            </div>
            <div className="mt-2 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Target: &gt;90% DGMS</span>
              <span className="text-emerald-400 flex items-center"><TrendingUp className="w-3 h-3 inline mr-0.5" />+1.4% MoM</span>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-coal-900 border border-coal-800">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>CRITICAL ESCALATIONS</span>
              <AlertTriangle className="w-4 h-4 text-crimson-hazard" />
            </div>
            <div className="text-3xl font-extrabold text-crimson-hazard mt-2">
              03 <span className="text-xs text-slate-400 font-normal">/ 342 Mines</span>
            </div>
            <div className="mt-2 text-[11px] text-crimson-hazard/90">
              Immediate DGMS Regional Interventions
            </div>
          </div>

          <div className="p-4 rounded-lg bg-coal-900 border border-coal-800">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>OVERDUE ACTION (CAR)</span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-extrabold text-amber-400 mt-2">
              28 <span className="text-xs text-slate-400 font-normal">Active SLA Breaches</span>
            </div>
            <div className="mt-2 text-[11px] text-amber-300/80">
              Auto-escalated to Colliery General Manager
            </div>
          </div>

          <div className="p-4 rounded-lg bg-coal-900 border border-coal-800">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>RECURRING VIOLATIONS</span>
              <Flame className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-extrabold text-white mt-2">
              12 <span className="text-xs text-slate-400 font-normal">Patterns Flagged</span>
            </div>
            <div className="mt-2 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Top: Methane Vent (Seam XII)</span>
              <span className="text-amber-400">AI Pattern Match</span>
            </div>
          </div>
        </div>

        {/* Interactive Command Center Dashboard Core */}
        <div className="mt-8 rounded-xl bg-coal-900 border border-coal-800 p-5 md:p-6 shadow-lg">
          {/* Dashboard Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-slate-400 uppercase">Filter Mine Type:</span>
              {(["All", "Critical", "Underground", "Open Cast"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    soundFx.playClick(1100, 0.03);
                    setFilterType(type);
                  }}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                    filterType === type
                      ? "bg-amber-500 text-coal-950 font-bold"
                      : "bg-coal-800 text-slate-300 hover:bg-coal-700"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <span>ACTIVE TELEMETRY SELECTION:</span>
              <span className="text-amber-400 font-bold">{selectedMine.name}</span>
            </div>
          </div>

          {/* Main Dashboard Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            {/* Left: Interactive Mine Directory */}
            <div data-tour="mine-overview" className="lg:col-span-5 flex flex-col gap-2 max-h-[480px] overflow-y-auto pr-1">
              <div className="text-xs font-mono text-slate-400 uppercase pb-1 flex justify-between">
                <span>Select Colliery to Inspect</span>
                <span>{filteredMines.length} Units</span>
              </div>

              {filteredMines.map((mine) => {
                const isSelected = mine.id === selectedMine.id;
                return (
                  <button
                    key={mine.id}
                    onClick={() => {
                      soundFx.playClick(1300, 0.04);
                      setSelectedMine(mine);
                    }}
                    className={`text-left p-3 rounded-lg border transition-all duration-200 font-mono ${
                      isSelected
                        ? "bg-amber-500/15 border-amber-500 text-white shadow-sm"
                        : "bg-coal-950 border-coal-800 text-slate-300 hover:bg-coal-800/80 hover:border-coal-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm tracking-tight">{mine.name}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                          mine.status === "Critical"
                            ? "bg-crimson-hazard/20 text-crimson-hazard border border-crimson-hazard/40"
                            : mine.status === "Watch"
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                            : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        }`}
                      >
                        {mine.status}
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-400 mt-1 flex items-center justify-between">
                      <span>{mine.subsidiary} ({mine.state})</span>
                      <span className="text-slate-300">{mine.type}</span>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-coal-800 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Compliance: <strong className={mine.complianceScore > 90 ? "text-emerald-400" : "text-amber-400"}>{mine.complianceScore}%</strong></span>
                      <span className="text-slate-400">Underground: <strong className="text-cyan-300">{mine.activePersonnel}</strong></span>
                      <span className="text-slate-400">CARs: <strong className={mine.overdueCARs > 0 ? "text-crimson-hazard" : "text-slate-400"}>{mine.overdueCARs}</strong></span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Selected Mine Telemetry Console */}
            <div className="lg:col-span-7 bg-coal-950 rounded-lg border border-coal-800 p-5 flex flex-col justify-between font-mono">
              <div>
                {/* Header of Inspecting Mine */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div>
                    <div className="text-[11px] text-amber-400 uppercase tracking-widest">
                      TELEMETRY NODE // {selectedMine.id}
                    </div>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      {selectedMine.name}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {selectedMine.subsidiary} • Coordinates: {selectedMine.lat}°N, {selectedMine.lng}°E
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] uppercase text-slate-400 block">STATUTORY HEALTH</span>
                    <span className={`text-2xl font-extrabold ${selectedMine.complianceScore > 90 ? "text-emerald-400" : "text-amber-400"}`}>
                      {selectedMine.complianceScore}%
                    </span>
                  </div>
                </div>

                {/* Real-time Environmental & Operational Gauges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                  <div className="p-3 rounded bg-coal-900 border border-white/5">
                    <div className="text-[10px] text-slate-400 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      <span>METHANE GAS (CH4)</span>
                    </div>
                    <div className={`text-sm font-bold mt-1.5 ${selectedMine.status === "Critical" ? "text-crimson-hazard" : "text-emerald-300"}`}>
                      {selectedMine.methaneLevel}
                    </div>
                    <div className="text-[9px] text-slate-500 mt-1">
                      Sensor: Optical NDIR (Intrinsically Safe)
                    </div>
                  </div>

                  <div className="p-3 rounded bg-coal-900 border border-white/5">
                    <div className="text-[10px] text-slate-400 flex items-center gap-1.5">
                      <Wind className="w-3.5 h-3.5 text-cyan-400" />
                      <span>MAIN VENTILATION FAN</span>
                    </div>
                    <div className={`text-sm font-bold mt-1.5 ${selectedMine.ventilationStatus === "Alert" ? "text-crimson-hazard" : "text-emerald-300"}`}>
                      {selectedMine.ventilationStatus} (320 m³/min)
                    </div>
                    <div className="text-[9px] text-slate-500 mt-1">
                      Airflow Velocity: 2.1 m/s at Face 3B
                    </div>
                  </div>

                  <div className="p-3 rounded bg-coal-900 border border-white/5">
                    <div className="text-[10px] text-slate-400 flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5 text-emerald-400" />
                      <span>ACTIVE PERSONNEL</span>
                    </div>
                    <div className="text-sm font-bold text-white mt-1.5">
                      {selectedMine.activePersonnel} Miners Logged
                    </div>
                    <div className="text-[9px] text-emerald-400 mt-1">
                      100% RFID Transponder Sync
                    </div>
                  </div>
                </div>

                {/* Overdue Statutory Violations & Actions Section */}
                <div data-tour="violations" className="mt-5 p-4 rounded bg-coal-900/90 border border-amber-500/20">
                  <div className="flex items-center justify-between text-xs text-amber-300">
                    <span className="font-bold flex items-center gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                      STATUTORY CARS &amp; DGMS NOTICES ({selectedMine.overdueCARs} ACTIVE)
                    </span>
                    <span className="text-[10px] text-slate-400">DGMS NOTIFICATION PORTAL</span>
                  </div>

                  {selectedMine.overdueCARs > 0 ? (
                    <div className="mt-3 space-y-2 text-xs">
                      <div className="p-2.5 rounded bg-coal-950 border border-crimson-hazard/30 flex items-start justify-between gap-3">
                        <div>
                          <span className="font-bold text-crimson-hazard text-[11px]">CAR-2026-089 // SLA EXPIRED (+48h)</span>
                          <p className="text-slate-200 mt-0.5">
                            Auxiliary booster fan bearing vibration threshold exceeded in Section 4B.
                          </p>
                          <span className="text-[10px] text-slate-400">Assigned to: Ventilation Officer • Regulatory Ref: CMR Reg 124</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-crimson-hazard/20 text-crimson-hazard text-[10px] shrink-0">
                          CRITICAL
                        </span>
                      </div>

                      <div className="p-2.5 rounded bg-coal-950 border border-amber-500/30 flex items-start justify-between gap-3">
                        <div>
                          <span className="font-bold text-amber-400 text-[11px]">CAR-2026-104 // 6 HOURS REMAINING</span>
                          <p className="text-slate-200 mt-0.5">
                            Haul road mist suppression nozzle maintenance required on Bench 03.
                          </p>
                          <span className="text-[10px] text-slate-400">Assigned to: Surface Safety Lead • Statutory Dust Mitigation</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] shrink-0">
                          PRIORITY-2
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-3 p-4 text-center text-xs text-emerald-400 bg-coal-950 rounded border border-emerald-500/20">
                      <CheckCircle2 className="w-5 h-5 mx-auto mb-1 text-emerald-400" />
                      Zero Overdue Corrective Action Requests. Fully Compliant with DGMS Directives.
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Quick Action Bar */}
              <div className="mt-5 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-400 text-[11px]">
                  LAST DGMS FIELD AUDIT: 4 DAYS AGO BY REGIONAL INSPECTORATE (DHANBAD)
                </span>
                <button
                  onClick={() => soundFx.playSuccess()}
                  className="px-3 py-1.5 rounded bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-300 font-bold transition-all text-xs flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>EXPORT STATUTORY DOSSIER</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
