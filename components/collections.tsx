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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null);
    const categoryElements = categoryRefs.current.filter((el): el is HTMLDivElement => el !== null);
    const totalCards = cards.length;

    // Initial state: first card visible, others hidden to the right
    gsap.set(cards, { x: "100%", y: "0%", opacity: 0 });
    gsap.set(cards[0], { x: "0%", y: "0%", opacity: 1 });
    
    gsap.set(categoryElements, { y: 100, opacity: 0 });
    gsap.set(categoryElements[0], { y: 0, opacity: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${window.innerHeight * totalCards * 2}`,
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

        tl.to(categoryElements[i], {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }, i * 2);
      }

      // Step 2: Move card UP to exit (if not last)
      if (!isLast) {
        tl.to(card, {
          y: "-120%",
          duration: 1,
          ease: "power2.inOut",
        }, i * 2 + 1);

        tl.to(categoryElements[i], {
          y: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
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
      className="relative h-screen w-full overflow-hidden bg-[#DCD7CC]"
    >
      {/* "Our Collections" Header - Top Left */}
      <div className="absolute top-16 left-16 z-50">
        <h2 className="font-serif text-8xl md:text-[10rem] tracking-tighter text-black leading-[0.8]">
          Our Collections
        </h2>
      </div>

      {/* Dynamic Category Title - Bottom Left */}
      <div className="absolute bottom-16 left-16 z-50 h-[120px] md:h-[160px] overflow-hidden">
        {collectionCards.map((card, i) => (
          <div
            key={`cat-${card.id}`}
            ref={(el) => { categoryRefs.current[i] = el }}
            className="absolute bottom-0 left-0 whitespace-nowrap"
          >
            <h3 className="font-serif italic text-6xl md:text-9xl text-black/80">
              {card.category}
            </h3>
          </div>
        ))}
      </div>

      {/* Cards Container - Aligned to Right */}
      <div className="relative h-full w-full flex items-center justify-end pr-[10%] lg:pr-[15%]">
        <div className="relative w-[70vw] sm:w-[45vw] md:w-[35vw] lg:w-[30vw] h-[65vh] md:h-[75vh]">
          {collectionCards.map((card, i) => (
            <div 
              key={card.id}
              ref={(el) => { cardsRef.current[i] = el }}
              className="absolute inset-0 h-full w-full rounded-xl overflow-hidden shadow-2xl bg-neutral-200"
            >
              <div className="relative h-full w-full group">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-12 left-10 right-10 text-white">
                  <span className="text-[10px] uppercase tracking-[0.5em] font-bold mb-3 block opacity-90">
                    {card.category}
                  </span>
                  <h4 className="font-serif text-3xl md:text-5xl leading-tight">
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
    </section>
  );
}
