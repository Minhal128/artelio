import Image from "next/image"

export function ImageGrid() {
  const images = [
    {
      src: "/people-celebrating-art.jpg",
      alt: "People celebrating art",
      className: "h-[500px] md:h-[600px]",
    },
    {
      src: "/jaguar-in-jungle.jpg",
      alt: "Jaguar in jungle illustration",
      className: "h-[350px] md:h-[400px] mt-auto",
    },
    {
      src: "/roller-skating-summer.jpg",
      alt: "People roller skating on a sunny day",
      className: "h-[350px] md:h-[400px] mt-auto",
    },
    {
      src: "/landscape-with-field-and-dome.jpg",
      alt: "Stylized landscape with field and glass dome",
      className: "h-[500px] md:h-[600px]",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 max-w-7xl mx-auto py-12">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`relative overflow-hidden rounded-[3rem] shadow-xl transition-transform hover:scale-[1.02] duration-300 ${img.className}`}
        >
          <Image
            src={img.src || "/placeholder.svg"}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      ))}
    </div>
  )
}
