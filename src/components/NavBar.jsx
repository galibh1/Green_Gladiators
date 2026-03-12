
import React, { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

const links = [
  { to: '/#home', label: 'Home' },
  { to: '/#about', label: 'About' },
  { to: '/#membership', label: 'Membership' },
  { to: '/#marketplace', label: 'Marketplace' },
  { to: '/#events', label: 'Events' },
  { to: '/#community', label: 'Community' },
]


export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const activeLabel = useMemo(() => {
    if (location.pathname !== '/') return ''
    const hash = (location.hash || '#home').replace('#', '')
    const found = links.find((l) => l.to === `/#${hash}`)
    return found?.label || 'Home'
  }, [location.pathname, location.hash])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Full-width blurred bar like screenshot */}
      <div
        className={[
          'w-full',
          'backdrop-blur-2xl',
          'border-b border-white/10',
          scrolled ? 'bg-black/35 shadow-[0_14px_40px_rgba(0,0,0,0.45)]' : 'bg-black/25',
        ].join(' ')}
      >
        <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a href="/#home" className="flex items-baseline gap-1 select-none">
            <span className="text-3xl font-semibold tracking-tight text-gg">Green</span>
            <span className="text-3xl font-light tracking-tight text-white/90"> Gladiators</span>
          </a>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => {
              const isActive = l.label === activeLabel
              return (
                <a
                  key={l.label}
                  href={l.to}
                  className={[
                    'text-[20px] font-medium tracking-wide',
                    'transition-colors duration-200',
                    isActive ? 'text-gg' : 'text-white/80 hover:text-white',
                  ].join(' ')}
                >
                  {l.label}
                </a>
              )
            })}
          </nav>

          {/* Neon button */}
          <button
            className={[
              'rounded-xl px-8 py-3 text-lg font-semibold text-black',
              'bg-gg',
              'shadow-[0_0_0_3px_rgba(0,0,0,0.15),0_0_22px_rgba(34,197,94,0.65)]',
              'hover:brightness-110 active:brightness-105',
              'transition',
            ].join(' ')}
          >
            Login/Signup
          </button>
        </div>
      </div>
    </header>
  )
}