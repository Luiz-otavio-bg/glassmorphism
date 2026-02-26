'use client';

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar"; 
import Hero from "@/components/hero";     
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const [isHoveringDrag, setIsHoveringDrag] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldHideBall = isHoveringNav || isHoveringDrag;

  if (!mounted) {
    return <main className="bg-[#050505] min-h-screen" />;
  }

  return (
    <main className="relative bg-[#050505]">
      <Navbar onNavHover={setIsHoveringNav} />
      <Hero isNavHovered={isHoveringNav} isDragHovered={isHoveringDrag} />
      <About onDragHover={setIsHoveringDrag} />
      <Contact />
    </main>
  );
}