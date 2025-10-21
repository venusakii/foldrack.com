import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-graphite mb-4">Get in Touch</h1>
          <p className="text-foreground/70 text-lg">
            Have questions about our drying rack recommendations? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-graphite mb-2">
                Name
              </label>
              <Input id="name" placeholder="Your name" className="w-full" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-graphite mb-2">
                Email
              </label>
              <Input id="email" type="email" placeholder="your@email.com" className="w-full" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-graphite mb-2">
                Message
              </label>
              <Textarea id="message" placeholder="Tell us what's on your mind..." className="w-full min-h-[150px]" />
            </div>

            <Button className="w-full gradient-hover text-white" size="lg">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-graphite mb-2">Email Us</h3>
                  <p className="text-foreground/70">hello@foldrack.com</p>
                  <p className="text-sm text-foreground/60 mt-2">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <MessageSquare className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-graphite mb-2">Feedback</h3>
                  <p className="text-foreground/70">
                    We're always looking to improve our recommendations and user experience.
                  </p>
                  <p className="text-sm text-foreground/60 mt-2">Your feedback helps us serve you better!</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-graphite mb-2">Partnership Inquiries</h3>
              <p className="text-foreground/70 text-sm">
                Interested in collaborating with FoldRack? We're open to partnerships with brands that share our
                commitment to quality and sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
