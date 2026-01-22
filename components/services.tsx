"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, Layers, Fingerprint, Compass } from "lucide-react"
import Image from "next/image"

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      id: "01",
      title: "Art Consultation",
      tagline: "Building Legacies",
      content: "Strategic guidance for building and preserving private or institutional art collections with historical depth.",
      image: "https://images.unsplash.com/photo-1576733220427-024833a6955a?q=80&w=2000&auto=format&fit=crop",
      icon: Compass,
      size: "col-span-12 md:col-span-7",
    },
    {
      id: "02",
      title: "Curation",
      tagline: "Defining Spaces",
      content: "Expert curatorial vision for museum-grade exhibitions and elite commercial environments.",
      image: "https://images.unsplash.com/photo-1493306411718-03e3f7ad04f2?q=80&w=2000&auto=format&fit=crop",
      icon: Layers,
      size: "col-span-12 md:col-span-5",
    },
    {
      id: "03",
      title: "Representation",
      tagline: "Global Reach",
      content: "Nurturing the careers of visionary artists through global representation and strategic exposure.",
      image: "https://images.unsplash.com/photo-1547891301-158ec3931efa?q=80&w=2000&auto=format&fit=crop",
      icon: Sparkles,
      size: "col-span-12 md:col-span-5",
    },
    {
      id: "04",
      title: "Commissions",
      tagline: "Unique Vision",
      content: "Facilitating bespoke artistic creations that translate personal narratives into physical form.",
      image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=2000&auto=format&fit=crop",
      icon: Fingerprint,
      size: "col-span-12 md:col-span-7",
    },
  ]

  return (
    <section className="py-24 px-6 bg-white text-black overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Specialized Services</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-6xl leading-[1] tracking-tighter"
            >
              Mastery in every <br />
              <span className="italic text-primary">Curatorial</span> Detail
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-black/50 text-lg max-w-sm font-light leading-relaxed mb-2"
          >
            We provide a comprehensive ecosystem for the acquisition and celebration of fine art.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-12 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${service.size} relative group cursor-pointer`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-100 shadow-lg transition-all duration-700 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]">
                {/* Image Background */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-60" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="font-serif text-4xl text-white/20 group-hover:text-primary transition-colors duration-500">
                      {service.id}
                    </span>
                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div>
                    <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-1 block translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                      {service.tagline}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm max-w-sm line-clamp-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-150">
                      {service.content}
                    </p>
                  </div>
                </div>

                {/* Reveal Arrow */}
                <div className="absolute bottom-8 right-8 z-20 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 delay-200">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Accent */}
        <div className="mt-20 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-serif text-xl italic text-black/40 text-center md:text-left">
            "Every exhibition is a chapter in the history of vision."
          </p>
          <div className="flex gap-10">
            <div className="text-center">
              <div className="text-3xl font-serif">500+</div>
              <div className="text-[9px] uppercase tracking-widest text-black/40 mt-1">Artists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif">25</div>
              <div className="text-[9px] uppercase tracking-widest text-black/40 mt-1">Locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
