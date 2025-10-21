import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    title: "5 Ways to Style a Drying Rack Without Hiding It",
    image: "/styled-drying-rack-interior-design.jpg",
    excerpt: "Transform your drying rack from functional necessity to design statement.",
  },
  {
    title: "Why Air Drying Saves the Planet (and Your Wallet)",
    image: "/eco-friendly-laundry-air-drying.jpg",
    excerpt: "The environmental and financial benefits of ditching the dryer.",
  },
  {
    title: "Top 3 Foldable Racks for Small Homes",
    image: "/compact-foldable-drying-racks-small-space.jpg",
    excerpt: "Space-saving solutions that don't compromise on capacity or style.",
  },
]

export default function Blog() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4 text-balance">Inspiration & Insights</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-graphite group-hover:text-primary transition-colors text-balance">
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-pretty">{post.excerpt}</p>
                  <Link
                    href="/product"
                    className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
