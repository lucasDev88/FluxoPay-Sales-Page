"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "@/app/globals.css";

const links = [
  { label: "About Us", href: "#aboutus" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" }
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @keyframes nav-slide-down {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-animate { animation: nav-slide-down 0.45s cubic-bezier(0.22,1,0.36,1) both; }

        @keyframes mobile-fade-in {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-link-animate {
          animation: mobile-fade-in 0.35s cubic-bezier(0.22,1,0.36,1) both;
        }
      `}</style>

      <nav
        className={`nav-animate fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050816]/90 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div
          className={`absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-8">

          {/* Logo — scrolls to top */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="shrink-0 text-2xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 tracking-tight hover:opacity-90 transition-opacity"
          >
            FluxoPay
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 mx-auto">
            {links.map((l) => {
              const id = l.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => scrollTo(e, l.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 group cursor-pointer ${
                    isActive
                      ? "text-cyan-400 bg-cyan-400/8"
                      : "text-slate-400 hover:text-white hover:bg-white/6"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute bottom-1.5 left-4 right-4 h-px rounded-full transition-all duration-300 ${
                      isActive ? "bg-cyan-400/60" : "bg-cyan-400/0 group-hover:bg-cyan-400/40"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <Link
              href="/login"
              className="px-5 py-2 text-sm font-semibold text-slate-300 rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:text-white hover:border-white/20 hover:bg-white/10"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2 text-sm font-bold text-[#050816] rounded-full bg-linear-to-r from-cyan-400 to-sky-500 transition-all duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.45)] hover:scale-[1.03]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden ml-auto w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-cyan-400/40"
          >
            <span className={`block w-4 h-px bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
            <span className={`block w-4 h-px bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-4 h-px bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 translate-y-[-4.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-[#050816]/95 backdrop-blur-xl flex flex-col px-6 pt-24 pb-10"
          onClick={(e) => { if (e.target === e.currentTarget) setMenuOpen(false); }}
        >
          <div className="absolute top-0 left-0 w-full h-64 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.10),transparent_60%)] pointer-events-none" />

          <div className="relative flex flex-col gap-1">
            {links.map((l, i) => {
              const id = l.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => scrollTo(e, l.href)}
                  className={`mobile-link-animate px-4 py-4 text-xl font-bold border-b border-white/6 flex items-center justify-between group transition-colors duration-200 ${
                    isActive ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="flex items-center gap-3">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                    )}
                    {l.label}
                  </span>
                  <svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="text-slate-600 group-hover:text-cyan-400 transition-all duration-200 group-hover:translate-x-1"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              );
            })}
          </div>

          <div
            className="mobile-link-animate mt-auto flex flex-col gap-3"
            style={{ animationDelay: `${links.length * 60}ms` }}
          >
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="w-full py-3.5 text-center text-sm font-semibold text-white rounded-full border border-white/12 bg-white/5 hover:border-cyan-400/30 transition-all duration-300"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="w-full py-3.5 text-center text-sm font-bold text-[#050816] rounded-full bg-linear-to-r from-cyan-400 to-sky-500 hover:shadow-[0_0_24px_rgba(34,211,238,0.4)] transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </>
  );
}