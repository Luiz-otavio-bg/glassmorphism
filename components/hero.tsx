"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import type { Language } from "@/components/language-switch";

interface HeroProps {
  language: Language;
  isNavHovered: boolean;
  isDragHovered: boolean;
}

const backgroundOrbs = [
  {
    className: "right-[8%] top-[12%] h-[15rem] w-[15rem] bg-[#2f405f]/90",
    animate: { x: [0, 0, 0], y: [0, -30, 0] },
    duration: 8,
  },
  {
    className: "right-[9%] top-[14%] h-[12rem] w-[12rem] bg-sky-300/10",
    animate: { x: [-10, -10, -10], y: [0, -10, 0] },
    duration: 8,
  },
  {
    className: "bottom-[10%] left-[8%] h-[18rem] w-[18rem] bg-sky-300/10",
    animate: { x: [0, 80, 0], y: [0, 60, 0] },
    duration: 12,
  },
  {
    className: "bottom-[12%] left-[10%] h-[15rem] w-[15rem] bg-[#2f405f]/70",
    animate: { x: [0, 80, 0], y: [0, 60, 0] },
    duration: 12,
  },
  {
    className: "bottom-[14%] right-[6%] h-[10rem] w-[10rem] bg-sky-300/10",
    animate: { x: [0, -90, 0], y: [0, 60, 0] },
    duration: 12,
  },
  {
    className: "bottom-[18%] right-[10%] h-[8rem] w-[8rem] bg-[#2f405f]",
    animate: { x: [0, -70, 0], y: [0, 45, 0] },
    duration: 12,
  },
];

const heroCopy = {
  en: { welcome: "WELCOME", to: "to" },
  pt: { welcome: "BEM-VINDO", to: "ao" },
};

export default function Hero({ language, isNavHovered, isDragHovered }: HeroProps) {
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const cursorY = useSpring(mouseY, { damping: 25, stiffness: 150 });
  const shouldHideCursor = isMobile || isNavHovered || isDragHovered;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    const handleMouseMove = (event: MouseEvent) => {
      window.requestAnimationFrame(() => {
        mouseX.set(event.clientX - 40);
        mouseY.set(event.clientY - 40);
      });
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a192f] via-[#0a192f] to-[#0f0f0f] px-3 py-20 sm:px-5 lg:px-7"
    >
      <div className="relative z-10 flex h-[82vh] min-h-[34rem] w-full max-w-[88rem] items-center justify-center overflow-hidden rounded-[20px] border border-white/10 bg-white/5 p-5 text-center shadow-2xl backdrop-blur-md md:h-[88vh] md:p-8 xl:max-w-[96rem]">
        <div className="z-20 w-full select-none">
          <h2 className="mb-4 font-sans text-2xl font-medium tracking-[0.2em] text-white sm:text-4xl md:mb-0 md:text-6xl">
            {heroCopy[language].welcome}
          </h2>

          <span className="font-rubrica block translate-x-2 text-3xl text-white sm:translate-x-3 md:-mt-4 md:text-5xl lg:translate-x-4">
            {heroCopy[language].to}
          </span>

          <h1 className="mt-2 font-sans text-[clamp(2.45rem,12vw,8rem)] font-bold leading-none md:mt-0">
            <span
              className="inline-block max-w-full break-words bg-gradient-to-r from-white via-white/55 to-white bg-[length:200%_auto] bg-clip-text text-center text-transparent transition-all duration-1000"
              style={{
                WebkitTextStroke: isMobile
                  ? "0.5px rgba(255, 255, 255, 0.8)"
                  : "1px rgba(255, 255, 255, 0.81)",
              }}
            >
              GLASSMORPHISM
            </span>
          </h1>
        </div>
      </div>

      <motion.div
        style={{ x: cursorX, y: cursorY }}
        animate={{
          opacity: shouldHideCursor ? 0 : 1,
          scale: shouldHideCursor ? 0.5 : 1,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[12] hidden h-20 w-20 rounded-full border border-white/20 bg-white/[0.03] shadow-2xl backdrop-blur-[5px] md:block"
      />

      {backgroundOrbs.map((orb) => (
        <motion.div
          key={orb.className}
          animate={orb.animate}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute z-[9] rounded-full ${orb.className}`}
        />
      ))}
    </section>
  );
}
