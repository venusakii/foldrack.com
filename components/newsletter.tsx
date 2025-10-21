"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-balance">Join Our Space-Savers Club</h2>
        <p className="text-xl text-white/90 text-pretty">
          Join 10,000+ smart home minimalists getting tips, deals, and inspiration.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white text-graphite border-0 focus:ring-2 focus:ring-secondary"
          />
          <Button type="submit" className="bg-secondary text-graphite hover:bg-secondary/90 font-semibold px-8">
            {isSubmitted ? "✓ Subscribed!" : "Subscribe 🧺"}
          </Button>
        </form>

        <p className="text-sm text-white/70">No spam. Unsubscribe anytime. We respect your inbox.</p>
      </div>
    </section>
  )
}
