"use client";

import React from "react";

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-amber-400 text-coal-950 font-mono text-[11px] font-bold py-1.5 px-4 sm:px-8 flex flex-wrap items-center justify-between border-b border-amber-500/30">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-coal-950 inline-block" />
        <span>DGMS CMR-2017 &amp; MINES ACT 1952 STATUTORY COMPLIANT | 14 Collieries Live Synced</span>
      </div>
      <div className="hidden md:flex items-center gap-4 text-[10px]">
        <span>Mesh: SCADA 1.2s</span>
        <span>•</span>
        <span>MINISTRY OF COAL READY</span>
      </div>
    </div>
  );
};
