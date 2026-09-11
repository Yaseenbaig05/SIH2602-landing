"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenConsole?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsole }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Platform", href: "#hero" },
    { name: "Innovations", href: "#innovations" },
    { name: "6-Step Workflow", href: "#workflow" },
    { name: "Capabilities", href: "#capabilities" },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-3 pb-2 transition-all duration-200">
      <div
        className={`rounded-xl border px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-200 backdrop-blur-md ${
          isScrolled
            ? "bg-coal-950/95 border-amber-500/30 shadow-2xl"
            : "bg-coal-950/80 border-white/10 shadow-lg"
        }`}
      >
        {/* Left: Brand Identity */}
        <a href="#hero" className="flex items-center gap-3">
          <div className="relative w-7 h-7 flex items-center justify-center rounded bg-coal-900 border border-white/10 overflow-hidden">
            <Image
              src="/Logo-minecell.png"
              alt="MineCell Logo"
              width={28}
              height={28}
              className="w-full h-full object-contain p-0.5"
              priority
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-black tracking-widest text-white font-sans">
              MINE<span className="text-amber-400">CELL</span>
            </span>
            <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300">
              SIH GOVERNANCE SUITE
            </span>
          </div>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-amber-400 transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Launch Console CTA */}
        <div>
          <button
            onClick={onOpenConsole}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-coal-950 text-xs font-bold font-mono transition-all duration-150 shadow-md hover:shadow-amber-500/20 active:scale-95"
          >
            <span>Launch Console</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
