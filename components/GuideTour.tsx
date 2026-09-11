"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  X,
  ChevronRight,
  ChevronLeft,
  Compass,
  CheckCircle2,
  Sparkles,
  Shield,
  Eye,
  MapPin,
  Users,
  AlertTriangle,
  FileText,
  Bot,
  Activity,
  ArrowRight,
} from "lucide-react";
import { soundFx } from "@/lib/audio";

export interface TourStep {
  id: string;
  targetSelector: string;
  title: string;
  description: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor?: "amber" | "emerald" | "cyan";
}

export const TOUR_STEPS: TourStep[] = [
  {
    id: "hero-overview",
    targetSelector: '[data-tour="hero-overview"]',
    title: "MINECEL Connected Network",
    description:
      "Welcome to MINECEL. Start from the executive birds-eye view: nationwide mining basins streaming operational telemetry, statutory compliance, and active personnel into one unified command center.",
    badge: "01 // Executive Network",
    icon: Compass,
    accentColor: "amber",
  },
  {
    id: "dashboard-overview",
    targetSelector: '[data-tour="dashboard-overview"]',
    title: "Command Center Overview",
    description:
      "Real-time governance dashboard showing enterprise compliance percentage, critical alerts, priority mines, and overdue corrective action requests (CARs) across all national coal basins.",
    badge: "02 // Key Indicators",
    icon: Shield,
    accentColor: "amber",
  },
  {
    id: "mine-overview",
    targetSelector: '[data-tour="mine-overview"]',
    title: "Colliery Operational Status",
    description:
      "Inspect individual colliery operational metrics, statutory health ratings, methane gas concentrations, main ventilation airflow velocity, and active under-pit personnel.",
    badge: "03 // Colliery Telemetry",
    icon: Activity,
    accentColor: "amber",
  },
  {
    id: "personnel",
    targetSelector: '[data-tour="personnel"]',
    title: "Personnel Accountability",
    description:
      "Track live underground personnel muster, intrinsically safe cap-lamp RFID transponders, gate check-in authorizations, and shift reconciliations for zero-compromise safety.",
    badge: "Life-Safety Muster",
    icon: Users,
    accentColor: "cyan",
  },
  {
    id: "inspections",
    targetSelector: '[data-tour="inspections"]',
    title: "Statutory Field Inspections",
    description:
      "Conduct digital, offline-first DGMS safety inspections directly at the coal face with encrypted GPS stamps, photo evidence capture, and tamper-proof sync queues.",
    badge: "Field Auditing",
    icon: Eye,
    accentColor: "emerald",
  },
  {
    id: "violations",
    targetSelector: '[data-tour="violations"]',
    title: "Automated Violation Tagging",
    description:
      "Statutory rules engine continuously reconciles sensor readings with Coal Mines Regulations 2017 to detect and flag statutory safety violations immediately.",
    badge: "CMR 2017 Rules",
    icon: AlertTriangle,
    accentColor: "amber",
  },
  {
    id: "corrective-actions",
    targetSelector: '[data-tour="corrective-actions"]',
    title: "Corrective Action Requests (CARs)",
    description:
      "Enforces strict 24-hour statutory resolution countdowns, assigns tasks to section engineers, and mandates photo evidence and inspector sign-off before closure.",
    badge: "Enforced SLAs",
    icon: CheckCircle2,
    accentColor: "emerald",
  },
  {
    id: "gis-map",
    targetSelector: '[data-tour="gis-map"]',
    title: "Spatial GIS Mine Map",
    description:
      "Explore continuous zoom transitions from regional coal basins down to lease boundaries, active working sections, and sub-meter field hazard observations (±0.4m).",
    badge: "Sub-Meter GIS",
    icon: MapPin,
    accentColor: "amber",
  },
  {
    id: "timeline",
    targetSelector: '[data-tour="timeline"]',
    title: "Monthly Governance Timeline",
    description:
      "Correlate historical trends across methane fluctuations, ventilation downtime, and field audits to uncover systemic root causes before hazards escalate into incidents.",
    badge: "Temporal Analytics",
    icon: Activity,
    accentColor: "amber",
  },
  {
    id: "documents",
    targetSelector: '[data-tour="documents"]',
    title: "Statutory RAG Pipeline",
    description:
      "Mines Act 1952, Coal Mines Regulations, and DGMS circulars transformed into a domain-tuned vector knowledge base for instant regulatory clarity and citations.",
    badge: "Regulatory RAG",
    icon: FileText,
    accentColor: "amber",
  },
  {
    id: "ai-copilot",
    targetSelector: '[data-tour="ai-copilot"]',
    title: "AI Governance Copilot",
    description:
      "“Ask the Mine” directly. Query the system to understand why a mine is prioritized, retrieve supporting inspection dossiers, and get grounded statutory guidance.",
    badge: "Grounded AI",
    icon: Bot,
    accentColor: "emerald",
  },
  {
    id: "notifications",
    targetSelector: '[data-tour="notifications"]',
    title: "Emergency Muster & Alerts",
    description:
      "Test emergency response protocols with simulated unaccounted worker alerts, triggering transponder mesh triangulation and automated rescue team dispatches.",
    badge: "Emergency Protocol",
    icon: AlertTriangle,
    accentColor: "amber",
  },
  {
    id: "completion",
    targetSelector: '[data-tour="completion"]',
    title: "Tour Completed — Ready to Govern",
    description:
      "You have completed the MINECEL tour. You now have full visibility into how live telemetry, personnel safety, field operations, and statutory compliance unite.",
    badge: "Command Center Ready",
    icon: Sparkles,
    accentColor: "emerald",
  },
];

