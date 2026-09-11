"use client";

import React, { useState } from "react";
import {
  MapPin,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Compass,
  Layers,
  Camera,
  WifiOff,
  CheckCircle2,
  Clock,
  Crosshair,
  ShieldAlert,
} from "lucide-react";
import { soundFx } from "@/lib/audio";

const ZOOM_LEVELS = [
  {
    id: 1,
    name: "REGIONAL COAL BASIN",
    scale: "1:250,000",
    coverage: "Damodar Valley Basin (Jharkhand/WB)",
    desc: "Overview of 42 contiguous colliery leases across the Jharia-Raniganj Gondwana coal belt.",
    coords: "23°47'N, 86°25'E",
  },
  {
    id: 2,
    name: "MINE LEASE PERIMETER",
    scale: "1:25,000",
    coverage: "Jharia Seam XII Complex (BCCL Block 12)",
    desc: "Statutory lease boundary, pithead gates, surface haul roads, overburden dumps, and environmental buffer zones.",
    coords: "23°47'19\"N, 86°25'38\"E",
  },
  {
    id: 3,
    name: "WORKING SECTION & PIT",
    scale: "1:2,500",
    coverage: "Underground Section 4B / Face 3B",
    desc: "Continuous miner heading, auxiliary ventilation ducting, conveyor transfer station, and methane monitoring nodes.",
    coords: "Depth: -280m MSL",
  },
  {
    id: 4,
    name: "FIELD OBSERVATION & SENSOR",
    scale: "1:100 (GPS ±0.4m)",
    coverage: "Sensor Telemetry Node #MTH-804",
    desc: "Tamper-proof field incident: optical methane sensor reading 0.84% CH4 with photo evidence and offline sync confirmation.",
    coords: "23°47'19.24\"N 86°25'38.11\"E",
  },
];

