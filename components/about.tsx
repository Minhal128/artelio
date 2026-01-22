"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Minus, Quote } from "lucide-react"
import { useRef } from "react"
import Image from "next/image"

export function About() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5])

  return (
    <section 
      ref={containerRef}
      className="relative py-40 px-6 bg-[#f4f1ea] text-[#1a1a1a] overflow-hidden"
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Visual Composition - Breaking the Grid */}
          <div className="lg:col-span-6 relative h-[600px] md:h-[800px]">
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-0 left-0 w-3/4 aspect-[3/4] rounded-2xl overflow-hidden shadow-[30px_30px_60px_rgba(0,0,0,0.1)] z-20"
            >
              <Image 
                src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=2044&auto=format&fit=crop" 
                alt="Classical Gallery" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-xs uppercase tracking-[0.3em] opacity-80 mb-2">Collection I</p>
                <h4 className="font-serif text-2xl italic">The Renaissance Echo</h4>
              </div>
            </motion.div>

            <motion.div 
              style={{ y: y2, rotate: -3 }}
              className="absolute bottom-0 right-0 w-3/5 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl z-10 border-[12px] border-white"
            >
              <Image 
                src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1974&auto=format&fit=crop" 
                alt="Modern Sculpture" 
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Vertical Text Decoration */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden xl:block">
              <p className="text-[10px] uppercase tracking-[1em] text-black/20 rotate-90 origin-left whitespace-nowrap">
                ESTABLISHED MDCCXLII — CURATING EXCELLENCE
              </p>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <Minus className="w-12 h-[1px] text-primary" />
                <span className="text-xs font-bold tracking-[0.4em] uppercase text-primary">The Manifesto</span>
              </div>

              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-12 leading-[0.95] tracking-tighter">
                Art is the <br />
                <span className="italic font-medium text-primary">Silent Speech</span> <br />
                of the Soul.
              </h2>

              <div className="relative mb-12">
                <Quote className="absolute -top-6 -left-8 w-16 h-16 text-primary/10 -z-10" />
                <p className="text-xl md:text-2xl text-black/70 leading-relaxed font-light italic">
                  "We don't just sell art; we facilitate conversations between eras. Our gallery is a threshold where history 
                  inhales and modernism exhales."
                </p>
              </div>

              <div className="space-y-10 mb-16">
                <div className="flex gap-8 group cursor-pointer">
                  <div className="w-px h-16 bg-black/10 origin-top group-hover:scale-y-150 transition-transform duration-500" />
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Curatorial Rigor</h3>
                    <p className="text-black/50 max-w-md leading-relaxed">
                      Every piece is vetted by a committee of historians and avant-garde practitioners to ensure 
                      unrivaled cultural depth.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 group cursor-pointer">
                  <div className="w-px h-16 bg-black/10 origin-top group-hover:scale-y-150 transition-transform duration-500" />
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Global Provenance</h3>
                    <p className="text-black/50 max-w-md leading-relaxed">
                      Sourcing from clandestine workshops and high-profile estates across six continents.
                    </p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ x: 10 }}
                className="group flex items-center gap-6 text-sm font-bold uppercase tracking-[0.3em] border-b border-black/10 pb-4"
              >
                Enter the Archive
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Background Decorative Blob */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px] -z-10" 
      />
    </section>
  )
}
