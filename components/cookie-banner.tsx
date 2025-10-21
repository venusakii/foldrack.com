"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-in slide-in-from-bottom-5">
      <div className="bg-white border-2 border-primary rounded-lg shadow-2xl p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm text-foreground/80 leading-relaxed">
            This website uses cookies to improve your experience and analyze usage. By continuing, you agree to our
            cookie policy.
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="text-foreground/40 hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <Button onClick={handleAccept} className="w-full gradient-hover text-white font-semibold">
          Accept & Continue
        </Button>
      </div>
    </div>
  )
}
