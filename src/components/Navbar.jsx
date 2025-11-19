import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-slate-200 hover:text-white/90 transition-colors px-3 py-2 rounded-md"
  >
    {children}
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex h-14 items-center justify-between px-4">
            <a href="#home" className="flex items-center gap-2" onClick={handleClick}>
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 shadow ring-1 ring-white/20" />
              <span className="font-semibold text-slate-100 tracking-tight">Abel</span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <div className="mx-2 h-6 w-px bg-white/10" />
              <a href="mailto:hello@yourdomain.com" className="p-2 rounded-md hover:bg-white/5 text-slate-200" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-200" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-200" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </nav>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-200 hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="flex flex-col gap-1">
                <NavLink href="#home" onClick={handleClick}>Home</NavLink>
                <NavLink href="#about" onClick={handleClick}>About</NavLink>
                <NavLink href="#projects" onClick={handleClick}>Projects</NavLink>
                <NavLink href="#contact" onClick={handleClick}>Contact</NavLink>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <a href="mailto:hello@yourdomain.com" className="p-2 rounded-md hover:bg-white/5 text-slate-200" aria-label="Email">
                  <Mail size={18} />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-200" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-200" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
