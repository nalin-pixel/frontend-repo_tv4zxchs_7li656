import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(800px_400px_at_80%_10%,rgba(168,85,247,0.2),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-200/90">
            <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Open to opportunities
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Hi, I’m Abel — I build delightful web experiences
          </h1>
          <p className="mt-4 text-slate-300/90 text-lg max-w-xl">
            Full‑stack developer with a focus on modern, performant interfaces and thoughtful UX. I love turning ideas into polished products.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 font-semibold shadow hover:shadow-lg transition-shadow">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-slate-800/60 ring-1 ring-white/10 px-4 py-2 font-semibold text-white hover:bg-slate-700/60">
              Contact Me
            </a>
          </div>
        </div>

        {/* 3D Spline Scene */}
        <div className="order-1 lg:order-2 relative h-[420px] sm:h-[500px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden ring-1 ring-white/10 bg-slate-900/40">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
