"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface CardData {
  id: number | string;
  image: string;
  alt?: string;
}

interface StickyCard002Props {
  cards: CardData[];
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
}

const StickyCard002 = ({
  cards,
  className,
  containerClassName,
  imageClassName,
}: StickyCard002Props) => {
  const container = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const imageElements = imageRefs.current;
      const totalCards = imageElements.length;

      if (!imageElements[0]) return;

      gsap.set(imageElements[0], { x: "0%", scale: 1, rotation: 0 });

      for (let i = 1; i < totalCards; i++) {
        if (!imageElements[i]) continue;
        gsap.set(imageElements[i], { x: "100%", scale: 1, rotation: 0 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-cards",
          start: "top top",
          end: `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentImage = imageElements[i];
        const nextImage = imageElements[i + 1];
        const position = i;
        if (!currentImage || !nextImage) continue;

        scrollTimeline.to(
          currentImage,
          {
            scale: 0.8,
            x: "-20%",
            duration: 1,
            ease: "none",
          },
          position,
        );

        scrollTimeline.to(
          nextImage,
          {
            x: "0%",
            duration: 1,
            ease: "none",
          },
          position,
        );
      }

      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (container.current) {
        resizeObserver.observe(container.current);
      }

      return () => {
        resizeObserver.disconnect();
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container },
  );

  return (
    <div className={cn("relative h-full w-full", className)} ref={container}>
      <div className="sticky-cards relative flex h-full w-full items-center justify-center overflow-hidden">
        <div
          className={cn(
            "relative h-screen w-full overflow-hidden",
            containerClassName,
          )}
        >
          {cards.map((card, i) => (
            <img
              key={card.id}
              src={card.image}
              alt={card.alt || ""}
              className={cn(
                "absolute h-full w-full object-cover",
                imageClassName,
              )}
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export function Collections() {
  const collectionCards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1600&auto=format&fit=crop",
      alt: "Classical Masterpiece",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1600&auto=format&fit=crop",
      alt: "Modern Abstract",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1600&auto=format&fit=crop",
      alt: "Vibrant Color Field",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop",
      alt: "Architectural Symmetry",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1493333345807-68b2003d11d0?q=80&w=1600&auto=format&fit=crop",
      alt: "Minimalist Geometry",
    },
  ];

  return (
    <section className="bg-background overflow-hidden min-h-screen flex flex-col">
      <div className="py-24 px-8 text-center bg-background relative z-10 flex-shrink-0">
        <h2 className="font-serif text-5xl md:text-8xl mb-6 tracking-tighter text-primary">Our Collections</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Curated excellence across fashion, art, and architecture.
        </p>
      </div>
      <div className="flex-grow w-full h-[80vh] min-h-[600px] relative">
        <StickyCard002 cards={collectionCards} />
      </div>
    </section>
  );
}
