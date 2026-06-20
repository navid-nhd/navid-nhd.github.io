import React from 'react'
import { useReveal } from '../hooks/useReveal.js'
import { Briefcase, GraduationCap, ArrowRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'

// Structural (non-translatable) meta, matched by index to t.career.experience / education
const expMeta = [
  { icon: '🧩', color: 'violet' },
  { icon: '🏢', color: 'brand' },
]
const eduIcons = ['🎓', '⚛️', '💻']

const colorMap = {
  brand:  { dot: 'bg-brand-500', ring: 'ring-brand-500/30',  tag: 'bg-brand-500/10 text-brand-400',  border: 'border-brand-500/20'  },
  violet: { dot: 'bg-violet-500',ring: 'ring-violet-500/30', tag: 'bg-violet-500/10 text-violet-400', border: 'border-violet-500/20' },
}

export default function Career({ dark }) {
  const s1 = useReveal()
  const s2 = useReveal()
  const s3 = useReveal()
  const { t } = useLang()

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-20">

        {/* Header */}
        <div ref={s1} className="reveal text-center">
          <p className="text-brand-400 font-mono text-sm mb-3">{t.career.label}</p>
          <h1 className={`font-display font-bold text-5xl mb-4 ${dark ? 'text-white' : 'text-zinc-900'}`}>
            {t.career.titleA} <span className="text-gradient">{t.career.titleB}</span>
          </h1>
          <p className={`text-lg max-w-xl mx-auto ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
            {t.career.subtitle}
          </p>
        </div>

        {/* Experience timeline */}
        <div ref={s2} className="reveal">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-brand-500/10 flex items-center justify-center">
              <Briefcase size={17} className="text-brand-400" />
            </div>
            <h2 className={`font-display font-bold text-2xl ${dark ? 'text-white' : 'text-zinc-900'}`}>{t.career.expTitle}</h2>
          </div>

          <div className="relative ltr:pl-12 rtl:pr-12">
            {/* Line */}
            <div className="timeline-line" style={{background:dark ? 'linear-gradient(to bottom,#14b8a6,#14b8a620)' : 'linear-gradient(to bottom,#14b8a6,#14b8a615)'}} />

            <div className="space-y-8">
              {t.career.experience.map((e, i) => {
                const meta = expMeta[i] ?? expMeta[0]
                const c = colorMap[meta.color]
                return (
                  <div key={i} className="relative">
                    {/* Dot */}
                    <div className={`absolute ltr:-left-12 rtl:-right-12 top-5 w-3 h-3 rounded-full ${c.dot} ring-4 ${c.ring} ${dark ? 'ring-offset-[#080c10]' : 'ring-offset-[#f8fafb]'} ring-offset-2 z-10`} />

                    <div className={`rounded-3xl p-6 border transition-all hover:scale-[1.01]
                                     ${dark ? `bg-white/3 ${c.border} hover:border-opacity-40` : `bg-white border-zinc-100 shadow-sm hover:shadow-md`}`}
                         style={{borderInlineStartWidth: '2px', borderInlineStartColor: meta.color === 'brand' ? '#14b8a6' : '#8b5cf6'}}>

                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl">{meta.icon}</span>
                            <h3 className={`font-display font-bold text-lg ${dark ? 'text-white' : 'text-zinc-900'}`}>{e.role}</h3>
                          </div>
                          <p className={`text-sm ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>{e.company}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className={`text-xs font-mono px-3 py-1 rounded-full ${c.tag}`}>{e.period}</span>
                          <span className={`text-[11px] px-2 py-0.5 rounded-full ${dark ? 'bg-white/5 text-zinc-500' : 'bg-zinc-100 text-zinc-400'}`}>{e.type}</span>
                        </div>
                      </div>

                      <ul className="space-y-1.5 mb-4">
                        {e.highlights.map((h, j) => (
                          <li key={j} className={`flex items-start gap-2 text-sm ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                            <ArrowRight size={13} className="text-brand-400 flex-shrink-0 mt-0.5 rtl:rotate-180" />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {e.stack.map(s => (
                          <span key={s} className={`text-[11px] px-2.5 py-1 rounded-lg font-mono
                                                     ${dark ? 'bg-white/5 text-zinc-500' : 'bg-zinc-100 text-zinc-400'}`}>{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Education */}
        <div ref={s3} className="reveal">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-brand-500/10 flex items-center justify-center">
              <GraduationCap size={17} className="text-brand-400" />
            </div>
            <h2 className={`font-display font-bold text-2xl ${dark ? 'text-white' : 'text-zinc-900'}`}>{t.career.eduTitle}</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {t.career.education.map((e, i) => (
              <div key={i} className={`rounded-2xl p-5 ${dark ? 'bg-white/3 border border-white/5' : 'bg-white border border-zinc-100 shadow-sm'}`}>
                <span className="text-2xl mb-3 block">{eduIcons[i] ?? '🎓'}</span>
                <h3 className={`font-display font-semibold text-sm mb-1 ${dark ? 'text-white' : 'text-zinc-900'}`}>{e.degree}</h3>
                <p className="text-brand-400 text-xs font-medium mb-1">{e.school}</p>
                <p className={`text-xs font-mono mb-2 ${dark ? 'text-zinc-600' : 'text-zinc-400'}`}>{e.period}</p>
                <p className={`text-xs leading-relaxed ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
