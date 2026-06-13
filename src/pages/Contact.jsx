import React, { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare, Clock, CheckCircle, AlertCircle } from 'lucide-react'

const socials = [
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/navid',    handle: '@navid-nahardani', color: 'hover:border-zinc-400' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/navid',handle: 'Navid Nahardani',  color: 'hover:border-blue-400'  },
  { icon: Twitter,  label: 'Twitter',  href: 'https://twitter.com/navid',   handle: '@navid_dev',       color: 'hover:border-sky-400'   },
]

const services = [
  { icon: '⚛️', title: 'React Development',  desc: 'SPAs, dashboards, component libraries' },
  { icon: '💚', title: 'Vue / Nuxt',          desc: 'SSR apps, admin panels, landing pages' },
  { icon: '🎨', title: 'UI Implementation',   desc: 'Pixel-perfect Figma to code conversion' },
  { icon: '⚡', title: 'Performance Audits',  desc: 'Lighthouse optimisation & Core Web Vitals' },
]

export default function Contact({ dark }) {
  const s1 = useReveal()

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate API call
    await new Promise(r => setTimeout(r, 1800))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  const inputCls = `w-full px-4 py-3 rounded-2xl text-sm outline-none transition-all border
    ${dark
      ? 'bg-white/5 border-white/10 text-zinc-100 placeholder-zinc-600 focus:border-brand-500/60 focus:bg-white/8'
      : 'bg-zinc-50 border-zinc-200 text-zinc-800 placeholder-zinc-400 focus:border-brand-400 focus:bg-white focus:shadow-sm'}`

  return (
    <main className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">

        {/* Header */}
        <div ref={s1} className="reveal text-center">
          <p className="text-brand-400 font-mono text-sm mb-3">// get in touch</p>
          <h1 className={`font-display font-bold text-5xl mb-4 ${dark ? 'text-white' : 'text-zinc-900'}`}>
            Let's <span className="text-gradient">Work Together</span>
          </h1>
          <p className={`text-lg max-w-xl mx-auto ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
            Have a project in mind? Looking for a frontend developer? Or just want to say hello?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Left — info */}
          <div className="lg:col-span-2 space-y-5">

            {/* Contact details */}
            <div className={`rounded-3xl p-6 ${dark ? 'bg-white/3 border border-white/5' : 'bg-white border border-zinc-100 shadow-sm'}`}>
              <h2 className={`font-display font-bold text-lg mb-5 ${dark ? 'text-white' : 'text-zinc-900'}`}>Contact Info</h2>
              <ul className="space-y-4">
                {[
                  { icon: Mail,    label: 'Email',    value: 'navid.nahardani@gmail.com', href: 'mailto:navid.nahardani@gmail.com' },
                  { icon: Phone,   label: 'Phone',    value: '+98 912 806 6948',           href: 'tel:+989128066948' },
                  { icon: MapPin,  label: 'Location', value: 'Tehran, Iran',               href: null },
                  { icon: Clock,   label: 'Timezone', value: 'IRST (UTC+3:30)',             href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-brand-400" />
                    </div>
                    <div>
                      <p className={`text-[11px] ${dark ? 'text-zinc-600' : 'text-zinc-400'}`}>{label}</p>
                      {href
                        ? <a href={href} className={`text-sm font-medium hover:text-brand-400 transition-colors ${dark ? 'text-zinc-200' : 'text-zinc-700'}`}>{value}</a>
                        : <p className={`text-sm font-medium ${dark ? 'text-zinc-200' : 'text-zinc-700'}`}>{value}</p>
                      }
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability */}
            <div className={`rounded-3xl p-6 border ${dark ? 'border-brand-500/20 bg-brand-500/5' : 'border-brand-200 bg-brand-50'}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                <p className="text-brand-400 font-semibold text-sm">Available for Work</p>
              </div>
              <p className={`text-xs leading-relaxed ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Currently open to freelance projects and full-time opportunities.
                Typical response within <strong className="text-brand-400">24 hours</strong>.
              </p>
            </div>

            {/* Socials */}
            <div className={`rounded-3xl p-6 ${dark ? 'bg-white/3 border border-white/5' : 'bg-white border border-zinc-100 shadow-sm'}`}>
              <h3 className={`font-display font-bold text-sm mb-4 ${dark ? 'text-zinc-300' : 'text-zinc-600'}`}>Find Me Online</h3>
              <div className="space-y-2">
                {socials.map(({ icon: Icon, label, href, handle, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-2xl border transition-all hover:scale-[1.02]
                                ${dark ? `border-white/5 hover:bg-white/5 ${color}` : `border-zinc-100 hover:bg-zinc-50 ${color}`}`}
                  >
                    <Icon size={16} className={`${dark ? 'text-zinc-400' : 'text-zinc-500'}`} />
                    <div>
                      <p className={`text-xs font-semibold ${dark ? 'text-zinc-200' : 'text-zinc-700'}`}>{label}</p>
                      <p className={`text-[11px] ${dark ? 'text-zinc-600' : 'text-zinc-400'}`}>{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className={`rounded-3xl p-6 ${dark ? 'bg-white/3 border border-white/5' : 'bg-white border border-zinc-100 shadow-sm'}`}>
              <h3 className={`font-display font-bold text-sm mb-4 ${dark ? 'text-zinc-300' : 'text-zinc-600'}`}>Services I Offer</h3>
              <div className="space-y-3">
                {services.map(({ icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">{icon}</span>
                    <div>
                      <p className={`text-xs font-semibold ${dark ? 'text-zinc-200' : 'text-zinc-700'}`}>{title}</p>
                      <p className={`text-[11px] ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className={`rounded-3xl p-8 ${dark ? 'bg-white/3 border border-white/5' : 'bg-white border border-zinc-100 shadow-sm'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-brand-500/10 flex items-center justify-center">
                  <MessageSquare size={17} className="text-brand-400" />
                </div>
                <h2 className={`font-display font-bold text-xl ${dark ? 'text-white' : 'text-zinc-900'}`}>Send a Message</h2>
              </div>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center gap-3">
                  <CheckCircle size={18} className="text-brand-400 flex-shrink-0" />
                  <p className="text-sm text-brand-400 font-medium">Message sent successfully! I'll reply within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>Your Name *</label>
                    <input
                      name="name" required value={form.name} onChange={handleChange}
                      placeholder="John Doe"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>Email Address *</label>
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>Subject *</label>
                  <input
                    name="subject" required value={form.subject} onChange={handleChange}
                    placeholder="Project inquiry / Freelance work / Just saying hi"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>Message *</label>
                  <textarea
                    name="message" required value={form.message} onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and budget..."
                    rows={6}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl
                             bg-brand-500 text-white font-semibold
                             shadow-lg shadow-brand-500/25 hover:bg-brand-400
                             hover:shadow-brand-500/40 hover:scale-[1.02]
                             disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100
                             transition-all"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
