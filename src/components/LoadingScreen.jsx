import React, { useEffect, useState } from 'react'

export default function LoadingScreen({ onDone }) {
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1900)
    const t2 = setTimeout(() => onDone(), 2450)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#080c10',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 28,
      transition: 'opacity 0.55s cubic-bezier(0.4,0,0.2,1)',
      opacity: fading ? 0 : 1,
      pointerEvents: fading ? 'none' : 'all',
    }}>
      <style>{`
        @keyframes ls-pulse{0%,100%{box-shadow:0 0 30px #14b8a670,0 0 60px #14b8a630}50%{box-shadow:0 0 55px #14b8a6aa,0 0 110px #14b8a655}}
        @keyframes ls-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes ls-dots{0%,80%,100%{opacity:0;transform:scale(0.5)}40%{opacity:1;transform:scale(1)}}
      `}</style>

      {/* Outer spinning ring */}
      <div style={{ position: 'relative', width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          position: 'absolute', inset: 0,
          borderRadius: '50%',
          border: '1.5px solid transparent',
          borderTopColor: '#14b8a6',
          borderRightColor: '#14b8a640',
          animation: 'ls-spin 1.2s linear infinite',
        }} />
        <div style={{
          position: 'absolute', inset: 8,
          borderRadius: '50%',
          border: '1px solid transparent',
          borderBottomColor: '#0891b2',
          borderLeftColor: '#0891b240',
          animation: 'ls-spin 1.8s linear infinite reverse',
        }} />

        {/* Central sphere */}
        <div style={{
          width: 72, height: 72,
          borderRadius: '50%',
          background: 'linear-gradient(135deg,#14b8a6 0%,#0891b2 55%,#1d4ed8 100%)',
          animation: 'ls-pulse 2s ease-in-out infinite',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 26, color: 'white', fontWeight: 800,
          fontFamily: 'sans-serif',
        }}>N</div>
      </div>

      {/* Progress bar */}
      <div style={{ width: 180, height: 2, background: '#ffffff0d', borderRadius: 99, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg,#14b8a6,#0891b2)',
          borderRadius: 99,
          boxShadow: '0 0 8px #14b8a6',
          animation: 'loadingBar 1.9s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
        }} />
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', gap: 6 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 5, height: 5,
            borderRadius: '50%',
            background: '#14b8a6',
            animation: `ls-dots 1.2s ease-in-out ${i * 0.2}s infinite`,
          }} />
        ))}
      </div>
    </div>
  )
}
