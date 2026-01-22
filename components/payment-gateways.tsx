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
        textColor: "text-white",
        iconColor: "text-white",
        icon: (
          <svg viewBox="0 0 640 512" className="w-12 h-12" fill="currentColor">
            <path d="M635.4 273.5L599.3 227.3c-2.4-3.1-6.1-4.9-10.1-4.9H472c-7.2 0-13 5.8-13 13s5.8 13 13 13h109.1l30.8 39.4c1.1 1.4 1.7 3.1 1.7 4.9 0 4.4-3.6 8-8 8H472c-7.2 0-13 5.8-13 13s5.8 13 13 13h134c11.6 0 21-9.4 21-21 0-4.8-1.6-9.4-4.6-13.2zM404.7 222.4c-4-4.1-9.4-6.4-15-6.4H280c-11.6 0-21 9.4-21 21v212c0 11.6 9.4 21 21 21h104c31.1 0 57.3-21.7 64.1-51.1 12.1-52.2-22.1-103.5-74.4-103.5h-54.7V256h74.7c5.6 0 11 2.3 15 6.4 4 4.1 6.3 9.6 6.3 15.4 0 5.8-2.3 11.3-6.3 15.4-4 4.1-9.4 6.4-15 6.4h-38.7c-7.2 0-13 5.8-13 13s5.8 13 13 13h38.7c15.1 0 29.5-6 40.1-16.9s16.4-25.7 16.4-41.2c0-15.5-5.8-30.3-16.4-41.2zM128 222.4c-4-4.1-9.4-6.4-15-6.4H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h92.7c5.6 0 11 2.3 15 6.4 4 4.1 6.3 9.6 6.3 15.4 0 5.8-2.3 11.3-6.3 15.4-4 4.1-9.4 6.4-15 6.4H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h105c15.1 0 29.5-6 40.1-16.9s16.4-25.7 16.4-41.2c0-15.5-5.8-30.3-16.4-41.2z"/>
          </svg>
        ),
        tag: "STRIPE"
      },
      {
        name: "PayPal",
        description: "Trusted worldwide for fast and secure online payments.",
        color: "bg-[#003087]", // PayPal Blue
        textColor: "text-white",
        iconColor: "text-white",
        icon: (
          <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
            <path d="M20.067 8.478c.492.88.556 2.014.307 3.327-.278 1.434-.996 2.427-1.926 3.065-.93.638-2.057.957-3.38.957h-1.908c-.337 0-.543.159-.616.477l-.497 2.093c-.048.199-.199.298-.452.298h-2.699c-.311 0-.46-.153-.448-.46l1.325-8.541c.045-.251.218-.376.518-.376h5.223c1.359 0 2.372.247 3.038.74.666.493.999 1.134 1.015 1.922zm-3.033 2.303c.163-.837.132-1.448-.094-1.834-.225-.386-.689-.579-1.391-.579h-2.11c-.301 0-.472.15-.514.45l-.462 2.944c-.014.164.045.246.177.246h1.284c.731 0 1.28-.184 1.646-.552.366-.368.522-.826.464-1.375zM15.424 5h-5.223c-.3 0-.473.125-.518.376l-1.325 8.541c-.012.307.137.46.448.46h2.511l.392-2.533c.045-.3.225-.45.539-.45h1.908c1.323 0 2.45-.319 3.38-.957.93-.638 1.648-1.631 1.926-3.065.249-1.313.185-2.447-.307-3.327C17.796 5.247 16.783 5 15.424 5z"/>
          </svg>
        ),
        tag: "PAYPAL"
      }
    ]
  
    return (
      <section className="py-24 relative overflow-hidden bg-[#fdfaf3]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl md:text-6xl text-black mb-6 tracking-tight">
              Seamless Checkout
            </h2>
            <p className="text-black/60 text-xl max-w-2xl mx-auto font-light">
              Securely acquire your next masterpiece using our supported payment methods.
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
                className={`group relative w-full max-w-[320px] ${gateway.color} rounded-[40px] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Card content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`w-24 h-24 bg-white/20 backdrop-blur-md rounded-[30px] flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <div className={gateway.iconColor}>
                      {gateway.icon}
                    </div>
                  </div>
                  
                  <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${gateway.textColor}/60 mb-3`}>
                    {gateway.tag}
                  </span>
                  
                  <h3 className={`text-2xl font-bold ${gateway.textColor} mb-4`}>
                    {gateway.name}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed ${gateway.textColor}/80 font-medium`}>
                    {gateway.description}
                  </p>
                </div>
  
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    )

}
