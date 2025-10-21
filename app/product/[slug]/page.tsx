import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Star, Check, Package, Truck, Shield } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

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
    description:
      "The SONGMICS Stainless Gullwing is a versatile drying rack designed for both indoor and outdoor use. Its stainless steel construction ensures durability and rust resistance, while the height-adjustable wings accommodate various clothing sizes. The foldable design allows for easy storage, making it ideal for homes with limited space.",
    specifications: {
      dimensions: "135cm x 66cm x 120cm",
      weight: "4.0kg",
      material: "Stainless steel",
      capacity: "20kg",
    },
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
    description:
      "The SONGMICS Foldable 2-Level Drying Rack offers ample drying space with 24 rails and a tall hanging bar for longer items. Its height-adjustable wings make it versatile for different clothing types, and the rust-resistant steel ensures long-lasting use. Perfect for small apartments, it folds flat for easy storage.",
    specifications: {
      dimensions: "159cm x 66cm x 198cm",
      weight: "3.45kg",
      material: "Steel, PP Plastic",
      capacity: "25kg",
    },
    affiliate: "https://www.amazon.com/SONGMICS-Free-Standing-Additional-Height-Adjustable-ULLR521W01/dp/B0CB8HJWG7",
  },
  {
    slug: "apexchaser-extendable-wall-mounted",
    name: "APEXCHASER Drying Rack, Extendable Clothes Drying Rack 14.57in H x 35-43inW x 14.57in D, Space-Saving Wall Mounted Drying Rack, 1 Additional Tall Hanging Bar, 24 Drying Rails, Space Saving, Simply White ULLR521W01",
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
    description:
      "The APEXCHASER Extendable Wall-Mounted Drying Rack is perfect for small spaces like laundry rooms or balconies. Its extendable design adjusts from 35 to 43 inches wide, providing flexible drying space. Made with rust-resistant materials, it’s durable and folds away neatly when not in use.",
    specifications: {
      dimensions: "89-109cm x 37cm x 37cm",
      weight: "2.5kg",
      material: "Rust-resistant aluminum",
      capacity: "15kg",
    },
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
    description:
      "The Whitmor Foldable Clothes Drying Rack is a budget-friendly option for indoor laundry drying. Its lightweight and compact design makes it easy to set up and store, perfect for small apartments or dorms. Simple to assemble, it provides a practical solution for air-drying clothes.",
    specifications: {
      dimensions: "110cm x 60cm x 90cm",
      weight: "2.0kg",
      material: "Steel with plastic coating",
      capacity: "10kg",
    },
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
    description:
      "The AUGMIRR Stainless Outdoor Drying Rack is built for durability with a 320 lb capacity and stainless steel construction. Its adjustable length (up to 82 inches) and windproof hooks make it ideal for outdoor use, while the no-installation design ensures quick setup and storage.",
    specifications: {
      dimensions: "201cm x 71cm x 132cm",
      weight: "4.2kg",
      material: "Stainless steel",
      capacity: "145kg",
    },
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
    description:
      "The Honey-Can-Do Collapsible Bamboo Drying Rack combines sustainability with functionality. Made from eco-friendly bamboo, it offers 25 linear feet of drying space and collapses for easy storage. Perfect for indoor or outdoor use, its lightweight design is ideal for air-drying delicates and towels.",
    specifications: {
      dimensions: "76cm x 38cm x 109cm",
      weight: "2.8kg",
      material: "Bamboo",
      capacity: "12kg",
    },
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
    description:
      "The Polder Wall-Mount Accordion Clothes Dryer is a space-saving solution for small laundry areas. Its accordion-style design expands to 24 inches for drying and folds flat when not in use. Durable and easy to install, it’s perfect for apartments or bathrooms.",
    specifications: {
      dimensions: "61cm x 46cm x 15cm (extended)",
      weight: "1.5kg",
      material: "Steel with plastic coating",
      capacity: "8kg",
    },
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
    description:
      "The Leifheit Pegasus 150 Black Edition is a compact yet spacious drying rack, perfect for balconies or small spaces. With 15 meters of drying space and stable parallel legs, it handles 1-2 loads of laundry. The included small garment holders make drying socks and delicates easy.",
    specifications: {
      dimensions: "94.5cm x 55cm x 7cm",
      weight: "1.93kg",
      material: "Alloy steel",
      capacity: "10kg",
    },
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
    description:
      "The Joseph Joseph Eclipse Adjustable Drying Rack offers a modern design with an integrated peg bag for convenience. Its adjustable and foldable structure makes it ideal for various spaces, while the sleek grey finish adds a stylish touch to your laundry routine.",
    specifications: {
      dimensions: "120cm x 60cm x 100cm",
      weight: "3.0kg",
      material: "Steel with plastic connectors",
      capacity: "15kg",
    },
    affiliate: "https://www.amazon.com/Joseph-Eclipse-Adjustable-Integrated-Foldable/dp/B0D8BF9K9D",
  },
]

