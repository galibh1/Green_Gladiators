import React, { useEffect, useMemo, useRef, useState } from 'react'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import TrustedBy from '../components/TrustedBy.jsx'

const rides = [
  {
    day: '09',
    image: '/images/ride1.jpg',
    location: 'Mohammadpur - Uttara 10',
    title: 'Coastal morning loop',
    desc: 'Smooth coastal roads with ocean views and a relaxed pace.',
    stats: [
      { k: 'Distance', v: '23.25 Km' },
      { k: 'Elev Gain', v: '4 m' },
      { k: 'Time', v: '1h 50m' },
    ],
  },
  {
    day: '10',
    image: '/images/ride2.jpg',
    location: 'Mohammadpur - Uttara 10',
    title: 'Mountain trail adventure',
    desc: 'A punchy climb and rewarding single-track through the hills.',
    stats: [
      { k: 'Distance', v: '23.25 Km' },
      { k: 'Elev Gain', v: '4 m' },
      { k: 'Time', v: '1h 50m' },
    ],
  },
  {
    day: '11',
    image: '/images/ride3.jpg',
    location: 'Mohammadpur - Uttara 10',
    title: 'Coastal sunset ride',
    desc: 'Golden-hour cruising with a social roll-out and photo stops.',
    stats: [
      { k: 'Distance', v: '23.25 Km' },
      { k: 'Elev Gain', v: '4 m' },
      { k: 'Time', v: '1h 50m' },
    ],
  },
]

const equipments = [
  { image: '/images/equip1.jpg' },
  { image: '/images/equip2.jpg' },
  { image: '/images/equip3.jpg' },
  { image: '/images/equip4.jpg' },
]

