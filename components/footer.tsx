import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-muted to-border text-foreground py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div>
            <h3 className="text-3xl font-bold text-graphite">
              Fold<span className="text-primary">Rack</span>
            </h3>
            <p className="text-foreground/60 mt-2 italic">Every Fold Matters.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <span className="text-foreground/30">|</span>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <span className="text-foreground/30">|</span>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <span className="text-foreground/30">|</span>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
          </div>
          {/* </CHANGE> */}

          {/* Social Icons */}

          {/* Legal */}
          <div className="pt-8 border-t border-border/50 space-y-2 text-sm text-foreground/60">
            <p>© 2025 FoldRack.com — All Rights Reserved. Amazon Affiliate Partner.</p>
            <p>🛒 As an Amazon Associate, we earn from qualifying purchases.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
