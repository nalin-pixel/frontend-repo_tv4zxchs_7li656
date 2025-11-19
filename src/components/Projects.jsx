const projects = [
  {
    title: 'Interactive Portfolio',
    description: 'A playful 3D‑infused portfolio with performant UI and dark aesthetic.',
    tech: ['Next.js', 'Tailwind', 'Spline'],
    link: 'https://abels-porfolio.vercel.app/',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Design System Kit',
    description: 'Reusable components and tokens for fast product iteration.',
    tech: ['React', 'Radix', 'CVA'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1562601555-513820e5d0eb?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZXNpZ24lMjBTeXN0ZW0lMjBLaXR8ZW58MHwwfHx8MTc2MzU2MjE2OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real‑time insights with smooth charts and clean UX.',
    tech: ['Next.js', 'tRPC', 'Prisma'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmFseXRpY3MlMjBEYXNoYm9hcmR8ZW58MHwwfHx8MTc2MzQ4MjQ1OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold text-white tracking-tight">Selected work</h2>
          <a href="#contact" className="text-sm text-cyan-300 hover:text-cyan-200">See availability →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60">
              <img src={p.image} alt={p.title} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
              <div className="p-4">
                <h3 className="text-slate-100 font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300/80">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-slate-800/80 ring-1 ring-white/10 px-2 py-1 text-[11px] text-slate-200">{t}</span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
