'use client';

import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AboutProps {
  onDragHover: (isHovering: boolean) => void;
}

export default function About ({ onDragHover }: AboutProps) {
    const [mounted, setMounted] = useState(false);
    const constraintsRef = useRef(null)
    const controls = useAnimation()
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
        useEffect(() => {
        setMounted(true);
        return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const handleDragEnd = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      controls.start({
        x: 0,
        y: 0,
        transition: { 
          type: "spring", 
          stiffness: 100, 
          damping: 20 
            }
        });
        }, 5000);
    };
    if (!mounted) return <section className="min-h-screen bg-[#0f0f0f]" />;
    return(
        <section id='about' 
        className="relative min-h-screen w-full bg-[#0f0f0f] flex flex-col p-12 lg:p-24 overflow-hidden"
        ref={constraintsRef}
        > 
        
        <div className="z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"></div>
            
            <div className="max-w-3xl z-13 mb-20 md:mb-20">
                <h2 className="font-sans text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200/45 to-white bg-[length:200%_auto] hover:bg-right transition-all duration-2000 mb-6 tracking-tight">
                Transparency Redefined.
                </h2>
                <p className="font-sans text-lg text-white/60 leading-relaxed font-light">
                Move beyond flat design. Glassmorphism brings tactile realism to digital interfaces through soft shadows, 
                frosted textures, and vibrant light. It’s not just about looking good—it’s about creating a spatial 
                experience where every layer feels intentional and connected.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row flex-1 items-center justify-between gap-12 lg:gap-10 z-[15]">
                <div className="relative lg:w-1/2 w-full md:h-[400px] h-[400px] border border-white/5 rounded-3xl bg-white/[0.01]">
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
                        className="absolute z-[60] w-64 h-40 bg-white/[0.05] backdrop-blur-sm border border-white/20 rounded-2xl cursor-grab shadow-2xl flex items-center justify-center select-none"
                    >
                        <span className="font-sans text-xs text-white/30 uppercase tracking-widest">Drag Me</span>
                    </motion.div>
                    <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full  opacity-50" />
                    <div className="absolute bottom-10 right-20 w-32 h-10 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full rotate-45" />
                    <div className="absolute bottom-30 right-110 w-32 h-32 bg-blue-900/50 rotate-125" />

                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center lg:pr-20 mb-10 pointer-events-none">
                    <div className="flex flex-col gap-2">
                            <h1 className="font-lemon text-[120px] leading-none text-white/10 select-none" style={{ animation: 'pulse 5s infinite' }}>
                            BG
                            </h1>
                            <h1 className="font-lemon text-[150px] leading-none text-white/30 select-none">
                            BG
                            </h1>
                            <h1 className="font-lemon text-[180px] leading-none text-white select-none" style={{ animation: 'pulse 10s infinite' }}>
                            BG
                            </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}