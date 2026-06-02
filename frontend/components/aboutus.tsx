/* eslint-disable react/no-unescaped-entities */
"use client";

import { JSX, useEffect, useRef } from "react";
import "@/app/globals.css";

const stats = [
  { value: "99.9%", label: "Platform Reliability", icon: "uptime" },
  { value: "24/7", label: "Dedicated Support", icon: "support" },
  { value: "100+", label: "Businesses Trust Us", icon: "businesses" },
  { value: "< 2s", label: "Avg. Processing Time", icon: "speed" },
];

const features = [
  {
    title: "Fast Transactions",
    description:
      "Lightning-fast payment processing designed for modern businesses. Every millisecond counts.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Enterprise Security",
    description:
      "Multi-layer threat detection, PCI-DSS compliance, and real-time monitoring on every transaction.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Global Scale",
    description:
      "50+ countries, multi-currency, built to support growth from first transaction to billions.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
];

function StatIcon({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
    uptime: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    support: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
      </svg>
    ),
    businesses: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
      </svg>
    ),
    speed: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  };
  return icons[type] ?? null;
}

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-reveal]").forEach((el, i) => {
              (el as HTMLElement).style.transitionDelay = `${i * 80}ms`;
              el.classList.add("reveal-visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .reveal-visible[data-reveal],
        .reveal-visible [data-reveal] {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(3deg); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .float-slow { animation: float-slow 7s ease-in-out infinite; }
        .float-slower { animation: float-slower 9s ease-in-out infinite; }
        .pulse-ring::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: inherit;
          border: 1px solid rgba(34,211,238,0.4);
          animation: pulse-ring 2.5s ease-out infinite;
        }
        .stat-card:hover .stat-icon-bg {
          background: rgba(34,211,238,0.15);
          box-shadow: 0 0 20px rgba(34,211,238,0.2);
        }
      `}</style>

      <section
        ref={sectionRef}
        id="aboutus"
        className="relative w-full min-h-screen -mt-24 overflow-hidden flex items-center justify-center bg-[linear-gradient(135deg,#050816_0%,#081225_25%,#0b1730_50%,#081225_75%,#050816_100%)]"
      >
        {/* Transition from Hero */}
        <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-[#050816] via-[#06101f] to-transparent" />

        {/* Divider Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400/70 to-transparent" />

        {/* Gradient orbs */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(34,211,238,0.18),transparent_32%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(59,130,246,0.18),transparent_32%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.08),transparent_55%)]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Floating decorative orbs */}
        <div className="absolute top-32 right-[8%] w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.07),transparent_70%)] float-slow pointer-events-none" />
        <div className="absolute bottom-40 left-[5%] w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.07),transparent_70%)] float-slower pointer-events-none" />

        {/* Decorative corner marks */}
        <div className="absolute top-28 left-10 w-12 h-12 border-t border-l border-cyan-400/20 rounded-tl-lg pointer-events-none" />
        <div className="absolute top-28 right-10 w-12 h-12 border-t border-r border-cyan-400/20 rounded-tr-lg pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">

          {/* ── Header ── */}
          <div className="text-center mb-24" data-reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/8 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-cyan-400 font-semibold tracking-[0.3em] uppercase text-xs">
                About FluxoPay
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] tracking-tight">
              The Future of
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 mt-2">
                Financial Freedom
              </span>
            </h1>

            <p className="max-w-2xl mx-auto mt-8 text-xl text-slate-400 leading-relaxed">
              We're building a new generation of payment solutions designed for
              speed, security, and scalability — empowering businesses to
              unlock sustainable growth.
            </p>
          </div>

          {/* ── Mission + Stats ── */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-8">

            {/* Mission Card */}
            <div
              data-reveal
              className="group relative bg-white/4 backdrop-blur-xl border border-white/10 rounded-4xl p-10 transition-all duration-500 hover:border-cyan-400/35 hover:-translate-y-1.5 hover:shadow-[0_0_60px_rgba(34,211,238,0.12)] overflow-hidden"
            >
              {/* Inner glow on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl" />

              {/* Top accent line */}
              <div className="absolute top-0 left-12 right-12 h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-7 h-7 rounded-lg bg-cyan-400/10 border border-cyan-400/25 flex items-center justify-center text-cyan-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                    </svg>
                  </div>
                  <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
                    Our Mission
                  </span>
                </div>

                <h2 className="text-4xl font-bold text-white leading-tight mb-6">
                  Simplifying the way<br />businesses move money.
                </h2>

                <p className="text-slate-300 text-lg leading-relaxed mb-5">
                  Managing payments shouldn't be complicated. We created
                  FluxoPay to eliminate friction, automate processes, and give
                  companies complete control over their financial ecosystem.
                </p>

                <p className="text-slate-400 leading-relaxed">
                  Every feature is designed around one goal: helping businesses
                  spend less time managing transactions and more time growing.
                </p>

                {/* CTA link */}
                <div className="mt-8 flex items-center gap-2 text-cyan-400 font-semibold text-sm group/link cursor-pointer w-fit">
                  <span className="group-hover/link:underline underline-offset-4">Learn our story</span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/link:translate-x-1">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <div
                  key={stat.value}
                  data-reveal
                  style={{ transitionDelay: `${i * 60}ms` }}
                  className="stat-card group relative bg-white/4 backdrop-blur-xl border border-white/10 rounded-3xl p-7 transition-all duration-500 hover:border-cyan-400/35 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] overflow-hidden"
                >
                  <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:via-cyan-400/30 transition-all duration-500" />

                  {/* Icon */}
                  <div className="stat-icon-bg w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-5 transition-all duration-300">
                    <StatIcon type={stat.icon} />
                  </div>

                  <h3 className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-br from-cyan-300 to-sky-500 leading-none mb-3">
                    {stat.value}
                  </h3>
                  <p className="text-slate-400 text-sm leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Features ── */}
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className="group relative bg-white/3 backdrop-blur-xl border border-white/8 rounded-3xl p-8 transition-all duration-500 hover:border-cyan-400/30 hover:-translate-y-1.5 hover:bg-white/6 overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.07),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon container with pulse ring */}
                  <div className="relative pulse-ring w-11 h-11 rounded-2xl bg-cyan-400/8 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-6 transition-all duration-300 group-hover:bg-cyan-400/15 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                    {f.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{f.description}</p>

                  {/* Bottom accent */}
                  <div className="mt-6 w-8 h-0.5 bg-linear-to-r from-cyan-400/60 to-transparent rounded-full transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />
      </section>
    </>
  );
}