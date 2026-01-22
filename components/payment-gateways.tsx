"use client"

import { motion } from "framer-motion"
import { CreditCard, ShieldCheck } from "lucide-react"

export function PaymentGateways() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const gateways = [
    {
      name: "Stripe",
      description: "Secure credit card processing with industry-leading technology.",
      color: "bg-[#635BFF]", // Stripe Purple
      icon: (
        <svg viewBox="0 0 640 512" className="w-10 h-10 text-white" fill="currentColor">
          <path d="M635.4 273.5L599.3 227.3c-2.4-3.1-6.1-4.9-10.1-4.9H472c-7.2 0-13 5.8-13 13s5.8 13 13 13h109.1l30.8 39.4c1.1 1.4 1.7 3.1 1.7 4.9 0 4.4-3.6 8-8 8H472c-7.2 0-13 5.8-13 13s5.8 13 13 13h134c11.6 0 21-9.4 21-21 0-4.8-1.6-9.4-4.6-13.2zM404.7 222.4c-4-4.1-9.4-6.4-15-6.4H280c-11.6 0-21 9.4-21 21v212c0 11.6 9.4 21 21 21h104c31.1 0 57.3-21.7 64.1-51.1 12.1-52.2-22.1-103.5-74.4-103.5h-54.7V256h74.7c5.6 0 11 2.3 15 6.4 4 4.1 6.3 9.6 6.3 15.4 0 5.8-2.3 11.3-6.3 15.4-4 4.1-9.4 6.4-15 6.4h-38.7c-7.2 0-13 5.8-13 13s5.8 13 13 13h38.7c15.1 0 29.5-6 40.1-16.9s16.4-25.7 16.4-41.2c0-15.5-5.8-30.3-16.4-41.2zM128 222.4c-4-4.1-9.4-6.4-15-6.4H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h92.7c5.6 0 11 2.3 15 6.4 4 4.1 6.3 9.6 6.3 15.4 0 5.8-2.3 11.3-6.3 15.4-4 4.1-9.4 6.4-15 6.4H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h105c15.1 0 29.5-6 40.1-16.9s16.4-25.7 16.4-41.2c0-15.5-5.8-30.3-16.4-41.2z"/>
        </svg>
      ),
      tag: "STRIPE"
    },
    {
      name: "PayPal",
      description: "Trusted worldwide for fast and secure online payments.",
      color: "bg-[#003087]", // PayPal Blue
      icon: (
        <svg viewBox="0 0 40 40" className="w-12 h-12 text-white" fill="currentColor">
          <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.837 0-16-7.163-16-16S11.163 4-16 4s16 7.163 16 16-7.163 16-16 16z"/>
          <path d="M14 14h6.5c3.5 0 5.5 2 5.5 4.5S24 23 20.5 23H17v4h-3v-13z"/>
        </svg>
      ),
      tag: "PAYPAL"
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background clouds effect */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-white/40 blur-[100px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-black mb-4 tracking-tight">
            Seamless Transactions
          </h2>
          <p className="text-black/60 text-lg max-w-2xl mx-auto font-light">
            We support industry-leading payment gateways to ensure your art acquisitions are secure, fast, and effortless.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {gateways.map((gateway) => (
            <motion.div
              key={gateway.name}
              variants={itemVariants}
              className="group relative w-full max-w-[320px] bg-white/40 backdrop-blur-md rounded-[40px] p-10 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Card content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-20 h-20 ${gateway.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {gateway.icon}
                </div>
                
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 mb-3">
                  {gateway.tag}
                </span>
                
                <h3 className="text-xl font-bold text-black mb-4">
                  {gateway.name}
                </h3>
                
                <p className="text-sm leading-relaxed text-black/60 font-medium">
                  {gateway.description}
                </p>
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
