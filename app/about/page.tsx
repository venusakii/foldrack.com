import { Award, Heart, Leaf, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-graphite mb-4">
            About Fold<span className="text-primary">Rack</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            We believe that everyday objects can be both functional and beautiful. FoldRack is dedicated to helping you
            find the perfect drying rack that transforms a mundane task into an elegant ritual.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-12 rounded-2xl mb-16 border border-primary/10">
          <h2 className="text-3xl font-bold text-graphite mb-4 text-center">Our Mission</h2>
          <p className="text-lg text-foreground/80 text-center max-w-3xl mx-auto leading-relaxed italic">
            "To curate the world's finest drying racks and inspire a more sustainable, mindful approach to laundry
            care—one fold at a time."
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-graphite">Quality First</h3>
            <p className="text-foreground/70 text-sm">
              We only recommend products that meet our rigorous standards for durability and design.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <Leaf className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-graphite">Sustainability</h3>
            <p className="text-foreground/70 text-sm">
              Air-drying reduces energy consumption and extends the life of your clothes.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-graphite">Thoughtful Design</h3>
            <p className="text-foreground/70 text-sm">
              Every product we feature combines aesthetic beauty with practical functionality.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <Award className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-graphite">Expert Curation</h3>
            <p className="text-foreground/70 text-sm">
              Our team researches and tests to bring you only the best recommendations.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto space-y-6 text-foreground/80 leading-relaxed">
          <h2 className="text-3xl font-bold text-graphite mb-6">Our Story</h2>

          <p>
            FoldRack was born from a simple observation: the drying rack, an object found in homes worldwide, is often
            overlooked as merely utilitarian. But we saw something more—an opportunity to elevate the everyday.
          </p>

          <p>
            As an Amazon affiliate partner, we've dedicated ourselves to researching, comparing, and curating the finest
            drying racks available. From minimalist wall-mounted designs to innovative foldable solutions, we believe
            there's a perfect rack for every home and lifestyle.
          </p>

          <p>
            Our philosophy is simple: <strong>Every Fold Matters.</strong> Whether you're drying delicate fabrics,
            reducing your carbon footprint, or simply seeking a more mindful approach to household tasks, the right
            drying rack can make all the difference.
          </p>

          <p className="text-foreground/60 text-sm pt-4 border-t border-border">
            <strong>Affiliate Disclosure:</strong> FoldRack.com participates in the Amazon Services LLC Associates
            Program. When you purchase through our links, we may earn a commission at no additional cost to you. This
            helps us continue providing quality recommendations and content.
          </p>
        </div>
      </div>
    </main>
  )
}
