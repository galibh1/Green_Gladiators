import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 bg-white">
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-soft">
              GG
            </span>
            <div>
              <div className="text-sm font-semibold">Green Gladiators</div>
              <div className="text-xs text-zinc-600">Community-powered climate action.</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a className="text-zinc-700 hover:text-zinc-950" href="#mission">Mission</a>
            <a className="text-zinc-700 hover:text-zinc-950" href="#features">Features</a>
            <a className="text-zinc-700 hover:text-zinc-950" href="#impact">Impact</a>
            <a className="text-zinc-700 hover:text-zinc-950" href="#faq">FAQ</a>
            <Link className="text-zinc-700 hover:text-zinc-950" to="/privacy">Privacy</Link>
            <Link className="text-zinc-700 hover:text-zinc-950" to="/terms">Terms</Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Green Gladiators. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-600" />
            Built with React + Tailwind.
          </p>
        </div>
      </Container>
    </footer>
  )
}
