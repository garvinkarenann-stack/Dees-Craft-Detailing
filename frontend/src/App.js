import { useEffect, useRef, useState, useCallback } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EditorialMarquee from "@/components/EditorialMarquee";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import EnquiryLedger from "@/components/EnquiryLedger";

function App() {
  const lenisRef = useRef(null);
  const [selectedPackage, setSelectedPackage] = useState("");
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

  const reservePackage = useCallback((pkg) => {
    setSelectedPackage(pkg);
    scrollTo("enquiry");
  }, [scrollTo]);

  return (
    <div className="bg-[#0A0A0A] text-[#F8F8F8] min-h-screen overflow-x-clip" data-testid="app-root">
      <div className="grain-overlay" />
      <Navbar onNavigate={scrollTo} />
      <main>
        <Hero onNavigate={scrollTo} />
        <EditorialMarquee />
        <Manifesto />
        <Services onReserve={reservePackage} />
        <Gallery />
        <Testimonials />
        <EnquiryForm selectedPackage={selectedPackage} onPackageChange={setSelectedPackage} />
      </main>
      <Footer onOpenLedger={() => setLedgerOpen(true)} onNavigate={scrollTo} />
      <EnquiryLedger open={ledgerOpen} onClose={() => setLedgerOpen(false)} />
      <Toaster theme="dark" position="bottom-right" toastOptions={{ style: { background: "#18181A", border: "1px solid rgba(212,175,55,0.25)", color: "#F8F8F8" } }} />
    </div>
  );
}

export default App;
