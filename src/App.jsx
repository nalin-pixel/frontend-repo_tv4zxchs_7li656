import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Decorative backdrop */}
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1000px_400px_at_10%_-10%,rgba(34,197,94,0.08),transparent),radial-gradient(1200px_600px_at_90%_-10%,rgba(8,145,178,0.08),transparent)]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Abel. All rights reserved.</p>
          <div className="text-sm text-slate-400">Built with love and a bit of caffeine.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
