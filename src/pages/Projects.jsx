import React, { useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useReveal } from '../hooks/useReveal.js'
import { ExternalLink, Github, Eye, X, ChevronLeft, ChevronRight, Play } from 'lucide-react'

const DEMO_VIDEOS = [
  { id:1, title:'Alef Ba Tour',                     desc:'Travel booking platform — full demo',        file:'/videos/alefbatour.mp4' },
  { id:2, title:'Electronics Equipment Store',      desc:'E-commerce storefront with filters & cart',  file:'/videos/electronics-store.mp4' },
  { id:3, title:'Veterinary Hospital — Tehran',     desc:'Medical services & appointment system',      file:'/videos/veterinary-hospital.mp4' },
  { id:4, title:'Dental Equipment Store',           desc:'Specialized medical e-commerce platform',    file:'/videos/dental-equipment-store.mp4' },
]

function VideoCard({ v, dark }) {
  const [playing, setPlaying] = useState(false)
  const ref = useRef(null)
  const handlePlay = () => { setPlaying(true); setTimeout(() => ref.current?.play(), 50) }
  const card = dark
    ? 'bg-white/[0.03] border border-white/5 hover:border-brand-500/20'
    : 'bg-white border border-zinc-100 shadow-sm'

  return (
    <div className={`rounded-2xl overflow-hidden ${card} transition-all`}>
      <div className="relative aspect-video bg-zinc-900">
        <video ref={ref} src={v.file} preload="none" controls={playing} playsInline
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
        <p className={`font-display font-bold text-sm mb-0.5 ${dark ? 'text-white' : 'text-zinc-900'}`}>{v.title}</p>
        <p className={`text-xs ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>{v.desc}</p>
      </div>
    </div>
  )
}

const projects = [
  {
    id: 1,
    title: 'Alef Ba Tour',
    category: 'Nuxt.js',
    tags: ['Nuxt.js', 'Vue.js', 'SSR', 'Tailwind'],
    desc: 'Full-featured travel booking platform built with Nuxt.js SSR for maximum SEO. Covers flights, hotels, tours and complete reservation management. Multi-year active collaboration.',
    features: ['Nuxt.js SSR / SEO', 'Flight & hotel search', 'Tour package booking', 'Reservation management', 'Persian RTL layout'],
    color: 'from-brand-500 to-cyan-500',
    img: '/images/projects/alefbatour.webp',
    preview: 'https://www.alefbatour.com',
    year: '2021–Present',
    role: 'Lead Frontend Developer',
  },
  {
    id: 2,
    title: 'Trip.ir',
    category: 'Vue.js',
    tags: ['Vue.js', 'JavaScript', '.NET Core MVC', 'CSS'],
    desc: "One of Iran's largest travel aggregators. Multi-page Vue.js application embedded in a .NET Core MVC backend with complex search, filtering and booking flows.",
    features: ['Vue.js MPA integration', 'Multi-city search', 'Hotel & flight compare', 'Payment gateway', 'Responsive design'],
    color: 'from-blue-500 to-indigo-600',
    img: '/images/projects/trip-8886.webp',
    preview: 'https://www.trip.ir',
    year: '2022–Present',
    role: 'Frontend Developer',
  },
  {
    id: 3,
    title: 'Mehr Parvaz',
    category: 'Vue.js',
    tags: ['Vue.js', 'JavaScript', 'CSS', 'REST API'],
    desc: 'Flight and travel booking platform. Full ticket search, passenger management, and online payment integration built at Payam Avaran Parsian.',
    features: ['Flight search & filter', 'Passenger management', 'Online payment', 'Ticket printing', 'Admin panel'],
    color: 'from-violet-500 to-purple-600',
    img: '/images/projects/mehrparvaz-7698.webp',
    preview: 'https://www.mehrparvaz.com',
    year: '2022–2023',
    role: 'Frontend Developer',
  },
  {
    id: 4,
    title: 'Kiyara Seir',
    category: 'Vue.js',
    tags: ['Vue.js', 'JavaScript', 'CSS', 'MPA'],
    desc: 'Domestic travel and tourism platform with tour search, hotel booking and travel package listings integrated with .NET Core backend.',
    features: ['Domestic tour search', 'Hotel booking flow', 'Travel packages', 'Mobile-first design', 'Vue.js components'],
    color: 'from-teal-500 to-brand-500',
    img: '/images/projects/kiyara.webp',
    preview: 'https://www.kiyaraseir.com',
    year: '2023',
    role: 'Frontend Developer',
  },
  {
    id: 5,
    title: 'Thalgo Paris',
    category: 'React.js',
    tags: ['React.js', 'Tailwind CSS', 'REST API', 'Responsive'],
    desc: 'International skincare brand e-commerce. Pixel-perfect product catalogue, shopping cart, and checkout flow for a premium beauty brand.',
    features: ['Product catalogue', 'Shopping cart & checkout', 'International pricing', 'Responsive design', 'Brand-faithful UI'],
    color: 'from-pink-500 to-rose-500',
    img: '/images/projects/thalgo.webp',
    preview: 'https://www.thalgoparis.com',
    year: '2023–2024',
    role: 'Frontend Developer',
  },
  {
    id: 6,
    title: 'Wizerco',
    category: 'Next.js',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO'],
    desc: 'Corporate website for a technology consultancy. Clean, fast, SEO-optimised and fully responsive with technical SEO from day one.',
    features: ['Next.js SSR', 'Technical SEO', 'Tailwind CSS', 'TypeScript', 'Core Web Vitals optimised'],
    color: 'from-zinc-600 to-zinc-800',
    img: '/images/projects/wizer.webp',
    preview: 'https://www.wizerco.com',
    year: '2024',
    role: 'Lead Frontend Developer',
  },
  {
    id: 7,
    title: 'Azaran',
    category: 'Vue.js',
    tags: ['Vue.js', 'JavaScript', 'CSS', 'Responsive'],
    desc: 'Corporate web presence with a clean design system, service pages and contact flows, built and delivered with full source code handover.',
    features: ['Corporate design system', 'Service pages', 'Contact & inquiry forms', 'Mobile-first', 'Fast load'],
    color: 'from-sky-500 to-blue-600',
    img: '/images/projects/azaran.webp',
    preview: '#',
    year: '2023',
    role: 'Frontend Developer',
  },
  {
    id: 8,
    title: 'Fazagooya',
    category: 'React.js',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'Responsive'],
    desc: 'Modern web platform with rich UI, dynamic content sections and a polished user experience delivered at production quality.',
    features: ['Modern UI', 'Dynamic sections', 'Responsive layout', 'Clean code', 'SEO-ready'],
    color: 'from-amber-500 to-orange-500',
    img: '/images/projects/fazagooya.webp',
    preview: '#',
    year: '2024',
    role: 'Frontend Developer',
  },
  {
    id: 9,
    title: 'Corporate Site — Next.js',
    category: 'Next.js',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO'],
    desc: 'Full corporate website built with Next.js — SSR, technical SEO, contact forms and a polished, brand-faithful design. Custom build, no templates.',
    features: ['Next.js App Router', 'TypeScript', 'Technical SEO', 'Contact forms', 'Zero-template build'],
    color: 'from-indigo-500 to-violet-600',
    img: '/images/projects/بنر-سایت-شرکتی-نکست.png',
    preview: '#',
    year: '2024–2025',
    role: 'Lead Frontend Developer',
  },
  {
    id: 10,
    title: 'E-Commerce — Next.js',
    category: 'Next.js',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    desc: 'Full e-commerce storefront built with Next.js — product variants, cart, checkout, admin panel, SEO-optimised product pages. Custom build.',
    features: ['Product variants', 'Cart & checkout', 'Admin panel', 'SEO product pages', 'Payment integration'],
    color: 'from-emerald-500 to-teal-600',
    img: '/images/projects/بنر-فروشگاهی-نکست.png',
    preview: '#',
    year: '2024–2025',
    role: 'Lead Frontend Developer',
  },
]

const categories = ['All', 'Nuxt.js', 'Vue.js', 'React.js', 'Next.js']

function ProjectCard({ p, dark, onClick }) {
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
          <div className="flex items-center gap-1.5 px-3 py-2 bg-black/20 flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <div className="ml-2 flex-1 h-4 rounded-full bg-white/10 text-[8px] text-white/50 flex items-center px-2 font-mono truncate">
              {p.preview !== '#' ? p.preview.replace('https://www.','') : p.title.toLowerCase().replace(' ','')+'.com'}
            </div>
          </div>
          {p.img
            ? <img src={p.img} alt={p.title} loading="lazy"
                className="w-full flex-1 min-h-0 object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            : <div className="flex items-center justify-center flex-1 min-h-0">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{p.emoji}</span>
              </div>
          }
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
          <span className={`text-xs font-mono flex-shrink-0 pt-1 ${dark ? 'text-zinc-600' : 'text-zinc-300'}`}>{p.year}</span>
        </div>

        <p className={`text-sm leading-relaxed line-clamp-2 mb-4 ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>{p.desc}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tags.slice(0,3).map(t => (
            <span key={t} className={`text-[11px] px-2.5 py-1 rounded-lg font-mono
                                      ${dark ? 'bg-white/5 text-zinc-500' : 'bg-zinc-100 text-zinc-400'}`}>{t}</span>
          ))}
          {p.tags.length > 3 && <span className={`text-[11px] px-2.5 py-1 rounded-lg font-mono ${dark ? 'text-zinc-600' : 'text-zinc-300'}`}>+{p.tags.length-3}</span>}
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-xs text-brand-400 hover:text-brand-300 font-medium transition-colors">
            <Eye size={12} /> View Details
          </button>
          <a href={p.github} onClick={e=>e.stopPropagation()} target="_blank" rel="noopener noreferrer"
             className={`ml-auto flex items-center gap-1 text-xs transition-colors
                          ${dark ? 'text-zinc-500 hover:text-zinc-300' : 'text-zinc-400 hover:text-zinc-600'}`}>
            <Github size={12} /> Code
          </a>
          <a href={p.preview} onClick={e=>e.stopPropagation()} target="_blank" rel="noopener noreferrer"
             className={`flex items-center gap-1 text-xs transition-colors
                          ${dark ? 'text-zinc-500 hover:text-zinc-300' : 'text-zinc-400 hover:text-zinc-600'}`}>
            <ExternalLink size={12} /> Live
          </a>
        </div>
      </div>
    </div>
  )
}

