"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section className="relative flex flex-col items-center text-center pt-32 pb-24 px-4 max-w-6xl mx-auto overflow-hidden">
      {/* Abstract Splashes */}
      <motion.div
        variants={splashVariants}
        initial="hidden"
        animate="visible"
        className="absolute -top-20 -left-20 w-96 h-96 bg-primary rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        variants={splashVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5, duration: 2.5 }}
        className="absolute top-1/2 -right-20 w-[400px] h-[400px] bg-primary/40 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        variants={splashVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1, duration: 3 }}
        className="absolute -bottom-20 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[80px] pointer-events-none"
      />

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center"
      >
        <motion.h1
          variants={itemVariants}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight leading-[1.1] mb-8 max-w-4xl"
        >
          Discover{" "}
          <span className="relative inline-block italic">
            Art
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
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
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light"
        >
          Explore a curated collection of contemporary and classic art pieces that inspire, provoke, and captivate. Dive
          into a world where every brushstroke tells a unique story.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 py-8 text-xl font-medium shadow-2xl transition-all hover:scale-105 hover:shadow-primary/20 active:scale-95"
          >
            Explore the Gallery
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/20 hover:bg-primary/5 rounded-full px-12 py-8 text-xl font-medium transition-all"
          >
            View Collections
          </Button>
        </motion.div>
      </motion.div>

      {/* Artistic Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute top-1/4 right-10 w-px h-32 bg-primary hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-1/4 left-10 w-32 h-px bg-primary hidden lg:block"
      />
    </section>
  )
}
