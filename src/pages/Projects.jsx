import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { useReveal } from '../hooks/useReveal.js'
import { ExternalLink, Github, Eye, X, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'

const DEMO_FILES = [
  '/videos/alefbatour.mp4',
  '/videos/electronics-store.mp4',
  '/videos/veterinary-hospital.mp4',
  '/videos/dental-equipment-store.mp4',
]

function VideoCard({ file, title, desc, dark }) {
  const [playing, setPlaying] = useState(false)
  const ref = React.useRef(null)
  const handlePlay = () => { setPlaying(true); setTimeout(() => ref.current?.play(), 50) }
  const card = dark
    ? 'bg-white/[0.03] border border-white/5 hover:border-brand-500/20'
    : 'bg-white border border-zinc-100 shadow-sm'

  return (
    <div className={`rounded-2xl overflow-hidden ${card} transition-all`}>
      <div className="relative aspect-video bg-zinc-900">
        <video ref={ref} src={file} preload="none" controls={playing} playsInline
          className="w-full h-full object-cover" onEnded={() => setPlaying(false)} />
        {!playing && (
          <button onClick={handlePlay}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/50 hover:bg-black/35 transition-colors group">
            <div className="w-14 h-14 rounded-full bg-brand-500/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Play size={22} className="text-white ml-1" />
            </div>
            <span className="text-white/60 text-xs font-mono">click to play</span>
          </button>
        )}
      </div>
      <div className="p-4">
        <p className={`font-display font-bold text-sm mb-0.5 ${dark ? 'text-white' : 'text-zinc-900'}`}>{title}</p>
        <p className={`text-xs ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>{desc}</p>
      </div>
    </div>
  )
}

const projects = [
  {
    id: 11, title: 'Web3 Wallet Dashboard', category: 'Web3',
    tags: ['Next.js 14', 'wagmi', 'viem', 'RainbowKit'],
    desc: 'A live Web3 dApp — connect a wallet, view balances and send ETH with a full transaction lifecycle. Built with Next.js 14, wagmi, viem and RainbowKit. Deployed and open-source.',
    features: ['Wallet connection (RainbowKit)', 'Live balance with skeletons', 'Send ETH + tx lifecycle', 'Explorer links & friendly errors', 'Static export → GitHub Pages'],
    color: 'from-violet-500 to-indigo-600', img: '/images/projects/web3-wallet-dashboard.svg',
    preview: 'https://navid-nhd.github.io/web3-wallet-dashboard/', github: 'https://github.com/navid-nhd/web3-wallet-dashboard',
    year: '2026', role: 'Frontend / Web3 Developer',
  },
  {
    id: 12, title: 'Mini Swap', category: 'Web3',
    tags: ['Next.js 14', 'wagmi', 'Uniswap V2', 'viem'],
    desc: 'A token-swap interface with live Uniswap V2 quotes, slippage control and an approve → swap flow. Real on-chain prices read gas-free from Ethereum mainnet.',
    features: ['Live Uniswap V2 quotes', 'Slippage & min-received', 'Approve → swap flow', 'Auto WETH routing', 'Fallback RPCs for reliability'],
    color: 'from-fuchsia-500 to-purple-600', img: '/images/projects/web3-mini-swap.svg',
    preview: 'https://navid-nhd.github.io/web3-mini-swap/', github: 'https://github.com/navid-nhd/web3-mini-swap',
    year: '2026', role: 'Frontend / Web3 Developer',
  },
  {
    id: 1, title: 'Alef Ba Tour', category: 'Nuxt.js',
    tags: ['Nuxt.js', 'Vue.js', 'SSR', 'Tailwind'],
    desc: 'Full-featured travel booking platform built with Nuxt.js SSR for maximum SEO. Covers flights, hotels, tours and complete reservation management. Multi-year active collaboration.',
    features: ['Nuxt.js SSR / SEO', 'Flight & hotel search', 'Tour package booking', 'Reservation management', 'Persian RTL layout'],
    color: 'from-brand-500 to-cyan-500', img: '/images/projects/alefbatour.webp',
    preview: 'https://www.alefbatour.com', year: '2021–Present', role: 'Lead Frontend Developer',
  },
  {
    id: 2, title: 'Trip.ir', category: 'Vue.js',
    tags: ['Vue.js', 'JavaScript', '.NET Core MVC', 'CSS'],
    desc: "One of Iran's largest travel aggregators. Multi-page Vue.js application embedded in a .NET Core MVC backend with complex search, filtering and booking flows.",
    features: ['Vue.js MPA integration', 'Multi-city search', 'Hotel & flight compare', 'Payment gateway', 'Responsive design'],
    color: 'from-blue-500 to-indigo-600', img: '/images/projects/trip-8886.webp',
    preview: 'https://www.trip.ir', year: '2022–Present', role: 'Frontend Developer',
  },
  {
    id: 3, title: 'Mehr Parvaz', category: 'Vue.js',
    tags: ['Vue.js', 'JavaScript', 'CSS', 'REST API'],
    desc: 'Flight and travel booking platform. Full ticket search, passenger management, and online payment integration built at Payam Avaran Parsian.',
    features: ['Flight search & filter', 'Passenger management', 'Online payment', 'Ticket printing', 'Admin panel'],
    color: 'from-violet-500 to-purple-600', img: '/images/projects/mehrparvaz-7698.webp',
    preview: 'https://www.mehrparvaz.com', year: '2022–2023', role: 'Frontend Developer',
  },
  {
    id: 4, title: 'Kiyara Seir', category: 'Vue.js',
    tags: ['Vue.js', 'JavaScript', 'CSS', 'MPA'],
    desc: 'Domestic travel and tourism platform with tour search, hotel booking and travel package listings integrated with .NET Core backend.',
    features: ['Domestic tour search', 'Hotel booking flow', 'Travel packages', 'Mobile-first design', 'Vue.js components'],
    color: 'from-teal-500 to-brand-500', img: '/images/projects/kiyara.webp',
    preview: 'https://www.kiyaraseir.com', year: '2023', role: 'Frontend Developer',
  },
  {
    id: 5, title: 'Thalgo Paris', category: 'React.js',
    tags: ['React.js', 'Tailwind CSS', 'REST API', 'Responsive'],
    desc: 'International skincare brand e-commerce. Pixel-perfect product catalogue, shopping cart, and checkout flow for a premium beauty brand.',
    features: ['Product catalogue', 'Shopping cart & checkout', 'International pricing', 'Responsive design', 'Brand-faithful UI'],
    color: 'from-pink-500 to-rose-500', img: '/images/projects/thalgo.webp',
    preview: 'https://www.thalgoparis.com', year: '2023–2024', role: 'Frontend Developer',
  },
  {
    id: 6, title: 'Wizerco', category: 'Next.js',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO'],
    desc: 'Corporate website for a technology consultancy. Clean, fast, SEO-optimised and fully responsive with technical SEO from day one.',
    features: ['Next.js SSR', 'Technical SEO', 'Tailwind CSS', 'TypeScript', 'Core Web Vitals optimised'],
    color: 'from-zinc-600 to-zinc-800', img: '/images/projects/wizer.webp',
    preview: 'https://www.wizerco.com', year: '2024', role: 'Lead Frontend Developer',
  },
  {
    id: 7, title: 'Azaran', category: 'Vue.js',
    tags: ['Vue.js', 'JavaScript', 'CSS', 'Responsive'],
    desc: 'Corporate web presence with a clean design system, service pages and contact flows, built and delivered with full source code handover.',
    features: ['Corporate design system', 'Service pages', 'Contact & inquiry forms', 'Mobile-first', 'Fast load'],
    color: 'from-sky-500 to-blue-600', img: '/images/projects/azaran.webp',
    preview: '#', year: '2023', role: 'Frontend Developer',
  },
  {
    id: 8, title: 'Fazagooya', category: 'React.js',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'Responsive'],
    desc: 'Modern web platform with rich UI, dynamic content sections and a polished user experience delivered at production quality.',
    features: ['Modern UI', 'Dynamic sections', 'Responsive layout', 'Clean code', 'SEO-ready'],
    color: 'from-amber-500 to-orange-500', img: '/images/projects/fazagooya.webp',
    preview: '#', year: '2024', role: 'Frontend Developer',
  },
  {
    id: 9, title: 'Corporate Site — Next.js', category: 'Next.js',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO'],
    desc: 'Full corporate website built with Next.js — SSR, technical SEO, contact forms and a polished, brand-faithful design. Custom build, no templates.',
    features: ['Next.js App Router', 'TypeScript', 'Technical SEO', 'Contact forms', 'Zero-template build'],
    color: 'from-indigo-500 to-violet-600', img: '/images/projects/بنر-سایت-شرکتی-نکست.png',
    preview: '#', year: '2024–2025', role: 'Lead Frontend Developer',
  },
  {
    id: 10, title: 'E-Commerce — Next.js', category: 'Next.js',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    desc: 'Full e-commerce storefront built with Next.js — product variants, cart, checkout, admin panel, SEO-optimised product pages. Custom build.',
    features: ['Product variants', 'Cart & checkout', 'Admin panel', 'SEO product pages', 'Payment integration'],
    color: 'from-emerald-500 to-teal-600', img: '/images/projects/بنر-فروشگاهی-نکست.png',
    preview: '#', year: '2024–2025', role: 'Lead Frontend Developer',
  },
]

const categoryValues = ['All', 'Web3', 'Nuxt.js', 'Vue.js', 'React.js', 'Next.js']

// Apply Persian text overrides when in fa
function useDisplayProject() {
  const { t, lang } = useLang()
  return (p) => (lang === 'fa' && t.projectsFa?.[p.id]) ? { ...p, ...t.projectsFa[p.id] } : p
}

function ProjectCard({ p, dark, onClick }) {
  const { t } = useLang()
  const display = useDisplayProject()
  const pd = display(p)
  return (
    <div
      className={`project-card group cursor-pointer rounded-3xl overflow-hidden
                  ${dark ? 'bg-white/3 border border-white/5 hover:border-brand-500/20'
                         : 'bg-white border border-zinc-100 shadow-sm hover:shadow-xl'}`}
      onClick={() => onClick(p)}
    >
      {/* Preview */}
      <div className={`relative h-72 bg-gradient-to-br ${p.color} overflow-hidden`}>
        <div className="absolute inset-2 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 flex flex-col">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-black/20 flex-shrink-0" dir="ltr">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <div className="ml-2 flex-1 h-4 rounded-full bg-white/10 text-[8px] text-white/50 flex items-center px-2 font-mono truncate">
              {p.preview !== '#' ? p.preview.replace('https://www.','') : p.title.toLowerCase().replace(' ','')+'.com'}
            </div>
          </div>
          <img src={p.img} alt={p.title} loading="lazy"
            className="w-full flex-1 min-h-0 object-cover object-top group-hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <span className={`text-xs font-mono px-2 py-1 rounded-lg mb-2 inline-block
                              ${dark ? 'bg-brand-500/10 text-brand-400' : 'bg-brand-50 text-brand-600'}`}>
              {p.category}
            </span>
            <h3 className={`font-display font-bold text-lg leading-tight ${dark ? 'text-white' : 'text-zinc-900'}`}>{p.title}</h3>
          </div>
          <span className={`text-xs font-mono flex-shrink-0 pt-1 ${dark ? 'text-zinc-600' : 'text-zinc-300'}`} dir="ltr">{p.year}</span>
        </div>

        <p className={`text-sm leading-relaxed line-clamp-2 mb-4 ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>{pd.desc}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tags.slice(0,3).map(t2 => (
            <span key={t2} className={`text-[11px] px-2.5 py-1 rounded-lg font-mono
                                      ${dark ? 'bg-white/5 text-zinc-500' : 'bg-zinc-100 text-zinc-400'}`}>{t2}</span>
          ))}
          {p.tags.length > 3 && <span className={`text-[11px] px-2.5 py-1 rounded-lg font-mono ${dark ? 'text-zinc-600' : 'text-zinc-300'}`}>+{p.tags.length-3}</span>}
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-xs text-brand-400 hover:text-brand-300 font-medium transition-colors">
            <Eye size={12} /> {t.projects.viewDetails}
          </button>
          <div className="ms-auto flex items-center gap-3">
            {p.github && (
              <a href={p.github} onClick={e=>e.stopPropagation()} target="_blank" rel="noopener noreferrer"
                 className={`flex items-center gap-1 text-xs transition-colors
                              ${dark ? 'text-zinc-500 hover:text-zinc-300' : 'text-zinc-400 hover:text-zinc-600'}`}>
                <Github size={12} /> {t.projects.code}
              </a>
            )}
            {p.preview !== '#' && (
              <a href={p.preview} onClick={e=>e.stopPropagation()} target="_blank" rel="noopener noreferrer"
                 className={`flex items-center gap-1 text-xs transition-colors
                              ${dark ? 'text-zinc-500 hover:text-zinc-300' : 'text-zinc-400 hover:text-zinc-600'}`}>
                <ExternalLink size={12} /> {t.projects.live}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Modal({ p, dark, onClose, onPrev, onNext }) {
  const { t } = useLang()
  const display = useDisplayProject()
  if (!p) return null
  const pd = display(p)
  return createPortal(
    <div className="fixed inset-0 z-[9996] flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />
      <div
        className={`relative w-full max-w-lg max-h-[88vh] overflow-y-auto rounded-2xl shadow-2xl
                    ${dark ? 'bg-[#0d1117] border border-white/10' : 'bg-white border border-zinc-200'}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header image */}
        <div className={`relative h-52 bg-gradient-to-br ${p.color} rounded-t-2xl overflow-hidden`}>
          <img src={p.img} alt={p.title} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <button onClick={onClose}
            className="absolute top-3 ltr:right-3 rtl:left-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors z-10">
            <X size={15} />
          </button>

          <button onClick={(e) => { e.stopPropagation(); onPrev() }}
            className="absolute ltr:left-3 rtl:right-3 bottom-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors z-10">
            <ChevronLeft size={15} className="rtl:rotate-180" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onNext() }}
            className="absolute ltr:right-3 rtl:left-3 bottom-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors z-10">
            <ChevronRight size={15} className="rtl:rotate-180" />
          </button>

          <div className="absolute bottom-0 inset-x-0 p-4">
            <span className={`text-xs font-mono px-2 py-0.5 rounded-md ${dark ? 'bg-brand-500/20 text-brand-300' : 'bg-white/20 text-white'}`}>
              {p.category}
            </span>
            <h2 className="font-display font-bold text-xl text-white mt-1">{p.title}</h2>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-mono ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>{pd.role}</span>
            <span className={`text-xs font-mono ${dark ? 'text-zinc-500' : 'text-zinc-400'}`} dir="ltr">{p.year}</span>
          </div>

          <p className={`text-sm leading-relaxed mb-5 ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>{pd.desc}</p>

          <div className="mb-5">
            <p className={`text-xs font-semibold uppercase tracking-wider mb-2.5 ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>{t.projects.keyFeatures}</p>
            <ul className="space-y-1.5">
              {pd.features.map(f => (
                <li key={f} className={`flex items-center gap-2 text-sm ${dark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />{f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {p.tags.map(t2 => (
              <span key={t2} className={`px-2.5 py-1 rounded-lg text-xs font-mono
                                        ${dark ? 'bg-white/5 text-zinc-400' : 'bg-zinc-100 text-zinc-500'}`}>{t2}</span>
            ))}
          </div>

          {(p.preview !== '#' || p.github) && (
            <div className="flex gap-2">
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                   className={`flex items-center justify-center gap-2 flex-1 py-3 rounded-xl font-medium text-sm transition-colors
                              ${dark ? 'bg-white/5 text-zinc-200 hover:bg-white/10 border border-white/10'
                                     : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'}`}>
                  <Github size={14} /> {t.projects.viewCode}
                </a>
              )}
              {p.preview !== '#' && (
                <a href={p.preview} target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 flex-1 py-3 rounded-xl
                              bg-brand-500 text-white font-medium hover:bg-brand-400 transition-colors text-sm">
                  <ExternalLink size={14} /> {t.projects.visitSite}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default function Projects({ dark }) {
  const [cat, setCat]           = useState('All')
  const [selected, setSelected] = useState(null)
  const s1 = useReveal()
  const { t } = useLang()

  const filtered = cat === 'All' ? projects : projects.filter(p => p.category === cat)
  const selIdx   = selected ? projects.findIndex(p => p.id === selected.id) : -1

  const handlePrev = () => setSelected(projects[(selIdx - 1 + projects.length) % projects.length])
  const handleNext = () => setSelected(projects[(selIdx + 1) % projects.length])

  return (
    <>
      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div ref={s1} className="reveal text-center mb-12">
            <p className="text-brand-400 font-mono text-sm mb-3">{t.projects.label}</p>
            <h1 className={`font-display font-bold text-5xl mb-4 ${dark ? 'text-white' : 'text-zinc-900'}`}>
              {t.projects.titleA} <span className="text-gradient">{t.projects.titleB}</span>
            </h1>
            <p className={`text-lg max-w-xl mx-auto ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              {t.projects.subtitle}
            </p>
          </div>

          {/* Demo Videos */}
          <div className="mb-16">
            <div className="text-center mb-6">
              <p className="text-brand-400 font-mono text-sm mb-2">{t.projects.demosLabel}</p>
              <h2 className={`font-display font-bold text-3xl ${dark ? 'text-white' : 'text-zinc-900'}`}>{t.projects.demosTitle}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DEMO_FILES.map((file, i) => (
                <VideoCard key={i} file={file} title={t.projects.demos[i].title} desc={t.projects.demos[i].desc} dark={dark} />
              ))}
            </div>
          </div>

          {/* Web3 highlight band */}
          <div className={`mb-10 rounded-3xl p-6 sm:p-8 border
                           ${dark ? 'bg-gradient-to-br from-violet-500/10 to-indigo-500/5 border-violet-500/20'
                                  : 'bg-gradient-to-br from-violet-50 to-indigo-50 border-violet-100'}`}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
              <div>
                <p className="text-violet-400 font-mono text-sm mb-1">{t.projects.web3Label}</p>
                <h2 className={`font-display font-bold text-2xl mb-1 ${dark ? 'text-white' : 'text-zinc-900'}`}>{t.projects.web3Title}</h2>
                <p className={`text-sm max-w-md ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>{t.projects.web3Sub}</p>
              </div>
              <div className="flex flex-wrap gap-2 flex-shrink-0">
                <a href="https://navid-nhd.github.io/web3-wallet-dashboard/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium bg-violet-500 text-white hover:bg-violet-400 transition-colors">
                  <ExternalLink size={13} /> Wallet Dashboard
                </a>
                <a href="https://navid-nhd.github.io/web3-mini-swap/" target="_blank" rel="noopener noreferrer"
                   className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors
                              ${dark ? 'bg-white/5 text-zinc-200 hover:bg-white/10 border border-white/10' : 'bg-white text-zinc-700 hover:bg-zinc-50 border border-zinc-200'}`}>
                  <ExternalLink size={13} /> Mini Swap
                </a>
              </div>
            </div>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categoryValues.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                             ${cat === c
                               ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                               : dark ? 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-zinc-200'
                                      : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700'}`}
              >
                {c === 'All' ? t.projects.all : c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(p => (
              <ProjectCard key={p.id} p={p} dark={dark} onClick={setSelected} />
            ))}
          </div>
        </div>
      </main>

      <Modal
        p={selected}
        dark={dark}
        onClose={() => setSelected(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  )
}
