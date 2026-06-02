/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import "@/app/globals.css";

const faqData = [
  {
    question: "How does FluxoPay handle payment security?",
    answer:
      "FluxoPay uses enterprise-grade encryption and real-time monitoring on every transaction. Our infrastructure is PCI-DSS compliant and protected by multi-layer threat detection, ensuring your data and funds are always safe.",
  },
  {
    question: "How fast are transactions processed?",
    answer:
      "Most transactions are processed in under 2 seconds. Our distributed infrastructure is optimized for low latency, so your business never waits — whether you're processing one payment or thousands simultaneously.",
  },
  {
    question: "Can I integrate FluxoPay with my existing systems?",
    answer:
      "Yes. FluxoPay offers a RESTful API and SDKs for major platforms. Whether you're running a custom stack, Shopify, or a legacy ERP, our integration layer is designed to fit into your workflow without disruption.",
  },
  {
    question: "What kind of support does FluxoPay offer?",
    answer:
      "We provide 24/7 dedicated support via live chat, email, and phone. Every plan includes access to our technical support team, and Pro and Enterprise clients receive a dedicated account manager.",
  },
  {
    question: "Is FluxoPay suitable for startups?",
    answer:
      "Absolutely. FluxoPay was built to scale alongside your business. Our Basic Plan is tailored for early-stage companies with straightforward pricing and no hidden fees, so you can focus on growth.",
  },
  {
    question: "Does FluxoPay support international payments?",
    answer:
      "Yes. FluxoPay supports multi-currency transactions across 50+ countries. Our global infrastructure ensures consistent speed and reliability regardless of where your customers are located.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-[linear-gradient(135deg,#050816_0%,#081225_25%,#0b1730_50%,#081225_75%,#050816_100%)]">

      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.12),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.12),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.07),transparent_55%)]" />

      {/* Divider top */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400/70 to-transparent" />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold tracking-[0.35em] uppercase text-sm">
            Got Questions?
          </span>

          <h1 className="mt-5 text-6xl md:text-7xl font-black text-white leading-tight">
            Frequently
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500">
              Asked Questions
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-slate-300 leading-relaxed">
            Everything you need to know about FluxoPay. Can't find the answer
            you're looking for? Our support team is available 24/7.
          </p>
        </div>

        {/* Nested border frame — inspired by Pricing */}
        <div className="border border-white/10 rounded-4xl p-1.5 bg-white/2">
          <div className="border border-cyan-400/10 rounded-[26px] p-1.5 bg-white/2">
            <div className="border border-white/5 rounded-[22px] overflow-hidden">

              {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                const isLast = index === faqData.length - 1;

                return (
                  <div
                    key={index}
                    className={`group transition-all duration-300 ${
                      !isLast ? "border-b border-white/8" : ""
                    } ${isOpen ? "bg-white/4" : "hover:bg-white/2.5"}`}
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex items-center justify-between gap-6 px-8 py-6 text-left cursor-pointer"
                    >
                      <span
                        className={`text-lg font-semibold transition-colors duration-300 ${
                          isOpen ? "text-cyan-400" : "text-white group-hover:text-slate-100"
                        }`}
                      >
                        {item.question}
                      </span>

                      {/* Animated icon */}
                      <span
                        className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "border-cyan-400/60 bg-cyan-400/10 rotate-45"
                            : "border-white/20 bg-white/5 group-hover:border-cyan-400/40"
                        }`}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          className={`transition-colors duration-300 ${
                            isOpen ? "stroke-cyan-400" : "stroke-slate-400"
                          }`}
                        >
                          <line x1="6" y1="1" x2="6" y2="11" strokeWidth="1.5" strokeLinecap="round" />
                          <line x1="1" y1="6" x2="11" y2="6" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>

                    {/* Answer panel */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-8 pb-7 text-slate-400 leading-relaxed text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-400 mb-5">Still have questions?</p>
          <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400/60 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] hover:-translate-y-0.5">
            Contact Support
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 7h12M8 2l5 5-5 5" />
            </svg>
          </button>
        </div>

      </div>

      {/* Divider bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />
    </section>
  );
}