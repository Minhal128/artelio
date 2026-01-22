"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";

export function PaymentGateways() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const yMotionValue = useTransform(scrollYProgress, [0, 1], [487, 0]);
  const transform = useMotionTemplate`rotateX(30deg) translateY(${yMotionValue}px) translateZ(10px)`;

  return (
    <section
      ref={targetRef}
      className="relative z-0 h-[300vh] w-full bg-[#fdfaf3] text-black overflow-hidden"
    >
      <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black z-10">
        <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-[#b3633d] after:to-transparent after:content-[''] after:mt-4">
          scroll down to see
        </span>
      </div>
      
      <div
        className="sticky top-0 mx-auto flex h-screen items-center justify-center bg-transparent py-20"
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
          className="w-full max-w-4xl px-6 text-center text-5xl md:text-6xl font-serif font-bold tracking-tighter text-[#b3633d] leading-none"
        >
          Jatt seeweyan cho langheya chudail takkri jaani badi sohni bhoot
          female takkri .. kehndi jatta .. oye jatta.... kehndi jatta .. metho
          darke ho ja katha .. nai tan aah kar du ... nai tan waah kardu...
          tenu ethe khade khade nu swah kardu ... jatt kehnda hor menu ki
          chahida ... jatt kehnda hor menu ki chahida .. avein gallan-baatan
          vich bohta sama na gva aaja chimbad ja ... mein keha chimbad ja .. .
          aaja chimbad ja ... mein keha chimbad ja .. .
          
          <div className="absolute bottom-0 left-0 h-[60vh] w-full bg-gradient-to-b from-transparent to-[#fdfaf3] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
