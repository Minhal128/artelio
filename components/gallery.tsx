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
      src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop",
      alt: "Floral Art Composition",
    },
    {
      src: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop",
      alt: "Avant-garde Fashion",
    },
    {
      src: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=800&auto=format&fit=crop",
      alt: "Abstract Expressionism",
    },
    {
      src: "https://images.unsplash.com/photo-1501472312651-726afe119ff1?q=80&w=800&auto=format&fit=crop",
      alt: "Contemporary Sculpture",
    },
    {
      src: "https://images.unsplash.com/photo-1515405290399-6d6006f14068?q=80&w=800&auto=format&fit=crop",
      alt: "Classical Artistic Study",
    },
    {
      src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop",
      alt: "Modern Gallery Installation",
    },
    {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
      alt: "Fine Art Portrait",
    },
    {
      src: "https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?q=80&w=800&auto=format&fit=crop",
      alt: "Architectural Symmetry",
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      alt: "Digital Art Synthesis",
    },
    {
      src: "https://images.unsplash.com/photo-1554188248-986adbb73be4?q=80&w=800&auto=format&fit=crop",
      alt: "Minimalist Geometry",
    },
    {
      src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop",
      alt: "Creative Process",
    },
  ];


  return (
    <section id="gallery" className="py-12 md:py-24 bg-[#f5f4f3]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-8 md:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4"
          >
            <div className="h-[1px] w-4 md:w-8 bg-primary/30" />
            <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-primary/60">Curated Exhibition</span>
            <div className="h-[1px] w-4 md:w-8 bg-primary/30" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4 md:mb-6"
          >
            The <span className="italic">Velvet</span> Archive
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-black/50 font-light leading-relaxed mb-8 md:mb-12 text-sm md:text-base px-4"
          >
            A meticulous selection of visionary works that challenge perception and celebrate the profound beauty of human expression.
          </motion.p>
        </div>
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
          <Carousel_003 className="" images={images} showPagination loop autoplay />
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
    height: 250px;
    padding-bottom: 30px !important;
  }
  
  @media (min-width: 640px) {
    .Carousal_003 {
      height: 350px;
      padding-bottom: 40px !important;
    }
  }
  
  @media (min-width: 768px) {
    .Carousal_003 {
      height: 450px;
      padding-bottom: 50px !important;
    }
  }
  
  .Carousal_003 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 220px;
  }
  
  @media (min-width: 640px) {
    .Carousal_003 .swiper-slide {
      width: 280px;
      height: 320px;
    }
  }
  
  @media (min-width: 768px) {
    .Carousal_003 .swiper-slide {
      width: 350px;
      height: 400px;
    }
  }

  .Carousal_003 .swiper-wrapper {
    transition-timing-function: linear !important;
  }

  .swiper-pagination-bullet {
    background-color: #000 !important;
  }
  
  @media (max-width: 640px) {
    .Carousal_003 .swiper-slide-shadow-left,
    .Carousal_003 .swiper-slide-shadow-right {
      opacity: 0.3;
    }
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
                  delay: 0,
                  disableOnInteraction: false,
                }
              : false
          }
          speed={5000}
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: window.innerWidth < 640 ? 20 : 40,
            stretch: 0,
            depth: window.innerWidth < 640 ? 50 : 100,
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
