import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Sparkles, Star, Zap, Globe, Code, Layers, ChevronDown } from 'lucide-react'
import { useReveal } from '../hooks/useReveal.js'
import { useLang } from '../i18n/LanguageContext.jsx'

const techStack = [
  'React.js','Vue.js','Nuxt.js','TypeScript','Tailwind CSS','Next.js',
  'Vite','Pinia','Redux','SCSS','Framer Motion','GraphQL',
  'React.js','Vue.js','Nuxt.js','TypeScript','Tailwind CSS','Next.js',
  'Vite','Pinia','Redux','SCSS','Framer Motion','GraphQL',
]

const statIcons = [Star, Layers, Sparkles, Zap]

const featured = [
  {
    title: 'Alef Ba Tour',
    url: 'https://www.alefbatour.com',
    tags: ['Nuxt.js', 'Vue.js', 'SSR'],
    color: 'from-brand-500 to-cyan-500',
    img: '/images/projects/alefbatour.webp',
  },
  {
    title: 'Trip.ir',
    url: 'https://www.trip.ir',
    tags: ['Vue.js', '.NET Core MVC', 'MPA'],
    color: 'from-blue-500 to-indigo-600',
    img: '/images/projects/trip-8886.webp',
  },
]

function TypeWriter({ words }) {
  const [text, setText]   = useState('')
  const [wIdx, setWIdx]   = useState(0)
  const [phase, setPhase] = useState('type')
  const [cIdx, setCIdx]   = useState(0)

  // Reset when the word list (language) changes
  useEffect(() => { setText(''); setWIdx(0); setPhase('type'); setCIdx(0) }, [words])

  useEffect(() => {
    const word = words[wIdx] ?? ''
    if (phase === 'type') {
      if (cIdx < word.length) {
        const t = setTimeout(() => { setText(word.slice(0, cIdx+1)); setCIdx(c=>c+1) }, 80)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('pause'), 1400)
        return () => clearTimeout(t)
      }
    }
    if (phase === 'pause') {
      const t = setTimeout(() => setPhase('delete'), 400)
      return () => clearTimeout(t)
    }
    if (phase === 'delete') {
      if (cIdx > 0) {
        const t = setTimeout(() => { setText(word.slice(0, cIdx-1)); setCIdx(c=>c-1) }, 45)
        return () => clearTimeout(t)
      } else {
        setWIdx(w => (w+1) % words.length)
        setPhase('type')
      }
    }
  }, [phase, cIdx, wIdx, words])

  return (
    <span className="text-gradient">
      {text}
      <span className="animate-pulse text-brand-400">|</span>
    </span>
  )
}

function FloatingBadge({ children, className }) {
  return (
    <div className={`absolute glass rounded-2xl px-4 py-2.5 shadow-xl border border-white/10
                     flex items-center gap-2 text-xs font-body font-medium ${className}`}>
      {children}
    </div>
  )
}

