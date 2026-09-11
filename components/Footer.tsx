"use client";

import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-coal-950 border-t border-white/10 font-mono text-xs text-slate-400 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Brand */}
        <div className="flex items-center gap-2.5">
          <div className="relative w-6 h-6 rounded bg-coal-900 border border-white/10 overflow-hidden flex items-center justify-center">
            <Image
              src="/Logo-minecell.png"
              alt="MineCell Logo"
              width={24}
              height={24}
              className="w-full h-full object-contain p-0.5"
            />
          </div>
          <span className="text-sm font-bold text-white font-sans">
            MINE<span className="text-amber-400">CELL</span> <span className="text-slate-500 font-normal">Platform</span>
          </span>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex items-center gap-5 text-[11px] text-slate-400">
          <a href="#hero" className="hover:text-amber-400 transition-colors">Console</a>
          <a href="#innovations" className="hover:text-amber-400 transition-colors">Innovations</a>
          <a href="#workflow" className="hover:text-amber-400 transition-colors">Workflow</a>
          <a href="#capabilities" className="hover:text-amber-400 transition-colors">Capabilities</a>
        </div>

        {/* Right: Copyright & Assurance */}
        <div className="text-[11px] text-slate-500 text-center sm:text-right">
          © 2024 MineCell • Statutory Integrity System
        </div>
      </div>
    </footer>
  );
};
