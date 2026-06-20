import React, { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import { MapPin, Phone, Coffee, Code2, Palette, Star, Heart } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'

const skills = [
  { name: 'React.js',      pct: 95, cat: 'Framework'  },
  { name: 'Vue.js / Nuxt', pct: 90, cat: 'Framework'  },
  { name: 'TypeScript',    pct: 85, cat: 'Language'   },
  { name: 'Tailwind CSS',  pct: 95, cat: 'Styling'    },
  { name: 'Next.js',       pct: 80, cat: 'Framework'  },
  { name: 'JavaScript',    pct: 95, cat: 'Language'   },
  { name: 'SCSS / CSS',    pct: 88, cat: 'Styling'    },
  { name: 'Pinia / Redux', pct: 82, cat: 'State'      },
  { name: 'Framer Motion', pct: 78, cat: 'Animation'  },
  { name: 'Git / GitHub',  pct: 88, cat: 'Tools'      },
  { name: 'REST APIs',     pct: 90, cat: 'Integration'},
  { name: 'Vite / Webpack',pct: 80, cat: 'Build'      },
]

const tools = [
  '⚡ VS Code','🎨 Figma','🐙 GitHub','📦 npm / pnpm','🔧 Postman',
  '🐳 Docker','🌐 GitHub Pages','📊 Storybook','🧩 wagmi / viem',
]

// matched by index to t.about.details and t.about.interests
const detailIcons = ['👤', '💼', '📅', MapPin, Phone, Star, '🎓', Coffee]
const interestIcons = [Code2, Palette, Coffee, Heart]

function OrbitingSphere() {
  const cx = 140, cy = 140
  const orbits = [
    { rx: 62,  ry: 20, angle:  0,  speed: 5,  begin: '0s',  color: '#14b8a6', r: 5 },
    { rx: 90,  ry: 29, angle: 58,  speed: 9,  begin: '-3s', color: '#a78bfa', r: 4 },
    { rx: 116, ry: 36, angle:-42,  speed: 13, begin: '-6s', color: '#60a5fa', r: 5 },
    { rx: 136, ry: 18, angle: 28,  speed: 17, begin: '-9s', color: '#f97316', r: 3 },
  ]
  return (
    <>
      <style>{`
        @keyframes cwv-glow{0%,100%{box-shadow:0 0 32px #14b8a680,0 0 64px #14b8a640}50%{box-shadow:0 0 52px #14b8a6b0,0 0 104px #14b8a665}}
      `}</style>
      <div style={{ position:'relative', width:280, height:280, flexShrink:0 }}>
        <svg width="280" height="280" style={{ position:'absolute', inset:0, overflow:'visible' }}>
          <defs>
            {orbits.map((o,i) => (
              <path key={i} id={`op${i}`}
                d={`M ${cx+o.rx},${cy} A ${o.rx},${o.ry} 0 0,1 ${cx-o.rx},${cy} A ${o.rx},${o.ry} 0 0,1 ${cx+o.rx},${cy}`}
                fill="none" />
            ))}
          </defs>
          {orbits.map((o,i) => (
            <g key={i} transform={`rotate(${o.angle},${cx},${cy})`}>
              <use href={`#op${i}`} stroke={`${o.color}45`} strokeWidth="1.5" />
              <circle r={o.r} fill={o.color} style={{ filter:`drop-shadow(0 0 5px ${o.color})` }}>
                <animateMotion dur={`${o.speed}s`} repeatCount="indefinite" begin={o.begin}>
                  <mpath href={`#op${i}`} />
                </animateMotion>
              </circle>
            </g>
          ))}
        </svg>
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', zIndex:20 }}>
          <div style={{
            width:76, height:76, borderRadius:'50%',
            background:'linear-gradient(135deg,#14b8a6 0%,#0891b2 55%,#1d4ed8 100%)',
            animation:'cwv-glow 3s ease-in-out infinite',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:28, color:'white', fontWeight:'bold',
          }}>N</div>
        </div>
      </div>
    </>
  )
}

function SkillBar({ name, pct, cat, dark }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => { el.style.width = pct + '%' }, 100)
        observer.disconnect()
      }
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [pct])

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className={`text-sm font-medium ${dark ? 'text-zinc-200' : 'text-zinc-700'}`}>{name}</span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono
                            ${dark ? 'bg-white/5 text-zinc-500' : 'bg-zinc-100 text-zinc-400'}`}>{cat}</span>
        </div>
        <span className="text-xs font-mono text-brand-400">{pct}%</span>
      </div>
      <div className={`h-1.5 rounded-full overflow-hidden ${dark ? 'bg-white/5' : 'bg-zinc-100'}`}>
        <div ref={ref} className="skill-bar-fill" />
      </div>
    </div>
  )
}

export default function About({ dark }) {
  const s1 = useReveal()
  const s2 = useReveal()
  const s3 = useReveal()
  const { t } = useLang()

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-24">

        {/* Header */}
        <div ref={s1} className="reveal">
          <div className="grid md:grid-cols-[1fr_300px] gap-10 items-center">
            <div className="text-center md:text-start">
              <p className="text-brand-400 font-mono text-sm mb-3">{t.about.label}</p>
              <h1 className={`font-display font-bold text-5xl mb-6 ${dark ? 'text-white' : 'text-zinc-900'}`}>
                {t.about.titleA}<br />
                <span className="text-gradient">{t.about.titleB}</span>
              </h1>
              <p className={`text-lg max-w-2xl leading-relaxed ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {t.about.intro}
              </p>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <OrbitingSphere />
            </div>
          </div>
        </div>

        {/* Personal info card */}
        <div ref={s2} className="reveal grid md:grid-cols-2 gap-8 items-start">

          {/* Info */}
          <div className={`rounded-3xl p-8 ${dark ? 'bg-white/3 border border-white/5' : 'bg-white border border-zinc-100 shadow-sm'}`}>
            <h2 className={`font-display font-bold text-2xl mb-6 ${dark ? 'text-white' : 'text-zinc-900'}`}>
              {t.about.detailsTitle}
            </h2>
            <ul className="space-y-5">
              {t.about.details.map(({ label, value }, i) => {
                const icon = detailIcons[i]
                const Icon = typeof icon === 'string' ? null : icon
                return (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0 text-sm">
                      {Icon ? <Icon size={16} className="text-brand-400" /> : icon}
                    </div>
                    <div>
                      <p className={`text-xs mb-0.5 ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>{label}</p>
                      <p className={`text-sm font-medium ${dark ? 'text-zinc-100' : 'text-zinc-800'}`} dir={label === 'تلفن' || label === 'Phone' ? 'ltr' : undefined}>{value}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Story */}
          <div className="space-y-6">
            <div className={`rounded-3xl p-8 ${dark ? 'bg-white/3 border border-white/5' : 'bg-white border border-zinc-100 shadow-sm'}`}>
              <h2 className={`font-display font-bold text-2xl mb-4 ${dark ? 'text-white' : 'text-zinc-900'}`}>
                {t.about.storyTitle}
              </h2>
              <div className={`space-y-4 text-sm leading-relaxed ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {t.about.story.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            {/* Interests */}
            <div className="grid grid-cols-2 gap-3">
              {t.about.interests.map(({ label, desc }, i) => {
                const Icon = interestIcons[i] ?? Code2
                return (
                  <div key={i} className={`rounded-2xl p-4 ${dark ? 'bg-white/3 border border-white/5 hover:border-brand-500/20' : 'bg-white border border-zinc-100 hover:border-brand-200 shadow-sm'} transition-all`}>
                    <div className="w-8 h-8 rounded-xl bg-brand-500/10 flex items-center justify-center mb-2">
                      <Icon size={15} className="text-brand-400" />
                    </div>
                    <p className={`text-xs font-semibold mb-0.5 ${dark ? 'text-zinc-200' : 'text-zinc-700'}`}>{label}</p>
                    <p className={`text-[11px] ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>{desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div ref={s3} className="reveal">
          <div className="text-center mb-10">
            <p className="text-brand-400 font-mono text-sm mb-2">{t.about.skillsLabel}</p>
            <h2 className={`font-display font-bold text-4xl ${dark ? 'text-white' : 'text-zinc-900'}`}>
              {t.about.skillsTitle}
            </h2>
          </div>

          <div className={`rounded-3xl p-8 ${dark ? 'bg-white/3 border border-white/5' : 'bg-white border border-zinc-100 shadow-sm'}`}>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
              {skills.map((s) => (
                <SkillBar key={s.name} name={s.name} pct={s.pct} cat={t.about.skillCats[s.cat] || s.cat} dark={dark} />
              ))}
            </div>
          </div>

          {/* Tools chips */}
          <div className="mt-8">
            <p className={`text-sm font-medium mb-4 ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>{t.about.alsoComfortable}</p>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <span key={i} className={`px-4 py-2 rounded-full text-sm font-mono
                                          ${dark ? 'bg-white/5 text-zinc-400 hover:bg-white/8 hover:text-zinc-200'
                                                 : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700'}
                                          transition-all cursor-default`}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