export default function Home({ dark }) {
  const s1 = useReveal()
  const s2 = useReveal()
  const { t } = useLang()

  return (
    <main className="pt-24">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background mesh */}
        <div className="absolute inset-0 mesh-gradient" />
        <div className={`absolute inset-0 ${dark
          ? 'bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#14b8a620,transparent)]'
          : 'bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#14b8a610,transparent)]'}`}
        />

        {/* Grid pattern */}
        <div className={`absolute inset-0 opacity-[0.03] ${dark ? 'invert-0' : 'invert'}`}
          style={{backgroundImage:'linear-gradient(#14b8a6 1px,transparent 1px),linear-gradient(90deg,#14b8a6 1px,transparent 1px)',backgroundSize:'60px 60px'}}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div className="flex flex-col gap-6 min-w-0">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium
                             border w-fit
                             ${dark ? 'border-brand-500/30 bg-brand-500/10 text-brand-400'
                                    : 'border-brand-500/20 bg-brand-50 text-brand-600'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              {t.home.available}
            </div>

            {/* Headline */}
            <div>
              <h1 className={`font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-3
                              ${dark ? 'text-white' : 'text-zinc-900'}`}>
                {t.home.hi}<br />
                <span className={dark ? 'text-zinc-100' : 'text-zinc-900'}>{t.home.name}</span>
              </h1>
              <div className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight whitespace-nowrap min-h-[3rem] sm:min-h-[3.75rem] lg:min-h-[4.5rem]">
                <TypeWriter words={t.home.roles} />
              </div>
            </div>

            {/* Description */}
            <p className={`text-lg leading-relaxed max-w-md font-body
                           ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              {t.home.descA}
              <span className="text-brand-400 font-medium"> {t.home.descYears} </span>
              {t.home.descB} <span className="text-brand-400 font-medium">{t.home.descLocation}</span>.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-500 text-white
                           font-medium shadow-lg shadow-brand-500/30 hover:bg-brand-400
                           hover:shadow-brand-500/50 hover:scale-105 transition-all"
              >
                {t.home.viewProjects} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
              <a
                href="/cv.pdf"
                download="Navid-Nahardani-Resume.pdf"
                className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl font-medium
                            border transition-all hover:scale-105
                            ${dark ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
                                   : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 shadow-sm'}`}
              >
                <Download size={16} /> {t.home.downloadCv}
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2 rtl:space-x-reverse">
                {['🧑‍💻','👩‍💼','🧑‍🎨','👨‍💼'].map((e,i)=>(
                  <div key={i} className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm
                                           ${dark ? 'border-[#080c10] bg-zinc-800' : 'border-white bg-zinc-100'}`}>
                    {e}
                  </div>
                ))}
              </div>
              <p className={`text-sm ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                <span className="font-semibold text-brand-400">{t.home.satisfiedA}</span> {t.home.satisfiedB}
              </p>
            </div>
          </div>

          {/* Right — avatar card */}
          <div className="relative flex justify-center">
            {/* Rotating ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full border border-brand-500/20 rotate-border"
                style={{background:'conic-gradient(from 0deg, #14b8a600, #14b8a622, #14b8a600)'}}
              />
            </div>

            {/* Avatar */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden
                            ring-4 ring-brand-500/30 shadow-2xl shadow-brand-500/20 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-400 via-cyan-500 to-blue-600
                              flex items-center justify-center">
                <span className="font-display font-bold text-8xl text-white/90">N</span>
              </div>
            </div>

            {/* Floating badges */}
            <FloatingBadge className={`-top-4 -right-4 ${dark ? 'text-white' : 'text-zinc-800'}`}>
              <Code size={14} className="text-brand-400" />
              {t.home.badgeExpert}
            </FloatingBadge>

            <FloatingBadge className={`bottom-8 -left-8 ${dark ? 'text-white' : 'text-zinc-800'}`}>
              <Globe size={14} className="text-blue-400" />
              {t.home.badgeLocation}
            </FloatingBadge>

            <FloatingBadge className={`top-1/2 -right-8 ${dark ? 'text-white' : 'text-zinc-800'}`}>
              <Zap size={14} className="text-yellow-400" />
              {t.home.badgeYears}
            </FloatingBadge>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#stats"
           className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1
                        text-xs ${dark ? 'text-zinc-500' : 'text-zinc-400'} animate-bounce`}>
          <span>{t.home.scroll}</span>
          <ChevronDown size={14} />
        </a>
      </section>

      {/* ── Stats ───────────────────────────────────────────── */}
      <section id="stats" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div ref={s1} className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.home.stats.map(({ value, label }, i) => {
              const Icon = statIcons[i]
              return (
                <div
                  key={i}
                  className={`relative group rounded-3xl p-6 text-center transition-all duration-300
                               hover:-translate-y-1 overflow-hidden
                               ${dark ? 'bg-white/3 border border-white/5 hover:border-brand-500/20'
                                      : 'bg-white border border-zinc-100 shadow-sm hover:shadow-md'}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-10 h-10 rounded-2xl bg-brand-500/10 flex items-center justify-center mx-auto mb-3">
                      <Icon size={18} className="text-brand-400" />
                    </div>
                    <p className={`font-display font-bold text-3xl mb-1 ${dark ? 'text-white' : 'text-zinc-900'}`}>{value}</p>
                    <p className={`text-sm ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>{label}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Tech marquee ─────────────────────────────────────── */}
      <section className={`py-10 border-y overflow-hidden ${dark ? 'border-white/5' : 'border-zinc-100'}`}>
        <div className="marquee-inner">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className={`font-display font-semibold text-sm uppercase tracking-widest
                          ${i % 3 === 0 ? 'text-brand-400' : dark ? 'text-zinc-600' : 'text-zinc-300'}`}
            >
              {tech}
              <span className="ml-12 text-brand-500/40">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── Featured projects preview ────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div ref={s2} className="reveal">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-brand-400 font-mono text-sm mb-2">{t.home.selectedWork}</p>
                <h2 className={`font-display font-bold text-4xl ${dark ? 'text-white' : 'text-zinc-900'}`}>
                  {t.home.featured}
                </h2>
              </div>
              <Link
                to="/projects"
                className="hidden sm:flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 font-medium transition-colors"
              >
                {t.home.viewAll} <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((p, i) => (
                <a
                  key={i}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`project-card group relative rounded-3xl overflow-hidden block
                              ${dark ? 'bg-white/3 border border-white/5 hover:border-brand-500/20'
                                     : 'bg-white border border-zinc-100 shadow-sm hover:shadow-xl'}`}
                >
                  <div className={`h-64 bg-gradient-to-br ${p.color} relative overflow-hidden`}>
                    <div className="absolute inset-2 rounded-xl overflow-hidden flex flex-col">
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-black/40 flex-shrink-0" dir="ltr">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="ml-2 text-[9px] text-white/50 font-mono">{p.url.replace('https://www.','')}</span>
                      </div>
                      <img src={p.img} alt={p.title} loading="lazy"
                        className="w-full flex-1 min-h-0 object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.tags.map(t2 => (
                        <span key={t2} className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium
                                                  ${dark ? 'bg-white/5 text-zinc-400' : 'bg-zinc-100 text-zinc-500'}`}>
                          {t2}
                        </span>
                      ))}
                    </div>
                    <h3 className={`font-display font-bold text-xl mb-2 ${dark ? 'text-white' : 'text-zinc-900'}`}>{p.title}</h3>
                    <p className={`text-sm leading-relaxed ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>{t.home.featuredItems[i].desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-brand-400 text-sm font-medium">
                      {t.home.visitLive} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform rtl:rotate-180" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
