import React, { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import PageTransition from './components/PageTransition.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'

const About    = lazy(() => import('./pages/About.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const Career   = lazy(() => import('./pages/Career.jsx'))
const Contact  = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppInner() {
  const [loaded, setLoaded] = useState(false)
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const { pathname } = useLocation()

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <div className={`min-h-screen transition-colors duration-300 ${dark ? 'dark bg-[#080c10] text-zinc-100' : 'bg-[#f8fafb] text-zinc-900'}`}>
        <div className="noise" />
        <CustomCursor />
        <Navbar dark={dark} setDark={setDark} />
        <ScrollToTop />
        <PageTransition key={pathname}>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/"         element={<Home dark={dark} />} />
              <Route path="/about"    element={<About dark={dark} />} />
              <Route path="/projects" element={<Projects dark={dark} />} />
              <Route path="/career"   element={<Career dark={dark} />} />
              <Route path="/contact"  element={<Contact dark={dark} />} />
              <Route path="*"         element={<NotFound dark={dark} />} />
            </Routes>
          </Suspense>
        </PageTransition>
        <Footer dark={dark} />
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}
