"use client";

import React from "react";
import { ArrowRight, Shield } from "lucide-react";

interface FinalCtaProps {
  onOpenConsole?: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenConsole }) => {
  return (
    <section className="relative py-24 bg-coal-950 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Gold Icon */}
        <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-6">
          <Shield className="w-5 h-5 text-amber-400" />
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
          Smarter Governance. Zero Compliance Gaps.
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Deploying accountable underground safety, automated Form &apos;B&apos; muster, and regulatory intelligence across Coal India and DGMS operations.
        </p>

        {/* Action Button */}
        <div className="mt-8 flex items-center justify-center">
          <button
            onClick={onOpenConsole}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-coal-950 font-bold font-mono text-xs uppercase tracking-wider transition-all duration-150 shadow-lg hover:shadow-amber-500/20 active:scale-95"
          >
            <span>Launch Enterprise Console</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Attribution Subtext */}
        <div className="mt-6 text-[11px] font-mono text-slate-500">
          Smart India Hackathon 2024 • Ministry of Coal, Category 1 • DGMS Regulatory Aligned
        </div>
      </div>
    </section>
  );
};
