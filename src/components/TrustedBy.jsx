import React from "react";

/**
 * Figma-like “Trusted by…” strip:
 * - Big heading
 * - Single-row logos (no wrapping)
 * - Overflow hidden like the screenshot
 * - Optional marquee scroll (enabled via CSS)
 */

function WebflowLogo() {
  return (
    <div className="gg-trust-logo">
      {/* Simple Webflow mark (approx). Replace with real SVG later if you export */}
      <svg width="44" height="28" viewBox="0 0 44 28" fill="none" aria-hidden="true">
        <path
          d="M29.6 0.8C27.2 0.8 25.6 2.1 24.6 4.1L18.4 16.7L15.7 4.8C15.1 2.2 13.6 0.8 11 0.8C8.3 0.8 6.6 2.3 6 4.9L0 27.2H5.8L10.2 10.6L13 22.2C13.6 24.8 15.1 26.1 17.8 26.1C20.3 26.1 21.9 24.8 23 22.6L29.2 9.8L32.2 22.1C32.8 24.7 34.3 26.1 36.9 26.1C39.6 26.1 41.3 24.7 41.9 22.1L44 0.8H38.6L37.2 17.2L34.2 4.9C33.6 2.3 32.1 0.8 29.6 0.8Z"
          fill="black"
        />
      </svg>
      <span className="gg-trust-word">Webflow</span>
    </div>
  );
}

function RelumeLogo() {
  return (
    <div className="gg-trust-logo">
      {/* Simple Relume cube (approx). Replace with real SVG later if you export */}
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <path
          d="M17 2.5L29 9.5V24.5L17 31.5L5 24.5V9.5L17 2.5Z"
          stroke="black"
          strokeWidth="3"
        />
        <path
          d="M17 8.5L23.5 12.2V19.8L17 23.5L10.5 19.8V12.2L17 8.5Z"
          fill="black"
        />
      </svg>
      <span className="gg-trust-word">Relume</span>
    </div>
  );
}

export default function TrustedBy() {
  // Repeat sequence so it looks like Figma’s long strip
  const items = [
    "relume",
    "webflow",
    "relume",
    "webflow",
    "relume",
    "webflow",
    "relume",
    "webflow",
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h3 className="text-center text-4xl font-extrabold tracking-tight text-black md:text-5xl">
          Trusted by cycling shops
          <br />
          and riders everywhere
        </h3>

        {/* Figma-like strip */}
        <div className="mt-16 overflow-hidden">
          {/* Track (duplicate rows for seamless loop) */}
          <div className="gg-marquee">
            <div className="gg-marquee-row">
              {items.map((t, idx) =>
                t === "webflow" ? <WebflowLogo key={`w-${idx}`} /> : <RelumeLogo key={`r-${idx}`} />
              )}
            </div>

            <div className="gg-marquee-row" aria-hidden="true">
              {items.map((t, idx) =>
                t === "webflow" ? <WebflowLogo key={`w2-${idx}`} /> : <RelumeLogo key={`r2-${idx}`} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
