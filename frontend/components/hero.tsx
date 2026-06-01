import Image from "next/image";
import "@/app/globals.css";

export default function Hero() {
  return (
    <main className="min-h-screen bg-[#050816] flex items-center justify-center overflow-visible px-6">
      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 text-center space-y-8">
        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white">
            Welcome to
          </h1>

          <h1 className="flex items-center justify-center text-7xl md:text-8xl font-extrabold leading-[1.2] text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]">
            <span>Flux</span>

            <Image
              src="/logo.png"
              alt="FluxoPay Logo"
              width={80}
              height={80}
              className="mx-1 relative top-2 right-2 shrink-0 object-contain"
              priority
            />

            <span className="text-transparent relative -left-2 bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              Pay
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
          Revolutionizing the way you manage your finances with our{" "}
          <span className="font-bold text-white">innovative solutions</span>.
        </p>

        {/* Button */}
        <div className="pt-4">
          <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.45)]">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
