"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
    }, 1800);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#07111f]/85 backdrop-blur-3xl"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            backdropFilter: "blur(0px)",
          }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"
            initial={{ scale: 0.65, opacity: 0 }}
            animate={{ scale: 1.15, opacity: 1 }}
            exit={{ scale: 1.55, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ scale: 0.72, opacity: 0, filter: "blur(10px)" }}
            animate={{
              scale: [0.72, 1, 1],
              opacity: [0, 1, 1],
              filter: ["blur(10px)", "blur(0px)", "blur(0px)"],
            }}
            exit={{
              scale: 2.8,
              opacity: 0,
              filter: "blur(14px)",
            }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-lemon text-8xl text-white drop-shadow-[0_24px_70px_rgba(103,232,249,0.28)] md:text-9xl">
              BG
            </span>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
