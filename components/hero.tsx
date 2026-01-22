"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1493335773346-34a16ed422c3?q=80&w=2070&auto=format&fit=crop",
      alt: "Art gallery exhibition",
      className: "h-[300px] md:h-[400px]",
    },
    {
      src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1890&auto=format&fit=crop",
      alt: "Vibrant abstract painting",
      className: "h-[200px] md:h-[250px] mt-auto",
    },
    {
      src: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1887&auto=format&fit=crop",
      alt: "Classic sculpture in museum",
      className: "h-[200px] md:h-[250px] mt-auto",
    },
    {
      src: "https://images.unsplash.com/photo-1571115764593-5334d93088b0?q=80&w=2070&auto=format&fit=crop",
      alt: "Contemporary art piece",
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
    { name: "application", logo: "/logos/application.svg" },
    { name: "business", logo: "/logos/business.svg" },
    { name: "company", logo: "/logos/company.svg" },
    { name: "startup", logo: "/logos/startup.svg" },
    { name: "venture", logo: "/logos/venture.svg" },
    { name: "agency", logo: "/logos/agency.svg" },
  ]

  return (
    <div className="overflow-hidden w-full select-none">
      <div className="relative overflow-hidden bg-[#1A1410] py-12 -rotate-2 mt-16 mb-16 min-w-[150vw] -mx-[25vw] left-0 border-y border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-24 animate-marquee whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer">
          {[...items, ...items, ...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-4 group transition-all duration-300">
              <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                <img 
                  src={item.logo || "/placeholder.svg"} 
                  alt={item.name} 
                  className="h-8 w-auto brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity" 
                />
              </div>
              <span className="text-white/60 font-serif italic text-2xl uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
