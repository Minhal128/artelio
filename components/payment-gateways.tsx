"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  progress: any;
};

const CharacterV1 = ({
  char,
  index,
  centerIndex,
  progress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

    const x = useTransform(
      progress,
      [0, 0.4],
      [distanceFromCenter * 50, 0],
    );
    const rotateX = useTransform(
      progress,
      [0, 0.4],
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
  progress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

    const x = useTransform(
      progress,
      [0.1, 0.45],
      [distanceFromCenter * (window.innerWidth < 768 ? 60 : 120), 0],
    );
    const rotate = useTransform(
      progress,
      [0.1, 0.45],
      [distanceFromCenter * (window.innerWidth < 768 ? 30 : 60), 0],
    );
  
    const y = useTransform(
      progress,
      [0.1, 0.45],
      [-Math.abs(distanceFromCenter) * (window.innerWidth < 768 ? 15 : 30), 0],
    );
    const scale = useTransform(progress, [0.1, 0.45], [0.6, 1]);
    const opacity = useTransform(progress, [0.1, 0.2, 0.45], [0, 1, 1]);

  return (
    <motion.img
      src={char}
      alt="Payment Gateway"
      className={cn("inline-block h-12 sm:h-16 md:h-20 lg:h-24 w-auto px-4 sm:px-6 md:px-8 lg:px-10 object-contain filter drop-shadow-xl", isSpace && "w-4")}
      style={{
        x,
        rotate,
        y,
        scale,
        opacity,
        transformOrigin: "center",
      }}
    />
  );
};

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

export function PaymentGateways() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  const text = "Seamless Checkout";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  const paymentIcons = [
    "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  ];
  const iconCenterIndex = (paymentIcons.length - 1) / 2;

  return (
    <section className="w-full bg-[#fdfaf3] relative">
      <div ref={containerRef} className="flex flex-col items-center justify-center min-h-[70vh] md:min-h-[105vh] py-[5vh] overflow-hidden">
        <div
          className="w-full max-w-6xl text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-serif font-medium tracking-tighter text-black sticky top-[20vh] md:top-[35vh] px-4"
          style={{ perspective: "1200px" }}
        >
          {characters.map((char, index) => (
            <CharacterV1
              key={index}
              char={char}
              index={index}
              centerIndex={centerIndex}
              progress={smoothProgress}
            />
          ))}
        </div>

        <div className="w-full max-w-4xl flex flex-col items-center justify-center text-center mt-[10vh] md:mt-[20vh] z-10 px-4">
          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0.05, 0.25], [0, 0.8]),
              y: useTransform(smoothProgress, [0.05, 0.25], [20, 0])
            }}
            className="flex items-center justify-center gap-2 md:gap-4 mb-8 md:mb-12"
          >
            <Bracket className="h-6 md:h-10 text-[#b3633d]" />
            <span className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-black/90 italic">
              Secure & Fast Payments
            </span>
            <Bracket className="h-6 md:h-10 scale-x-[-1] text-[#b3633d]" />
          </motion.div>
          
          <div 
            className="flex items-center justify-center gap-6 md:gap-12"
            style={{ perspective: "1200px" }}
          >
            {paymentIcons.map((icon, index) => (
              <CharacterV3
                key={index}
                char={icon}
                index={index}
                centerIndex={iconCenterIndex}
                progress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
