import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MINECEL | Smart Governance & Compliance Monitoring System for Coal Mines",
  description: "One intelligent platform for mine governance, compliance, personnel accountability, inspections, field operations, and decision-making.",
  keywords: [
    "MINECEL",
    "Coal Mine Governance",
    "DGMS Compliance",
    "Mines Act 1952",
    "Mining Safety Platform",
    "Underground Personnel Accountability",
    "AI Regulatory RAG",
    "Smart Mining Command Center",
  ],
  authors: [{ name: "MINECEL" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/Logo-minecell.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-coal-950 text-slate-100 font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200">
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
