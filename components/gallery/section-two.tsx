"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import { TextRoll } from "@/components/ui/text-roll";

const images = [
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515405290399-6d6006f14068?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501472312651-726afe119ff1?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554188248-986adbb73be4?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop",
];

const SectionTwo = () => {
    const gallery = useRef<HTMLDivElement>(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ["start end", "end start"],
    });

    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

    useEffect(() => {
        const lenis = new Lenis();

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", resize);
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div className="w-full bg-[#f5f4f3] text-black">
            <div className="flex h-[30vh] items-center justify-center">
                <div className="flex flex-col items-center text-center">
                    <TextRoll className="font-serif text-5xl md:text-7xl mb-8" center>The Oil Legacy</TextRoll>
                    <span className="relative max-w-[12ch] text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-black/10 after:to-black after:content-['']">
                        scroll to explore
                    </span>
                </div>
            </div>

            <div
                ref={gallery}
                className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden bg-[#f5f4f3] p-[2vw]"
            >
                <Column images={[images[0], images[1], images[2]]} y={y} />
                <Column images={[images[3], images[4], images[5]]} y={y2} />
                <Column images={[images[6], images[7], images[8]]} y={y3} />
                <Column images={[images[9], images[10], images[11]]} y={y4} />
            </div>

            <div className="flex h-[30vh] items-center justify-center">
                <div className="flex flex-col items-center text-center">
                    <span className="relative max-w-[12ch] text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 after:absolute after:left-1/2 after:bottom-full after:h-16 after:w-px after:bg-gradient-to-t after:from-black/10 after:to-black after:content-['']">
                        End of Exhibition
                    </span>
                </div>
            </div>
        </div>
    );
};

type ColumnProps = {
    images: string[];
    y: MotionValue<number>;
};

const Column = ({ images, y }: ColumnProps) => {
    return (
        <motion.div
            className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
            style={{ y }}
        >
            {images.map((src, i) => (
                <div key={i} className="relative h-full w-full overflow-hidden rounded-xl shadow-2xl">
                    <img
                        src={`${src}`}
                        alt="art piece"
                        className="pointer-events-none object-cover size-full"
                    />
                </div>
            ))}
        </motion.div>
    );
};

export { SectionTwo };
