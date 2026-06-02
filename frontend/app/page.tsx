import "./globals.css";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import AboutUs from "@/components/aboutus";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

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

        <div className="w-full">
          <FAQ />
        </div>

        <div className="w-full">
          <Testimonials />
        </div>

        <div className="w-full">
          <Footer />
        </div>

      </main>
    </div>
  );
}