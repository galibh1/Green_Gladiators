import React from "react";


export default function ReadyToRideSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-28 pt-10">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-black md:text-6xl">
            Ready to ride together
          </h2>
          <p className="mt-4 text-lg text-zinc-500">
            Join verified cyclists exploring new routes every week
          </p>


          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <button className="h-12 rounded-xl bg-gg px-10 font-semibold text-black shadow-glow hover:brightness-110">
              Join Now
            </button>

            <button className="h-12 rounded-xl border border-zinc-200 bg-white px-10 font-semibold text-zinc-800 shadow-soft hover:bg-zinc-50">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}