"use client";

import React, { useState } from "react";
import { TopBanner } from "@/components/TopBanner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CoreInnovations } from "@/components/CoreInnovations";
import { GovernanceLifecycle } from "@/components/GovernanceLifecycle";
import { IndustrialCapabilities } from "@/components/IndustrialCapabilities";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { CommandCenterModal } from "@/components/CommandCenterModal";
import { DisclaimerModal } from "@/components/DisclaimerModal";

export default function Home() {
  const [isConsoleOpen, setIsConsoleOpen] = useState<boolean>(false);

  const handleOpenConsole = () => {
    setIsConsoleOpen(true);
  };

  const handleCloseConsole = () => {
    setIsConsoleOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative bg-coal-950 text-slate-100 min-h-screen selection:bg-amber-500/30 selection:text-amber-200 font-sans">
      {/* 0. Top DGMS Compliance Ticker */}
      <TopBanner />

      {/* 1. Floating Clean Navbar */}
      <Navbar onOpenConsole={handleOpenConsole} />

      {/* 2. Hero Section with Live Command Center Window */}
      <Hero
        onExploreClick={handleOpenConsole}
        onViewArchitecture={() => scrollToSection("innovations")}
      />

      {/* 3. Core Innovations (8 Pillar Cards) */}
      <CoreInnovations />

      {/* 4. The 6-Step Closed-Loop Governance Lifecycle */}
      <GovernanceLifecycle />

      {/* 5. Engineered for Extreme Industrial Environments (4 Capabilities Cards) */}
      <IndustrialCapabilities />

      {/* 6. Smarter Governance Pre-Footer CTA */}
      <FinalCta onOpenConsole={handleOpenConsole} />

      {/* 7. Platform Footer */}
      <Footer />

      {/* Interactive Command Center Modal */}
      <CommandCenterModal
        isOpen={isConsoleOpen}
        onClose={handleCloseConsole}
      />

      {/* Prototype Data Disclaimer Modal on Launch */}
      <DisclaimerModal />
    </main>
  );
}
