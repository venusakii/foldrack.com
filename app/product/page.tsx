import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Star } from "lucide-react"
import Link from "next/link"

const products = [
  {
    slug: "songmics-stainless-gullwing",
    name: "SONGMICS Clothes Drying Rack, Laundry Rack, Stainless Steel Gullwing Clothes Rack, Foldable, Height-Adjustable Wings, Free-Standing, for Clothing, Sheets, Indoors and Outdoors, Silver ULLR53SV",
    price: "$59.99",
    rating: 4.6,
    reviews: 1200,
    image: "https://m.media-amazon.com/images/I/81hta+aTWZL._AC_SX679_.jpg",
    features: [
      "Stainless steel construction",
      "Height-adjustable wings",
      "Foldable design",
      "Suitable for indoors and outdoors",
    ],
    affiliate: "https://www.amazon.com/SONGMICS-Stainless-Height-Adjustable-Free-Standing-Clothing/dp/B07TLK6QHD",
  },
  {
    slug: "songmics-foldable-2-level",
    name: "SONGMICS Clothes Drying Rack, Foldable 2-Level Laundry Drying Rack, Free-Standing Airer, 1 Additional Tall Hanging Bar, 2 Height-Adjustable Wings, 24 Drying Rails, Space Saving, Simply White ULLR521W01",
    price: "$55.99",
    rating: 4.6,
    reviews: 6388,
    image: "https://m.media-amazon.com/images/I/71gFaHdOD6L._AC_SX679_.jpg",
    features: [
      "2-level design with 24 rails",
      "Additional tall hanging bar",
      "Height-adjustable wings",
      "Rust-resistant and space-saving",
    ],
    affiliate: "https://www.amazon.com/SONGMICS-Free-Standing-Additional-Height-Adjustable-ULLR521W01/dp/B0CB8HJWG7",
  },
  {
    slug: "apexchaser-extendable-wall-mounted",
    name: "APEXCHASER Drying Rack, Extendable Clothes Drying Rack 14.57in H x 35-43inW x 14.57in D, Space-Saving Wall Mounted Drying Rack, Rust-Resistant Drying Rack for Laundry Room, Bathroom, Balcony",
    price: "$39.99",
    rating: 4.5,
    reviews: 450,
    image: "https://m.media-amazon.com/images/I/718EomBMmYL._AC_SX679_.jpg",
    features: [
      "Extendable design (35-43in width)",
      "Wall-mounted for space-saving",
      "Rust-resistant material",
      "Ideal for laundry room or balcony",
    ],
    affiliate:
      "https://www.amazon.com/APEXCHASER-Extendable-14-57in-35-43inW-Space-Saving-Rust-Resistant/dp/B0DSCRVY8T",
  },
  {
    slug: "whitmor-foldable-clothes",
    name: "Whitmor Foldable Clothes Drying Rack",
    price: "$29.99",
    rating: 4.4,
    reviews: 300,
    image: "https://m.media-amazon.com/images/I/81Qqn-kXO1L._SX679_.jpg",
    features: ["Foldable for easy storage", "Compact and lightweight", "Suitable for indoor use", "Simple assembly"],
    affiliate: "https://www.amazon.com/Whitmor-Foldable-Clothes-Drying-Rack/dp/B0FM7RPP2K",
  },
  {
    slug: "augmirr-stainless-outdoor",
    name: "AUGMIRR Clothes Drying Racks Outdoor, 82 Inches Updated Version, Stainless Steel Laundry Drying Rack for Indoor Outdoor and The Balcony, Length Adjustable Saves Space, with Windproof Hooks(002)",
    price: "$49.99",
    rating: 4.5,
    reviews: 2104,
    image: "https://m.media-amazon.com/images/I/71G41uvhCZL._AC_SX679_.jpg",
    features: [
      "Stainless steel with windproof hooks",
      "Length adjustable (up to 82 inches)",
      "Strong and stable (320 lb capacity)",
      "No installation needed",
    ],
    affiliate: "https://www.amazon.com/AUGMIRR-Stainless-Adjustable-Windproof-Silver02/dp/B0936GQNZ8",
  },
  {
    slug: "honey-can-do-collapsible-bamboo",
    name: "Honey-Can-Do Collapsible Bamboo Drying Rack – Sturdy & Foldable Laundry Drying Rack, Space-Saving & Portable Clothes Rack for Air-Drying Clothes, Towels, Blankets & Delicates, Indoor & Outdoor Use",
    price: "$40.77",
    rating: 4.7,
    reviews: 1258,
    image: "https://m.media-amazon.com/images/I/61YcfFo1r0L._AC_SX679_.jpg",
    features: [
      "Bamboo frame for eco-friendly design",
      "Collapsible and portable",
      "25 linear feet of drying space",
      "Indoor and outdoor ready",
    ],
    affiliate: "https://www.amazon.com/Honey-Can-Do-Collapsible-Clothes-DRY-09508-Natural/dp/B0BVRWJJR2",
  },
  {
    slug: "polder-wall-mount-accordion",
    name: "Polder Wall-Mount 24-Inch Accordion Clothes Dryer, White",
    price: "$24.99",
    rating: 4.6,
    reviews: 800,
    image: "https://m.media-amazon.com/images/I/51OzGLAM-7S._AC_SX679_.jpg",
    features: [
      "Wall-mounted accordion style",
      "Expands to 24 inches",
      "Folds flat when not in use",
      "Durable construction",
    ],
    affiliate: "https://www.amazon.com/Polder-Wall-Mount-24-Inch-Accordion-Clothes/dp/B000GBK2WO",
  },
  {
    slug: "leifheit-pegasus-150-black",
    name: "Leifheit Pegasus 150 Solid Slim Black Edition Clothes Airer, Stable Tumble Dryer, Long Wings, Particularly Compact Wing Balcony Airer That Goes Through Narrow Doors",
    price: "$89.99",
    rating: 4.5,
    reviews: 699,
    image: "https://m.media-amazon.com/images/I/61A9d8fkXhL._AC_SX679_.jpg",
    features: [
      "Compact design (55cm wide)",
      "15m drying space",
      "Stable with parallel legs",
      "Includes small garment holders",
    ],
    affiliate: "https://www.amazon.com/Leifheit-Pegasus-Clothes-Particularly-Compact/dp/B0C5DY5DN3",
  },
  {
    slug: "joseph-eclipse-adjustable",
    name: "Joseph Joseph Eclipse Adjustable Drying Rack with Integrated Peg Bag, Foldable, Grey",
    price: "$69.99",
    rating: 4.7,
    reviews: 250,
    image: "https://m.media-amazon.com/images/I/612jNnj7dWL._AC_SX679_.jpg",
    features: ["Adjustable and foldable", "Integrated peg bag", "Modern grey design", "Space-efficient"],
    affiliate: "https://www.amazon.com/Joseph-Eclipse-Adjustable-Integrated-Foldable/dp/B0D8BF9K9D",
  },
]

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-graphite mb-6 text-balance">Our Product Collection</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-pretty">
            Carefully curated drying racks that combine functionality with elegant design
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.slug}
                className="group overflow-hidden border-2 border-border hover:border-primary transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-background">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-graphite mb-2 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-border"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-foreground/70">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-foreground/70">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                      <Link href={`/product/${product.slug}`}>
                        View Details & Reviews
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-graphite mb-4 text-balance">Need Help Choosing?</h2>
          <p className="text-lg text-foreground/70 mb-8 text-pretty">
            Check out our comparison guide or read customer reviews to find the perfect drying rack for your home.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/#comparison">Compare Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#testimonials">Read Reviews</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