function Modal({ p, dark, onClose, onPrev, onNext }) {
  if (!p) return null
  return createPortal(
    <div className="fixed inset-0 z-[9996] flex items-center justify-center p-4 sm:p-6"
         onClick={onClose}>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />
      <div
        className={`relative w-full max-w-lg max-h-[88vh] overflow-y-auto rounded-2xl shadow-2xl
                    ${dark ? 'bg-[#0d1117] border border-white/10' : 'bg-white border border-zinc-200'}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header image */}
        <div className={`relative h-52 bg-gradient-to-br ${p.color} rounded-t-2xl overflow-hidden`}>
          {p.img
            ? <img src={p.img} alt={p.title} className="w-full h-full object-cover object-top" />
            : <div className="w-full h-full flex items-center justify-center text-7xl">{p.emoji}</div>
          }
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Close */}
          <button onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors z-10">
            <X size={15} />
          </button>

          {/* Prev / Next */}
          <button onClick={(e) => { e.stopPropagation(); onPrev() }}
            className="absolute left-3 bottom-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors z-10">
            <ChevronLeft size={15} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onNext() }}
            className="absolute right-3 bottom-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors z-10">
            <ChevronRight size={15} />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className={`text-xs font-mono px-2 py-0.5 rounded-md ${dark ? 'bg-brand-500/20 text-brand-300' : 'bg-white/20 text-white'}`}>
              {p.category}
            </span>
            <h2 className="font-display font-bold text-xl text-white mt-1">{p.title}</h2>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-mono ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>{p.role}</span>
            <span className={`text-xs font-mono ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>{p.year}</span>
          </div>

          <p className={`text-sm leading-relaxed mb-5 ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>{p.desc}</p>

          <div className="mb-5">
            <p className={`text-xs font-semibold uppercase tracking-wider mb-2.5 ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>Key Features</p>
            <ul className="space-y-1.5">
              {p.features.map(f => (
                <li key={f} className={`flex items-center gap-2 text-sm ${dark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />{f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {p.tags.map(t => (
              <span key={t} className={`px-2.5 py-1 rounded-lg text-xs font-mono
                                        ${dark ? 'bg-white/5 text-zinc-400' : 'bg-zinc-100 text-zinc-500'}`}>{t}</span>
            ))}
          </div>

          {p.preview !== '#' && (
            <a href={p.preview} target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 w-full py-3 rounded-xl
                          bg-brand-500 text-white font-medium hover:bg-brand-400 transition-colors text-sm">
              <ExternalLink size={14} /> Visit Live Site
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default function Projects({ dark }) {
  const [cat, setCat]         = useState('All')
  const [selected, setSelected] = useState(null)
  const s1 = useReveal()

  const filtered = cat === 'All' ? projects : projects.filter(p => p.category === cat)
  const selIdx   = selected ? projects.findIndex(p => p.id === selected.id) : -1

  const handlePrev = () => setSelected(projects[(selIdx - 1 + projects.length) % projects.length])
  const handleNext = () => setSelected(projects[(selIdx + 1) % projects.length])

  return (
    <>
      <main className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div ref={s1} className="reveal text-center mb-12">
            <p className="text-brand-400 font-mono text-sm mb-3">// my work</p>
            <h1 className={`font-display font-bold text-5xl mb-4 ${dark ? 'text-white' : 'text-zinc-900'}`}>
              Projects & <span className="text-gradient">Case Studies</span>
            </h1>
            <p className={`text-lg max-w-xl mx-auto ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              A curated selection of my best work — from complex web apps to polished marketing sites.
            </p>
          </div>

          {/* Demo Videos */}
          <div className="mb-16">
            <div className="text-center mb-6">
              <p className="text-brand-400 font-mono text-sm mb-2">// screen recordings</p>
              <h2 className={`font-display font-bold text-3xl ${dark ? 'text-white' : 'text-zinc-900'}`}>Demo Reel</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DEMO_VIDEOS.map(v => <VideoCard key={v.id} v={v} dark={dark} />)}
            </div>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                             ${cat === c
                               ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                               : dark ? 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-zinc-200'
                                      : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700'}`}
              >
                {c}
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