function ArrowRight({ className = '' }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Icon({ children }) {
  return <div className="grid h-12 w-12 place-items-center rounded-2xl bg-zinc-50 shadow-soft">{children}</div>
}

function Card({ className = '', children }) {
  return <div className={`rounded-3xl bg-white shadow-soft ring-1 ring-zinc-200/70 ${className}`}>{children}</div>
}

function GlowButton({ variant = 'primary', className = '', children, ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gg/60 focus:ring-offset-2 focus:ring-offset-white'
  if (variant === 'outline') {
    return (
      <button
        {...props}
        className={`${base} border-2 border-white/70 bg-black/20 text-white backdrop-blur hover:bg-black/30 ${className}`}
      >
        {children}
      </button>
    )
  }
  return (
    <button {...props} className={`${base} bg-gg text-black shadow-glow hover:brightness-110 ${className}`}>
      {children}
    </button>
  )
}

function SectionTitle({ kicker, title, subtitle, center = false }) {
  return (
    <div className={`${center ? 'text-center' : ''}`}>
      {kicker ? <div className="text-sm font-semibold tracking-wide text-gg">{kicker}</div> : null}
      <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-black md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-lg text-zinc-500">{subtitle}</p> : null}
    </div>
  )
}

function FaqItem({ q, a, open, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="w-full border-b border-zinc-200/80 py-6 text-left outline-none last:border-b-0"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-lg font-extrabold text-black">{q}</div>
        <div className={`grid h-10 w-10 place-items-center rounded-full transition ${open ? 'rotate-180' : ''}`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="mt-3 max-w-4xl text-zinc-500">{a}</p>
        </div>
      </div>
    </button>
  )
}

function Countdown({ targetISO }) {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  const parts = useMemo(() => {
    const target = new Date(targetISO).getTime()
    const diff = Math.max(0, target - now)
    const s = Math.floor(diff / 1000)
    const days = Math.floor(s / 86400)
    const hours = Math.floor((s % 86400) / 3600)
    const mins = Math.floor((s % 3600) / 60)
    const secs = s % 60
    return { days, hours, mins, secs }
  }, [now, targetISO])

  const Box = ({ v, l }) => (
    <div className="flex flex-col items-center justify-center px-6 py-5">
      <div className="text-5xl font-extrabold tracking-tight text-black">{String(v).padStart(2, '0')}</div>
      <div className="mt-1 text-sm text-zinc-500">{l}</div>
    </div>
  )

  return (
    <div className="overflow-hidden rounded-2xl border border-gg/25 bg-ggSoft shadow-soft">
      <div className="grid grid-cols-4 divide-x divide-gg/15">
        <Box v={parts.days} l="Days" />
        <Box v={parts.hours} l="Hours" />
        <Box v={parts.mins} l="Mins" />
        <Box v={parts.secs} l="Secs" />
      </div>
    </div>
  )
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [faqOpen, setFaqOpen] = useState(0)
  const topRef = useRef(null)

  const testimonials = [
    {
      quote:
        "I've found mechanics I trust and routes I never would have discovered alone. Green Gladiators made cycling feel less solitary.",
      name: 'Marcus Chen',
      meta: 'Weekend rider, Sydney',
    },
    {
      quote: 'The weekly rides are perfectly curated. It feels like a real community, not just another feed.',
      name: 'Amina Rahman',
      meta: 'Road cyclist, Dhaka',
    },
    {
      quote: 'Vendors and shops I actually trust—plus meetups that keep me motivated every week.',
      name: 'Diego Alvarez',
      meta: 'Gravel rider, Valencia',
    },
  ]

  const faqs = [
    {
      q: 'What does membership cost?',
      a: 'A small membership fee keeps the platform running smoothly and ensures quality. You get access to weekly rides, trusted recommendations, and a spam-free community of serious cyclists.',
    },
    {
      q: 'Can I post locations and recommendations?',
      a: 'Yes. Members can share verified locations, routes, and recommendations. Community moderation helps keep the feed high-signal.',
    },
    {
      q: 'How do I join a ride?',
      a: 'Browse upcoming rides, select the one that matches your pace, and reserve your spot. You’ll receive ride details and meetup location instantly.',
    },
    {
      q: 'Are vendors welcome here?',
      a: 'Absolutely. We feature trusted local vendors and mechanics and highlight businesses that riders recommend.',
    },
    {
      q: 'Is my data secure?',
      a: 'We use modern security practices and only collect what’s needed to run the platform. Sensitive actions are protected and we don’t sell your data.',
    },
  ]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setActiveTestimonial((v) => (v + 1) % testimonials.length)
      if (e.key === 'ArrowLeft') setActiveTestimonial((v) => (v - 1 + testimonials.length) % testimonials.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [testimonials.length])

  return (
    <div ref={topRef} className="min-h-screen bg-white text-zinc-900">
      <NavBar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/hero.jpg')",
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-black/55" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-40 md:pb-14 md:pt-44">
          <div className="ml-auto max-w-xl text-right">
            <p className="text-lg leading-relaxed text-zinc-800/80">
              Join verified riders discovering new routes every week. Green Gladitors connects cyclists through real
              experiences and trusted community.
            </p>
          </div>

          <div className="mt-44 max-w-3xl">
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
              Ride Together. Explore More.
              <br />
              Support Cycling.
            </h1>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <GlowButton>Join now</GlowButton>
              <GlowButton variant="outline">Learn more</GlowButton>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY (Figma-like strip) */}
      <TrustedBy />

      {/* NEXT GROUP RIDE */}
      <section className="bg-ggWash">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-sm text-black/80">
                <span>All events</span>
                <ArrowRight className="text-black/80" />
              </div>

              <h2 className="mt-8 text-5xl font-extrabold tracking-tight text-black md:text-6xl">Next group ride</h2>
              <p className="mt-5 max-w-xl text-lg text-zinc-500">
                Join fellow cyclists for a morning route through coastal roads and hidden trails.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <input
                  className="h-12 w-72 rounded-xl border border-zinc-200 bg-white px-5 text-base outline-none placeholder:text-zinc-400 focus:border-gg focus:ring-2 focus:ring-gg/30"
                  placeholder="Enter email"
                />
                <button className="h-12 rounded-xl bg-gg px-8 font-semibold text-black shadow-glow hover:brightness-110">
                  Reserve now
                </button>
              </div>

              <p className="mt-4 text-sm text-zinc-500">By clicking Reserve now you agree to our Terms and Conditions.</p>
            </div>

            <div className="w-full max-w-xl">
              <div className="flex items-center justify-between">
                <div className="text-4xl font-extrabold tracking-tight text-black">Sat 15 Feb</div>
              </div>

              <div className="mt-6">
                <Countdown targetISO="2030-02-15T08:00:00.000Z" />
              </div>

              <div className="mt-6 flex justify-center">
                <div className="rounded-lg bg-ggSoft px-5 py-2 text-sm font-semibold text-black shadow-soft">
                  6 Spots Remaining
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING (Figma-like) */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-6xl font-extrabold tracking-tight text-black">Upcoming</h2>
              <p className="mt-4 text-lg text-zinc-500">Pick a ride that fits your pace and join the adventure</p>
            </div>

            <button className="h-14 rounded-2xl border-2 border-gg bg-gg px-10 text-lg font-semibold text-black shadow-glow hover:brightness-110 md:mt-3">
              Join the ride
            </button>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {rides.map((r) => (
              <div
                key={r.title}
                className="overflow-hidden rounded-[28px] bg-white shadow-soft ring-1 ring-zinc-200/70"
              >
                {/* Image top */}
                <div className="relative h-60">
                  <img src={r.image} alt="" className="h-full w-full object-cover" />

                  {/* Bottom fade like figma */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

                  {/* Day badge */}
                  <div className="absolute right-5 top-5 grid h-16 w-24 place-items-center rounded-xl bg-white text-3xl font-extrabold text-gg shadow-soft">
                    {r.day}
                  </div>

                  {/* Stats row (on top of image) */}
                  <div className="absolute bottom-4 left-5 right-5 grid grid-cols-3 gap-6 text-white">
                    {r.stats.map((s) => (
                      <div key={s.k}>
                        <div className="text-xs text-white/80">{s.k}</div>
                        <div className="text-xl font-extrabold tracking-tight">{s.v}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="px-8 pb-10 pt-8">
                  {/* Location row */}
                  <div className="flex items-center gap-3 text-zinc-500">
                    <span className="text-gg">🚴</span>
                    <span className="text-base">{r.location}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-black">{r.title}</h3>

                  {/* Desc */}
                  <p className="mt-3 text-lg text-zinc-500">{r.desc}</p>

                  {/* Join link */}
                  <button className="mt-8 inline-flex items-center gap-3 text-lg font-medium text-black">
                    Join the ride <ArrowRight className="translate-y-[1px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-semibold text-black/80">Essentials</div>
              <h2 className="mt-4 text-5xl font-extrabold tracking-tight text-black md:text-6xl">Equipment</h2>
              <p className="mt-4 text-lg text-zinc-500">Everything you need from vendors we trust</p>
            </div>

            <button className="h-12 rounded-xl border border-zinc-200 bg-white px-8 font-semibold text-zinc-700 shadow-soft hover:bg-zinc-50">
              Shop all
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {equipments.map((e, idx) => (
              <div key={idx} className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-zinc-200/70">
                <img src={e.image} alt="" className="h-64 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-6xl font-extrabold tracking-tight text-black">Real stories</h2>
            <p className="mt-4 text-lg text-zinc-500">What members are saying</p>
          </div>

          <div className="relative mt-16">
            <button
              aria-label="Previous"
              onClick={() => setActiveTestimonial((v) => (v - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-4 shadow-soft ring-1 ring-zinc-200 hover:bg-zinc-50"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <Card className="mx-auto max-w-6xl bg-ggWash px-10 py-14 md:px-20">
              <div className="flex items-center justify-center gap-2 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill={i < 4 ? 'currentColor' : 'none'}>
                    <path
                      d="M12 17.3l-6.2 3.6 1.7-7-5.5-4.8 7.2-.6L12 2l2.8 9.5 7.2.6-5.5 4.8 1.7 7z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                ))}
              </div>

              <p className="mt-10 text-center text-3xl font-extrabold leading-tight tracking-tight text-black md:text-4xl">
                “{testimonials[activeTestimonial].quote}”
              </p>

              <div className="mt-12 flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-white shadow-soft ring-1 ring-zinc-200" />
                <div className="mt-5 text-xl font-extrabold text-black">{testimonials[activeTestimonial].name}</div>
                <div className="mt-1 text-zinc-600">{testimonials[activeTestimonial].meta}</div>
              </div>
            </Card>

            <button
              aria-label="Next"
              onClick={() => setActiveTestimonial((v) => (v + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-gg p-4 shadow-glow hover:brightness-110"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="#0B0F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ggWash">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-6xl font-extrabold tracking-tight text-black">FAQ</h2>
            <p className="mt-4 text-lg text-zinc-500">Questions about membership and how it works</p>
          </div>

          <Card className="mx-auto mt-14 max-w-5xl overflow-hidden bg-white">
            <div className="px-10 py-4">
              {faqs.map((f, i) => (
                <FaqItem
                  key={f.q}
                  q={f.q}
                  a={f.a}
                  open={faqOpen === i}
                  onToggle={() => setFaqOpen((v) => (v === i ? -1 : i))}
                />
              ))}
            </div>
            <div className="h-[3px] bg-gg" />
          </Card>
        </div>
      </section>

      <Footer />

      {/* SCROLL TOP */}
      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 grid h-14 w-14 place-items-center rounded-full bg-gg text-black shadow-glow hover:brightness-110"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 5l-7 7M12 5l7 7M12 5v14" stroke="#0B0F14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
