import React from "react";

const moments = [
  { src: "/images/moment-1.jpg", className: "md:col-span-1 md:row-span-2" }, // big left
  { src: "/images/moment-2.jpg", className: "md:col-span-1 md:row-span-1" }, // top middle
  { src: "/images/moment-4.jpg", className: "md:col-span-1 md:row-span-2" }, // big right
  { src: "/images/moment-3.jpg", className: "md:col-span-1 md:row-span-1" }, // middle under top middle
  { src: "/images/moment-5.jpg", className: "md:col-span-1 md:row-span-2" }, // bottom left
  { src: "/images/moment-6.jpg", className: "md:col-span-1 md:row-span-2" }, // bottom middle
  // Optional (if you downloaded it)
  // { src: "/images/moment-7.jpg", className: "md:col-span-1 md:row-span-2" },
];

function Tile({ src }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-zinc-100 shadow-soft ring-1 ring-zinc-200/70">
      <img src={src} alt="" className="h-full w-full object-cover" />
    </div>
  );
}

export default function MomentsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-black md:text-6xl">
            Moments on the road
          </h2>
          <p className="mt-4 text-lg text-zinc-500">
            See where our community rides and explores together
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 md:auto-rows-[220px]">
          {moments.map((m) => (
            <div key={m.src} className={m.className}>
              <Tile src={m.src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}