"use client";

import React, { useState } from "react";
import {
  Pickaxe,
  Users,
  ClipboardCheck,
  ShieldCheck,
  AlertTriangle,
  Wrench,
  FileText,
  MapPin,
  Bot,
  BrainCircuit,
  Share2,
} from "lucide-react";
import { soundFx } from "@/lib/audio";

const SYSTEM_NODES = [
  { id: "mine", name: "01. Mine Operations", icon: Pickaxe, role: "Sensor telemetry & operational feeds" },
  { id: "personnel", name: "02. Personnel", icon: Users, role: "Cap-lamp RFID muster & access authorization" },
  { id: "inspections", name: "03. Inspections", icon: ClipboardCheck, role: "Offline-first field inspection forms" },
  { id: "compliance", name: "04. Compliance", icon: ShieldCheck, role: "Real-time statutory regulatory audit scoring" },
  { id: "violations", name: "05. Violations", icon: AlertTriangle, role: "Automated hazardous breach detection" },
  { id: "actions", name: "06. Corrective Actions", icon: Wrench, role: "Enforced SLA task dispatches with evidence" },
  { id: "documents", name: "07. Statutory Docs", icon: FileText, role: "Immutable cryptographic ledger archives" },
  { id: "gis", name: "08. Spatial GIS", icon: MapPin, role: "Sub-meter 3D lease & seam hazard mapping" },
  { id: "copilot", name: "09. AI Copilot", icon: Bot, role: "Grounded LLM RAG answering statutory queries" },
  { id: "decisions", name: "10. Intelligent Decisions", icon: BrainCircuit, role: "Proactive disaster prevention & executive clarity" },
];

export const SystemConstellation: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>("decisions");

  const activeNode = SYSTEM_NODES.find((n) => n.id === activeNodeId) || SYSTEM_NODES[9];

  const handleNodeClick = (id: string) => {
    soundFx.playClick(1400, 0.03);
    setActiveNodeId(id);
  };

  return (
    <section id="constellation-section" className="relative py-28 bg-coal-950 hud-grid overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header with Solid Typography */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-wider">
            <Share2 className="w-3.5 h-3.5 text-amber-400" />
            <span>HOLISTIC STATUTORY ARCHITECTURE</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-sans">
            ONE MINE. ONE SOURCE OF TRUTH. <br />
            <span className="text-amber-400">
              ONE COMMAND CENTER.
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Every module feeds into an interconnected intelligence fabric. Nothing is isolated. Every observation informs statutory governance.
          </p>
        </div>

        {/* 10-Node Interconnected Grid */}
        <div className="mt-14 rounded-xl bg-coal-900 border border-coal-800 p-6 md:p-10 shadow-lg font-mono">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {SYSTEM_NODES.map((node) => {
              const Icon = node.icon;
              const isSelected = node.id === activeNodeId;
              const isGrandFinal = node.id === "decisions";

              return (
                <button
                  key={node.id}
                  onClick={() => handleNodeClick(node.id)}
                  className={`p-4 rounded-lg text-center border transition-all duration-200 flex flex-col items-center justify-between ${
                    isSelected
                      ? isGrandFinal
                        ? "bg-emerald-500/20 border-emerald-400 text-white shadow-sm scale-102"
                        : "bg-amber-500/20 border-amber-400 text-white shadow-sm scale-102"
                      : "bg-coal-950 border-coal-800 text-slate-400 hover:border-coal-700 hover:text-white"
                  }`}
                >
                  <div
                    className={`p-3 rounded-full mb-3 ${
                      isSelected
                        ? isGrandFinal
                          ? "bg-emerald-400 text-coal-950"
                          : "bg-amber-400 text-coal-950"
                        : "bg-coal-900 text-slate-400"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-sans uppercase text-white">{node.name}</h4>
                    <span className="text-[10px] text-slate-400 mt-1 block">Live Integrated</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Inspect Card */}
          <div className="mt-8 p-6 rounded-lg bg-coal-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-full bg-coal-900 border border-amber-500/30 text-amber-400">
                <activeNode.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-amber-400 uppercase tracking-widest block font-bold">
                  MODULE ROLE // {activeNode.name}
                </span>
                <h4 className="text-base font-bold text-white font-sans mt-0.5">
                  {activeNode.role}
                </h4>
              </div>
            </div>

            <div className="text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded border border-emerald-500/40">
              MINECEL Unified Backbone
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
