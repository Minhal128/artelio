"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { TextRoll } from "@/components/ui/text-roll";

const SectionOne = () => {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1614728263952-84ea206f25b1?q=80&w=800&auto=format&fit=crop",
            alt: "Digital Artwork 1",
            code: "# 01",
        },
        {
            src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
            alt: "Digital Artwork 2",
            code: "# 02",
        },
        {
            src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
            alt: "Digital Artwork 3",
            code: "# 03",
        },
        {
            src: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop",
            alt: "Digital Artwork 4",
            code: "# 04",
        },
        {
            src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
            alt: "Digital Artwork 5",
            code: "# 05",
        },
        {
            src: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=800&auto=format&fit=crop",
            alt: "Digital Artwork 6",
            code: "# 06",
        },
        {
            src: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=800&auto=format&fit=crop",
            alt: "Digital Artwork 7",
            code: "# 07",
        },
        {
            src: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=800&auto=format&fit=crop",
            alt: "Digital Artwork 8",
            code: "# 08",
        },
        {
            src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
            alt: "Digital Artwork 9",
            code: "# 09",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center py-20 bg-[#f5f4f3]">
            <div className="mb-12 text-center flex flex-col items-center">
                <TextRoll className="font-serif text-3xl md:text-5xl mb-4 italic" center>Digital Dreamscapes</TextRoll>
                <p className="text-black/50 font-light">Visionary digital illustrations and character concepts.</p>
            </div>
            <HoverExpand_001 images={images} />
        </div>
    );
};

const HoverExpand_001 = ({
    images,
    className,
}: {
    images: { src: string; alt: string; code: string }[];
    className?: string;
}) => {
    const [activeImage, setActiveImage] = useState<number | null>(1);

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
                duration: 0.3,
                delay: 0.5,
            }}
            className={cn("relative w-full max-w-6xl px-5", className)}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full"
            >
                <div className="flex w-full items-center justify-center gap-1">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className="relative cursor-pointer overflow-hidden rounded-3xl"
                            initial={{ width: "2.5rem", height: "20rem" }}
                            animate={{
                                width: activeImage === index ? "24rem" : "5rem",
                                height: activeImage === index ? "24rem" : "24rem",
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            onClick={() => setActiveImage(index)}
                            onHoverStart={() => setActiveImage(index)}
                        >
                            <AnimatePresence>
                                {activeImage === index && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute h-full w-full bg-gradient-to-t from-black/40 to-transparent"
                                    />
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {activeImage === index && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute flex h-full w-full flex-col items-end justify-end p-4"
                                    >
                                        <p className="text-left text-xs text-white/50">
                                            {image.code}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <img
                                src={image.src}
                                className="size-full object-cover"
                                alt={image.alt}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export { SectionOne };
