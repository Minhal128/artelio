"use client";

import { Navbar } from "@/components/navbar"
import { SectionOne } from "@/components/gallery/section-one"
import { SectionTwo } from "@/components/gallery/section-two"
import { SectionThree } from "@/components/gallery/section-three"
import { SectionFour } from "@/components/gallery/section-four"
import { GalleryFooter } from "@/components/gallery/gallery-footer"
import { TextRoll } from "@/components/ui/text-roll";
import ScrollVelocity from "@/components/ui/scroll-velocity";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-background font-sans selection:bg-primary/20">
            <Navbar />

            {/* Page Header */}
            <div className="pt-32 pb-16 bg-[#f5f1e8] flex flex-col items-center justify-center border-b border-black/5">
                <TextRoll className="font-serif text-6xl md:text-8xl tracking-tighter mb-4" center>
                    The Artelio Gallery
                </TextRoll>
                <p className="text-black/40 uppercase tracking-[0.4em] text-[10px] font-bold">Curated Excellence Across Dimensions</p>
            </div>

            {/* Section 1: Digital Arts */}
            <div id="digital-arts" className="w-full">
                <SectionOne />
            </div>

            {/* Spacer/Divider */}
            <div className="h-24 bg-gradient-to-b from-[#f5f4f3] to-white" />

            {/* Section 2: Traditional Art */}
            <div id="traditional-art" className="w-full">
                <SectionTwo />
            </div>

            {/* Scroll Velocity Teaser */}
            <div className="py-40 bg-white border-y border-black/5 overflow-hidden">
                <ScrollVelocity
                    texts={['Artelio', 'The Art Hub']}
                    velocity={100}
                    className="text-black font-black uppercase"
                    scrollerClassName="text-8xl md:text-[14rem] md:leading-[14rem]"
                />
            </div>

            {/* Section 3: 3D/Modern Abstract */}
            <div id="modern-flux" className="w-full">
                <SectionThree />
            </div>

            {/* Section 4: NFT/Digital Reveal */}
            <div id="nft-assets" className="w-full">
                <SectionFour />
            </div>

            <GalleryFooter />
        </main>
    )
}
