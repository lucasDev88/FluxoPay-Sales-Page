"use client";

import { useState } from "react";
import "@/app/globals.css";

const plans = [
  {
    id: "starter",
    title: "Starter",
    tag: null,
    monthly: 9.99,
    annual: 7.99,
    description: "Perfect for early-stage startups and solo founders testing the waters.",
    accent: "from-slate-400 to-slate-500",
    glowColor: "rgba(148,163,184,0.12)",
    features: [
      { name: "Up to 500 transactions/mo", included: true },
      { name: "Basic analytics dashboard", included: true },
      { name: "Email support", included: true },
      { name: "API access", included: true },
      { name: "Multi-currency support", included: false },
      { name: "Advanced fraud detection", included: false },
      { name: "Dedicated account manager", included: false },
    ],
    cta: "Get Started",
  },
  {
    id: "pro",
    title: "Pro",
    tag: "Most Popular",
    monthly: 49.99,
    annual: 39.99,
    description: "For growing businesses that need speed, reliability, and full control.",
    accent: "from-cyan-400 to-sky-500",
    glowColor: "rgba(34,211,238,0.18)",
    features: [
      { name: "Up to 10,000 transactions/mo", included: true },
      { name: "Advanced analytics dashboard", included: true },
      { name: "Priority 24/7 support", included: true },
      { name: "Full API access + webhooks", included: true },
      { name: "Multi-currency support", included: true },
      { name: "Advanced fraud detection", included: true },
      { name: "Dedicated account manager", included: false },
    ],
    cta: "Start Free Trial",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    tag: "Custom",
    monthly: 199.99,
    annual: 159.99,
    description: "Built for high-volume operations with custom SLAs and white-glove support.",
    accent: "from-blue-400 to-indigo-500",
    glowColor: "rgba(59,130,246,0.14)",
    features: [
      { name: "Unlimited transactions", included: true },
      { name: "Custom analytics & reporting", included: true },
      { name: "Dedicated 24/7 support line", included: true },
      { name: "Full API access + webhooks", included: true },
      { name: "Multi-currency support", included: true },
      { name: "Advanced fraud detection", included: true },
      { name: "Dedicated account manager", included: true },
    ],
    cta: "Contact Sales",
  },
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill="rgba(34,211,238,0.12)" stroke="rgba(34,211,238,0.35)" strokeWidth="1" />
      <path d="M5 8.5l2 2 4-4" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <path d="M6 6l4 4M10 6l-4 4" stroke="rgba(148,163,184,0.4)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .tag-shimmer {
          background: linear-gradient(90deg, #22d3ee, #38bdf8, #22d3ee);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .toggle-thumb {
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }
      `}</style>

      <section id="pricing" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-[linear-gradient(135deg,#050816_0%,#081225_25%,#0b1730_50%,#081225_75%,#050816_100%)]">

        {/* Background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.10),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.10),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(14,165,233,0.07),transparent_50%)]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Dividers */}
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/8 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-cyan-400 font-semibold tracking-[0.3em] uppercase text-xs">
                Pricing
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
              Simple, Transparent
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 mt-2">
                Pricing
              </span>
            </h1>

            <p className="max-w-xl mx-auto mt-6 text-lg text-slate-400 leading-relaxed">
              No hidden fees. No surprises. Choose the plan that fits your
              business and scale freely.
            </p>

            {/* Billing toggle */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <span className={`text-sm font-medium transition-colors ${!annual ? "text-white" : "text-slate-500"}`}>
                Monthly
              </span>

              <button
                onClick={() => setAnnual(!annual)}
                className="relative w-12 h-6 rounded-full border border-white/15 bg-white/8 transition-all duration-300 hover:border-cyan-400/40"
              >
                <span
                  className={`toggle-thumb absolute top-0.5 w-5 h-5 rounded-full bg-linear-to-br from-cyan-400 to-sky-500 shadow-[0_0_10px_rgba(34,211,238,0.5)] ${
                    annual ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>

              <span className={`text-sm font-medium transition-colors flex items-center gap-2 ${annual ? "text-white" : "text-slate-500"}`}>
                Annual
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
                  –20%
                </span>
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan) => {
              const isPro = plan.id === "pro";
              const price = annual ? plan.annual : plan.monthly;

              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col rounded-[28px] transition-all duration-500 hover:-translate-y-2 ${
                    isPro
                      ? "border border-cyan-400/30 bg-white/6 shadow-[0_0_60px_rgba(34,211,238,0.12)]"
                      : "border border-white/8 bg-white/3 hover:border-white/15 hover:bg-white/5"
                  }`}
                  style={isPro ? { boxShadow: `0 0 60px ${plan.glowColor}` } : {}}
                >
                  {/* Pro top accent */}
                  {isPro && (
                    <div className="absolute top-0 left-12 right-12 h-px bg-linear-to-r from-transparent via-cyan-400/60 to-transparent" />
                  )}

                  {/* Tag */}
                  {plan.tag && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <div className={`px-4 py-1 rounded-full text-xs font-black tracking-wider uppercase ${
                        isPro
                          ? "bg-cyan-400/15 border border-cyan-400/35 tag-shimmer"
                          : "bg-blue-400/10 border border-blue-400/25 text-blue-400"
                      }`}>
                        {plan.tag}
                      </div>
                    </div>
                  )}

                  <div className="p-8 flex flex-col flex-1">

                    {/* Plan name */}
                    <div className="mb-6">
                      <span className={`text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-linear-to-r ${plan.accent}`}>
                        {plan.title}
                      </span>

                      <div className="flex items-end gap-1 mt-3">
                        <span className="text-5xl font-black text-white leading-none">
                          ${price.toFixed(2)}
                        </span>
                        <span className="text-slate-500 text-sm mb-1.5">/month</span>
                      </div>

                      {annual && (
                        <p className="text-emerald-400 text-xs mt-1.5 font-medium">
                          Save ${((plan.monthly - plan.annual) * 12).toFixed(0)}/year
                        </p>
                      )}

                      <p className="text-slate-400 text-sm leading-relaxed mt-3">
                        {plan.description}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-white/6 mb-6" />

                    {/* Features */}
                    <ul className="flex flex-col gap-3.5 flex-1">
                      {plan.features.map((f) => (
                        <li key={f.name} className="flex items-center gap-3">
                          {f.included ? <CheckIcon /> : <CrossIcon />}
                          <span className={`text-sm ${f.included ? "text-slate-300" : "text-slate-600"}`}>
                            {f.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button
                      className={`mt-8 w-full py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
                        isPro
                          ? "bg-linear-to-r from-cyan-400 to-sky-500 text-[#050816] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-[1.02]"
                          : "border border-white/12 bg-white/5 text-white hover:border-cyan-400/35 hover:bg-white/10 hover:text-cyan-400"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom note */}
          <p className="text-center text-slate-600 text-sm mt-10">
            All plans include a 14-day free trial. No credit card required.
          </p>

        </div>
      </section>
    </>
  );
}