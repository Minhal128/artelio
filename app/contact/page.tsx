"use client"

import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Skiper39 } from "@/components/ui/crowd-canvas"

export default function ContactPage() {
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

  return (
    <main className="min-h-screen bg-[#f5f1e8] font-sans selection:bg-primary/20">
      <Navbar />
      
      <div className="max-w-[1400px] mx-auto px-8 py-20 lg:py-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-20"
        >
          {/* Left Side: Contact Information */}
          <div className="space-y-12">
            <motion.div variants={itemVariants}>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-black leading-tight tracking-tighter mb-6">
                Connect with <span className="text-primary italic">Artelio</span>
              </h1>
              <p className="text-black/60 text-lg md:text-xl max-w-md font-light leading-relaxed">
                Whether you're looking to acquire a masterpiece or seeking artistic consultation, our curators are here to guide you.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/40 mb-1">Email Us</p>
                  <p className="text-xl font-medium text-black">curator@artelio.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/40 mb-1">Call Us</p>
                  <p className="text-xl font-medium text-black">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/40 mb-1">Visit Gallery</p>
                  <p className="text-xl font-medium text-black">72 Rue de l'Art, Paris, France</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8 border-t border-black/5">
              <div className="flex gap-8">
                {["Instagram", "Twitter", "LinkedIn"].map((social) => (
                  <a key={social} href="#" className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-black/5 shadow-2xl shadow-black/5"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 ml-1">Your Name</label>
                <Input 
                  placeholder="Alexander Artelio" 
                  className="bg-transparent border-0 border-b border-black/10 rounded-none px-1 focus-visible:ring-0 focus-visible:border-primary transition-all text-lg placeholder:text-black/20 pb-4"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 ml-1">Email Address</label>
                <Input 
                  type="email"
                  placeholder="alexander@example.com" 
                  className="bg-transparent border-0 border-b border-black/10 rounded-none px-1 focus-visible:ring-0 focus-visible:border-primary transition-all text-lg placeholder:text-black/20 pb-4"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 ml-1">Subject</label>
                <Input 
                  placeholder="Acquisition Inquiry" 
                  className="bg-transparent border-0 border-b border-black/10 rounded-none px-1 focus-visible:ring-0 focus-visible:border-primary transition-all text-lg placeholder:text-black/20 pb-4"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 ml-1">Message</label>
                <Textarea 
                  placeholder="Tell us about your artistic vision..." 
                  className="bg-transparent border-0 border-b border-black/10 rounded-none px-1 focus-visible:ring-0 focus-visible:border-primary transition-all text-lg placeholder:text-black/20 min-h-[150px] resize-none"
                />
              </div>

              <Button className="w-full bg-black text-white hover:bg-primary transition-all duration-500 py-8 rounded-full text-xs uppercase tracking-widest font-bold group">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Crowd Canvas Section */}
      <div className="w-full h-[400px] relative overflow-hidden mt-10">
        <Skiper39 />
      </div>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="fixed top-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
    </main>
  )
}
