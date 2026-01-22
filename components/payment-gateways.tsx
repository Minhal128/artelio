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

export function PaymentGateways() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
  });

  const text = "Seamless Checkout";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  const paymentIcons = [
    "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  ];
  const iconCenterIndex = Math.floor(paymentIcons.length / 2);

  return (
    <section className="w-full bg-[#fdfaf3]">
      <div
        ref={targetRef}
        className="relative box-border flex h-[100vh] items-center justify-center gap-[2vw] overflow-hidden bg-[#fdfaf3] p-[2vw]"
      >
        <div
          className="w-full max-w-6xl text-center text-6xl md:text-8xl font-serif font-medium tracking-tighter text-black"
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
        className="relative -mt-[40vh] box-border flex h-[100vh] flex-col items-center justify-center gap-[4vw] overflow-hidden bg-[#fdfaf3] p-[2vw]"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <Bracket className="h-10 text-[#b3633d]" />
          <span className="font-serif text-3xl font-light text-black/80 italic">
            Secure & Fast Payments
          </span>
          <Bracket className="h-10 scale-x-[-1] text-[#b3633d]" />
        </div>
        <div
          className="w-full max-w-4xl flex items-center justify-center text-center"
          style={{
            perspective: "1000px",
          }}
        >
          {paymentIcons.map((char, index) => (
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
