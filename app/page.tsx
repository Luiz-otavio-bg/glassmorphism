'use client';

import { useState } from "react";
import About from "@/components/about";
import Contact from "@/components/contact";
import GlassLab from "@/components/glass-lab";
import GlassShowcase from "@/components/glass-showcase";
import Hero from "@/components/hero";
import IntroOverlay from "@/components/intro-overlay";
import LanguageSwitch, { Language } from "@/components/language-switch";
import Navbar from "@/components/navbar";

export default function Page() {
  const [language, setLanguage] = useState<Language>("en");
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const [isHoveringDrag, setIsHoveringDrag] = useState(false);

  return (
    <main className="relative bg-[#050505] text-white">
      <IntroOverlay />
      <LanguageSwitch language={language} onLanguageChange={setLanguage} />
      <Navbar language={language} onNavHover={setIsHoveringNav} />
      <Hero
        language={language}
        isNavHovered={isHoveringNav}
        isDragHovered={isHoveringDrag}
      />
      <About language={language} onDragHover={setIsHoveringDrag} />
      <GlassShowcase language={language} />
      <GlassLab language={language} />
      <Contact language={language} />
    </main>
  );
}
