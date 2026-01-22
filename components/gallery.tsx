"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2000&auto=format&fit=crop",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2000&auto=format&fit=crop",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2000&auto=format&fit=crop",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2000&auto=format&fit=crop",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "https://images.unsplash.com/photo-1576733220427-024833a6955a?q=80&w=2000&auto=format&fit=crop",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "https://images.unsplash.com/photo-1547891301-158ec3931efa?q=80&w=2000&auto=format&fit=crop",
      alt: "Illustrations by my fav AarzooAly",
    },
  ];

  return (
    <section className="py-24 bg-[#f5f4f3]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-primary/30" />
            <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-primary/60">Curated Exhibition</span>
            <div className="h-[1px] w-8 bg-primary/30" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl tracking-tight mb-6"
          >
            The <span className="italic">Velvet</span> Archive
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-black/50 font-light leading-relaxed mb-12"
          >
            A meticulous selection of visionary works that challenge perception and celebrate the profound beauty of human expression.
          </motion.p>
        </div>
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
          <Carousel_003 className="" images={images} showPagination loop />
        </div>
      </div>
    </section>
  );
};

export { Gallery };

const Carousel_003 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
}: {
  images: { src: string; alt: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .Carousal_003 {
    width: 100%;
    height: 450px;
    padding-bottom: 50px !important;
  }
  
  .Carousal_003 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 350px;
    height: 400px;
  }

  .swiper-pagination-bullet {
    background-color: #000 !important;
  }
`;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-5xl", className)}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                  delay: 1500,
                  disableOnInteraction: true,
                }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : false
          }
          className="Carousal_003"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                className="h-full w-full object-cover"
                src={image.src}
                alt={image.alt}
              />
            </SwiperSlide>
          ))}
          {showNavigation && (
            <div>
              <div className="swiper-button-next after:hidden">
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </div>
              <div className="swiper-button-prev after:hidden">
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export { Carousel_003 };
