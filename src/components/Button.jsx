import React from 'react'

export default function Button({ as: Comp = 'button', className = '', variant = 'primary', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60'
  const variants = {
    primary: 'bg-brand-600 text-white shadow-soft hover:bg-brand-700',
    secondary: 'bg-white text-zinc-900 shadow-soft hover:bg-zinc-50 gradient-ring',
    ghost: 'text-zinc-900 hover:bg-zinc-100/70'
  }

  return <Comp className={`${base} ${variants[variant]} ${className}`} {...props} />
}
