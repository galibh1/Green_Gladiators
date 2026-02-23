import React from "react";

const stories = [
  {
    tag: "Ride",
    title: "Finding the best gravel routes near you",
    description: "Discover hidden gravel paths perfect for weekend adventures",
    author: "Alex Turner",
    date: "15 Jan 2024",
    readTime: "6 min read",
    image: "/images/story-ride.jpg",
  },
  {
    tag: "Gear",
    title: "Maintenance tips that keep you riding",
    description: "Simple checks and care routines to extend your bike's life",
    author: "Jordan Blake",
    date: "12 Jan 2024",
    readTime: "4 min read",
    image: "/images/story-gear.jpg",
    featured: true,
  },
  {
    tag: "Community",
    title: "How group rides changed my cycling",
    description: "Real stories from riders who found their people through Green Gladiator",
    author: "Emma Walsh",
    date: "08 Jan 2024",
    readTime: "7 min read",
    image: "/images/story-community.jpg",
  },
];

function TagPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-ggSoft px-3 py-1 text-xs font-semibold text-black">
      {children}
    </span>
  );
}

export default function StoriesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Header */}
        <div className="text-center">
          <div className="text-sm font-semibold text-black/80">Stories</div>
          <h2 className="mt-5 text-5xl font-extrabold tracking-tight text-black md:text-6xl">
            Learn from the road
          </h2>
          <p className="mt-4 text-lg text-zinc-500">
            Tips, routes, and insights from our cycling community
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {stories.map((s) => (
            <div
              key={s.title}
              className={[
                "overflow-hidden rounded-[28px] bg-white shadow-soft ring-1 ring-zinc-200/70",
                "transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.12)]",
                s.featured ? "ring-2 ring-gg" : "",
              ].join(" ")}
            >
              <div className="relative h-64">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="px-8 pb-10 pt-7">
                <TagPill>{s.tag}</TagPill>

                <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-black">
                  {s.title}
                </h3>

                <p className="mt-4 text-lg text-zinc-500">{s.description}</p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-ggSoft ring-1 ring-zinc-200/60">
                    <span className="text-sm font-extrabold text-black">
                      {s.author
                        .split(" ")
                        .slice(0, 2)
                        .map((x) => x[0])
                        .join("")}
                    </span>
                  </div>

                  <div className="leading-tight">
                    <div className="text-base font-extrabold text-black">
                      {s.author}
                    </div>
                    <div className="mt-1 text-sm text-zinc-500">
                      {s.date} • {s.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">
          <button className="h-12 rounded-xl border border-zinc-200 bg-white px-10 font-semibold text-zinc-800 shadow-soft hover:bg-zinc-50">
            Read more articles
          </button>
        </div>
      </div>
    </section>
  );
}