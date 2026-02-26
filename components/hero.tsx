"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroProps {
    isNavHovered: boolean;
    isDragHovered: boolean;
}

export default function Hero ({ isNavHovered, isDragHovered }: HeroProps) {

    const [isVisible, setIsVisible] = useState(true);
    
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = {damping: 25, stiffness: 150};
    const scrollX = useSpring(mouseX, springConfig)
    const scrollY = useSpring(mouseY, springConfig)
    const shouldHide = isNavHovered || isDragHovered;

    useEffect(() =>{
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 64)
            mouseY.set(e.clientY - 64)

            if (e.clientY < 0){
                setIsVisible(false)
            }else{
                setIsVisible(true)
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])


    return (
        <section id='home' className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a192f] via-[#0a192f] to-[#0f0f0f]">
            
            <div className="relative z-10 w-[90%] h-[85vh] bg-white/5 backdrop-blur-md border border-white/10 rounded-[20px] shadow-2xl flex flex-col items-center justify-center p-8 overflow-hidden ">
                <div className="text-center z-20 select-none">
                    <h2 className="font-sans font-medium text-4xl md:text-6xl text-white tracking-[0.2em] mb-[-10px]">
                        WELCOME
                    </h2>

                    <div className="relative inline-block">
                        <span className="font-rubrica text-4xl md:text-5xl text-white absolute left-1/2 -translate-x-1/2 -top-6 z-20">
                        to
                        </span>
                    </div>

                    <div className="font-sans font-bold text-6xl md:text-8xl lg:text-9xl flex items-center">
                        <span className="bg-gradient-to-r from-white via-white/0 to-white inline-block text-transparent bg-clip-text bg-[length:200%_auto] hover:bg-right transition-all duration-2000" style={{WebkitTextStroke: '1px rgba(255, 255, 255, 0.81)'}}>GLASSMORPHISM</span>
                        {/*<span className="text-transparent border-text z-10" style={{WebkitTextStroke: '1px rgba(255, 255, 255, 0.81)'}}>SMORPHISM</span>*/}
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