"use client";

import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
} from "framer-motion";
import React, { useRef } from "react";

const GalleryFooter = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef as any,
        offset: ["start end", "end start"]
    });

    const yMotionValue = useTransform(scrollYProgress, [0, 0.7], [400, 0]);
    const opacityValue = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 1, 1]);
    const transformValue = useMotionTemplate`rotateX(20deg) translateY(${yMotionValue}px) translateZ(0px)`;

    return (
        <section
            ref={targetRef}
            className="relative z-0 h-screen w-full bg-black text-white overflow-hidden flex flex-col items-center justify-center pt-20"
        >
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20">
                <span className="text-[10px] uppercase tracking-[0.5em] font-medium">The Final Perspective</span>
                <div className="h-12 w-px bg-gradient-to-b from-white/20 to-transparent" />
            </div>

            <div
                className="w-full max-w-6xl mx-auto px-6"
                style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                }}
            >
                <motion.div
                    style={{
                        transformStyle: "preserve-3d",
                        transform: transformValue,
                        opacity: opacityValue
                    }}
                >
                    <div className="text-center text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-white selection:bg-purple-500/30">
                        FOR THE ONES WHO FIND BEAUTY IN THE BROKEN. THE ONES WHO SEE COLOR IN THE VOID.
                        <span className="text-purple-500"> ARTELIO</span> IS A SANCTUARY FOR THE
                        <span className="text-white/20"> ART LOVERS</span>, THE DREAMERS, AND THE
                        VISIONARY SOULS. OUR GALLERY IS A TESTAMENT TO THE INFINITE LAYERS OF
                        HUMAN EMOTION, CURATED FOR THOSE WHO TRULY SEE.

                        <div className="mt-16 flex flex-col items-center gap-4">
                            <div className="h-px w-24 bg-white/20" />
                            <span className="text-[10px] uppercase tracking-[0.8em] text-white/40">Artelio © 2026</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export { GalleryFooter };
