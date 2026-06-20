import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function NotFound({ dark }) {
  const { t } = useLang()
  return (
    <main className="pt-24 min-h-screen flex items-center justify-center">
      <style>{`
        @keyframes nf-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes nf-glow{0%,100%{text-shadow:0 0 20px #14b8a640}50%{text-shadow:0 0 50px #14b8a6aa,0 0 80px #14b8a640}}
      `}</style>

      <div className="text-center px-4">
        {/* 404 number */}
        <div
          className="font-display font-black select-none mb-6"
          style={{
            fontSize: 'clamp(7rem,20vw,14rem)',
            lineHeight: 1,
            background: 'linear-gradient(135deg,#14b8a6,#0891b2,#1d4ed8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'nf-float 3s ease-in-out infinite, nf-glow 3s ease-in-out infinite',
          }}
        >404</div>

        {/* Message */}
        <p className="text-brand-400 font-mono text-sm mb-3">{t.notFound.label}</p>
        <h1 className={`font-display font-bold text-3xl mb-4 ${dark ? 'text-white' : 'text-zinc-900'}`}>
          {t.notFound.title}
        </h1>
        <p className={`text-base max-w-sm mx-auto mb-10 leading-relaxed ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
          {t.notFound.text}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-500 text-white
                       font-medium shadow-lg shadow-brand-500/30 hover:bg-brand-400
                       hover:shadow-brand-500/50 hover:scale-105 transition-all"
          >
            <Home size={16} /> {t.notFound.home}
          </Link>
          <button
            onClick={() => window.history.back()}
            className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl font-medium
                        border transition-all hover:scale-105
                        ${dark ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
                               : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 shadow-sm'}`}
          >
            <ArrowLeft size={16} className="rtl:rotate-180" /> {t.notFound.back}
          </button>
        </div>
      </div>
    </main>
  )
}
