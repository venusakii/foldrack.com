import Link from "next/link"
import { Search, ShoppingBag } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <h1 className="font-heading text-2xl md:text-3xl text-primary hover:text-accent transition-colors">
              FoldRack
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/product" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Products
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Header Icons */}
          
        </div>
      </div>
    </header>
  )
}
