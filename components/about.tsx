"use client"

import { useEffect, useRef } from "react"

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fold-animation")
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Animation */}
          <div className="relative h-[400px] flex items-center justify-center">
            <div className="relative w-64 h-64">
              {/* Folding rack animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <g className="animate-pulse">
                    <line x1="50" y1="50" x2="50" y2="150" stroke="#3B9C9C" strokeWidth="4" />
                    <line x1="150" y1="50" x2="150" y2="150" stroke="#3B9C9C" strokeWidth="4" />
                    <line
                      x1="50"
                      y1="80"
                      x2="150"
                      y2="80"
                      stroke="#F3B23A"
                      strokeWidth="2"
                      className="animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <line
                      x1="50"
                      y1="100"
                      x2="150"
                      y2="100"
                      stroke="#F3B23A"
                      strokeWidth="2"
                      className="animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    />
                    <line
                      x1="50"
                      y1="120"
                      x2="150"
                      y2="120"
                      stroke="#F3B23A"
                      strokeWidth="2"
                      className="animate-pulse"
                      style={{ animationDelay: "0.6s" }}
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-graphite text-balance">Minimalism in Motion</h2>
            <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
              Born from the idea that function can be art, FoldRack is redefining how we dry, organize, and simplify our
              spaces.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
              Every rack we feature combines geometric elegance with practical engineering—transforming everyday tasks
              into moments of quiet satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