const customerReviewsByProduct: Record<string, any[]> = {
  "songmics-stainless-gullwing": [
    {
      name: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Absolutely love this drying rack! It's sturdy, looks great, and holds so much laundry. Best purchase I've made this year.",
    },
    {
      name: "James T.",
      rating: 5,
      date: "1 month ago",
      comment: "Perfect for my small apartment. Folds up nicely and doesn't take up much space. Highly recommend!",
    },
    {
      name: "Emily R.",
      rating: 4,
      date: "3 weeks ago",
      comment:
        "Great quality and very functional. Only wish it came in more color options, but overall very satisfied.",
    },
    {
      name: "Michael K.",
      rating: 5,
      date: "1 week ago",
      comment: "Exceeded my expectations. The build quality is excellent and it's so easy to set up and fold away.",
    },
  ],
  "songmics-foldable-2-level": [
    {
      name: "Jennifer L.",
      rating: 5,
      date: "1 week ago",
      comment: "The 2-level design is genius! I can dry twice as much laundry now. Very stable and well-made.",
    },
    {
      name: "David P.",
      rating: 4,
      date: "2 weeks ago",
      comment: "Great product overall. The adjustable wings are super helpful for larger items.",
    },
    {
      name: "Amanda S.",
      rating: 5,
      date: "3 days ago",
      comment: "Best drying rack I've ever owned. The tall hanging bar is perfect for dresses and long pants.",
    },
    {
      name: "Robert H.",
      rating: 5,
      date: "1 month ago",
      comment: "Sturdy construction and plenty of space. Folds flat for storage which is a huge plus.",
    },
  ],
  "apexchaser-extendable-wall-mounted": [
    {
      name: "Lisa W.",
      rating: 5,
      date: "5 days ago",
      comment: "Perfect for my small laundry room! The wall-mount saves so much floor space.",
    },
    {
      name: "Thomas B.",
      rating: 4,
      date: "2 weeks ago",
      comment: "Easy to install and very functional. The extendable feature is really convenient.",
    },
    {
      name: "Rachel G.",
      rating: 5,
      date: "1 week ago",
      comment: "Love how it folds away when not in use. Great quality for the price!",
    },
    {
      name: "Kevin D.",
      rating: 4,
      date: "3 weeks ago",
      comment: "Solid product. Does exactly what it's supposed to do. Would buy again.",
    },
  ],
  "whitmor-foldable-clothes": [
    {
      name: "Patricia N.",
      rating: 4,
      date: "1 week ago",
      comment: "Simple and affordable. Perfect for my dorm room. Easy to set up and store.",
    },
    {
      name: "Christopher J.",
      rating: 5,
      date: "4 days ago",
      comment: "Great value for money! Lightweight but surprisingly sturdy.",
    },
    {
      name: "Michelle C.",
      rating: 4,
      date: "2 weeks ago",
      comment: "Does the job well. Not fancy but reliable and practical.",
    },
    {
      name: "Daniel F.",
      rating: 5,
      date: "1 month ago",
      comment: "Perfect starter drying rack. Can't beat the price for what you get.",
    },
  ],
  "augmirr-stainless-outdoor": [
    {
      name: "Barbara A.",
      rating: 5,
      date: "3 days ago",
      comment: "The windproof hooks are a game changer! No more clothes blowing away on windy days.",
    },
    {
      name: "William M.",
      rating: 5,
      date: "1 week ago",
      comment: "Incredibly sturdy! The 320 lb capacity is no joke. Handles all my laundry with ease.",
    },
    {
      name: "Susan V.",
      rating: 4,
      date: "2 weeks ago",
      comment: "Great for outdoor use. The stainless steel holds up well in all weather conditions.",
    },
    {
      name: "Richard E.",
      rating: 5,
      date: "5 days ago",
      comment: "Best outdoor drying rack on the market. The adjustable length is perfect for my needs.",
    },
  ],
  "honey-can-do-collapsible-bamboo": [
    {
      name: "Nancy K.",
      rating: 5,
      date: "1 week ago",
      comment: "Love the eco-friendly bamboo design! Looks beautiful and works perfectly.",
    },
    {
      name: "Joseph R.",
      rating: 5,
      date: "3 days ago",
      comment: "The 25 feet of drying space is amazing. Plus it's sustainable which I really appreciate.",
    },
    {
      name: "Karen T.",
      rating: 4,
      date: "2 weeks ago",
      comment: "Stylish and functional. The bamboo adds a nice natural touch to my laundry room.",
    },
    {
      name: "Steven L.",
      rating: 5,
      date: "1 month ago",
      comment: "Lightweight yet sturdy. Collapses easily for storage. Highly recommend!",
    },
  ],
  "polder-wall-mount-accordion": [
    {
      name: "Dorothy H.",
      rating: 5,
      date: "4 days ago",
      comment: "Perfect space-saving solution! The accordion design is so clever and practical.",
    },
    {
      name: "Paul S.",
      rating: 4,
      date: "1 week ago",
      comment: "Easy to install and folds flat when not needed. Great for small bathrooms.",
    },
    {
      name: "Betty M.",
      rating: 5,
      date: "2 weeks ago",
      comment: "Exactly what I needed for my tiny apartment. Durable and well-designed.",
    },
    {
      name: "Mark W.",
      rating: 4,
      date: "3 weeks ago",
      comment: "Good quality and very functional. The wall-mount feature is a real space saver.",
    },
  ],
  "leifheit-pegasus-150-black": [
    {
      name: "Helen B.",
      rating: 5,
      date: "5 days ago",
      comment: "The compact design is perfect for my balcony! Fits through narrow doors easily.",
    },
    {
      name: "George C.",
      rating: 5,
      date: "1 week ago",
      comment: "15 meters of drying space in such a compact unit is impressive. Very stable too.",
    },
    {
      name: "Sandra P.",
      rating: 4,
      date: "2 weeks ago",
      comment: "Love the black edition! Looks sleek and modern. The small garment holders are handy.",
    },
    {
      name: "Edward G.",
      rating: 5,
      date: "3 days ago",
      comment: "Best balcony drying rack I've found. Stable, compact, and holds plenty of laundry.",
    },
  ],
  "joseph-eclipse-adjustable": [
    {
      name: "Margaret D.",
      rating: 5,
      date: "1 week ago",
      comment: "The integrated peg bag is such a thoughtful feature! Modern design looks great too.",
    },
    {
      name: "Charles Y.",
      rating: 5,
      date: "4 days ago",
      comment: "Stylish and practical. The grey finish matches my laundry room perfectly.",
    },
    {
      name: "Linda Z.",
      rating: 4,
      date: "2 weeks ago",
      comment: "Adjustable design is very versatile. Quality construction and easy to fold away.",
    },
    {
      name: "Anthony Q.",
      rating: 5,
      date: "6 days ago",
      comment: "Premium quality drying rack. The peg bag integration is genius. Worth every penny!",
    },
  ],
}

