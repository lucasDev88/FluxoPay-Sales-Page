/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect, useRef } from "react";
import "@/app/globals.css";

const testimonials = [
  {
    name: "Mariana Costa",
    role: "CEO",
    company: "NovaTech Solutions",
    initials: "MC",
    color: "from-cyan-400 to-sky-500",
    stars: 5,
    quote:
      "FluxoPay completely transformed how we handle payments. What used to take our finance team hours is now fully automated. The reliability alone justified switching — we haven't had a single failed transaction in 8 months.",
  },
  {
    name: "Rafael Mendes",
    role: "CTO",
    company: "Buildify",
    initials: "RM",
    color: "from-blue-400 to-indigo-500",
    stars: 5,
    quote:
      "The API is incredibly well-documented and the integration was seamless. We went from zero to fully live in under a day. Our checkout conversion improved by 23% just from the speed improvement alone.",
  },
  {
    name: "Juliana Ferreira",
    role: "Head of Finance",
    company: "Apex Retail",
    initials: "JF",
    color: "from-sky-400 to-cyan-600",
    stars: 5,
    quote:
      "We process thousands of transactions daily. With FluxoPay, the dashboard gives us full visibility in real time. The 24/7 support team is incredibly responsive — they feel like an extension of our own team.",
  },
  {
    name: "Lucas Oliveira",
    role: "Founder",
    company: "Stackr",
    initials: "LO",
    color: "from-teal-400 to-sky-500",
    stars: 5,
    quote:
      "As a startup, we needed a payment partner that could grow with us without changing plans every quarter. FluxoPay's infrastructure handled our Black Friday spike without a single hiccup. Remarkable.",
  },
  {
    name: "Camila Rocha",
    role: "Operations Director",
    company: "Lumina Group",
    initials: "CR",
    color: "from-cyan-300 to-blue-500",
    stars: 5,
    quote:
      "Switching to FluxoPay cut our payment processing costs by 18%. Beyond the savings, the security features gave our compliance team peace of mind. We finally feel like we have a partner, not just a vendor.",
  },
  {
    name: "Bruno Almeida",
    role: "Product Manager",
    company: "Flowdesk",
    initials: "BA",
    color: "from-blue-300 to-cyan-500",
    stars: 5,
    quote:
      "The developer experience is unlike anything we've used before. Clean SDKs, webhooks that actually work reliably, and a sandbox environment that mirrors production perfectly. FluxoPay is the gold standard.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505L7 1z"
            fill="#22d3ee"
            stroke="#22d3ee"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number, dir: "left" | "right") => {
    if (animating || index === activeIndex) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setAnimating(false);
    }, 350);
  };

  const prev = () => {
    const idx = (activeIndex - 1 + testimonials.length) % testimonials.length;
    goTo(idx, "left");
  };

  const next = () => {
    const idx = (activeIndex + 1) % testimonials.length;
    goTo(idx, "right");
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const idx = (activeIndex + 1) % testimonials.length;
      setDirection("right");
      setAnimating(true);
      setTimeout(() => {
        setActiveIndex(idx);
        setAnimating(false);
      }, 350);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex]);

  const active = testimonials[activeIndex];

  // Visible cards: prev, active, next
  const prevIdx = (activeIndex - 1 + testimonials.length) % testimonials.length;
  const nextIdx = (activeIndex + 1) % testimonials.length;

  return (
    <section id="testimonials" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-[linear-gradient(135deg,#050816_0%,#081225_25%,#0b1730_50%,#081225_75%,#050816_100%)]">

      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(34,211,238,0.13),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(59,130,246,0.13),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.08),transparent_50%)]" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Dividers */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400/70 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-cyan-400 font-semibold tracking-[0.35em] uppercase text-sm">
            Testimonials
          </span>
          <h1 className="mt-5 text-6xl md:text-7xl font-black text-white leading-tight">
            Trusted by
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500">
              Real Businesses
            </span>
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-slate-300 leading-relaxed">
            Thousands of companies rely on FluxoPay to power their financial
            operations. Here's what some of them have to say.
          </p>
        </div>

        {/* Cards Stage */}
        <div className="relative flex items-center justify-center gap-5 mb-14">

          {/* Side card — prev */}
          <div
            onClick={prev}
            className="hidden lg:block w-72 shrink-0 cursor-pointer"
          >
            <div className="bg-white/3 border border-white/8 rounded-3xl p-7 opacity-50 scale-95 transition-all duration-500 hover:opacity-70 hover:border-cyan-400/20">
              <StarRating count={testimonials[prevIdx].stars} />
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6">
                "{testimonials[prevIdx].quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full bg-linear-to-br ${testimonials[prevIdx].color} flex items-center justify-center text-white text-xs font-black`}>
                  {testimonials[prevIdx].initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{testimonials[prevIdx].name}</p>
                  <p className="text-slate-500 text-xs">{testimonials[prevIdx].role} · {testimonials[prevIdx].company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Active card */}
          <div className="w-full max-w-xl shrink-0">
            <div
              className="border border-white/10 rounded-4xl p-1.5 bg-white/2"
              style={{
                opacity: animating ? 0 : 1,
                transform: animating
                  ? `translateX(${direction === "right" ? "-30px" : "30px"})`
                  : "translateX(0)",
                transition: "opacity 350ms ease, transform 350ms ease",
              }}
            >
              <div className="border border-cyan-400/15 rounded-[26px] p-1.5 bg-white/2">
                <div className="bg-white/4 backdrop-blur-xl border border-white/8 rounded-[22px] p-10">

                  {/* Quote mark */}
                  <div className="text-cyan-400/20 text-8xl font-black leading-none mb-2 -mt-4 select-none">
                    "
                  </div>

                  <StarRating count={active.stars} />

                  <p className="text-white text-xl leading-relaxed mb-8 font-light">
                    "{active.quote}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/8">
                    <div className={`w-12 h-12 rounded-full bg-linear-to-br ${active.color} flex items-center justify-center text-white font-black text-sm shadow-lg`}>
                      {active.initials}
                    </div>
                    <div>
                      <p className="text-white font-bold text-base">{active.name}</p>
                      <p className="text-cyan-400/80 text-sm">{active.role} · {active.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side card — next */}
          <div
            onClick={next}
            className="hidden lg:block w-72 shrink-0 cursor-pointer"
          >
            <div className="bg-white/3 border border-white/8 rounded-3xl p-7 opacity-50 scale-95 transition-all duration-500 hover:opacity-70 hover:border-cyan-400/20">
              <StarRating count={testimonials[nextIdx].stars} />
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6">
                "{testimonials[nextIdx].quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full bg-linear-to-br ${testimonials[nextIdx].color} flex items-center justify-center text-white text-xs font-black`}>
                  {testimonials[nextIdx].initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{testimonials[nextIdx].name}</p>
                  <p className="text-slate-500 text-xs">{testimonials[nextIdx].role} · {testimonials[nextIdx].company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">

          {/* Prev button */}
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-slate-400 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_16px_rgba(34,211,238,0.15)]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 3L5 8l5 5" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2.5 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > activeIndex ? "right" : "left")}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-6 h-2 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-slate-400 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_16px_rgba(34,211,238,0.15)]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3l5 5-5 5" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}