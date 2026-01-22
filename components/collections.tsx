"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const collectionCards = [
  {
    id: 1,
    title: "Celestial Architecture",
    image: "https://images.unsplash.com/photo-1493333345807-68b2003d11d0?q=80&w=2000&auto=format&fit=crop",
    category: "Architecture",
  },
  {
    id: 2,
    title: "Prismatic Fragments",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop",
    category: "Abstract",
  },
  {
    id: 3,
    title: "Urban Perspective",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2000&auto=format&fit=crop",
    category: "Street",
  },
  {
    id: 4,
    title: "Ethereal Resonance",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2000&auto=format&fit=crop",
    category: "Contemporary",
  },
  {
    id: 5,
    title: "Minimalist Horizon",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2000&auto=format&fit=crop",
    category: "Modern Art",
  },
];

export function Collections() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !sectionRef.current) return;

    const container = containerRef.current;
    const totalWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollAmount = totalWidth - viewportWidth;

    if (scrollAmount <= 0) return;

    gsap.to(container, {
      x: -scrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${scrollAmount}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#f5f1e8]">
      <div className="absolute top-12 left-12 z-20">
        <h2 className="font-serif text-5xl md:text-8xl tracking-tighter text-black mix-blend-difference">
          Our Collections
        </h2>
      </div>

      <div 
        ref={containerRef}
        className="flex h-screen items-center"
        style={{ width: `${collectionCards.length * 100}vw` }}
      >
        {collectionCards.map((card) => (
          <div 
            key={card.id}
            className="relative h-screen w-screen flex-shrink-0 overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-16 left-12 text-white">
              <span className="text-xs uppercase tracking-[0.4em] font-bold mb-2 block opacity-80">
                {card.category}
              </span>
              <h3 className="font-serif text-4xl md:text-6xl italic">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
