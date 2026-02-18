import React, { useEffect, useState } from 'react'
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
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // basic active detection for hash links
  const activeLabel = (() => {
    if (location.pathname !== '/') return ''
    const hash = (window.location.hash || '#home').replace('#', '')
    const found = links.find((l) => l.to === `/#${hash}`)
    return found?.label || 'Home'
  })()

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`mx-auto w-[min(1500px,96vw)] transition-all duration-300 ${scrolled ? 'mt-3' : 'mt-4'}`}>
        <div
          className={[
            'flex items-center justify-between',
            'rounded-2xl px-8 py-5',
            'border border-white/20',
            'bg-white/22 backdrop-blur-xl',
            'shadow-[0_14px_40px_rgba(0,0,0,0.35)]',
            scrolled ? 'bg-white/18' : 'bg-white/22',
          ].join(' ')}
        >
          {/* Logo */}
          <div className="flex items-baseline gap-0.5 select-none">
            <span className="text-3xl font-semibold tracking-tight text-gg">Green</span>
            <span className="text-3xl font-light tracking-tight text-white/85"> Gladiators</span>
          </div>

          {/* Links (centered like Figma) */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => {
              const isActive = l.label === activeLabel
              return (
                <a
                  key={l.label}
                  href={l.to}
                  className={[
                    'text-[18px] font-medium tracking-wide',
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
          <button className="gg-neon-btn">
            Login/Signup
          </button>
        </div>
      </div>
    </header>
  )
}