const customerReviews = [
  {
    name: "Sarah M.",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Absolutely love this drying rack! It's sturdy, looks great, and holds so much laundry. Best purchase I've made this year.",
  },
  {
    name: "James T.",
    rating: 5,
    date: "1 month ago",
    comment: "Perfect for my small apartment. Folds up nicely and doesn't take up much space. Highly recommend!",
  },
  {
    name: "Emily R.",
    rating: 4,
    date: "3 weeks ago",
    comment: "Great quality and very functional. Only wish it came in more color options, but overall very satisfied.",
  },
  {
    name: "Michael K.",
    rating: 5,
    date: "1 week ago",
    comment: "Exceeded my expectations. The build quality is excellent and it's so easy to set up and fold away.",
  },
]

export default function ProductReviewPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  const reviews = customerReviewsByProduct[params.slug] || customerReviews

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            href="/product"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-2xl bg-background border-2 border-border">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-graphite mb-4 text-balance">{product.name}</h1>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-border"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg text-foreground/70">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <p className="text-lg text-foreground/70 leading-relaxed text-pretty">{product.description}</p>

              {/* Key Features */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-graphite">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/70">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="flex flex-col items-center text-center gap-2">
                  <Package className="h-8 w-8 text-primary" />
                  <span className="text-sm text-foreground/70">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Truck className="h-8 w-8 text-primary" />
                  <span className="text-sm text-foreground/70">Fast Delivery</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Shield className="h-8 w-8 text-primary" />
                  <span className="text-sm text-foreground/70">Warranty</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                <a href={product.affiliate} target="_blank" rel="noopener noreferrer">
                  Buy on Amazon
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-graphite mb-8">Specifications</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center border-b border-border pb-3">
                    <span className="font-semibold text-graphite capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                    <span className="text-foreground/70">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-graphite mb-8">Customer Reviews</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-graphite">{review.name}</span>
                    <span className="text-sm text-foreground/70">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={`h-4 w-4 ${j < review.rating ? "fill-primary text-primary" : "text-border"}`}
                      />
                    ))}
                  </div>
                  <p className="text-foreground/70 leading-relaxed text-pretty">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products CTA */}
      <section className="py-12 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-graphite mb-4 text-balance">Explore More Products</h2>
          <p className="text-lg text-foreground/70 mb-8 text-pretty">
            Check out our full collection of drying racks to find the perfect match for your needs.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/product">View All Products</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
