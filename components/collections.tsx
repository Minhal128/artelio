import { Button } from "@/components/ui/button"

export function Collections() {
  const collectionItems = [
    {
      type: "image",
      src: "/hot-air-balloons-over-landscape-illustration.jpg",
      alt: "Hot air balloons",
    },
    {
      type: "image",
      src: "/futuristic-vehicle-in-tunnel-circular-art.jpg",
      alt: "Futuristic vehicle",
    },
    {
      type: "image",
      src: "/luxury-pool-area-with-woman-lounging-illustration.jpg",
      alt: "Poolside lounging",
    },
    {
      type: "image",
      src: "/chef-plating-a-sophisticated-dish-painting.jpg",
      alt: "Chef plating",
    },
    {
      type: "image",
      src: "/woman-at-a-futuristic-pool-in-space-illustration.jpg",
      alt: "Space pool",
    },
    {
      type: "text",
      title: "Our Collections",
      description:
        "Browse through a diverse range of art collections, each curated to evoke a different mood, style, and theme. Whether you're looking for modern, abstract, or classic, we have something for every art lover.",
    },
  ]

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <h2 className="font-serif text-4xl mb-12 text-center">Our Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collectionItems.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-[2.5rem] overflow-hidden shadow-lg ${
              item.type === "text" ? "bg-[#efe9d9] p-10 flex flex-col justify-center" : "aspect-square"
            }`}
          >
            {item.type === "image" ? (
              <img
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            ) : (
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">{item.description}</p>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
                  Browse Collections
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
