export default function Philosophy() {
  return (
    <section className="relative py-32 px-6 bg-graphite text-white overflow-hidden">
      {/* Background 3D wireframes */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <circle
            cx="200"
            cy="200"
            r="100"
            fill="none"
            stroke="#3B9C9C"
            strokeWidth="2"
            className="animate-spin"
            style={{ animationDuration: "20s" }}
          />
          <circle
            cx="800"
            cy="300"
            r="150"
            fill="none"
            stroke="#F3B23A"
            strokeWidth="2"
            className="animate-spin"
            style={{ animationDuration: "25s", animationDirection: "reverse" }}
          />
          <rect
            x="300"
            y="600"
            width="200"
            height="200"
            fill="none"
            stroke="#3B9C9C"
            strokeWidth="2"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-5xl md:text-6xl font-bold text-balance">Folded Geometry</h2>
        <div className="space-y-6 text-2xl md:text-3xl font-light leading-relaxed">
          <p className="text-pretty">Geometry inspires simplicity.</p>
          <p className="text-pretty">Simplicity creates freedom.</p>
        </div>
        
      </div>

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
    </section>
  )
}
