import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import WhyElevera from "./components/WhyElevera";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Problems />
      <Services />
      <Pricing />
      <WhyElevera />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
