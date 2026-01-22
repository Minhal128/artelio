"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Palette, Globe, History } from "lucide-react"

export function About() {
  const stats = [
    { label: "Founded", value: "2012", icon: History },
    { label: "Global Partners", value: "45+", icon: Globe },
    { label: "Curated Works", value: "12k+", icon: Palette },
  ]

  return (
    <section className="py-32 px-8 bg-[#FAF9F6] text-[#0D0B0A] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#0D0B0A]/10 text-xs font-medium tracking-[0.2em] uppercase mb-8">
                The Legacy of Artelio
              </span>
              <h2 className="font-serif text-5xl md:text-7xl font-medium mb-10 leading-[1.1] tracking-tight">
                Where <span className="italic text-[#0D0B0A]/40">Tradition</span> Meets the <span className="underline decoration-[#0D0B0A]/10 underline-offset-8">Avant-Garde</span>
              </h2>
              
              <div className="space-y-8 text-xl text-[#0D0B0A]/70 leading-relaxed max-w-2xl">
                <p>
                  Artelio serves as a premier sanctuary for the visionaries of tomorrow. We curate not just objects, but 
                  emotions that resonate through time and space, bridging the gap between classical mastery and 
                  digital innovation.
                </p>
                <p className="text-lg">
                  Our curated collections are hand-selected by international experts, ensuring every piece tells a story 
                  of cultural significance and aesthetic brilliance.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-8 mt-16 border-t border-[#0D0B0A]/10 pt-10">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  >
                    <stat.icon className="w-5 h-5 mb-4 text-[#0D0B0A]/40" />
                    <div className="text-2xl font-serif font-medium">{stat.value}</div>
                    <div className="text-sm uppercase tracking-widest text-[#0D0B0A]/50 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ gap: "1.5rem" }}
                className="mt-16 flex items-center gap-4 text-lg font-medium group"
              >
                Learn more about our vision
                <div className="w-12 h-12 rounded-full border border-[#0D0B0A]/20 flex items-center justify-center transition-colors group-hover:bg-[#0D0B0A] group-hover:text-white">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2000&auto=format&fit=crop" 
                alt="Modern Abstract Art" 
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-110" 
              />
            </motion.div>
            
            {/* Floating Detail Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-10 -left-10 z-20 w-64 aspect-square rounded-[1.5rem] overflow-hidden shadow-2xl border-8 border-white hidden md:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1576733220427-024833a6955a?q=80&w=1000&auto=format&fit=crop" 
                alt="Gallery Detail" 
                className="object-cover w-full h-full" 
              />
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0D0B0A]/5 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 -left-20 w-64 h-64 bg-[#0D0B0A]/5 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  )
}
