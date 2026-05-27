"use client";

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import type { Language } from "@/components/language-switch";

type FloatingShapeProps = {
  color: string;
  initialX: string;
  initialY: string;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  type: "circle" | "square";
};

const shapes = [
  {
    type: "circle",
    color: "bg-blue-500 w-32 h-32 md:w-64 md:h-64",
    initialX: "10%",
    initialY: "15%",
  },
  {
    type: "square",
    color: "bg-blue-900 w-24 h-24 md:w-48 md:h-48",
    initialX: "80%",
    initialY: "10%",
  },
  {
    type: "circle",
    color: "bg-cyan-400/70 w-20 h-20 md:w-40 md:h-40",
    initialX: "75%",
    initialY: "70%",
  },
  {
    type: "square",
    color: "bg-cyan-500/30 w-16 h-16 md:w-32 md:h-32",
    initialX: "15%",
    initialY: "75%",
  },
] satisfies Array<Omit<FloatingShapeProps, "mouseX" | "mouseY">>;

function FloatingShape({
  type,
  color,
  initialX,
  initialY,
  mouseX,
  mouseY,
}: FloatingShapeProps) {
  const springConfig = { stiffness: 50, damping: 20 };

  const dx = useSpring(
    useTransform(mouseX, (value: number): number => {
      if (typeof window === "undefined") return 0;
      if (value === 0) return 0;
      const distance = value - (window.innerWidth * parseFloat(initialX)) / 100;
      return Math.abs(distance) < 200 ? (distance > 0 ? -50 : 50) : 0;
    }),
    springConfig,
  );

  const dy = useSpring(
    useTransform(mouseY, (value: number): number => {
      if (typeof window === "undefined") return 0;
      if (value === 0) return 0;
      const distance = value - (window.innerHeight * parseFloat(initialY)) / 100;
      return Math.abs(distance) < 200 ? (distance > 0 ? -50 : 50) : 0;
    }),
    springConfig,
  );

  return (
    <motion.div
      style={{ left: initialX, top: initialY, x: dx, y: dy }}
      className={`absolute ${type === "circle" ? "rounded-full" : "rounded-2xl"} ${color} opacity-30 blur-md md:opacity-40 md:blur-3xl`}
      animate={{
        scale: [1, 1.1, 1],
        rotate: type === "square" ? [0, 90, 0] : 0,
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

const contactCopy = {
  en: {
    title: "Contact Us",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
  },
  pt: {
    title: "Contato",
    name: "Nome",
    email: "Email",
    message: "Mensagem",
    send: "Enviar",
  },
};

export default function Contact({ language }: { language: Language }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="contactus"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-t from-[#0a192f] via-[#0a192f] to-[#0f0f0f] p-4 md:p-6"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        {shapes.map((shape) => (
          <FloatingShape
            key={`${shape.type}-${shape.initialX}-${shape.initialY}`}
            {...shape}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-2xl rounded-[28px] border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-2xl md:rounded-[36px] md:p-16"
      >
        <h2 className="font-lemon mb-8 select-none text-center text-3xl text-white md:mb-12 md:text-5xl">
          {contactCopy[language].title}
        </h2>

        <form className="space-y-4 md:space-y-6">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder={contactCopy[language].name}
              aria-label={contactCopy[language].name}
              className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/30 md:py-4 md:text-base"
            />
            <input
              type="email"
              placeholder={contactCopy[language].email}
              aria-label={contactCopy[language].email}
              className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/30 md:py-4 md:text-base"
            />
            <textarea
              placeholder={contactCopy[language].message}
              aria-label={contactCopy[language].message}
              rows={4}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/30 md:py-4 md:text-base"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl border border-white/20 py-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors md:py-4 md:text-sm"
          >
            {contactCopy[language].send}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
