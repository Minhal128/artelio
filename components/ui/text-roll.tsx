"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

const STAGGER = 0.035;

export const TextRoll: React.FC<{
    children: string;
    className?: string;
    center?: boolean;
}> = ({ children, className, center = false }) => {
    const letters = children.split("");

    return (
        <motion.div
            initial="initial"
            whileHover="hovered"
            className={cn("relative block overflow-hidden", className)}
            style={{
                lineHeight: 0.75,
            }}
        >
            <div className="block">
                {letters.map((l, i) => {
                    const delay = center
                        ? STAGGER * Math.abs(i - (letters.length - 1) / 2)
                        : STAGGER * i;

                    return (
                        <motion.span
                            key={i}
                            variants={{
                                initial: { y: 0 },
                                hovered: { y: "-100%" },
                            }}
                            transition={{
                                ease: "easeInOut",
                                delay,
                            }}
                            className="inline-block"
                        >
                            {l === " " ? "\u00A0" : l}
                        </motion.span>
                    );
                })}
            </div>
            <div className="absolute inset-0 block">
                {letters.map((l, i) => {
                    const delay = center
                        ? STAGGER * Math.abs(i - (letters.length - 1) / 2)
                        : STAGGER * i;

                    return (
                        <motion.span
                            key={i}
                            variants={{
                                initial: { y: "100%" },
                                hovered: { y: 0 },
                            }}
                            transition={{
                                ease: "easeInOut",
                                delay,
                            }}
                            className="inline-block"
                        >
                            {l === " " ? "\u00A0" : l}
                        </motion.span>
                    );
                })}
            </div>
        </motion.div>
    );
};
