"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { LaserFlow } from '@/components/ui/laser-flow';
import { TextRoll } from '@/components/ui/text-roll';

export const SectionFour = () => {
    const revealImgRef = useRef<HTMLImageElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
            el.style.setProperty('--mx', `${x}px`);
            el.style.setProperty('--my', `${y + rect.height * 0.5}px`); // Adjusted for centering
        }
    };

    const handleMouseLeave = () => {
        const el = revealImgRef.current;
        if (el) {
            el.style.setProperty('--mx', '-9999px');
            el.style.setProperty('--my', '-9999px');
        }
    };

    return (
        <section className="relative py-32 bg-[#060010] text-white overflow-hidden min-h-screen flex flex-col justify-center border-t border-purple-500/20">
            <div className="max-w-[1400px] mx-auto px-6 w-full relative z-20">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-6"
                    >
                        <div className="px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-purple-400">Digital Assets</span>
                        </div>
                    </motion.div>

                    <TextRoll
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-purple-400/50 bg-clip-text text-transparent"
                        center
                    >
                        EYE OF THE ETHER
                    </TextRoll>

                    <p className="max-w-xl text-white/40 font-light leading-relaxed mb-12">
                        Interacting with the digital void. Hover to reveal the hidden essence of rare artifacts through the laser flow of the ether.
                    </p>
                </div>

                <div
                    className="relative w-full max-w-5xl mx-auto h-[700px] rounded-3xl overflow-hidden cursor-crosshair border border-purple-500/20 group bg-[#060010]/50"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <LaserFlow
                        horizontalBeamOffset={0.1}
                        verticalBeamOffset={0.0}
                        color="#CF9EFF"
                        horizontalSizing={0.5}
                        verticalSizing={2}
                        wispDensity={1}
                        wispSpeed={15}
                        wispIntensity={5}
                        flowSpeed={0.35}
                        flowStrength={0.25}
                        fogIntensity={0.45}
                        fogScale={0.3}
                        fogFallSpeed={0.6}
                        decay={1.1}
                        falloffStart={1.2}
                    />

                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#060010] via-transparent to-[#060010]/20" />

                    {/* Reveal Content */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[86%] h-[60%] bg-[#060010]/40 rounded-[40px] border border-purple-500/30 flex items-center justify-center backdrop-blur-sm z-[15] overflow-hidden">
                        <div className="p-8 text-center">
                            <h4 className="text-xl font-medium tracking-widest text-purple-300 mb-2 uppercase text-shadow-glow">Metamask Artifact #77-EX</h4>
                            <div className="h-px w-24 bg-purple-500/30 mx-auto my-4" />
                            <p className="text-sm text-white/30 font-light max-w-xs">
                                A rare digital construct authenticated via the Ethereum network. Experience the holographic reveal.
                            </p>
                        </div>
                    </div>

                    <img
                        ref={revealImgRef}
                        src="/images/nft-reveal.png"
                        alt="NFT Reveal"
                        className="absolute inset-0 w-full h-full object-cover z-20 mix-blend-lighten opacity-80 pointer-events-none transition-opacity duration-500"
                        style={{
                            '--mx': '-9999px',
                            '--my': '-9999px',
                            WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 100px, rgba(255,255,255,0.4) 200px, rgba(255,255,255,0) 350px)',
                            maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 100px, rgba(255,255,255,0.4) 200px, rgba(255,255,255,0) 350px)',
                            WebkitMaskRepeat: 'no-repeat',
                            maskRepeat: 'no-repeat'
                        } as any}
                    />

                    {/* Subtle Ambient Glow */}
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
                </div>
            </div>
        </section>
    );
};
