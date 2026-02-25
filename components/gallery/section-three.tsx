"use client";

import { motion } from "framer-motion";
import React from "react";
import { TextRoll } from "@/components/ui/text-roll";
import Masonry from "@/components/ui/masonry";

const SectionThree = () => {
    const masonryItems = [
        {
            id: "1",
            img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800",
            height: 900,
        },
        {
            id: "2",
            img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800",
            height: 750,
        },
        {
            id: "3",
            img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
            height: 800,
        },
        {
            id: "4",
            img: "https://images.unsplash.com/photo-1579762792188-fc338100e9b8?q=80&w=800",
            height: 600,
        },
        {
            id: "5",
            img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800",
            height: 700,
        },
        {
            id: "6",
            img: "https://images.unsplash.com/photo-1515405299443-4dc9751e0640?q=80&w=800",
            height: 850,
        },
        {
            id: "7",
            img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800",
            height: 650,
        },
        {
            id: "8",
            img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
            height: 950,
        },
        {
            id: "9",
            img: "https://images.unsplash.com/photo-1576773689115-5cd2b568972e?q=80&w=800",
            height: 780,
        },
        {
            id: "10",
            img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?q=80&w=800",
            height: 820,
        },
    ];

    return (
        <section className="relative py-32 bg-[#f5f1e8] text-black overflow-hidden min-h-screen flex flex-col justify-center border-t border-black/5">
            {/* Wall Texture Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h2v2H1V1zm10 10h2v2h-2v-2zm10 10h2v2h-2v-2zm10 10h2v2h-2v-2zm10 10h2v2h-2v-2zm10 10h2v2h-2v-2zm10 10h2v2h-2v-2zm10 10h2v2h-2v-2zm10 10h2v2h-2v-2zm10 10h2v2h-2v-2z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
            />

            <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-6"
                    >
                        <div className="px-4 py-1 rounded-full border border-black/10 bg-black/5 backdrop-blur-md">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-black/60">Dynamic Grid</span>
                        </div>
                    </motion.div>

                    <TextRoll
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-black"
                        center
                    >
                        MODERN FLUX
                    </TextRoll>

                    <p className="max-w-xl text-black/40 font-light leading-relaxed mb-12">
                        A fluid exploration of modern aesthetics, presented in a dynamic masonry exhibition.
                    </p>
                </div>

                <div className="w-full mt-10">
                    <Masonry
                        items={masonryItems}
                        ease="power3.out"
                        duration={0.6}
                        stagger={0.05}
                        animateFrom="bottom"
                        scaleOnHover
                        hoverScale={0.97}
                        blurToFocus
                    />
                </div>
            </div>
        </section>
    );
};

export { SectionThree };
