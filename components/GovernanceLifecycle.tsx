"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const GovernanceLifecycle: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Field Inspect",
      description: "Digital field inspection forms by shift safety officer (Overman/Mining Sirdar).",
      footer: "Ref: Reg 113 Form VI",
      footerColor: "text-slate-400",
      accentBorder: "border-white/10",
    },
    {
      num: "02",
      title: "Observe Hazard",
      description: "Pollution, strata cracks, defects, or unstable bench slopes.",
      footer: "Ref: CMR-106",
      footerColor: "text-slate-400",
      accentBorder: "border-white/10",
    },
    {
      num: "03",
      title: "Flag Violation",
      description: "Automatic CMR codification & risk severity calculation.",
      footer: "CMR Reg 124_7a",
      footerColor: "text-crimson-hazard",
      accentBorder: "border-crimson-hazard/30",
    },
    {
      num: "04",
      title: "Assign CAPA",
      description: "Section engineer assigned with automated time-bound SLA.",
      footer: "Target: < 4 Hours",
      footerColor: "text-amber-400",
      accentBorder: "border-amber-500/30",
    },
    {
      num: "05",
      title: "Evidence Lock",
      description: "Geo-tagged photo/sensor evidence upload with cryptographic stamp.",
      footer: "EXIF Geo-Stamp",
      footerColor: "text-cyan-400",
      accentBorder: "border-white/10",
    },
    {
      num: "06",
      title: "Verified Close",
      description: "Independent inspector sign-off & Form IV logbook generation.",
      footer: "SHA-256 Sealed",
      footerColor: "text-emerald-400 font-bold",
      accentBorder: "border-emerald-500/30",
    },
  ];

  return (
    <section id="workflow" className="relative py-24 bg-coal-950 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-[11px] font-bold uppercase tracking-wider mb-4">
            <span>STATUTORY TRACKING LIFECYCLE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            The 6-Step Closed-Loop Governance Lifecycle.
          </h2>

          <p className="mt-3 text-sm text-slate-400 font-sans">
            Every subsurface hazard tracked from field detection to cryptographically verified statutory closure.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 font-mono text-left">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`flex flex-col justify-between p-4 rounded-xl bg-coal-900 border ${step.accentBorder} hover:border-coal-700 transition-all duration-150`}
            >
              <div>
                {/* Step Number */}
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="text-[11px] font-bold text-amber-400">
                    {step.num}
                  </span>
                  <span className="text-slate-600 text-xs">→</span>
                </div>

                {/* Step Title */}
                <h3 className="text-xs font-bold text-white font-sans mt-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="mt-1.5 text-[11px] text-slate-400 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Footer Badge */}
              <div className="mt-4 pt-2 border-t border-white/5 text-[10px]">
                <span className={step.footerColor}>{step.footer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
