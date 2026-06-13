import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react'

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/projects', label: 'Projects' },
  { to: '/career',   label: 'Career'   },
  { to: '/contact',  label: 'Contact'  },
]

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? dark
            ? 'glass border-b border-white/5 py-3'
            : 'glass-light border-b border-black/5 py-3'
          : 'py-5'
      }`}>
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center
                            shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform">
              <Code2 size={18} className="text-white" />
            </div>
            <span className={`font-display font-bold text-lg tracking-tight ${dark ? 'text-white' : 'text-zinc-900'}`}>
              navid<span className="text-brand-400">.</span>dev
            </span>
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-lg text-sm font-body font-medium transition-all duration-200 group
                     ${isActive
                       ? 'text-brand-400'
                       : dark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'
                     }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <span className="absolute inset-x-2 -bottom-1 h-0.5 bg-brand-400 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all
                         ${dark ? 'bg-white/10 hover:bg-white/20 text-yellow-300' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600'}`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* CTA */}
            <NavLink
              to="/contact"
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-500
                         text-white text-sm font-medium shadow-lg shadow-brand-500/25
                         hover:bg-brand-400 transition-all hover:scale-105 hover:shadow-brand-500/40"
            >
              Hire Me
            </NavLink>

            {/* Mobile menu */}
            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center
                         ${dark ? 'bg-white/10 text-white' : 'bg-zinc-100 text-zinc-700'}`}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile nav drawer */}
      <div className={`mobile-nav ${open ? 'open' : ''} fixed inset-y-0 right-0 w-72 z-40
                       ${dark ? 'bg-[#0d1117]' : 'bg-white'}
                       shadow-2xl flex flex-col pt-24 pb-8 px-6`}>
        <ul className="flex flex-col gap-1">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all
                   ${isActive
                     ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20'
                     : dark ? 'text-zinc-400 hover:text-white hover:bg-white/5' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                   }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <NavLink
            to="/contact"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl
                       bg-brand-500 text-white font-medium shadow-lg shadow-brand-500/25
                       hover:bg-brand-400 transition-all"
          >
            Hire Me
          </NavLink>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
