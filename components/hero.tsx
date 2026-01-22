import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-20 pb-12 px-4 max-w-4xl mx-auto">
      <h1 className="font-serif text-6xl md:text-8xl font-medium tracking-tight leading-tight mb-8">
        Discover{" "}
        <span className="relative inline-block">
          Art
          <svg
            className="absolute -top-2 -left-4 w-[120%] h-[120%] pointer-events-none opacity-40"
            viewBox="0 0 100 40"
          >
            <ellipse
              cx="50"
              cy="20"
              rx="45"
              ry="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary"
            />
          </svg>
        </span>{" "}
        That <br /> Speaks to You
      </h1>
      <p className="text-muted-foreground text-lg max-w-2xl mb-10 leading-relaxed">
        Explore a curated collection of contemporary and classic art pieces that inspire, provoke, and captivate. Dive
        into the world of creativity where every piece tells a unique story
      </p>
      <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-lg font-medium shadow-lg transition-transform hover:scale-105">
        Explore the Gallery
      </Button>
    </section>
  )
}
