import "@/app/globals.css";

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Changelog", "API Docs"],
  Company: ["About Us", "Blog", "Careers", "Press Kit", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"],
  Support: ["Help Center", "Status Page", "Community", "24/7 Support"],
};

const socials = [
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#050816_0%,#040b1a_100%)]">

      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400/60 to-transparent" />

      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(34,211,238,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(59,130,246,0.08),transparent_40%)]" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Top section */}
        <div className="py-16 grid lg:grid-cols-5 gap-12 border-b border-white/8">

          {/* Brand col */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <span className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 tracking-tight">
                FluxoPay
              </span>
              <p className="mt-4 text-slate-400 leading-relaxed max-w-xs">
                The next generation of payment infrastructure. Built for speed,
                security, and scale — from startup to enterprise.
              </p>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-slate-400 text-xs">All systems operational</span>
            </div>
          </div>

          {/* Links cols */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
                  {category}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-slate-400 text-sm transition-colors duration-200 hover:text-cyan-400"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter strip */}
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/8">
          <div>
            <p className="text-white font-semibold">Stay in the loop</p>
            <p className="text-slate-400 text-sm mt-1">
              Product updates and fintech insights, straight to your inbox.
            </p>
          </div>

          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 md:w-64 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm placeholder-slate-500 outline-none transition-all duration-300 focus:border-cyan-400/50 focus:bg-white/8 focus:shadow-[0_0_16px_rgba(34,211,238,0.1)]"
            />
            <button className="px-5 py-2.5 rounded-full bg-cyan-400/15 border border-cyan-400/30 text-cyan-400 font-semibold text-sm transition-all duration-300 hover:bg-cyan-400/25 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} FluxoPay, Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-slate-500 text-sm transition-colors duration-200 hover:text-slate-300"
              >
                {item}
              </a>
            ))}

            {/* PCI badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/8 bg-white/3">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-slate-500 text-xs">PCI DSS</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}