export const DigitalMineMap: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<number>(1);

  const handleLevelSelect = (level: number) => {
    soundFx.playClick(1000 + level * 200, 0.04);
    setActiveLevel(level);
  };

  const current = ZOOM_LEVELS.find((z) => z.id === activeLevel) || ZOOM_LEVELS[0];

  return (
    <section id="gis-section" className="relative py-24 bg-coal-950 hud-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Crosshair className="w-3.5 h-3.5 text-amber-400" />
              <span>SPATIAL COMPLIANCE GIS ENGINE</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
              EVERY ACTIVITY <span className="text-amber-400">HAS A LOCATION.</span>
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">
              From macroeconomic coal basin geology down to a sub-meter underground gas anomaly.
              Eliminating jurisdiction ambiguity through cryptographic geospatial positioning.
            </p>
          </div>

          {/* Level Switcher Controls */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-coal-900 border border-white/10 font-mono">
            {ZOOM_LEVELS.map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => handleLevelSelect(lvl.id)}
                className={`px-3 py-1.5 rounded text-xs transition-all ${
                  activeLevel === lvl.id
                    ? "bg-amber-500 text-coal-950 font-bold shadow-md"
                    : "text-slate-400 hover:text-white hover:bg-coal-800"
                }`}
              >
                L{lvl.id}: {lvl.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Cinematic Zoom Canvas Container */}
        <div data-tour="gis-map" className="mt-8 rounded-xl bg-coal-900 border border-coal-800 p-5 md:p-8 relative overflow-hidden shadow-lg">
          {/* Top GIS Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-white/10 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded bg-coal-950 border border-white/5 text-amber-400">
                <Compass className="w-4 h-4" />
              </span>
              <div>
                <span className="text-slate-400 block text-[10px]">CURRENT ZOOM LEVEL</span>
                <span className="text-white font-bold">{current.name}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-300">
              <span>SCALE: <strong className="text-amber-400">{current.scale}</strong></span>
              <span>COORDS: <strong className="text-cyan-300">{current.coords}</strong></span>
              <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                WGS 84 / UTM 45N
              </span>
            </div>
          </div>

          {/* Dynamic Map Visual Stage */}
          <div className="relative min-h-[420px] rounded-lg bg-coal-950 border border-white/10 overflow-hidden flex items-center justify-center p-6">
            <div className="absolute inset-0 hud-grid-dense opacity-30" />

            {/* Level 1: Regional Coal Basin */}
            {activeLevel === 1 && (
              <div className="relative z-10 text-center max-w-xl animate-in fade-in duration-300 font-mono">
                <div className="relative mx-auto w-48 h-48 rounded-full border border-amber-500/30 flex items-center justify-center mb-6">
                  <div className="w-36 h-36 rounded-full border border-cyan-500/30" />
                  <div className="w-20 h-20 rounded-full border border-emerald-500/40" />
                  <MapPin className="w-8 h-8 text-amber-400 absolute" />
                </div>
                <div className="inline-block px-3 py-1 rounded bg-coal-900 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase mb-2">
                  42 Contiguous Leases • 12,000 km² Area
                </div>
                <h3 className="text-xl font-bold text-white uppercase">{current.coverage}</h3>
                <p className="text-xs text-slate-400 mt-2">{current.desc}</p>
              </div>
            )}

            {/* Level 2: Mine Lease Perimeter */}
            {activeLevel === 2 && (
              <div className="relative z-10 w-full max-w-2xl animate-in fade-in duration-300 font-mono">
                <div className="p-6 rounded-lg bg-coal-900/90 border border-amber-500/40 shadow-inner">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                    <span className="text-amber-400 font-bold">STATUTORY LEASE BOUNDARY: 14.8 SQ KM</span>
                    <span className="text-emerald-400">DGMS SURVEY STAMP VERIFIED</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 my-6 text-xs">
                    <div className="p-3 bg-coal-950 rounded border border-white/5">
                      <span className="text-slate-400 block text-[10px]">MAIN ACCESS GATES</span>
                      <strong className="text-white">Gate 01 (Weighbridge) &amp; Gate 02 (Pithead)</strong>
                    </div>
                    <div className="p-3 bg-coal-950 rounded border border-white/5">
                      <span className="text-slate-400 block text-[10px]">HAUL ROAD NETWORK</span>
                      <strong className="text-white">12.4 km Paved / Dust Mist Sprayed</strong>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 text-center">{current.desc}</p>
                </div>
              </div>
            )}

            {/* Level 3: Working Section & Pit */}
            {activeLevel === 3 && (
              <div className="relative z-10 w-full max-w-2xl animate-in fade-in duration-300 font-mono">
                <div className="p-6 rounded-lg bg-coal-900/90 border border-cyan-500/40">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                    <span className="text-cyan-300 font-bold">UNDERGROUND WORKING SECTION 4B</span>
                    <span className="text-amber-400 font-bold">SEAM XII DEEP FACE</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 my-6 text-center text-xs">
                    <div className="p-3 bg-coal-950 rounded border border-white/5">
                      <span className="text-slate-400 text-[10px] block">AIR VELOCITY</span>
                      <strong className="text-emerald-400">2.1 m/s (Compliant)</strong>
                    </div>
                    <div className="p-3 bg-coal-950 rounded border border-white/5">
                      <span className="text-slate-400 text-[10px] block">HEADING DEPTH</span>
                      <strong className="text-cyan-300">-280m MSL</strong>
                    </div>
                    <div className="p-3 bg-coal-950 rounded border border-white/5">
                      <span className="text-slate-400 text-[10px] block">CONTINUOUS MINER</span>
                      <strong className="text-white">CM-04 Active</strong>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 text-center">{current.desc}</p>
                </div>
              </div>
            )}

            {/* Level 4: Field Observation & Sensor Telemetry */}
            {activeLevel === 4 && (
              <div className="relative z-10 w-full max-w-2xl animate-in fade-in duration-300 font-mono">
                <div className="p-6 rounded-lg bg-coal-900 border border-crimson-hazard/50 shadow-md">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                    <span className="text-crimson-hazard font-bold flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-crimson-hazard" />
                      FIELD OBSERVATION #OBS-2026-904
                    </span>
                    <span className="px-2 py-0.5 rounded bg-crimson-hazard/20 text-crimson-hazard text-[10px] font-bold">
                      DGMS REG 124 FLAGGED
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 text-xs">
                    <div className="space-y-2 bg-coal-950 p-3 rounded border border-white/5">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Exact GPS:</span>
                        <span className="text-cyan-300">23°47&apos;19.24&quot;N 86°25&apos;38.11&quot;E</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Accuracy:</span>
                        <span className="text-emerald-400">±0.4m (RTK Differential)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Timestamp:</span>
                        <span className="text-slate-200">2026-09-10 14:32:08 IST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Gas Reading:</span>
                        <span className="text-crimson-hazard font-bold">0.84% CH4 (Methane)</span>
                      </div>
                    </div>

                    <div className="bg-coal-950 p-3 rounded border border-white/5 flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] text-slate-400 flex items-center gap-1">
                          <Camera className="w-3.5 h-3.5 text-amber-400" />
                          <span>EVIDENCE DOSSIER ATTACHMENT</span>
                        </div>
                        <p className="text-[11px] text-slate-300 mt-1">
                          Flameproof optical NDIR sensor enclosure inspection photo cryptographically hashed.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-emerald-400 pt-2 border-t border-white/5">
                        <WifiOff className="w-3 h-3 text-amber-400" />
                        <span>Offline Sync: Cached locally &amp; queued for mesh upload</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 text-center">{current.desc}</p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Zoom Stepper Slider */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <button
                disabled={activeLevel === 1}
                onClick={() => handleLevelSelect(Math.max(1, activeLevel - 1))}
                className="p-2 rounded bg-coal-950 border border-white/10 text-slate-300 disabled:opacity-30 hover:bg-coal-800 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-slate-400">STEP {activeLevel} OF 4</span>
              <button
                disabled={activeLevel === 4}
                onClick={() => handleLevelSelect(Math.min(4, activeLevel + 1))}
                className="p-2 rounded bg-coal-950 border border-white/10 text-slate-300 disabled:opacity-30 hover:bg-coal-800 transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            <span className="text-amber-400 text-[11px]">
              Tip: Click &quot;L4: FIELD&quot; to inspect sub-meter statutory incident evidence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
