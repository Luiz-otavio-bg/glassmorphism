"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

// Componente das formas flutuantes de fundo
function FloatingShape({ type, color, initialX, initialY }: { type: 'circle' | 'square', color: string, initialX: string, initialY: string }) {
    const [mounted, setMounted] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const springConfig = { stiffness: 50, damping: 20 };

    const dx = useSpring(useTransform(mouseX, (val: number): number => {
        if (typeof window === "undefined") return 0;
        const dist = val - (window.innerWidth * parseFloat(initialX) / 100);
        return Math.abs(dist) < 200 ? (dist > 0 ? -50 : 50) : 0;
    }), springConfig);

    const dy = useSpring(useTransform(mouseY, (val: number): number => {
        if (typeof window === "undefined") return 0;
        const dist = val - (window.innerHeight * parseFloat(initialY) / 100);
        return Math.abs(dist) < 200 ? (dist > 0 ? -50 : 50) : 0;
    }), springConfig);

    if (!mounted) return null;

    return (
        <motion.div
            style={{ left: initialX, top: initialY, x: dx, y: dy }}
            
            className={`absolute ${type === 'circle' ? 'rounded-full' : 'rounded-2xl'} ${color} opacity-30 md:opacity-40 blur-md md:blur-3xl`}
            animate={{
                scale: [1, 1.1, 1],
                rotate: type === 'square' ? [0, 90, 0] : 0
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
    );
}

export default function Contact() {
    return (
        <section id="contactus" className="relative min-h-screen w-full bg-gradient-to-t from-[#0a192f] via-[#0a192f] to-[#0f0f0f] flex items-center justify-center overflow-hidden p-4 md:p-6">
            
            
            <div className="absolute inset-0 z-0 pointer-events-none">
                
                <FloatingShape type="circle" color="bg-blue-500 w-32 h-32 md:w-64 md:h-64" initialX="10%" initialY="15%" />
                <FloatingShape type="square" color="bg-blue-900 w-24 h-24 md:w-48 md:h-48" initialX="80%" initialY="10%" />
                <FloatingShape type="circle" color="bg-cyan-400/70 w-20 h-20 md:w-40 md:h-40" initialX="75%" initialY="70%" />
                <FloatingShape type="square" color="bg-cyan-500/30 w-16 h-16 md:w-32 md:h-32" initialX="15%" initialY="75%" />
            </div>

            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                className="relative z-10 w-full max-w-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[30px] md:rounded-[40px] p-8 md:p-16 shadow-2xl"
            >
                <h2 className="font-lemon text-3xl md:text-5xl text-white text-center mb-8 md:mb-12 select-none">
                    Contact Us
                </h2>

                <form className="space-y-4 md:space-y-6">
                    <div className="flex flex-col gap-4">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            
                            className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-6 py-3 md:py-4 text-white focus:border-white/30 transition-all outline-none text-sm md:text-base"
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-6 py-3 md:py-4 text-white focus:border-white/30 transition-all outline-none text-sm md:text-base"
                        />
                        <textarea 
                            placeholder="Message" 
                            rows={4}
                            
                            className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-6 py-3 md:py-4 text-white focus:border-white/30 transition-all outline-none resize-none text-sm md:text-base"
                        />
                    </div>
                    
                    <motion.button 
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                        whileTap={{ scale: 0.98 }}
                        
                        className="w-full border border-white/20 rounded-xl py-3 md:py-4 text-white font-sans tracking-[0.2em] uppercase text-xs md:text-sm font-medium transition-colors"
                    >
                        Send
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
}