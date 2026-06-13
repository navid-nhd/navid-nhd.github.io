import React from 'react'
import { useReveal } from '../hooks/useReveal.js'
import { Briefcase, GraduationCap, Award, Code2, ArrowRight } from 'lucide-react'

const experience = [
  {
    role: 'Senior Frontend Developer',
    company: 'TechVision Studio',
    period: '2023 – Present',
    type: 'Full-time',
    icon: '🏢',
    color: 'brand',
    highlights: [
      'Led frontend architecture for 8+ enterprise SaaS products',
      'Reduced bundle size by 42% through code splitting & lazy loading',
      'Mentored 3 junior developers and established code review processes',
      'Built a reusable component library used across 5 projects',
      'Implemented micro-frontend architecture using Module Federation',
    ],
    stack: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'GraphQL'],
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Creatives Agency',
    period: '2022 – 2023',
    type: 'Full-time',
    icon: '🎨',
    color: 'violet',
    highlights: [
      'Built 15+ client websites with pixel-perfect designs from Figma',
      'Developed interactive landing pages achieving 35% higher conversion',
      'Integrated REST APIs, payment gateways (Stripe, ZarinPal)',
      'Improved Lighthouse performance scores from 60 to 95+ average',
      'Collaborated closely with UI/UX designers on design systems',
    ],
    stack: ['Vue.js', 'Nuxt.js', 'JavaScript', 'SCSS', 'Figma'],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'StartUp Hub Tehran',
    period: '2021 – 2022',
    type: 'Full-time',
    icon: '🚀',
    color: 'blue',
    highlights: [
      'Built responsive UIs for 3 startup MVPs under tight deadlines',
      'Learned React.js and modern state management patterns',
      'Participated in daily agile sprints and sprint retrospectives',
      'Created reusable form components reducing dev time by 30%',
    ],
    stack: ['React', 'JavaScript', 'CSS3', 'Bootstrap', 'REST APIs'],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2020 – 2021',
    type: 'Freelance',
    icon: '💻',
    color: 'amber',
    highlights: [
      'Delivered 10+ freelance projects for local businesses',
      'Built e-commerce stores with WordPress & WooCommerce',
      'Started learning React.js and modern JavaScript',
      'Developed strong client communication & project management skills',
    ],
    stack: ['HTML/CSS', 'JavaScript', 'WordPress', 'PHP', 'MySQL'],
  },
]

const education = [
  {
    degree: "Bachelor's — Computer Engineering",
    school: 'University of Tehran',
    period: '2012 – 2016',
    icon: '🎓',
    desc: 'Focused on software engineering, algorithms, and database systems.',
  },
  {
    degree: 'React.js Advanced Course',
    school: 'Maktabkhooneh (Online)',
    period: '2020',
    icon: '⚛️',
    desc: 'Comprehensive React ecosystem including hooks, Redux, and performance optimization.',
  },
  {
    degree: 'UI/UX Design Fundamentals',
    school: 'Coursera (Google)',
    period: '2022',
    icon: '🎨',
    desc: 'User research, wireframing, prototyping, and usability testing.',
  },
]

const certifications = [
  { name: 'Meta Frontend Developer',       issuer: 'Meta',          year: '2023', icon: '🏆' },
  { name: 'JavaScript Algorithms',          issuer: 'freeCodeCamp',  year: '2021', icon: '🥇' },
  { name: 'Responsive Web Design',          issuer: 'freeCodeCamp',  year: '2020', icon: '🥈' },
  { name: 'Vue.js 3 Masterclass',           issuer: 'Udemy',         year: '2022', icon: '🎖️' },
  { name: 'Advanced TypeScript',            issuer: 'Scrimba',       year: '2023', icon: '📜' },
]

const colorMap = {
  brand:  { dot: 'bg-brand-500', ring: 'ring-brand-500/30',  tag: 'bg-brand-500/10 text-brand-400',  border: 'border-brand-500/20'  },
  violet: { dot: 'bg-violet-500',ring: 'ring-violet-500/30', tag: 'bg-violet-500/10 text-violet-400', border: 'border-violet-500/20' },
  blue:   { dot: 'bg-blue-500',  ring: 'ring-blue-500/30',   tag: 'bg-blue-500/10 text-blue-400',    border: 'border-blue-500/20'   },
  amber:  { dot: 'bg-amber-500', ring: 'ring-amber-500/30',  tag: 'bg-amber-500/10 text-amber-400',  border: 'border-amber-500/20'  },
}

