import Image from "next/image"

export function ImageGrid() {
  const images = [
    {
      src: "/people-celebrating-art.jpg",
      alt: "People celebrating art",
      className: "h-[200px] sm:h-[300px] md:h-[500px] lg:h-[600px]",
    },
    {
      src: "/jaguar-in-jungle.jpg",
      alt: "Jaguar in jungle illustration",
      className: "h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px] mt-auto",
    },
    {
      src: "/roller-skating-summer.jpg",
      alt: "People roller skating on a sunny day",
      className: "h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px] mt-auto",
    },
    {
      src: "/landscape-with-field-and-dome.jpg",
      alt: "Stylized landscape with field and glass dome",
      className: "h-[200px] sm:h-[300px] md:h-[500px] lg:h-[600px]",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 px-4 md:px-8 max-w-7xl mx-auto py-8 md:py-12">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`relative overflow-hidden rounded-[1.5rem] md:rounded-[3rem] shadow-lg md:shadow-xl transition-transform hover:scale-[1.02] duration-300 ${img.className}`}
        >
          <Image
            src={img.src || "/placeholder.svg"}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
          />
        </div>
      ))}
    </div>
  )
}
