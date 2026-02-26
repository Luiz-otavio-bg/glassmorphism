"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroProps {
    isNavHovered: boolean;
    isDragHovered: boolean;
}

export default function Hero ({ isNavHovered, isDragHovered }: HeroProps) {
    
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = {damping: 25, stiffness: 150};
    const scrollX = useSpring(mouseX, springConfig)
    const scrollY = useSpring(mouseY, springConfig)
    const shouldHide = isNavHovered || isDragHovered;

    useEffect(() =>{
        setMounted(true)

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
            };
            
            checkMobile();
            window.addEventListener('resize', checkMobile);
        
        const handleMouseMove = (e: MouseEvent) => {
            
            window.requestAnimationFrame(() => {
                mouseX.set(e.clientX - 40); 
                mouseY.set(e.clientY - 40);
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])
    if (!mounted) return <section className="min-h-screen bg-[#0a192f]" />;


    return (
        <section id='home' className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a192f] via-[#0a192f] to-[#0f0f0f]">
            
            <div className="relative z-10 w-[95%] md:w-[90%] h-[70vh] md:h-[85vh] bg-white/5 backdrop-blur-md border border-white/10 rounded-[20px] shadow-2xl flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
                <div className="text-center z-20 select-none w-full">
                
                <h2 className="font-sans font-medium text-2xl sm:text-4xl md:text-6xl text-white tracking-[0.2em] mb-2 md:mb-[-10px]">
                    WELCOME
                </h2>

                <div className="relative inline-block my-4 md:my-0">
                    <span className="font-rubrica text-2xl md:text-5xl text-white md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-6 z-20">
                    to
                    </span>
                </div>

                <div className="font-sans font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl flex flex-col md:flex-row items-center justify-center leading-tight">
                    <span 
                    className="bg-gradient-to-r from-white via-white/50 to-white inline-block text-transparent bg-clip-text bg-[length:200%_auto] transition-all duration-1000 text-center" 
                    style={{ WebkitTextStroke: isMobile ? '0.5px rgba(255, 255, 255, 0.8)' : '1px rgba(255, 255, 255, 0.81)' }}
                    >
                    GLASSMORPHISM
                    </span>
                </div>
                </div>
            </div>

            <motion.div 
                style={{ x: scrollX, y: scrollY }}
                    animate={{ 
                    opacity: shouldHide ? 0 : 1,
                    scale: shouldHide ? 0.5 : 1 
                    }}
                    className="fixed top-0 left-0 w-20 h-20 rounded-full pointer-events-none z-[12] bg-white/[0.03] backdrop-blur-[5px] border border-white/20 shadow-2xl"
                />

            
            <motion.div 
                animate={{ x: [0, 0, 0], y: [0, -30, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-20 w-70 h-70 bg-darkblue rounded-full  z-[11]"
            />
            <motion.div 
                animate={{ x: [-10, -10, -10], y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-20 w-60 h-60 bg-blue-300/10 rounded-full  z-[11]"
            />


            <motion.div 
                animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-20 w-95 h-95 bg-blue-300/10 rounded-full  z-[9]"
            />
            <motion.div 
                animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-20 w-70 h-70 bg-darkblue/70 rounded-full  z-[9]"
            />


            <motion.div 
                animate={{ x: [1330, 1240, 1330], y: [0, 60, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-20 w-60 h-60 bg-blue-300/10 rounded-full  z-[9]"
            /><motion.div 
                animate={{ x: [1330, 1240, 1330], y: [0, 60, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-20 w-35 h-35 bg-darkblue rounded-full  z-[9]"
            />
        </section>
    )
}