import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())

    try {
      // This demo just simulates success
      await new Promise((r) => setTimeout(r, 700))
      setStatus({ ok: true, message: "Thanks! I’ll be in touch soon." })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-3xl font-bold text-white tracking-tight">Let’s build something</h2>
          <p className="mt-2 text-slate-300/90">Have a project in mind or want to say hello? Drop a message below.</p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-slate-800/60 ring-1 ring-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-cyan-400/40" />
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl bg-slate-800/60 ring-1 ring-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-cyan-400/40" />
            </div>
            <input name="subject" placeholder="Subject" className="w-full rounded-xl bg-slate-800/60 ring-1 ring-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-cyan-400/40" />
            <textarea name="message" required placeholder="Your message" rows={5} className="w-full rounded-xl bg-slate-800/60 ring-1 ring-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-cyan-400/40" />
            <button type="submit" className="inline-flex justify-center rounded-xl bg-white text-slate-900 px-4 py-3 font-semibold shadow hover:shadow-lg transition-shadow">Send message</button>
          </form>

          {status && (
            <div className={`mt-4 rounded-lg px-4 py-3 text-sm ${status.ok ? 'bg-emerald-500/10 text-emerald-300' : 'bg-red-500/10 text-red-300'}`}>
              {status.message}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
