"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import CurvedLoop from "./ui/CurvedLoop";
import { Button } from "./ui/button";

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
  {
    id: 6,
    title: "Geometric Silence",
    image: "https://images.unsplash.com/photo-1500462859194-88521fdd9900?q=80&w=2000&auto=format&fit=crop",
    category: "Minimalism",
  },
  {
    id: 7,
    title: "Vivid Dreams",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2000&auto=format&fit=crop",
    category: "Expressionism",
  },
  {
    id: 8,
    title: "Liquid Gold",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=2000&auto=format&fit=crop",
    category: "Fluid Art",
  },
];

export function Collections() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !containerRef.current) return;

    const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null);
    const totalCards = cards.length;

    // Initial state: cards stacked with slight offset and scale
    cards.forEach((card, i) => {
      gsap.set(card, {
        zIndex: totalCards - i,
        scale: 1 - i * 0.05,
        y: i * 20,
        rotate: i * -2,
        opacity: i < 4 ? 1 : 0,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${window.innerHeight * totalCards}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    cards.forEach((card, i) => {
      if (i < totalCards - 1) {
        // Current card moves UP and OUT
        tl.to(card, {
          y: "-130%",
          scale: 1.1,
          rotate: -10,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        }, i);

        // All cards behind shift forward one position in the stack
        cards.slice(i + 1).forEach((nextCard, nextIndex) => {
          tl.to(nextCard, {
            scale: 1 - nextIndex * 0.05,
            y: nextIndex * 20,
            rotate: nextIndex * -2,
            opacity: nextIndex < 4 ? 1 : 0,
            duration: 1,
            ease: "power2.inOut",
          }, i);
        }, i);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen w-full overflow-hidden bg-white flex flex-col items-center justify-center p-4 md:p-10"
    >
      <div 
        ref={containerRef}
        className="relative w-full h-[85vh] max-h-[700px] max-w-[1300px] rounded-[48px] overflow-hidden bg-[#DCD7CC] shadow-inner flex flex-col items-center justify-center"
      >
        {/* Background Decorative Element */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <CurvedLoop 
            marqueeText="OUR EXCLUSIVE COLLECTIONS ✦ ARTELIO ✦ EST 2026 ✦ CURATED PIECES ✦ "
            speed={1.5}
            curveAmount={300}
            className="text-black/[0.08]"
            interactive={false}
          />
        </div>

        {/* Cards Container - Centered */}
        <div className="relative z-10 w-full flex-1 flex items-center justify-center">
          <div className="relative w-[85%] sm:w-[70%] md:w-[60%] lg:w-[50%] max-w-[800px] aspect-[1.6]">
            {collectionCards.map((card, i) => (
              <div 
                key={card.id}
                ref={(el) => { cardsRef.current[i] = el }}
                className="absolute inset-0 h-full w-full rounded-[40px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] bg-neutral-200"
              >
                <div className="relative h-full w-full group">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                  
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                    <span className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] font-black mb-3 block opacity-100 text-white/90">
                      {card.category}
                    </span>
                    <h4 className="font-serif text-2xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
                      {card.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="relative z-20 pb-12">
          <Button 
            variant="outline" 
            className="rounded-full px-8 py-6 border-black/20 bg-white/20 backdrop-blur-sm hover:bg-black hover:text-white transition-all duration-300 font-medium tracking-wider"
          >
            VIEW ALL COLLECTIONS
          </Button>
        </div>

        {/* Subtle Background Pattern/Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
      </div>
    </section>
  );
}
