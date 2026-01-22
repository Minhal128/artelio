"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2000&auto=format&fit=crop",
    alt: "Abstract vibrant painting",
    title: "Chromatic Reverie",
    category: "Abstract",
    size: "large",
  },
  {
    src: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2000&auto=format&fit=crop",
    alt: "Sculptural modern art",
    title: "Silent Monolith",
    category: "Sculpture",
    size: "medium",
  },
  {
    src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2000&auto=format&fit=crop",
    alt: "Classical portrait with modern twist",
    title: "Eternal Gaze",
    category: "Portrait",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2000&auto=format&fit=crop",
    alt: "Surreal landscape",
    title: "Midnight Oasis",
    category: "Surrealism",
    size: "medium",
  },
  {
    src: "https://images.unsplash.com/photo-1576733220427-024833a6955a?q=80&w=2000&auto=format&fit=crop",
    alt: "Minimalist geometric art",
    title: "Parallel Dimensions",
    category: "Minimalism",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1547891301-158ec3931efa?q=80&w=2000&auto=format&fit=crop",
    alt: "Impressionist brushstrokes",
    title: "Fading Echoes",
    category: "Impressionism",
    size: "large",
  },
]

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-primary/30" />
            <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-primary/60">Curated Exhibition</span>
            <div className="h-[1px] w-8 bg-primary/30" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl tracking-tight mb-6"
          >
            The <span className="italic">Velvet</span> Archive
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-black/50 font-light leading-relaxed"
          >
            A meticulous selection of visionary works that challenge perception and celebrate the profound beauty of human expression.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative break-inside-avoid group cursor-none"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-xl bg-neutral-200 aspect-[4/5] sm:aspect-auto">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {image.category}
                  </span>
                  <h3 className="text-white font-serif text-3xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
