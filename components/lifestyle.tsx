"use client"

const images = [
  { src: "/modern-apartment-drying-rack-minimalist.jpg", caption: "Small apartments. Big design energy." },
  { src: "/scandinavian-laundry-room-drying-rack.jpg", caption: "Scandinavian simplicity" },
  { src: "/urban-loft-drying-rack-industrial.jpg", caption: "Urban loft living" },
  { src: "/modern-bedroom-drying-rack-elegant.jpg", caption: "Bedroom elegance" },
  { src: "/compact-studio-drying-rack-space-saving.jpg", caption: "Studio space-savers" },
  { src: "/contemporary-bathroom-drying-rack.jpg", caption: "Contemporary bathrooms" },
]

export default function Lifestyle() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4 text-balance">Real Spaces</h2>
          <p className="text-xl text-foreground/70 text-pretty">See how FoldRack fits into modern living</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <div key={index} className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.caption}
                className="w-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-semibold text-lg">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
