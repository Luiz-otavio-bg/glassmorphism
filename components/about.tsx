"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import type { Language } from "@/components/language-switch";

interface AboutProps {
  language: Language;
  onDragHover: (isHovering: boolean) => void;
}

const aboutCopy = {
  en: {
    title: "Transparency Redefined.",
    body: "Move beyond flat design. Glassmorphism brings tactile realism to digital interfaces through soft shadows, frosted textures, and vibrant light. It's not just about looking good; it's about creating a spatial experience where every layer feels intentional and connected.",
    drag: "Drag Me",
  },
  pt: {
    title: "Transparência Redefinida.",
    body: "Vá além do design plano. O glassmorphism traz realismo tátil para interfaces digitais com sombras suaves, texturas foscas e luz vibrante. Não é só sobre parecer bonito; é sobre criar uma experiência espacial em que cada camada parece intencional e conectada.",
    drag: "Arraste",
  },
};

export default function About({ language, onDragHover }: AboutProps) {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  const handleDragEnd = () => {
    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);

    resetTimerRef.current = setTimeout(() => {
      controls.start({
        x: 0,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
      });
    }, 5000);
  };

  return (
    <section
      id="about"
      ref={constraintsRef}
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#0f0f0f] px-5 py-24 sm:px-10 lg:px-24"
    >
      <div className="relative z-[15] mb-16 max-w-3xl">
        <h2 className="mb-6 bg-gradient-to-r from-white via-blue-200/45 to-white bg-[length:200%_auto] bg-clip-text font-sans text-4xl tracking-tight text-transparent transition-all duration-1000 hover:bg-right md:text-6xl">
          {aboutCopy[language].title}
        </h2>
        <p className="font-sans text-base font-light leading-relaxed text-white/60 md:text-lg">
          {aboutCopy[language].body}
        </p>
      </div>

      <div className="z-[15] flex flex-1 flex-col items-center justify-between gap-12 lg:flex-row lg:gap-10">
        <div className="relative h-[24rem] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.015] lg:w-1/2">
          <motion.div
            drag
            animate={controls}
            dragConstraints={constraintsRef}
            dragElastic={0.5}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            onMouseEnter={() => onDragHover(true)}
            onMouseLeave={() => onDragHover(false)}
            whileDrag={{ scale: 1.05, cursor: "grabbing" }}
            className="absolute left-[calc(50%-8rem)] top-[calc(50%-5rem)] z-[60] flex h-40 w-64 cursor-grab select-none items-center justify-center rounded-2xl border border-white/20 bg-white/[0.05] shadow-2xl backdrop-blur-sm"
          >
            <span className="font-sans text-xs uppercase tracking-widest text-white/35">
              {aboutCopy[language].drag}
            </span>
          </motion.div>

          <div className="absolute left-8 top-8 h-20 w-20 rounded-full bg-blue-500 opacity-50" />
          <div className="absolute bottom-12 right-12 h-10 w-32 rotate-45 rounded-full bg-gradient-to-r from-sky-500 to-blue-600" />
          <div className="absolute bottom-20 left-1/3 h-28 w-28 rotate-[125deg] bg-blue-900/50" />
        </div>

        <div className="pointer-events-none mb-10 flex w-full flex-col items-center justify-center lg:w-1/2 lg:items-end lg:pr-16">
          <div className="flex flex-col gap-2">
            <h3 className="font-lemon select-none text-[clamp(5rem,16vw,7.5rem)] leading-none text-white/10 [animation:pulse_5s_infinite]">
              BG
            </h3>
            <h3 className="font-lemon select-none text-[clamp(6rem,18vw,9.5rem)] leading-none text-white/30">
              BG
            </h3>
            <h3 className="font-lemon select-none text-[clamp(7rem,20vw,11rem)] leading-none text-white [animation:pulse_10s_infinite]">
              BG
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
