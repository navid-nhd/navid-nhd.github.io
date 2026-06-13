import React from 'react'
import { NavLink } from 'react-router-dom'
import { Github, Linkedin, Twitter, Mail, ArrowUp, Code2, Heart } from 'lucide-react'

const socials = [
  { icon: Github,   href: 'https://github.com',   label: 'GitHub'   },
  { icon: Linkedin, href: 'https://linkedin.com',  label: 'LinkedIn' },
  { icon: Twitter,  href: 'https://twitter.com',   label: 'Twitter'  },
  { icon: Mail,     href: 'mailto:navid@example.com', label: 'Email' },
]

export default function Footer({ dark }) {
  return (
    <footer className={`border-t ${dark ? 'border-white/5 bg-[#060a0e]' : 'border-zinc-200/60 bg-white/60'} backdrop-blur-sm`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/30">
              <Code2 size={16} className="text-white" />
            </div>
            <div>
              <p className={`font-display font-bold text-sm ${dark ? 'text-white' : 'text-zinc-900'}`}>
                Navid Nahardani
              </p>
              <p className={`text-xs ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>Frontend Developer</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            {['/', '/about', '/projects', '/career', '/contact'].map((path, i) => {
              const labels = ['Home','About','Projects','Career','Contact']
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={`${dark ? 'text-zinc-500 hover:text-brand-400' : 'text-zinc-400 hover:text-brand-500'} transition-colors`}
                >
                  {labels[i]}
                </NavLink>
              )
            })}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110
                            ${dark ? 'bg-white/5 text-zinc-400 hover:text-brand-400 hover:bg-brand-500/10'
                                   : 'bg-zinc-100 text-zinc-500 hover:text-brand-500 hover:bg-brand-50'}`}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className={`mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2
                         text-xs ${dark ? 'border-white/5 text-zinc-600' : 'border-zinc-100 text-zinc-400'}`}>
          <p className="flex items-center gap-1">
            Built with <Heart size={11} className="text-red-400 fill-red-400" /> by Navid Nahardani © {new Date().getFullYear()}
          </p>
          <p>React · Vite · Tailwind CSS</p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-brand-500 text-white
                   flex items-center justify-center shadow-lg shadow-brand-500/30
                   hover:bg-brand-400 hover:scale-110 transition-all z-40"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  )
}
