import React, { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations.js'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  // Default is English; choice persists across visits.
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')

  useEffect(() => {
    localStorage.setItem('lang', lang)
    const dir = lang === 'fa' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang])

  const value = {
    lang,
    setLang,
    toggleLang: () => setLang((l) => (l === 'en' ? 'fa' : 'en')),
    dir: lang === 'fa' ? 'rtl' : 'ltr',
    t: translations[lang],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
