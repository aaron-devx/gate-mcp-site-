import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompatibilityStrip from "./components/CompatibilityStrip";
import UseCases from "./components/UseCases";
import WhoItsFor from "./components/WhoItsFor";
import WhyItMatters from "./components/WhyItMatters";
import FeaturesGrid from "./components/FeaturesGrid";
import HowItWorks from "./components/HowItWorks";
import BuiltWithCursor from "./components/BuiltWithCursor";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionProgress from "./components/SectionProgress";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-ink-970">
      <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-ink-950 shadow-[0_30px_120px_-20px_rgba(0,0,0,0.8)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[720px] bg-[radial-gradient(ellipse_60%_60%_at_50%_30%,_rgba(255,255,255,0.10),_transparent_70%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-0 bg-grid-faint bg-[size:56px_56px] opacity-[0.18]"
          />

          <Navbar />
          <main className="relative">
            <Hero />
            <CompatibilityStrip />
            <UseCases />
            <WhoItsFor />
            <WhyItMatters />
            <FeaturesGrid />
            <HowItWorks />
            <BuiltWithCursor />
            <Faq />
            <Contact />
          </main>
          <SectionProgress />
          <Footer />
        </div>
      </div>
    </div>
  );
}
