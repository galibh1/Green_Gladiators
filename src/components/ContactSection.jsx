import React from 'react'

function ArrowRight({ className = '' }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconBadge({ children }) {
  return (
    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-ggSoft shadow-soft ring-1 ring-zinc-200/60">
      {children}
    </div>
  )
}

function MailIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
        stroke="#00D21E"
        strokeWidth="2"
      />
      <path d="M6.5 7.5 12 11.5l5.5-4" stroke="#00D21E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.5 3.8h2.2c.7 0 1.2.5 1.3 1.1l.4 2.2c.1.6-.2 1.2-.7 1.5l-1.2.7a12.8 12.8 0 0 0 5.2 5.2l.7-1.2c.3-.5.9-.8 1.5-.7l2.2.4c.6.1 1.1.7 1.1 1.3v2.2c0 .8-.6 1.4-1.4 1.5A16.6 16.6 0 0 1 4.9 5.2c.1-.8.7-1.4 1.6-1.4Z"
        stroke="#00D21E"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11Z"
        stroke="#00D21E"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" stroke="#00D21E" strokeWidth="2" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z"
        stroke="#00D21E"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 11.5a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.5 2.5Z"
        stroke="#00D21E"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M20 19.2c0-2.3-1.9-4.2-4.2-4.2h-1.6c-2.3 0-4.2 1.9-4.2 4.2"
        stroke="#00D21E"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 19.2c0-1.8-1.4-3.2-3.2-3.2H6.2C4.4 16 3 17.4 3 19.2"
        stroke="#00D21E"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ChatPill() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-ggSoft px-4 py-2 text-sm font-semibold text-gg shadow-soft ring-1 ring-gg/25">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 14a4 4 0 0 1-4 4H9l-5 3V6a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4v8Z"
          stroke="#00D21E"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      Contact Us
    </span>
  )
}

function ContactCard({ icon, title, subtitle, footerLeft, footerHref = '#', footerRight }) {
  return (
    <div className="rounded-3xl bg-white shadow-soft ring-1 ring-zinc-200/70">
      <div className="p-10">
        <IconBadge>{icon}</IconBadge>

        <h3 className="mt-8 text-3xl font-extrabold tracking-tight text-zinc-900">{title}</h3>
        <p className="mt-3 text-lg text-zinc-500">{subtitle}</p>

        <div className="mt-8 h-px w-full bg-zinc-200/80" />

        <div className="mt-6 flex items-center justify-between">
          <a href={footerHref} className="text-lg font-extrabold text-zinc-900 hover:opacity-80">
            {footerLeft}
          </a>
          <span className="text-zinc-400">{footerRight}</span>
        </div>
      </div>
    </div>
  )
}

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Header */}
        <div className="flex justify-center">
          <ChatPill />
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-6xl font-extrabold leading-[1.05] tracking-tight text-[#0B1220] md:text-7xl">
            Get in touch with our
            <br />
            team
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-zinc-500">
            Have questions about membership or partnership opportunities? We're here to help you connect with our cycling
            community.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <ContactCard
            icon={<MailIcon />}
            title="Email Support"
            subtitle="Reach us anytime for quick assistance"
            footerLeft="hello@greenglaidars.com"
            footerHref="mailto:hello@greenglaidars.com"
            footerRight={<ArrowRight />}
          />
          <ContactCard
            icon={<PhoneIcon />}
            title="Phone Support"
            subtitle="Call during business hours (9AM-5PM)"
            footerLeft="+61 2 8000 0000"
            footerHref="tel:+61280000000"
            footerRight={<ArrowRight />}
          />
          <ContactCard
            icon={<PinIcon />}
            title="Visit Us"
            subtitle="9:00 AM - 5:00 PM (Friday - Wednesday)"
            footerLeft="123 Cycling Lane, Sydney NSW 2000"
            footerHref="#"
            footerRight={<ArrowRight />}
          />
        </div>

        {/* Dark CTA */}
        <div className="mt-16 overflow-hidden rounded-[28px] bg-[#0B1220] shadow-[0_18px_60px_rgba(0,0,0,0.18)] ring-1 ring-white/10">
          <div
            className="p-10 md:p-12"
            style={{
              backgroundImage:
                'radial-gradient(900px 220px at 18% 35%, rgba(0,210,30,0.10), transparent 60%), radial-gradient(700px 260px at 85% 60%, rgba(255,255,255,0.06), transparent 62%)',
            }}
          >
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0F1A2E] ring-1 ring-white/10">
                    <UsersIcon />
                  </div>
                  <h3 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                    Join our community support
                  </h3>
                </div>

                <p className="mt-4 text-lg text-white/70">
                  Have specific questions about rides, events, or community features?
                </p>

                <div className="mt-3 flex items-center gap-2 text-white/60">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="text-sm">Response time: Usually within 24 hours</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="/#community"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/35 bg-white/5 px-10 text-lg font-semibold text-white backdrop-blur hover:bg-white/10"
                >
                  Visit Community
                </a>
                <a
                  href="/#faq"
                  className="inline-flex h-14 items-center justify-center rounded-2xl bg-gg px-10 text-lg font-semibold text-black shadow-glow hover:brightness-110"
                >
                  Quick Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ link line */}
        <div className="mt-12 text-center text-lg text-zinc-500">
          Need help immediately? Check our{' '}
          <a href="/#faq" className="font-semibold text-gg underline decoration-gg/40 underline-offset-4">
            Frequently Asked Questions
          </a>
        </div>
      </div>
    </section>
  )
}