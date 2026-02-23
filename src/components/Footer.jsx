// src/components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container.jsx'

const paymentLogos = [
  { src: '/images/visa.png', alt: 'Visa' },
  { src: '/images/mastercard.png', alt: 'Mastercard' },
  { src: '/images/nagad.png', alt: 'Nagad' },
  { src: '/images/bkash.png', alt: 'bKash' },
  { src: '/images/rocket.png', alt: 'Rocket' },
  { src: '/images/upay.jpg', alt: 'Upay' },
  { src: '/images/surecarsh.jpg', alt: 'SureCash' },
  
  { src: '/images/cellfin.png', alt: 'CellFin' },
  { src: '/images/unionpay.png', alt: 'UnionPay' },
  { src: '/images/citybank.png', alt: 'City Bank' },
  { src: '/images/islamibank.png', alt: 'Islami Bank' },
  { src: '/images/bracbank.png', alt: 'BRAC Bank' },
]

export default function Footer() {
  return (
    <footer className="bg-[#DFF3DA]">
      <Container className="pt-20 pb-10">
        {/* TOP */}
        <div className="grid gap-14 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-6">
            <div className="text-3xl font-extrabold tracking-tight">
              <span className="text-gg">Green</span>
              <span className="text-black">Glaiders</span>
            </div>

            <p className="mt-8 max-w-xl text-lg text-zinc-700">
              Get weekly ride updates and community stories delivered to your inbox.
            </p>

            <div className="mt-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Enter email"
                className="h-12 flex-1 rounded-lg border border-zinc-200 bg-white px-4 text-base outline-none placeholder:text-zinc-400 focus:border-gg focus:ring-2 focus:ring-gg/30"
              />
              <button className="h-12 rounded-lg bg-gg px-10 font-semibold text-black shadow-glow hover:brightness-110">
                Reserve now
              </button>
            </div>

            <p className="mt-4 text-sm text-zinc-700/80">
              We respect your privacy and only send what matters to cyclists.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid gap-12 sm:grid-cols-3 lg:col-span-6">
            <div>
              <div className="text-lg font-extrabold text-black">Community</div>
              <ul className="mt-8 space-y-5 text-sm text-zinc-900/90">
                <li>
                  <a href="#" className="hover:text-black">
                    Join rides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Find locations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    View events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Member directory
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Share feedback
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-lg font-extrabold text-black">For vendors</div>
              <ul className="mt-8 space-y-5 text-sm text-zinc-900/90">
                <li>
                  <a href="#" className="hover:text-black">
                    Advertise here
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Vendor profiles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Promote services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Pricing plans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Contact sales
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-lg font-extrabold text-black">Follow us</div>
              <ul className="mt-8 space-y-5 text-sm text-zinc-900/90">
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-soft ring-1 ring-black/5">
                    f
                  </span>
                  <a href="#" className="hover:text-black">
                    Facebook
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-soft ring-1 ring-black/5">
                    ◎
                  </span>
                  <a href="#" className="hover:text-black">
                    Instagram
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-soft ring-1 ring-black/5">
                    X
                  </span>
                  <a href="#" className="hover:text-black">
                    X
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-soft ring-1 ring-black/5">
                    in
                  </span>
                  <a href="#" className="hover:text-black">
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-soft ring-1 ring-black/5">
                    ▶
                  </span>
                  <a href="#" className="hover:text-black">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* PAYMENT CHANNELS */}
        <div className="mt-16 pt-8">
          <div className="text-lg font-extrabold text-black">Payment Channels</div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {paymentLogos.map((logo) => (
              <div
                key={logo.alt}
                className="grid h-10 w-20 place-items-center rounded-lg bg-white shadow-soft ring-1 ring-black/5"
              >
                <img src={logo.src} alt={logo.alt} className="h-6 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 h-px w-full bg-black/15" />

        {/* BOTTOM */}
        <div className="mt-8 flex flex-col gap-4 text-sm text-zinc-800 md:flex-row md:items-center md:justify-between">
          <p className="underline underline-offset-4">© 2026 Goinnovior Limited. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
            <Link to="/privacy" className="underline underline-offset-4 hover:text-black">
              Privacy policy
            </Link>
            <Link to="/terms" className="underline underline-offset-4 hover:text-black">
              Terms of service
            </Link>
            <a href="#" className="underline underline-offset-4 hover:text-black">
              Cookie settings
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}