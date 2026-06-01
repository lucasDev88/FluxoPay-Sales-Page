import "./globals.css";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import AboutUs from "@/components/aboutus";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="grow flex flex-col">
        <Hero />

        <div className="w-full">
          <AboutUs />
        </div>

        <div className="w-full">
          <Pricing />
        </div>
      </main>
    </div>
  );
}