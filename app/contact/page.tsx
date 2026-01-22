"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Skiper39 } from "@/components/ui/crowd-canvas";
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
    <div className="relative min-h-screen bg-[#fdfaf3] selection:bg-black selection:text-white">
      {/* Background Canvas - Anchored to bottom */}
      <div className="absolute inset-x-0 bottom-0 z-0 h-[60vh] opacity-80 pointer-events-none">
        <Skiper39 />
      </div>

      <div className="relative z-10 py-24 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-24">
            <h1 className="text-7xl md:text-9xl font-serif text-black mb-8 tracking-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-black/60 font-serif italic max-w-2xl mx-auto leading-relaxed">
              Have a question or want to work together? Drop us a message and we'll
              get back to you shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-4 space-y-12 bg-white/40 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white/40 shadow-sm"
            >
              <div>
                <h2 className="text-4xl font-serif text-black mb-6">Connect Us</h2>
                <h3 className="text-2xl font-serif text-black/80 mb-8">Artelio</h3>
              </div>
              
              <div className="space-y-10">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-black/40 font-bold mb-3">Email</h4>
                  <p className="text-xl font-serif text-black/70">artelio512@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-black/40 font-bold mb-3">Support</h4>
                  <p className="text-xl font-serif text-black/70 leading-relaxed">
                    Available 24/7 for our premium partners.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-black/40 font-bold mb-3">Location</h4>
                  <p className="text-xl font-serif text-black/70">Global / Remote</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:col-span-8 bg-white/40 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white/40 shadow-2xl shadow-black/5"
            >
              <div className="mb-12">
                <h2 className="text-4xl font-serif text-black mb-4">Send a Message</h2>
                <p className="text-lg text-black/50 font-serif italic">Fill out the form below and our team will reach out to you.</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black/80 font-medium ml-1">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              {...field} 
                              className="bg-white/60 border-black/10 h-14 rounded-xl focus:bg-white focus:ring-0 focus:border-black transition-all px-6 text-lg" 
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
                          <FormLabel className="text-black/80 font-medium ml-1">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="john@example.com" 
                              {...field} 
                              className="bg-white/60 border-black/10 h-14 rounded-xl focus:bg-white focus:ring-0 focus:border-black transition-all px-6 text-lg" 
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
                        <FormLabel className="text-black/80 font-medium ml-1">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="How can we help?" 
                            {...field} 
                            className="bg-white/60 border-black/10 h-14 rounded-xl focus:bg-white focus:ring-0 focus:border-black transition-all px-6 text-lg" 
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
                        <FormLabel className="text-black/80 font-medium ml-1">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about your project..."
                            className="min-h-[200px] bg-white/60 border-black/10 rounded-xl focus:bg-white focus:ring-0 focus:border-black transition-all px-6 py-4 text-lg resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-black hover:bg-black/90 text-white h-16 text-xl rounded-2xl transition-all font-medium shadow-lg shadow-black/10"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