export default function Career({ dark }) {
  const s1 = useReveal()
  const s2 = useReveal()
  const s3 = useReveal()

  return (
    <main className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-24">

        {/* Header */}
        <div ref={s1} className="reveal text-center">
          <p className="text-brand-400 font-mono text-sm mb-3">// work history</p>
          <h1 className={`font-display font-bold text-5xl mb-4 ${dark ? 'text-white' : 'text-zinc-900'}`}>
            Career <span className="text-gradient">Timeline</span>
          </h1>
          <p className={`text-lg max-w-xl mx-auto ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
            5 years of building exceptional web experiences, growing from junior dev
            to leading frontend architecture.
          </p>
        </div>

        {/* Experience timeline */}
        <div ref={s2} className="reveal">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-brand-500/10 flex items-center justify-center">
              <Briefcase size={17} className="text-brand-400" />
            </div>
            <h2 className={`font-display font-bold text-2xl ${dark ? 'text-white' : 'text-zinc-900'}`}>Experience</h2>
          </div>

          <div className="relative pl-12">
            {/* Line */}
            <div className="timeline-line" style={{background:dark ? 'linear-gradient(to bottom,#14b8a6,#14b8a620)' : 'linear-gradient(to bottom,#14b8a6,#14b8a615)'}} />

            <div className="space-y-8">
              {experience.map((e, i) => {
                const c = colorMap[e.color]
                return (
                  <div key={i} className="relative">
                    {/* Dot */}
                    <div className={`absolute -left-12 top-5 w-3 h-3 rounded-full ${c.dot} ring-4 ${c.ring} ${dark ? 'ring-offset-[#080c10]' : 'ring-offset-[#f8fafb]'} ring-offset-2 z-10`} />

                    <div className={`rounded-3xl p-6 border transition-all hover:scale-[1.01]
                                     ${dark ? `bg-white/3 ${c.border} hover:border-opacity-40` : `bg-white border-zinc-100 shadow-sm hover:shadow-md`}`}
                         style={{borderLeftWidth: '2px', borderLeftColor: e.color === 'brand' ? '#14b8a6' : e.color === 'violet' ? '#8b5cf6' : e.color === 'blue' ? '#3b82f6' : '#f59e0b'}}>

                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl">{e.icon}</span>
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
                            <ArrowRight size={13} className="text-brand-400 flex-shrink-0 mt-0.5" />
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
            <h2 className={`font-display font-bold text-2xl ${dark ? 'text-white' : 'text-zinc-900'}`}>Education & Learning</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {education.map((e, i) => (
              <div key={i} className={`rounded-2xl p-5 ${dark ? 'bg-white/3 border border-white/5' : 'bg-white border border-zinc-100 shadow-sm'}`}>
                <span className="text-2xl mb-3 block">{e.icon}</span>
                <h3 className={`font-display font-semibold text-sm mb-1 ${dark ? 'text-white' : 'text-zinc-900'}`}>{e.degree}</h3>
                <p className="text-brand-400 text-xs font-medium mb-1">{e.school}</p>
                <p className={`text-xs font-mono mb-2 ${dark ? 'text-zinc-600' : 'text-zinc-400'}`}>{e.period}</p>
                <p className={`text-xs leading-relaxed ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>{e.desc}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-brand-500/10 flex items-center justify-center">
              <Award size={17} className="text-brand-400" />
            </div>
            <h2 className={`font-display font-bold text-2xl ${dark ? 'text-white' : 'text-zinc-900'}`}>Certifications</h2>
          </div>

          <div className="space-y-3">
            {certifications.map((c, i) => (
              <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl transition-all hover:scale-[1.01]
                                       ${dark ? 'bg-white/3 border border-white/5 hover:border-brand-500/20'
                                              : 'bg-white border border-zinc-100 shadow-sm hover:shadow-md'}`}>
                <span className="text-xl flex-shrink-0">{c.icon}</span>
                <div className="flex-1">
                  <p className={`text-sm font-semibold ${dark ? 'text-zinc-200' : 'text-zinc-700'}`}>{c.name}</p>
                  <p className={`text-xs ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>{c.issuer}</p>
                </div>
                <span className={`text-xs font-mono px-3 py-1 rounded-full ${dark ? 'bg-white/5 text-zinc-500' : 'bg-zinc-100 text-zinc-400'}`}>{c.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