interface GuideTourProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
  activeStepIndex: number;
  setActiveStepIndex: (idx: number) => void;
  isInitialPromptOpen: boolean;
  onDismissInitialPrompt: () => void;
}

export const GuideTour: React.FC<GuideTourProps> = ({
  isOpen,
  onClose,
  onStart,
  activeStepIndex,
  setActiveStepIndex,
  isInitialPromptOpen,
  onDismissInitialPrompt,
}) => {
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number; isCenter: boolean }>({
    top: 100,
    left: 100,
    isCenter: false,
  });

  const currentStep = TOUR_STEPS[activeStepIndex] || TOUR_STEPS[0];
  const totalSteps = TOUR_STEPS.length;
  const isFinalStep = activeStepIndex === totalSteps - 1;

  // Position calculation with robust viewport clamping
  const updatePosition = useCallback(() => {
    if (!isOpen || isInitialPromptOpen) return;

    if (isFinalStep || currentStep.id === "completion") {
      setTargetRect(null);
      setTooltipPos({
        top: Math.max(40, window.innerHeight / 2 - 160),
        left: Math.max(16, window.innerWidth / 2 - 210),
        isCenter: true,
      });
      return;
    }

    const element = document.querySelector(currentStep.targetSelector) as HTMLElement | null;
    if (element) {
      const rect = element.getBoundingClientRect();
      setTargetRect(rect);

      const tooltipWidth = Math.min(420, window.innerWidth - 32);
      const tooltipHeight = 270; // Approx height

      // Horizontal position: center with target, but clamped inside viewport
      let left = rect.left + rect.width / 2 - tooltipWidth / 2;
      left = Math.max(16, Math.min(window.innerWidth - tooltipWidth - 16, left));

      // Vertical position: prefer below element, fallback above element
      let top: number;
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      if (spaceBelow >= tooltipHeight + 20) {
        top = rect.bottom + 16;
      } else if (spaceAbove >= tooltipHeight + 20) {
        top = rect.top - tooltipHeight - 16;
      } else {
        // If element takes full height or neither fits, place in comfortable area
        top = Math.max(20, Math.min(window.innerHeight - tooltipHeight - 20, rect.top + 20));
      }

      // Final boundary clamp
      top = Math.max(20, Math.min(window.innerHeight - tooltipHeight - 20, top));

      setTooltipPos({ top, left, isCenter: false });
    } else {
      // Element not found: center gracefully
      setTargetRect(null);
      setTooltipPos({
        top: Math.max(40, window.innerHeight / 2 - 160),
        left: Math.max(16, window.innerWidth / 2 - 210),
        isCenter: true,
      });
    }
  }, [isOpen, isInitialPromptOpen, activeStepIndex, currentStep, isFinalStep]);

  // Smooth scroll and continuous frame sync when step changes
  useEffect(() => {
    if (!isOpen || isInitialPromptOpen) return;

    if (!isFinalStep && currentStep.targetSelector) {
      if (activeStepIndex === 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.querySelector(currentStep.targetSelector) as HTMLElement | null;
        if (element) {
          // Scroll smoothly to target element
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }

    // Keep updating rect for 700ms while smooth scroll completes
    let frameId: number;
    const startTime = Date.now();
    const animateTracking = () => {
      updatePosition();
      if (Date.now() - startTime < 800) {
        frameId = requestAnimationFrame(animateTracking);
      }
    };
    frameId = requestAnimationFrame(animateTracking);

    const handleScrollOrResize = () => updatePosition();
    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [isOpen, isInitialPromptOpen, activeStepIndex, currentStep, isFinalStep, updatePosition]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen && !isInitialPromptOpen) return;
      if (e.key === "Escape") {
        if (isInitialPromptOpen) onDismissInitialPrompt();
        else onClose();
      } else if (e.key === "ArrowRight" && isOpen) {
        handleNext();
      } else if (e.key === "ArrowLeft" && isOpen) {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isInitialPromptOpen, activeStepIndex]);

  const handleNext = () => {
    soundFx.playClick(1200 + activeStepIndex * 60, 0.03);
    if (isFinalStep) {
      soundFx.playSuccess();
      onClose();
      try {
        localStorage.setItem("minecel_tour_completed", "true");
      } catch {}
    } else {
      setActiveStepIndex(activeStepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeStepIndex > 0) {
      soundFx.playClick(1000, 0.03);
      setActiveStepIndex(activeStepIndex - 1);
    }
  };

  const handleSkip = () => {
    soundFx.playClick(800, 0.04);
    onClose();
    try {
      localStorage.setItem("minecel_tour_skipped", "true");
    } catch {}
  };

  // 1. Initial Prompt Dialogue (Color-matched to MINECEL industrial vibe)
  if (isInitialPromptOpen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-coal-950/70 animate-in fade-in duration-300 font-mono">
        <div className="relative w-full max-w-lg rounded-xl bg-coal-900 border border-coal-800 p-6 sm:p-8 shadow-xl text-slate-100">
          <div className="flex items-center gap-3 pb-4 border-b border-white/10">
            <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                MINECEL COMMAND CENTER
              </span>
              <h3 className="text-lg font-bold text-white font-sans uppercase">
                Welcome to MINECEL
              </h3>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-200 font-sans leading-relaxed">
            Welcome to MINECEL. Let’s take a quick tour of the Command Center and show you how everything connects.
          </p>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <button
              onClick={() => {
                soundFx.playClick(900, 0.03);
                onDismissInitialPrompt();
                try {
                  localStorage.setItem("minecel_tour_skipped", "true");
                } catch {}
              }}
              className="px-4 py-2.5 rounded text-slate-400 hover:text-white hover:bg-coal-800 transition-colors uppercase font-mono tracking-wider text-[11px]"
            >
              Skip Tour
            </button>

            <button
              onClick={() => {
                soundFx.playClick(1400, 0.04);
                onStart();
              }}
              className="flex items-center gap-2 px-6 py-2.5 rounded bg-amber-500 hover:bg-amber-400 text-coal-950 font-bold uppercase font-mono tracking-wider transition-all shadow-md active:scale-95 text-xs"
            >
              <span>Start Tour</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Active Tour Overlay & Spotlight
  if (!isOpen) return null;

  const StepIcon = currentStep.icon;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Lightened, color-matching ambient backdrop (NOT pitch black!) */}
      <div className="fixed inset-0 bg-[#06090e]/50 backdrop-blur-[1.5px] transition-opacity duration-300 pointer-events-auto" />

      {/* Target Element Spotlight Highlight Box with glowing amber border */}
      {targetRect && (
        <div
          className="fixed rounded-lg pointer-events-none transition-all duration-300 z-50 border-2 border-amber-400/90 shadow-[0_0_35px_rgba(245,158,11,0.55),inset_0_0_15px_rgba(245,158,11,0.15)] ring-1 ring-amber-400/50"
          style={{
            top: Math.max(0, targetRect.top - 8),
            left: Math.max(0, targetRect.left - 8),
            width: targetRect.width + 16,
            height: targetRect.height + 16,
            boxShadow: "0 0 0 9999px rgba(6, 9, 14, 0.45)",
          }}
        >
          {/* Subtle corner crosshairs on highlighted target */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-amber-300" />
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-amber-300" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-amber-300" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-amber-300" />
        </div>
      )}

      {/* Interactive Tour Dialogue Tooltip Box */}
      <div
        className="fixed z-50 w-[90vw] max-w-[420px] rounded-xl bg-coal-900 border border-amber-500/40 p-5 sm:p-6 shadow-xl text-slate-100 font-mono transition-all duration-300 pointer-events-auto"
        style={{
          top: tooltipPos.top,
          left: tooltipPos.left,
        }}
      >
        {/* Tooltip Header Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2 text-amber-400">
            <StepIcon className="w-4 h-4 text-amber-400" />
            <span className="font-bold uppercase tracking-wider text-[11px]">{currentStep.badge}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-300 font-semibold px-2 py-0.5 rounded bg-coal-800 border border-white/10">
              {activeStepIndex + 1} of {totalSteps}
            </span>
            <button
              onClick={handleSkip}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-coal-800 transition-colors"
              title="Exit Tour"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Step Content */}
        <h4 className="text-base sm:text-lg font-extrabold text-white font-sans uppercase">
          {currentStep.title}
        </h4>
        <p className="mt-2 text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
          {currentStep.description}
        </p>

        {/* Step Stepper Indicator Dots */}
        <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {TOUR_STEPS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  soundFx.playClick(1100, 0.02);
                  setActiveStepIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  idx === activeStepIndex
                    ? "w-5 bg-amber-400"
                    : idx < activeStepIndex
                    ? "w-2 bg-emerald-400"
                    : "w-2 bg-coal-700 hover:bg-coal-600"
                }`}
                title={`Go to step ${idx + 1}`}
              />
            ))}
          </div>

          {/* Action Navigation Buttons */}
          <div className="flex items-center gap-2 text-xs">
            <button
              disabled={activeStepIndex === 0}
              onClick={handlePrev}
              className="p-2 rounded bg-coal-800 hover:bg-coal-700 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors border border-white/10"
              title="Previous Step"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-4 py-2 rounded bg-amber-500 hover:bg-amber-400 text-coal-950 font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 text-xs"
            >
              <span>{isFinalStep ? "Start Exploring" : "Next"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
