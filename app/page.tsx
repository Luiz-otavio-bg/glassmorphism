'use client';
import { useState } from "react";
import Navbar from "@/components/navbar"; 
import Hero from "@/components/hero";      
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Page() {
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const [isHoveringDrag, setIsHoveringDrag] = useState(false);

  const shouldHideBall = isHoveringNav || isHoveringDrag;

  return (
    <main className="relative">
      <Navbar onNavHover={setIsHoveringNav} />
      <Hero isNavHovered={isHoveringNav} isDragHovered={isHoveringDrag} />
      <About onDragHover={setIsHoveringDrag}/>
      <Contact />
    </main>
  );
}