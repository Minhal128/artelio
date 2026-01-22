export function About() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-serif text-5xl md:text-6xl font-medium mb-8 leading-tight">
            Dedicated to Creativity, Culture & Growth
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Artelio is a creative hub where artists and collectors come together to define what's next in the world of
              contemporary art. We believe that art is not just something you see, but something you experience.
            </p>
            <p>
              Our mission is to bridge the gap between tradition and innovation, providing a platform for voices that
              deserve to be heard and visions that need to be seen. From curated exhibitions to exclusive private
              viewings, we provide the context for art to truly speak.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
          <img src="/high-end-art-gallery-interior.jpg" alt="Art Gallery" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  )
}
