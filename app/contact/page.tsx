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
import { Skiper39 } from "@/components/ui/crowd-canvas";

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
    <div className="relative min-h-screen bg-[#fcf9f5] selection:bg-orange-100 selection:text-orange-900 overflow-hidden pt-24">
      {/* Background Texture - More subtle and warm */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-100 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-60" />

      <div className="px-6 md:px-12 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          {/* Frame Shadow Layer - Creates the 'hanging' effect */}
          <div className="absolute inset-0 bg-black/5 blur-2xl translate-y-8 translate-x-4 -z-10 rounded-sm" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-sm overflow-hidden border border-stone-200/60 bg-white">
            {/* ... left and right columns ... */}
          </div>

          {/* Crowd Canvas Section - Directly under the form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="relative z-10 w-full mt-8"
          >
            <Skiper39 />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
