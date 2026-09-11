"use client";

import React, { useState, useEffect } from "react";
import { Info, Check } from "lucide-react";

export const DisclaimerModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleDismiss = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-coal-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-xl bg-coal-900 border border-coal-800 p-6 sm:p-7 shadow-2xl text-slate-100 font-mono">
        {/* Top Tag */}
        <div className="flex items-center gap-2 mb-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
            <Info className="w-3.5 h-3.5 text-amber-400" />
            <span>SMART INDIA HACKATHON 2024 • DEMONSTRATION ENVIRONMENT</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white font-sans">
          Prototype Data Disclaimer
        </h3>

        {/* Narrative Body */}
        <p className="mt-3 text-xs sm:text-[13px] text-slate-300 font-sans leading-relaxed">
          This application is a demonstration prototype. All data shown in this prototype, including personnel records, compliance information, inspections, violations, locations, analytics, and other displayed information, is simulated/mock data created solely for demonstration and understanding purposes. It does not represent real mine operations, personnel, incidents, or regulatory records.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end gap-3 text-xs">
          <button
            onClick={handleDismiss}
            className="px-4 py-2 rounded-lg text-slate-400 hover:text-white transition-colors duration-150"
          >
            Dismiss
          </button>

          <button
            onClick={handleDismiss}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-coal-950 font-bold transition-all duration-150 shadow-md hover:shadow-amber-500/20 active:scale-95"
          >
            <span>I Understand</span>
            <Check className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
