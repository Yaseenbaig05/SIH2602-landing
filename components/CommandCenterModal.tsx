"use client";

import React, { useState } from "react";
import {
  X,
  Shield,
  Activity,
  AlertTriangle,
  Wind,
  Flame,
  Users,
  Terminal,
  Radio,
  Clock,
  CheckCircle2,
  FileText,
  Send,
  Sparkles,
} from "lucide-react";
import { soundFx } from "@/lib/audio";
import { COAL_MINES, CoalMineNode, COPILOT_SAMPLE_QUERIES } from "@/lib/data";

interface CommandCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandCenterModal: React.FC<CommandCenterModalProps> = ({ isOpen, onClose }) => {
  const [selectedMine, setSelectedMine] = useState<CoalMineNode>(COAL_MINES[0]);
  const [activeTab, setActiveTab] = useState<"telemetry" | "car" | "copilot">("telemetry");
  const [issuedCAR, setIssuedCAR] = useState<boolean>(false);
  const [chatInput, setChatInput] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "user" | "ai"; text: string }>>([
    {
      sender: "ai",
      text: "MINECEL Autonomous Governance AI online. Connected to regulatory knowledge base & live SCADA feeds. How may I assist your statutory audit today?",
    },
  ]);

  if (!isOpen) return null;

  const handleClose = () => {
    soundFx.playClick(900, 0.03);
    onClose();
  };

  const handleIssueCAR = () => {
    soundFx.playAlarm();
    setIssuedCAR(true);
    setTimeout(() => {
      soundFx.playSuccess();
    }, 1200);
  };

  const handleSendChat = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!chatInput.trim()) return;

    soundFx.playClick(1400, 0.03);
    const userQuery = chatInput;
    setChatMessages((prev) => [...prev, { sender: "user", text: userQuery }]);
    setChatInput("");

    setTimeout(() => {
      soundFx.playSuccess();
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: `Analysis for "${userQuery}": Based on CMR 2017 & active telemetry for ${selectedMine.name}, ventilation fan velocity is currently monitored at 2.1 m/s. Statutory compliance score stands at ${selectedMine.complianceScore}%. Zero mandatory halt orders currently enforced.`,
        },
      ]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-coal-950/80 animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-xl bg-coal-900 border border-coal-800 shadow-2xl overflow-hidden font-mono text-slate-200">
        {/* Top Console Title Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-coal-900 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/40">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  NATIONAL COAL STATUTORY COMMAND CONSOLE
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-400 font-bold">
                  LIVE SIMULATION
                </span>
              </div>
              <p className="text-[10px] text-slate-400">
                DIRECTORATE GENERAL OF MINES SAFETY // SECURE TELEMETRY INTERFACE
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs text-amber-400">
              <Radio className="w-3.5 h-3.5" />
              <span>EDGE LINK: ENCRYPTED</span>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 rounded bg-coal-800 hover:bg-coal-700 text-slate-400 hover:text-white border border-white/10 transition-colors"
              title="Close Console"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center justify-between px-5 py-2.5 bg-coal-900/60 border-b border-white/5 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                soundFx.playClick(1100, 0.02);
                setActiveTab("telemetry");
              }}
              className={`px-3 py-1.5 rounded transition-all ${
                activeTab === "telemetry"
                  ? "bg-amber-500 text-coal-950 font-bold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Live SCADA Telemetry
            </button>
            <button
              onClick={() => {
                soundFx.playClick(1100, 0.02);
                setActiveTab("car");
              }}
              className={`px-3 py-1.5 rounded transition-all ${
                activeTab === "car"
                  ? "bg-amber-500 text-coal-950 font-bold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Statutory CAR Dispatch
            </button>
            <button
              onClick={() => {
                soundFx.playClick(1100, 0.02);
                setActiveTab("copilot");
              }}
              className={`px-3 py-1.5 rounded transition-all ${
                activeTab === "copilot"
                  ? "bg-amber-500 text-coal-950 font-bold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              DGMS AI Copilot
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-400">
            <span>ACTIVE COLLIERY:</span>
            <span className="text-amber-400 font-bold">{selectedMine.name}</span>
          </div>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Mine Selector Bar */}
          <div>
            <span className="text-[10px] text-slate-400 uppercase block mb-2">Switch Active Mine Node:</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {COAL_MINES.map((mine) => (
                <button
                  key={mine.id}
                  onClick={() => {
                    soundFx.playClick(1200, 0.03);
                    setSelectedMine(mine);
                  }}
                  className={`p-2 rounded text-left border transition-all text-xs ${
                    selectedMine.id === mine.id
                      ? "bg-amber-500/20 border-amber-400 text-white font-bold"
                      : "bg-coal-900 border-white/5 text-slate-400 hover:bg-coal-850 hover:text-slate-200"
                  }`}
                >
                  <div className="truncate font-bold">{mine.name.split(" ")[0]}</div>
                  <div className="text-[10px] text-slate-500 truncate">{mine.state}</div>
                </button>
              ))}
            </div>
          </div>

          {/* TAB 1: Live SCADA Telemetry */}
          {activeTab === "telemetry" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Telemetry Gauges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg bg-coal-900 border border-white/10">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>METHANE GAS (CH4)</span>
                    <Flame className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className={`text-2xl font-bold mt-2 ${selectedMine.status === "Critical" ? "text-crimson-hazard" : "text-emerald-400"}`}>
                    {selectedMine.methaneLevel}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">CMR 2017 Ceiling: 0.75%</div>
                </div>

                <div className="p-4 rounded-lg bg-coal-900 border border-white/10">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>VENTILATION AIRFLOW</span>
                    <Wind className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold text-cyan-300 mt-2">
                    2.1 m/s
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">Section 4B Working Face</div>
                </div>

                <div className="p-4 rounded-lg bg-coal-900 border border-white/10">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>LIVE HEADCOUNT</span>
                    <Users className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mt-2">
                    {selectedMine.activePersonnel} Miners
                  </div>
                  <div className="text-[10px] text-emerald-400 mt-1">100% Muster Verified</div>
                </div>

                <div className="p-4 rounded-lg bg-coal-900 border border-white/10">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>DGMS AUDIT SCORE</span>
                    <Shield className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className={`text-2xl font-bold mt-2 ${selectedMine.complianceScore > 90 ? "text-emerald-400" : "text-amber-400"}`}>
                    {selectedMine.complianceScore}%
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">Status: {selectedMine.status}</div>
                </div>
              </div>

              {/* Mine Specifications & Geotags */}
              <div className="p-5 rounded-lg bg-coal-900 border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px]">OPERATIONAL TYPE &amp; SUBSIDIARY</span>
                  <strong className="text-white text-sm">{selectedMine.type} • {selectedMine.subsidiary}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">GPS GEOLOCATION</span>
                  <span className="text-cyan-300 font-bold">{selectedMine.lat}°N, {selectedMine.lng}°E</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">DGMS REGIONAL JURISDICTION</span>
                  <span className="text-emerald-400 font-bold">Northern/Eastern Zone Division</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Statutory CAR Dispatch */}
          {activeTab === "car" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="p-5 rounded-lg bg-coal-900 border border-amber-500/30">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-amber-400 uppercase">
                    SIMULATE STATUTORY CORRECTIVE ACTION REQUEST (CAR) DISPATCH
                  </span>
                  <span className="text-[10px] text-slate-400">CMR 2017 REGULATION 124</span>
                </div>

                <p className="text-xs text-slate-300 mt-3 font-sans leading-relaxed">
                  When hazardous parameters are detected, the autonomous rules engine dispatches an unalterable Corrective Action Request (CAR) with an enforced 24-hour statutory countdown.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleIssueCAR}
                    className="px-5 py-3 rounded bg-crimson-hazard hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
                  >
                    Issue Statutory CMR 124 Notice to {selectedMine.name.split(" ")[0]}
                  </button>
                  {issuedCAR && (
                    <span className="text-xs text-emerald-400 font-bold flex items-center gap-1.5 animate-in fade-in">
                      <CheckCircle2 className="w-4 h-4" />
                      CAR #CAR-2026-908 Dispatched! 24h SLA Initiated with SMS Alert.
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DGMS AI Copilot */}
          {activeTab === "copilot" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="h-64 overflow-y-auto p-4 rounded-lg bg-coal-900 border border-white/10 space-y-3 text-xs">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-lg max-w-xl ${
                      msg.sender === "user"
                        ? "ml-auto bg-amber-500/20 border border-amber-500/40 text-amber-200"
                        : "mr-auto bg-coal-950 border border-white/10 text-slate-200"
                    }`}
                  >
                    <span className="block text-[10px] text-slate-400 uppercase mb-1 font-bold">
                      {msg.sender === "user" ? "Statutory Auditor" : "MINECEL RAG Engine"}
                    </span>
                    <p className="font-sans leading-relaxed">{msg.text}</p>
                  </div>
                ))}
              </div>

              {/* Chat Input Bar */}
              <form onSubmit={handleSendChat} className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask any statutory question (e.g., 'What is the methane threshold under CMR 2017?')..."
                  className="flex-1 px-4 py-2.5 rounded bg-coal-900 border border-white/15 focus:border-amber-400 focus:outline-none text-xs text-white placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded bg-amber-500 hover:bg-amber-400 text-coal-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Query</span>
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Console Footer Bar */}
        <div className="px-5 py-3 bg-coal-900 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
          <span>COAL INDIA LTD &amp; MINISTRY OF COAL TELEMETRY SYSTEM</span>
          <span className="text-emerald-400 font-bold">SHA-256 AUDIT LOGGING ACTIVE</span>
        </div>
      </div>
    </div>
  );
};
