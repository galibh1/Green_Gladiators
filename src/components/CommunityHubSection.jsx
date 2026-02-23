import React from "react";

function ArrowRight({ className = "" }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronGreen({ className = "" }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Card shadow closer to Figma (lighter than your `shadow-soft`)
 */
function Card({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-3xl ring-1 ring-zinc-200/70 bg-white",
        "shadow-[0_18px_45px_rgba(0,0,0,0.08)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function IconWrap({ children }) {
  return (
    <div
      className={[
        "grid h-12 w-12 place-items-center rounded-2xl",
        "bg-white ring-1 ring-zinc-200/60",
        "shadow-[0_10px_24px_rgba(0,0,0,0.06)]",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M8 3v3M16 3v3M4.5 9h15M6 6h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 13.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M16 21v-1.4c0-1.8-1.8-3.2-4-3.2s-4 1.4-4 3.2V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M12 13.6a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 21v-1.2c0-1.2-.8-2.3-2.1-2.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17.6 5.6a4 4 0 0 1 0 7.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShopIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7l2-3h12l2 3v2a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1-3 3V7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M6 12v8h12v-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 20v-5h6v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Steps icons (match screenshot style) */
function PersonPlusIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 21v-1.2c0-2-1.8-3.6-4-3.6s-4 1.6-4 3.6V21"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M11 13.6a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="2.3"
      />
      <path d="M18.5 9.5v5" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M16 12h5" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
    </svg>
  );
}

function PersonCheckIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path
        d="M14.8 21v-1.1c0-2-1.7-3.7-3.9-3.7S7 17.9 7 19.9V21"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M11 13.6a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="2.3"
      />
      <path
        d="M16.2 9.6l1.5 1.5 3.3-3.5"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BikeIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 17a3 3 0 1 0 0 .01V17Zm14 0a3 3 0 1 0 0 .01V17Z"
        stroke="currentColor"
        strokeWidth="2.3"
      />
      <path
        d="M5 17h5l3-9h3l2 4h-5"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17l4-5"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StepCard({ num, icon, title, desc, highlighted = false }) {
  return (
    <div className={["relative", highlighted ? "z-10" : ""].join(" ")}>
      {/* Black number pill */}
      <div className="absolute -left-6 -top-6 z-20 grid h-14 w-14 place-items-center rounded-2xl bg-black text-2xl font-extrabold text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
        {num}
      </div>

      <Card
        className={[
          "h-full min-h-[240px] px-10 py-12",
          highlighted ? "bg-ggSoft shadow-[0_30px_80px_rgba(0,255,71,0.18)]" : "",
        ].join(" ")}
      >
        <div className="text-gg">{icon}</div>

        <h3 className="mt-10 text-4xl font-extrabold tracking-tight text-black">{title}</h3>
        <p className="mt-4 text-lg text-zinc-500">{desc}</p>

        <button className="mt-10 inline-flex items-center gap-3 text-lg font-semibold text-black">
          Get Started <ArrowRight className="translate-y-[1px] text-zinc-400" />
        </button>
      </Card>
    </div>
  );
}

export default function CommunityHubSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Kicker + Headline */}
        <div className="text-center">
          <div className="text-sm font-semibold tracking-wide text-gg">Community Hub</div>
          <h2 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-black md:text-6xl">
            Discover new routes with
            <br />
            fellow riders
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-500">
            Join a thriving community of cyclists sharing routes, locations, and
            <br className="hidden md:block" />
            experiences across the region
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-12 md:items-stretch">
          {/* Left big featured card */}
          <Card className="md:col-span-7">
            <div className="flex h-full flex-col p-10">
              <div className="inline-flex w-fit rounded-full bg-gg px-5 py-2 text-xs font-extrabold tracking-wide text-black shadow-glow">
                FEATURED
              </div>

              <h3 className="mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight text-black">
                Community-
                <br />
                recommended shops and
                <br />
                mechanics
              </h3>

              <p className="mt-6 max-w-xl text-lg text-zinc-500">
                What makes Green Glaidars different from other cycling groups. Verified by riders, trusted by the
                community.
              </p>

              {/* Stats */}
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-zinc-50 p-6 ring-1 ring-zinc-200/60">
                  <div className="text-4xl font-extrabold tracking-tight text-black">250+</div>
                  <div className="mt-1 text-sm text-zinc-500">Verified Locations</div>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-6 ring-1 ring-zinc-200/60">
                  <div className="flex items-center gap-2">
                    <div className="text-4xl font-extrabold tracking-tight text-black">4.8</div>
                    <div className="text-2xl text-black">★</div>
                  </div>
                  <div className="mt-1 text-sm text-zinc-500">Average Rating</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button className="inline-flex h-12 items-center gap-3 rounded-xl bg-gg px-6 font-semibold text-black shadow-glow hover:brightness-110">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-black/5">
                    <PinIcon />
                  </span>
                  Explore Trusted Shops
                </button>

                <button className="inline-flex h-12 items-center gap-3 rounded-xl border border-zinc-200 bg-white px-6 font-semibold text-black hover:bg-zinc-50">
                  How It Works <ArrowRight className="translate-y-[1px] text-zinc-700" />
                </button>
              </div>
            </div>
          </Card>

          {/* Right column */}
          <div className="grid gap-8 md:col-span-5 md:grid-rows-2">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="h-full p-8">
                <IconWrap>
                  <span className="text-gg">
                    <CalendarIcon />
                  </span>
                </IconWrap>

                <h4 className="mt-6 text-2xl font-extrabold leading-tight tracking-tight text-black">
                  Stay updated on
                  <br />
                  upcoming rides and
                  <br />
                  meetups
                </h4>

                <p className="mt-4 text-base text-zinc-500">Weekly tours with curated routes and community meetups</p>

                <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-black">
                  Browse events <ArrowRight className="translate-y-[1px] text-zinc-400" />
                </button>
              </Card>

              <Card className="h-full p-8">
                <IconWrap>
                  <span className="text-gg">
                    <PinIcon />
                  </span>
                </IconWrap>

                <h4 className="mt-6 text-2xl font-extrabold leading-tight tracking-tight text-black">
                  Reach active
                  <br />
                  cyclists in your
                  <br />
                  area
                </h4>

                <p className="mt-4 text-base text-zinc-500">Verified locations with real-time rider activity</p>

                <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-black">
                  Find locations <ArrowRight className="translate-y-[1px] text-zinc-400" />
                </button>
              </Card>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="relative h-full overflow-hidden p-8 bg-ggSoft">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-[36px] bg-gg/10 blur-[2px]" />
                <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-bl-[36px] bg-white/60" />

                <IconWrap>
                  <span className="text-gg">
                    <UsersIcon />
                  </span>
                </IconWrap>

                <h4 className="mt-6 text-2xl font-extrabold leading-tight tracking-tight text-black">
                  Ride every week
                  <br />
                  with your
                  <br />
                  community
                </h4>

                <p className="mt-4 text-base text-zinc-500">Trusted mechanics and shops verified by riders</p>

                <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-black">
                  Join rides <ArrowRight className="translate-y-[1px] text-zinc-400" />
                </button>
              </Card>

              <Card className="h-full p-8">
                <IconWrap>
                  <span className="text-gg">
                    <ShopIcon />
                  </span>
                </IconWrap>

                <h4 className="mt-6 text-2xl font-extrabold leading-tight tracking-tight text-black">
                  Support local
                  <br />
                  vendors who
                  <br />
                  matter
                </h4>

                <p className="mt-4 text-base text-zinc-500">Direct access to cycling businesses and exclusive deals</p>

                <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-black">
                  Explore vendors <ArrowRight className="translate-y-[1px] text-zinc-400" />
                </button>
              </Card>
            </div>
          </div>
        </div>

        {/* Divider + Join line */}
        <div className="mt-20">
          <div className="h-px w-full bg-zinc-200/70" />
          <div className="py-10 text-center text-base text-zinc-500">
            Join <span className="font-semibold text-gg">1,500+</span> cyclists already exploring together
          </div>
        </div>

        {/* ===================== */}
        {/* GETTING STARTED STEPS */}
        {/* ===================== */}
        <div className="pt-14 text-center">
          <h2 className="text-6xl font-extrabold tracking-tight text-black">Getting started is simple</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-500">
            Three easy steps to join our vibrant cycling community and start your journey
          </p>
        </div>

        <div className="relative mt-16">
          {/* green chevrons between cards (desktop only) */}
          <div className="pointer-events-none absolute left-1/3 top-1/2 hidden -translate-y-2 md:block">
            <ChevronGreen className="text-gg" />
          </div>
          <div className="pointer-events-none absolute left-2/3 top-1/2 hidden -translate-y-2 md:block">
            <ChevronGreen className="text-gg" />
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            <StepCard
              num="01"
              icon={<PersonPlusIcon />}
              title="Sign up as a member"
              desc="Register with secure payment"
            />

            <StepCard
              num="02"
              highlighted
              icon={<PersonCheckIcon />}
              title="Complete your profile"
              desc="Tell us about your cycling style"
            />

            <StepCard
              num="03"
              icon={<BikeIcon />}
              title="Join rides and share"
              desc="Post locations and engage"
            />
          </div>
        </div>

        {/* bottom dot labels + green lines */}
        <div className="mt-14 hidden items-center justify-center gap-14 md:flex">
          <div className="flex items-center gap-3 text-zinc-600">
            <span className="h-3 w-3 rounded-full bg-gg/50" />
            <span className="text-sm">Ready to ride?</span>
          </div>

          <div className="h-px w-28 bg-gg" />

          <div className="flex items-center gap-3 text-zinc-600">
            <span className="h-3 w-3 rounded-full bg-gg" />
            <span className="text-sm">Join the community</span>
          </div>

          <div className="h-px w-28 bg-gg" />

          <div className="flex items-center gap-3 text-zinc-600">
            <span className="h-3 w-3 rounded-full bg-gg" />
            <span className="text-sm">Start exploring</span>
          </div>
        </div>
      </div>
    </section>
  );
}