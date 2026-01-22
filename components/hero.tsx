"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { CircularGallery } from "./CircularGallery"
import ScrambledText from "./ScrambledText"

export function Hero() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop",
      alt: "Classical masterpiece",
      className: "h-[320px] md:h-[450px]",
    },
    {
      src: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop",
      alt: "Abstract canvas",
      className: "h-[220px] md:h-[280px] mt-auto",
    },
    {
      src: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2079&auto=format&fit=crop",
      alt: "Modern expressionism",
      className: "h-[220px] md:h-[280px] mt-auto",
    },
    {
      src: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=2072&auto=format&fit=crop",
      alt: "Renaissance sculpture",
      className: "h-[320px] md:h-[450px]",
    },
  ]

    const galleryItems = [
      { image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=800&auto=format&fit=crop", text: "Oil Painting" },
      { image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop", text: "Abstract Art" },
      { image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop", text: "Exhibition" },
      { image: "https://images.unsplash.com/photo-1573167101552-393ed8525b68?q=80&w=800&auto=format&fit=crop", text: "Contemporary" },
      { image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=800&auto=format&fit=crop", text: "Renaissance" },
      { image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop", text: "Classical" },
    ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const splashVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.12,
      scale: 1,
      transition: { duration: 2.5, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="relative flex flex-col items-center text-center pt-16 pb-16 px-4 max-w-[1400px] mx-auto overflow-hidden">
      {/* Dynamic Background Accents */}
      <motion.div
        variants={splashVariants}
        initial="hidden"
        animate="visible"
        className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        variants={splashVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-primary/40 rounded-full blur-[150px] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center w-full"
      >
        {/* Modern Label */}
        <motion.div 
          variants={itemVariants}
          className="mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">Premium Art Curation</span>
        </motion.div>

            <motion.h1 
              variants={itemVariants} 
              className="mb-6 font-serif text-4xl md:text-6xl lg:text-8xl font-medium tracking-tighter leading-tight max-w-5xl text-foreground"
            >
              Defining the Future of Fine Art with{" "}
              <ScrambledText
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:*#$@"
                className="text-primary"
              >
                Artelio
              </ScrambledText>
            </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-black text-base md:text-lg max-w-3xl mb-4 leading-relaxed font-light"
          >
          Where timeless masterpieces meet contemporary vision. Discover high-end art collections curated for the modern connoisseur.
        </motion.p>

        {/* Circular Gallery Integration */}
        <motion.div 
          variants={itemVariants}
          className="w-full h-[600px] relative mb-16"
        >
            <CircularGallery 
              items={galleryItems}
              bend={3} 
              textColor="#ffffff" 
              borderRadius={0.05} 
              scrollEase={0.02}
              scrollSpeed={1}
            />
        </motion.div>
        
        <LogoMarquee />
      </motion.div>
    </section>
  )
}

export function LogoMarquee() {
  const items = [
    { name: "sothebys" },
    { name: "christies" },
    { name: "moma" },
    { name: "tate" },
    { name: "gagosian" },
    { name: "artsy" },
    { name: "github" },
    { name: "artnet" },
  ]

  return (
    <div className="w-full relative py-8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-48 bg-black -rotate-[3deg] z-0 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-y border-white/10" />
      
      <div className="relative z-10 overflow-hidden py-12 select-none">
          <div className="flex items-center gap-32 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
            {[...items, ...items, ...items].map((item, index) => (
              <div key={index} className="flex items-center gap-8 group">
                <span className="text-white/30 font-sans font-bold text-4xl tracking-tighter group-hover:text-white transition-all duration-500 uppercase">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}
