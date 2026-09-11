"use client";

import React from "react";
import {
  Users,
  ClipboardCheck,
  Zap,
  TrendingUp,
  Layers,
  MapPin,
  WifiOff,
  ShieldCheck,
} from "lucide-react";

export const CoreInnovations: React.FC = () => {
  const innovations = [
    {
      id: "01",
      icon: Users,
      title: "Mine Personnel Accountability",
      description:
        "Digital check-in/check-out for workers, contractors, inspectors, and visitors. Shows who is currently inside the mine and identifies missing exit records.",
      tag1: "RFID + Cap Lamp Sync",
      tag2: "Zero Ghost Workers",
      tag2Color: "text-emerald-400",
    },
    {
      id: "02",
      icon: ClipboardCheck,
      title: "End-to-End Compliance Workflow",
      description:
        "A complete accountability chain: Inspection → Observation → Violation → Corrective Action → Evidence → Verification → Closure. Ensures clear ownership from detection to resolution.",
      tag1: "Inspection → Closure",
      tag2: "Digitized CAR",
      tag2Color: "text-amber-400",
    },
    {
      id: "03",
      icon: Zap,
      title: "AI Governance Copilot",
      description:
        "Officers can ask natural-language questions about mine compliance, violations, inspections, and regulations, with grounded answers in actual mine records and regulatory documents.",
      tag1: "CMR 2017 Grounded",
      tag2: "Zero Hallucination",
      tag2Color: "text-emerald-400",
    },
    {
      id: "04",
      icon: TrendingUp,
      title: "Recurring-Problem Detection",
      description:
        "Mining and longitudinal timelines reveal repeated safety, environmental, labour, or operational issues, helping management identify persistent problems instead of isolated incidents.",
      tag1: "Root-Cause Clustering",
      tag2: "Trend Intelligence",
      tag2Color: "text-cyan-300",
    },
    {
      id: "05",
      icon: Layers,
      title: "Mine-Level + Centralized Command",
      description:
        "Individual mine operations feed into a centralized view for corporate/ministry officials. Compare mines, regions, compliance status, overdue actions, and trends.",
      tag1: "Multi-Colliery View",
      tag2: "Ministry Level",
      tag2Color: "text-amber-400",
    },
    {
      id: "06",
      icon: MapPin,
      title: "Geo-Tagged Field Governance",
      description:
        "Every field observation is linked to location + timestamp + responsible person + evidence, creating georeferenced context for inspections and incidents.",
      tag1: "3D Spatial Lock",
      tag2: "Tamper-Proof EXIF",
      tag2Color: "text-emerald-400",
    },
    {
      id: "07",
      icon: WifiOff,
      title: "Offline-First Field Capability",
      description:
        "Mine personnel can access cached mine information and record observations even with poor connectivity. Syncs automatically when connectivity returns.",
      tag1: "Local Device Cache",
      tag2: "Shaft Sync Mesh",
      tag2Color: "text-cyan-300",
    },
    {
      id: "08",
      icon: ShieldCheck,
      title: "Evidence-Based Digital Audit Trail",
      description:
        "Every important action has a complete history: Who did it → What they did → When → Evidence → Who verified it. Supporting transparency and accountability.",
      tag1: "SHA-256 Ledger",
      tag2: "DGMS Admissible",
      tag2Color: "text-emerald-400",
    },
  ];

  return (
    <section id="innovations" className="relative py-24 bg-coal-950 border-t border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-[11px] font-bold uppercase tracking-wider mb-4">
            <span>✦</span>
            <span>CORE INNOVATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            Core Innovations
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-400 font-sans italic">
            &ldquo;One platform. Complete accountability. Intelligent governance.&rdquo;
          </p>
        </div>

        {/* 8-Card Grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {innovations.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between p-5 rounded-xl bg-coal-900 border border-white/10 hover:border-coal-700 transition-all duration-150 font-mono text-left"
              >
                <div>
                  {/* Card Icon */}
                  <div className="w-8 h-8 rounded-lg bg-coal-950 border border-white/10 flex items-center justify-center text-amber-400 mb-4">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-sm font-bold text-white font-sans leading-snug">
                    {item.title}
                  </h3>

                  {/* Card Body */}
                  <p className="mt-2 text-xs text-slate-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Tags */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="truncate">{item.tag1}</span>
                  <span className={`font-semibold shrink-0 ${item.tag2Color}`}>
                    {item.tag2}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
