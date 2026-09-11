"use client";

import React from "react";

export const IndustrialCapabilities: React.FC = () => {
  const capabilities = [
    {
      badge: "LIFE-SAFETY",
      badgeColor: "text-amber-300 bg-amber-500/10 border-amber-500/30",
      title: "Underground RFID Muster & Roster",
      description:
        "Automated Form 'B' register synced with cap-lamp transponders. Triangulates subsurface workers and generates emergency muster on any trap, accident, statutory inquiry.",
      footerLeft: "Active Roster: 412 In-Pit",
      footerRight: "0 Missing Exit Records",
      footerRightColor: "text-emerald-400 font-bold",
    },
    {
      badge: "INTELLIGENCE",
      badgeColor: "text-amber-300 bg-amber-500/10 border-amber-500/30",
      title: "Autonomous DGMS Regulatory RAG Copilot",
      description:
        "Natural-language queries grounded exclusively in Coal Mines Regulations 2017 and internal mine incident logs. Eliminates guesswork with direct regulatory citations.",
      footerLeft: "Grounded: CMR 2017 & Circulars",
      footerRight: "Zero Hallucination",
      footerRightColor: "text-amber-400 font-bold",
    },
    {
      badge: "OFFLINE RESILIENCE",
      badgeColor: "text-cyan-300 bg-cyan-500/10 border-cyan-500/30",
      title: "Subsurface GIS & Offline Mesh-Sync",
      description:
        "Inspectors record observations at -800m without cellular or Wi-Fi. Data caches securely in local encrypted SQLite and auto-syncs as soon as an in-shaft gateway comes into range.",
      footerLeft: "Local Cache: Vector SQLite",
      footerRight: "Zero Packet Data Loss",
      footerRightColor: "text-cyan-300 font-bold",
    },
    {
      badge: "TAMPER-PROOF AUDIT",
      badgeColor: "text-emerald-300 bg-emerald-500/10 border-emerald-500/30",
      title: "SHA-256 Evidence & Forensic Ledger",
      description:
        "Every worker, timestamp, inspection note, and photo attachment receives an immutable cryptographic seal. Ensures non-repudiation and admissibility for DGMS inquiry courts.",
      footerLeft: "Seal Hash: 0x8f72a...d219c",
      footerRight: "Legally Admissible",
      footerRightColor: "text-emerald-400 font-bold",
    },
  ];

  return (
    <section id="capabilities" className="relative py-24 bg-coal-950 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-[11px] font-bold uppercase tracking-wider mb-4">
            <span>KEY CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Engineered for Extreme Industrial Environments.
          </h2>

          <p className="mt-3 text-sm text-slate-400 font-sans">
            Resilient underground technology designed specifically for coal pit depths, disconnected shafts, and statutory scrutiny.
          </p>
        </div>

        {/* 2x2 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-mono text-left">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 rounded-xl bg-coal-900 border border-white/10 hover:border-coal-700 transition-all duration-150"
            >
              <div>
                {/* Capability Badge */}
                <div className="inline-block px-2 py-0.5 rounded border text-[10px] font-bold uppercase mb-3">
                  <span className={`px-1.5 py-0.5 rounded ${cap.badgeColor}`}>
                    {cap.badge}
                  </span>
                </div>

                {/* Capability Title */}
                <h3 className="text-base font-bold text-white font-sans mt-1">
                  {cap.title}
                </h3>

                {/* Capability Description */}
                <p className="mt-2 text-xs text-slate-300 font-sans leading-relaxed">
                  {cap.description}
                </p>
              </div>

              {/* Capability Footer */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span>{cap.footerLeft}</span>
                <span className={cap.footerRightColor}>{cap.footerRight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
