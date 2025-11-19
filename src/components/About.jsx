export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 blur-xl" />
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <img src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixid=M3w3OTkxMTl8MXwxfHNlYXJjaHwxfHxXb3JrfGVufDB8MHx8fDE3NjM1NjIxNjh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Work" className="rounded-xl object-cover w-full h-72" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">About me</h2>
            <p className="mt-4 text-slate-300/90 leading-relaxed">
              I’m a full‑stack developer who cares about details that matter — performance, accessibility, and clean design. I enjoy working across the stack, from crafting pixel‑perfect UIs to architecting scalable APIs.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              <li className="rounded-xl bg-slate-800/60 ring-1 ring-white/10 px-4 py-3 text-slate-200">React / Next.js</li>
              <li className="rounded-xl bg-slate-800/60 ring-1 ring-white/10 px-4 py-3 text-slate-200">TypeScript</li>
              <li className="rounded-xl bg-slate-800/60 ring-1 ring-white/10 px-4 py-3 text-slate-200">Node / Express</li>
              <li className="rounded-xl bg-slate-800/60 ring-1 ring-white/10 px-4 py-3 text-slate-200">Tailwind CSS</li>
              <li className="rounded-xl bg-slate-800/60 ring-1 ring-white/10 px-4 py-3 text-slate-200">Framer Motion</li>
              <li className="rounded-xl bg-slate-800/60 ring-1 ring-white/10 px-4 py-3 text-slate-200">MongoDB / Postgres</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
