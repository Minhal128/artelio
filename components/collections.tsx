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

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null);
    const totalCards = cards.length;

    // Initial state
    gsap.set(cards, { x: "100%", y: "0%" });
    gsap.set(cards[0], { x: "0%", y: "0%" });

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
      if (i === 0) {
        // First card only moves UP
        tl.to(card, {
          y: "-100%",
          duration: 1,
          ease: "power2.inOut",
        }, i);
      } else {
        // Subsequent cards: Come from RIGHT to CENTER
        tl.fromTo(card, 
          { x: "100%", y: "0%" },
          { x: "0%", y: "0%", duration: 1, ease: "power2.inOut" },
          i - 1 // Start as previous card moves up
        );

        // Then move UP to exit (except the last card stays if needed, but usually all exit)
        if (i < totalCards - 1) {
          tl.to(card, {
            y: "-100%",
            duration: 1,
            ease: "power2.inOut",
          }, i);
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <div className="absolute top-12 left-12 z-50 pointer-events-none">
        <h2 className="font-serif text-5xl md:text-8xl tracking-tighter text-white mix-blend-difference">
          Our Collections
        </h2>
      </div>

      <div className="relative h-full w-full">
        {collectionCards.map((card, i) => (
          <div 
            key={card.id}
            ref={(el) => { cardsRef.current[i] = el }}
            className="absolute inset-0 h-full w-full overflow-hidden"
          >
            <div className="relative h-full w-full">
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover scale-110" // scale-110 for a bit of zoom room
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-24 left-12 right-12 z-10 text-white">
                <div className="max-w-4xl">
                  <span className="text-sm uppercase tracking-[0.5em] font-bold mb-4 block opacity-70">
                    {card.category}
                  </span>
                  <h3 className="font-serif text-6xl md:text-9xl leading-tight mb-8">
                    {card.title}
                  </h3>
                  <div className="h-[1px] w-32 bg-white/50 mb-8" />
                  <p className="text-lg md:text-xl font-light opacity-80 max-w-xl">
                    Discover the essence of modern architectural beauty and abstract expressionism in our latest curated series.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
