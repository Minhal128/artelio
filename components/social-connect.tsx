"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: any;
};

const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0],
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0],
  );

  return (
    <motion.span
      className={cn("inline-block text-[#b3633d]", isSpace && "w-4")}
      style={{
        x,
        rotateX,
      }}
    >
      {char}
    </motion.span>
  );
};

const CharacterV3 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 90, 0],
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0],
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-Math.abs(distanceFromCenter) * 20, 0],
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  return (
    <motion.img
      src={char}
      alt="Social Icon"
      className={cn("inline-block h-16 w-auto px-6 md:px-10 object-contain filter drop-shadow-md hover:scale-110 transition-transform cursor-pointer", isSpace && "w-4")}
      style={{
        x,
        rotate,
        y,
        scale,
        transformOrigin: "center",
      }}
    />
  );
};

export function SocialConnect() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
  });

  const text = "Connect Us";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  const requestedIcons = [
    "https://upload.wikimedia.org/wikipedia/commons/7/71/Discord_Color_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/07/Reddit_icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg",
    "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
  ];
  
  const iconCenterIndex = Math.floor(requestedIcons.length / 2);

  return (
    <section className="w-full bg-[#fdfaf3] py-12 md:py-20">
      <div
        ref={targetRef}
        className="relative box-border flex h-[60vh] md:h-[100vh] items-center justify-center gap-[2vw] overflow-hidden bg-[#fdfaf3] p-[2vw]"
      >
        <div
          className="w-full max-w-6xl text-center text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-serif font-medium tracking-tighter text-black px-4"
          style={{
            perspective: "1000px",
          }}
        >
          {characters.map((char, index) => (
            <CharacterV1
              key={index}
              char={char}
              index={index}
              centerIndex={centerIndex}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
      <div
        ref={targetRef2}
        className="relative -mt-[15vh] md:-mt-[30vh] box-border flex h-[60vh] md:h-[100vh] flex-col items-center justify-center gap-[4vw] overflow-hidden bg-[#fdfaf3] p-[2vw]"
      >
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8 px-4">
          <Bracket className="h-6 md:h-10 text-[#b3633d]" />
          <span className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-black/80 italic">
            Join Our Community
          </span>
          <Bracket className="h-6 md:h-10 scale-x-[-1] text-[#b3633d]" />
        </div>
        <div
          className="w-full max-w-5xl flex flex-wrap items-center justify-center text-center px-4"
          style={{
            perspective: "1000px",
          }}
        >
          {requestedIcons.map((char, index) => (
            <CharacterV3
              key={index}
              char={char}
              index={index}
              centerIndex={iconCenterIndex}
              scrollYProgress={scrollYProgress2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const Bracket = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 78"
      className={className}
    >
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      ></path>
    </svg>
  );
};
