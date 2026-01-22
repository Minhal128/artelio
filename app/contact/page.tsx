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
    <div className="relative min-h-screen bg-[#f5f5f0] selection:bg-black selection:text-white overflow-hidden py-24 px-6 md:px-12">
      {/* Background Texture/Gallery Wall effect */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Info "Framed Art" */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-4 flex"
          >
            <div className="w-full bg-white p-2 border-[12px] border-[#1a1a1a] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5),0_18px_36px_-18px_rgba(0,0,0,0.5)] flex flex-col">
              <div className="flex-1 p-8 md:p-12 border border-black/5 flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl font-serif text-black mb-2 uppercase tracking-tighter">Connect Us</h2>
                  <div className="h-px w-24 bg-black/20 mb-8" />
                  <h3 className="text-2xl font-serif text-black/80 mb-12 italic">Artelio</h3>
                </div>
                
                <div className="space-y-12">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-black/40 font-bold mb-4">Registry / Email</h4>
                    <p className="text-xl font-serif text-black/80 hover:text-black transition-colors">artelio512@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-black/40 font-bold mb-4">Curatorial Support</h4>
                    <p className="text-xl font-serif text-black/70 leading-relaxed">
                      Our curators are available 24/7 for premium inquiries and partner support.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-black/40 font-bold mb-4">Exhibition Space</h4>
                    <p className="text-xl font-serif text-black/70">Digital First / Global Canvas</p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-black/5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/30 font-medium italic">© 2026 Artelio Studio. All rights reserved.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form "Framed Art" */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-8 flex"
          >
            <div className="w-full bg-white p-2 border-[12px] border-[#1a1a1a] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5),0_18px_36px_-18px_rgba(0,0,0,0.5)] flex flex-col">
              <div className="flex-1 p-8 md:p-12 border border-black/5">
                <div className="mb-12">
                  <h2 className="text-4xl font-serif text-black mb-4 uppercase tracking-tighter">Send a Message</h2>
                  <p className="text-lg text-black/40 font-serif italic">Compose your message to our creative board.</p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-black/60 font-bold ml-1">Artist Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
                                {...field} 
                                className="bg-transparent border-0 border-b border-black/10 rounded-none h-12 focus:ring-0 focus:border-black transition-all px-0 text-lg placeholder:text-black/20" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-black/60 font-bold ml-1">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your@email.com" 
                                {...field} 
                                className="bg-transparent border-0 border-b border-black/10 rounded-none h-12 focus:ring-0 focus:border-black transition-all px-0 text-lg placeholder:text-black/20" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-black/60 font-bold ml-1">Inquiry Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="What is this regarding?" 
                              {...field} 
                              className="bg-transparent border-0 border-b border-black/10 rounded-none h-12 focus:ring-0 focus:border-black transition-all px-0 text-lg placeholder:text-black/20" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-black/60 font-bold ml-1">Message Content</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Express your thoughts..."
                              className="min-h-[180px] bg-transparent border-0 border-b border-black/10 rounded-none focus:ring-0 focus:border-black transition-all px-0 py-2 text-lg resize-none placeholder:text-black/20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full bg-[#1a1a1a] hover:bg-black text-white h-16 text-sm uppercase tracking-[0.3em] rounded-none transition-all font-bold shadow-xl active:scale-[0.98]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : "Submit Inquiry"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
