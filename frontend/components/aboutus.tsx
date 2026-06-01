/* eslint-disable react/no-unescaped-entities */
import "@/app/globals.css";

export default function AboutUs() {
  return (
    <section className="relative w-full min-h-screen -mt-24 overflow-hidden flex items-center justify-center bg-[linear-gradient(135deg,#050816_0%,#081225_25%,#0b1730_50%,#081225_75%,#050816_100%)]">

      {/* Transition from Hero */}
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-[#050816] via-[#06101f] to-transparent"></div>

      {/* Divider Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400/70 to-transparent"></div>

      {/* Full Screen Gradient Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.20),transparent_30%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.20),transparent_30%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.10),transparent_50%)]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto m-5 px-6">

        {/* Header */}
        <div className="text-center mb-27">
          <span className="text-cyan-400 m-5 font-semibold tracking-[0.35em] uppercase">
            About FluxoPay
          </span>

          <h1 className="mt-6 text-6xl md:text-8xl font-black text-white leading-tight">
            The Future of
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500">
              Financial Freedom
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-xl text-slate-300 leading-relaxed">
            We're building a new generation of payment solutions designed for
            speed, security, and scalability. Our mission is to empower
            businesses with tools that simplify financial operations and unlock
            sustainable growth.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Mission Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-4xl p-10 transition-all duration-500 hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
            <span className="text-cyan-400 font-semibold uppercase tracking-wider">
              Our Mission
            </span>

            <h2 className="text-4xl font-bold text-white mt-4 mb-6">
              Simplifying the way businesses move money.
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Managing payments shouldn't be complicated. We created FluxoPay
              to eliminate friction, automate processes, and give companies
              complete control over their financial ecosystem.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed">
              Every feature is designed around one goal: helping businesses
              spend less time managing transactions and more time growing.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-8 transition-all duration-500 hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <h3 className="text-5xl font-black text-cyan-400">99.9%</h3>
              <p className="text-slate-400 mt-3">Platform Reliability</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-8 transition-all duration-500 hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <h3 className="text-5xl font-black text-cyan-400">24/7</h3>
              <p className="text-slate-400 mt-3">Dedicated Support</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-8 transition-all duration-500 hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <h3 className="text-5xl font-black text-cyan-400">100+</h3>
              <p className="text-slate-400 mt-3">Businesses Trust Us</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-8 transition-all duration-500 hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <h3 className="text-5xl font-black text-cyan-400">Secure</h3>
              <p className="text-slate-400 mt-3">Infrastructure</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-8 transition-all duration-500 hover:border-cyan-400/40 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Fast Transactions
            </h3>

            <p className="text-slate-400">
              Lightning-fast payment processing designed for modern businesses.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-8 transition-all duration-500 hover:border-cyan-400/40 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Enterprise Security
            </h3>

            <p className="text-slate-400">
              Advanced protection and monitoring for every transaction.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-8 transition-all duration-500 hover:border-cyan-400/40 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Global Scale
            </h3>

            <p className="text-slate-400">
              Built to support growth from startup to enterprise level.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}