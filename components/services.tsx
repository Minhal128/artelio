"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const services = [
    {
      title: "Art Consultation",
      content: "Personalized guidance for building and managing your private or corporate art collection.",
      image: "/high-end-art-gallery-interior.jpg",
      color: "#c26d3a",
    },
    {
      title: "Curation & Design",
      content: "Expert curation for exhibitions, commercial spaces, and high-end residential projects.",
      image: "/landscape-with-field-and-dome.jpg",
      color: "#d4a373",
    },
    {
      title: "Artist Representation",
      content: "Strategic career management and global representation for contemporary emerging artists.",
      image: "/jaguar-in-jungle.jpg",
      color: "#588157",
    },
    {
      title: "Private Commissions",
      content: "Facilitating unique, bespoke commissions between collectors and our roster of world-class artists.",
      image: "/chef-plating-a-sophisticated-dish-painting.jpg",
      color: "#e76f51",
    },
  ]

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 space-y-12">
          <div className="space-y-4">
            <h2 className="font-serif text-5xl md:text-6xl font-medium leading-tight">
              Artistic <br /> Excellence
            </h2>
            <p className="text-muted-foreground text-xl max-w-md">
              Our specialized services designed to bring the world of fine art closer to your vision.
            </p>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer relative py-6 border-b border-primary/10"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-serif text-3xl transition-all duration-300 ${
                      hoveredIndex === index || activeIndex === index ? "text-primary translate-x-4" : "text-foreground"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <ChevronRight
                    className={`w-6 h-6 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-90 text-primary" : "text-primary/40 group-hover:text-primary"
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-muted-foreground text-lg leading-relaxed pr-12">{service.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 relative h-[600px] flex items-center justify-center">
          <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredIndex ?? activeIndex ?? "default"}
                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={services[hoveredIndex ?? activeIndex ?? 0].image}
                  alt="Service Illustration"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ backgroundColor: services[hoveredIndex ?? activeIndex ?? 0].color }}
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

            <motion.div
              className="absolute bottom-12 left-12 right-12 z-10"
              animate={{
                y: hoveredIndex !== null || activeIndex !== null ? 0 : 20,
                opacity: hoveredIndex !== null || activeIndex !== null ? 1 : 0,
              }}
            >
              <span className="text-white/60 uppercase tracking-[0.2em] text-sm font-medium mb-2 block">
                Premium Service
              </span>
              <h4 className="text-white text-3xl font-serif">{services[hoveredIndex ?? activeIndex ?? 0].title}</h4>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  )
}
