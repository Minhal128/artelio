"use client";

import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";
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
    [0, 0.25],
    [distanceFromCenter * 50, 0],
  );
  const rotateX = useTransform(
    progress,
    [0, 0.25],
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
    [0, 0.25],
    [distanceFromCenter * 90, 0],
  );
  const rotate = useTransform(
    progress,
    [0, 0.25],
    [distanceFromCenter * 50, 0],
  );

  const y = useTransform(
    progress,
    [0, 0.25],
    [-Math.abs(distanceFromCenter) * 20, 0],
  );
  const scale = useTransform(progress, [0, 0.25], [0.75, 1]);

  return (
    <motion.img
      src={char}
      alt="Payment Gateway"
      className={cn("inline-block h-20 w-auto px-8 object-contain filter drop-shadow-sm", isSpace && "w-4")}
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
  const perspectiveRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: containerProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: perspectiveProgress } = useScroll({
    target: perspectiveRef,
    offset: ["start center", "end end"],
  });

  const smoothContainerProgress = useSpring(containerProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const text = "Seamless Checkout";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  const paymentIcons = [
    "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  ];
  const iconCenterIndex = Math.floor(paymentIcons.length / 2);

  // Perspective Text logic
  const yMotionValue = useTransform(perspectiveProgress, [0, 1], [400, -200]);
  const transform = useMotionTemplate`rotateX(30deg) translateY(${yMotionValue}px) translateZ(10px)`;

  return (
    <section className="w-full bg-[#fdfaf3] relative">
      {/* Logos Section */}
      <div ref={containerRef} className="flex flex-col items-center justify-center min-h-[120vh] py-[10vh] overflow-hidden">
        <div
          className="w-full max-w-6xl text-center text-6xl md:text-8xl font-serif font-medium tracking-tighter text-black sticky top-[25vh]"
          style={{ perspective: "1000px" }}
        >
          {characters.map((char, index) => (
            <CharacterV1
              key={index}
              char={char}
              index={index}
              centerIndex={centerIndex}
              progress={smoothContainerProgress}
            />
          ))}
        </div>

        <div className="w-full max-w-4xl flex flex-col items-center justify-center text-center mt-[15vh] z-10">
          <div className="flex items-center justify-center gap-4 mb-10 opacity-80">
            <Bracket className="h-8 text-[#b3633d]" />
            <span className="font-serif text-2xl font-light text-black/80 italic">
              Secure & Fast Payments
            </span>
            <Bracket className="h-8 scale-x-[-1] text-[#b3633d]" />
          </div>
          
          <div 
            className="flex items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            {paymentIcons.map((char, index) => (
              <CharacterV3
                key={index}
                char={char}
                index={index}
                centerIndex={iconCenterIndex}
                progress={smoothContainerProgress}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Perspective Text Section (Skiper28) */}
      <div
        ref={perspectiveRef}
        className="relative z-0 h-[200vh] w-full flex flex-col items-center justify-start bg-transparent text-black overflow-hidden -mt-20"
      >
        <div className="grid content-start justify-items-center gap-6 text-center text-black mb-20">
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-[#b3633d] after:to-transparent after:content-[''] after:mt-4">
            scroll for more
          </span>
        </div>
        
        <div
          className="sticky top-20 mx-auto flex items-center justify-center bg-transparent py-20"
          style={{
            transformStyle: "preserve-3d",
            perspective: "200px",
          }}
        >
          <motion.div
            style={{
              transformStyle: "preserve-3d",
              transform,
            }}
            className="w-full max-w-4xl px-6 text-center text-4xl md:text-5xl font-serif font-bold tracking-tighter text-[#b3633d] leading-none opacity-50"
          >
            Jatt seeweyan cho langheya chudail takkri jaani badi sohni bhoot
            female takkri .. kehndi jatta .. oye jatta.... kehndi jatta .. metho
            darke ho ja katha .. nai tan aah kar du ... nai tan waah kardu...
            tenu ethe khade khade nu swah kardu ... jatt kehnda hor menu ki
            chahida ... jatt kehnda hor menu ki chahida .. avein gallan-baatan
            vich bohta sama na gva aaja chimbad ja ... mein keha chimbad ja .. .
            aaja chimbad ja ... mein keha chimbad ja .. .
            
            <div className="absolute bottom-0 left-0 h-[40vh] w-full bg-gradient-to-b from-transparent to-[#fdfaf3] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
