import { Button } from "@medusajs/ui"
import HeroReveal from "@modules/home/components/hero/HeroReveal"

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/tunnel_walk_720.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Subtle gradient veil */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      {/* Main content */}
      <HeroReveal
        content={
          <div className="text-center flex flex-col gap-6 px-6 max-w-3xl">
            <h1 className="text-5xl md:text-7xl text-white font-light tracking-wide uppercase">
              Limit Latex
            </h1>

            <p className="text-lg md:text-2xl text-white/70 font-light leading-relaxed">
              Where Boundaries Are Transcended, Desires Will Be Embraced.
            </p>
            <a href="/store" className="mx-auto">
              <Button
                variant="secondary"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                Enter the Collection
              </Button>
            </a>
          </div>
        }
      />
    </section>
  )
}
