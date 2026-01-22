"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1972&auto=format&fit=crop",
      alt: "Masterpiece oil painting",
      className: "h-[300px] md:h-[400px]",
    },
    {
      src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
      alt: "Creative abstract art",
      className: "h-[200px] md:h-[250px] mt-auto",
    },
    {
      src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1938&auto=format&fit=crop",
      alt: "Modern art gallery",
      className: "h-[200px] md:h-[250px] mt-auto",
    },
    {
      src: "https://images.unsplash.com/photo-1554188248-986adbb73be4?q=80&w=2070&auto=format&fit=crop",
      alt: "Classical sculpture",
      className: "h-[300px] md:h-[400px]",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const splashVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 0.15,
      scale: 1,
      rotate: 0,
      transition: { duration: 2, ease: "easeOut" },
    },
  }

  return (
    <section className="relative flex flex-col items-center text-center pt-20 pb-12 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Abstract Splashes */}
      <motion.div
        variants={splashVariants}
        initial="hidden"
        animate="visible"
        className="absolute -top-10 -left-10 w-96 h-96 bg-primary rounded-full blur-[110px] pointer-events-none opacity-20"
      />
      <motion.div
        variants={splashVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4, duration: 2.2 }}
        className="absolute top-1/4 -right-10 w-[400px] h-[400px] bg-primary/50 rounded-full blur-[130px] pointer-events-none opacity-25"
      />
      <motion.div
        variants={splashVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8, duration: 2.8 }}
        className="absolute bottom-10 left-1/4 w-80 h-80 bg-primary/30 rounded-full blur-[90px] pointer-events-none opacity-20"
      />

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center w-full"
      >
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-4 max-w-4xl"
        >
          Discover{" "}
          <span className="relative inline-block italic">
            Art
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              className="absolute -top-4 -left-6 w-[130%] h-[130%] pointer-events-none"
              viewBox="0 0 100 40"
            >
              <ellipse
                cx="50"
                cy="20"
                rx="48"
                ry="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.7"
                className="text-primary"
              />
            </motion.svg>
          </span>{" "}
          That <br />
          <span className="text-primary">Speaks</span> to You
        </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mb-8 leading-relaxed font-light"
          >
            Explore a curated collection of contemporary and classic art pieces that inspire, provoke, and captivate.
          </motion.p>

          {/* Integrated Image Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full px-4"
          >
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-[2rem] shadow-lg transition-transform hover:scale-[1.02] duration-300 ${img.className}`}
            >
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </motion.div>
        
        <LogoMarquee />
      </motion.div>
    </section>
  )
}

export function LogoMarquee() {
  const items = [
    { name: "Sotheby's", logo: "https://logo.clearbit.com/sothebys.com" },
    { name: "Christie's", logo: "https://logo.clearbit.com/christies.com" },
    { name: "MoMA", logo: "https://logo.clearbit.com/moma.org" },
    { name: "Tate", logo: "https://logo.clearbit.com/tate.org.uk" },
    { name: "GitHub", logo: "https://logo.clearbit.com/github.com" },
    { name: "Artsy", logo: "https://logo.clearbit.com/artsy.net" },
    { name: "Gagosian", logo: "https://logo.clearbit.com/gagosian.com" },
    { name: "Artnet", logo: "https://logo.clearbit.com/artnet.com" },
  ]

  return (
    <div className="overflow-hidden w-full select-none">
      <div className="relative overflow-hidden bg-[#0D0B0A] py-12 -rotate-2 mt-16 mb-16 min-w-[150vw] -mx-[25vw] left-0 border-y border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
        <div className="flex items-center gap-24 animate-marquee whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer">
          {[...items, ...items, ...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-6 group transition-all duration-500">
              <div className="relative w-10 h-10 flex items-center justify-center bg-white/5 rounded-full p-2 group-hover:bg-white/10 transition-colors border border-white/10 overflow-hidden">
                <img 
                  src={item.logo || "/placeholder.svg"} 
                  alt={item.name} 
                  className="h-6 w-auto brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" 
                />
              </div>
              <span className="text-white/40 font-serif italic text-3xl tracking-widest group-hover:text-white transition-all duration-500">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
