"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative min-h-screen bg-[#fcf9f5] selection:bg-orange-100 selection:text-orange-900 overflow-hidden py-24 px-6 md:px-12">
      {/* Background Texture - More subtle and warm */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-100 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        {/* Frame Shadow Layer - Creates the 'hanging' effect */}
        <div className="absolute inset-0 bg-black/5 blur-2xl translate-y-8 translate-x-4 -z-10 rounded-sm" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-sm overflow-hidden border border-stone-200/60 bg-white">
          {/* Left Column: Info "Artistic Card" */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full bg-[#f8f5f0] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group border-r border-stone-100">
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-orange-200/30" />
              
              <div className="relative z-10">
                <h2 className="text-4xl font-serif italic text-stone-900 mb-2 tracking-tight">With Love,</h2>
                <div className="h-px w-16 bg-orange-200/50 mb-8" />
                <h3 className="text-3xl font-serif italic text-[#8b5e3c] mb-12">Artelio</h3>
              </div>
              
              <div className="space-y-10 relative z-10">
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.25em] text-orange-600/60 font-semibold mb-3 italic">Reach Our Heart</h4>
                  <p className="text-xl font-serif italic text-stone-800 hover:text-orange-700 transition-colors cursor-pointer underline underline-offset-8 decoration-orange-100/50">artelio512@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.25em] text-orange-600/60 font-semibold mb-3 italic">Our Philosophy</h4>
                  <p className="text-lg font-serif italic text-stone-700 leading-relaxed">
                    Every inquiry is a brushstroke on our shared canvas. We respond with the care your art deserves.
                  </p>
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.25em] text-orange-600/60 font-semibold mb-3 italic">Digital Atelier</h4>
                  <p className="text-lg font-serif italic text-stone-700">Connecting souls through color and form, globally.</p>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-stone-200/50 relative z-10">
                <p className="text-[11px] uppercase tracking-[0.15em] text-stone-400 font-medium italic">Hand-crafted with passion &copy; 2026</p>
              </div>

              {/* Abstract background shape */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-orange-100/20 rounded-full blur-2xl opacity-40 group-hover:scale-110 transition-transform duration-1000" />
            </div>
          </motion.div>

          {/* Right Column: Form "The Canvas" */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-7 flex"
          >
            <div className="w-full bg-white p-8 md:p-14 flex flex-col relative">
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-orange-200/30" />
              
              <div className="mb-10 relative z-10">
                <h2 className="text-3xl font-serif italic text-stone-900 mb-3 tracking-tight">Share Your Vision</h2>
                <p className="text-base text-stone-500 font-serif italic">Pour your thoughts onto this page...</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[11px] uppercase tracking-[0.2em] text-orange-600/60 font-semibold italic ml-1">Your Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Dearest Artist..." 
                              {...field} 
                              className="bg-transparent border-0 border-b border-stone-200 rounded-none h-10 focus:ring-0 focus:border-orange-400 transition-all px-0 text-lg font-serif italic placeholder:text-stone-300" 
                            />
                          </FormControl>
                          <FormMessage className="text-xs italic text-orange-600" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[11px] uppercase tracking-[0.2em] text-orange-600/60 font-semibold italic ml-1">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Where to find you?" 
                              {...field} 
                              className="bg-transparent border-0 border-b border-stone-200 rounded-none h-10 focus:ring-0 focus:border-orange-400 transition-all px-0 text-lg font-serif italic placeholder:text-stone-300" 
                            />
                          </FormControl>
                          <FormMessage className="text-xs italic text-orange-600" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[11px] uppercase tracking-[0.2em] text-orange-600/60 font-semibold italic ml-1">The Essence</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="What moves you today?" 
                            {...field} 
                            className="bg-transparent border-0 border-b border-stone-200 rounded-none h-10 focus:ring-0 focus:border-orange-400 transition-all px-0 text-lg font-serif italic placeholder:text-stone-300" 
                          />
                        </FormControl>
                        <FormMessage className="text-xs italic text-orange-600" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[11px] uppercase tracking-[0.2em] text-orange-600/60 font-semibold italic ml-1">Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Write from the soul..."
                            className="min-h-[140px] bg-transparent border-0 border-b border-stone-200 rounded-none focus:ring-0 focus:border-orange-400 transition-all px-0 py-2 text-lg font-serif italic resize-none placeholder:text-stone-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs italic text-orange-600" />
                      </FormItem>
                    )}
                  />
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="group relative w-full bg-[#5c4033] hover:bg-[#4a3728] text-white h-14 text-sm uppercase tracking-[0.3em] rounded-full transition-all font-bold overflow-hidden"
                      disabled={isSubmitting}
                    >
                      <span className="relative z-10">{isSubmitting ? "Sending Love..." : "Send Message"}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
