import { useEffect, useRef, useState, useCallback } from "react";
import Lenis from "lenis";
import "@/App.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EditorialMarquee from "@/components/EditorialMarquee";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import EnquiryLedger from "@/components/EnquiryLedger";

function App() {
  const lenisRef = useRef(null);
  const [ledgerOpen, setLedgerOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenisRef.current) lenisRef.current.scrollTo(el, { offset: -72, duration: 1.4 });
    else el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-[#F8F8F8] min-h-screen overflow-x-clip" data-testid="app-root">
      <div className="grain-overlay" />
      <Navbar onNavigate={scrollTo} />
      <main>
        <Hero onNavigate={scrollTo} />
        <EditorialMarquee />
        <Manifesto />
        <Services onReserve={() => scrollTo("enquiry")} />
        <Testimonials />
        <BookingSection />
      </main>
      <Footer onOpenLedger={() => setLedgerOpen(true)} onNavigate={scrollTo} />
      <EnquiryLedger open={ledgerOpen} onClose={() => setLedgerOpen(false)} />
    </div>
  );
}

export default App;
