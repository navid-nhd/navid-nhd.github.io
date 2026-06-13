import React, { useEffect, useRef, useMemo } from 'react'

export default function CustomCursor() {
  const dot  = useRef(null)
  const ring = useRef(null)
  // Touch devices have no real pointer — the custom cursor would just sit
  // stuck in the top-left corner, so we disable it entirely there.
  const isMobile = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches,
    []
  )

  useEffect(() => {
    if (isMobile) return

    let mx = -100, my = -100
    let rx = -100, ry = -100

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`
      }
    }

    let raf
    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ring.current) {
        ring.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    const onEnter = () => ring.current?.classList.add('hovered')
    const onLeave = () => ring.current?.classList.remove('hovered')

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      <div ref={dot}  className="cursor-dot"  />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}
