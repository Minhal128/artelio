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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null);
    const totalCards = cards.length;

    // Initial state: first card visible, others hidden to the right
    gsap.set(cards, { x: "100%", y: "0%", opacity: 0 });
    gsap.set(cards[0], { x: "0%", y: "0%", opacity: 1 });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${window.innerHeight * totalCards * 1.5}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    cards.forEach((card, i) => {
      const isLast = i === totalCards - 1;
      
      // Step 1: Bring card in from RIGHT (if not first)
      if (i > 0) {
        tl.to(card, {
          x: "0%",
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        }, i * 2 - 0.5);
      }

      // Step 2: Move card UP to exit (if not last)
      if (!isLast) {
        tl.to(card, {
          y: "-120%",
          duration: 1,
          ease: "power2.inOut",
        }, i * 2 + 1);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen w-full overflow-hidden bg-white flex items-center justify-center p-4 md:p-10"
    >
    <div className="relative w-full h-full max-h-[600px] max-w-[1200px] rounded-[48px] overflow-hidden bg-[#DCD7CC] shadow-inner flex items-center justify-center">
      {/* Cards Container - Centered */}
        <div className="relative h-full w-full flex items-center justify-center">
          <div className="relative w-[70%] sm:w-[60%] md:w-[55%] lg:w-[50%] max-w-[700px] aspect-[1.6] md:aspect-[1.6]">
              {collectionCards.map((card, i) => (
                <div 
                  key={card.id}
                  ref={(el) => { cardsRef.current[i] = el }}
                  className="absolute inset-0 h-full w-full rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-neutral-200"
                >
                  <div className="relative h-full w-full group">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                    
                    <div className="absolute bottom-12 left-10 right-10 text-white">
                      <span className="text-[12px] uppercase tracking-[0.6em] font-black mb-4 block opacity-100 text-white/90">
                        {card.category}
                      </span>
                      <h4 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
                        {card.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        {/* Subtle Background Pattern/Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
      </div>
    </section>
  );
}
