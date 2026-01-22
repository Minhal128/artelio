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
    <div className="relative min-h-screen bg-[#fdfaf3] overflow-hidden">
      {/* Background Canvas */}
      <div className="absolute inset-0 z-0">
        <Skiper39 />
      </div>

      <div className="relative z-10 py-20 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-serif font-medium text-black mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-black/60 font-light max-w-3xl mx-auto italic">
              Have a question or want to work together? Drop us a message and we'll
              get back to you shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Contact Info */}
            <div className="md:col-span-4 space-y-12 bg-white/20 backdrop-blur-xl p-10 rounded-[2rem] border border-white/20">
              <div>
                <h3 className="text-2xl font-serif font-medium text-black mb-3">Email</h3>
                <p className="text-lg text-black/60">artelio512@gmail.com</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-medium text-black mb-3">Support</h3>
                <p className="text-lg text-black/60">Available 24/7 for our premium partners.</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-medium text-black mb-3">Location</h3>
                <p className="text-lg text-black/60">Global / Remote</p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-8 bg-white/30 backdrop-blur-xl p-10 rounded-[2rem] border border-white/20 shadow-2xl shadow-black/5">
              <div className="mb-8">
                <h2 className="text-3xl font-serif font-medium text-black mb-2">Send a Message</h2>
                <p className="text-black/60">Fill out the form below and our team will reach out to you.</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black font-medium">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              {...field} 
                              className="bg-white/50 border-white/40 h-12 focus:bg-white transition-all" 
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
                          <FormLabel className="text-black font-medium">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="john@example.com" 
                              {...field} 
                              className="bg-white/50 border-white/40 h-12 focus:bg-white transition-all" 
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
                        <FormLabel className="text-black font-medium">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="How can we help?" 
                            {...field} 
                            className="bg-white/50 border-white/40 h-12 focus:bg-white transition-all" 
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
                        <FormLabel className="text-black font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about your project..."
                            className="min-h-[150px] bg-white/50 border-white/40 focus:bg-white transition-all resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-black hover:bg-black/90 text-white h-14 text-lg rounded-xl transition-all font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
