import { useState, useCallback } from "react";
import { MotionConfig } from "framer-motion";
import "@/App.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EditorialMarquee from "@/components/EditorialMarquee";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import EnquiryLedger from "@/components/EnquiryLedger";

function App() {
  const [ledgerOpen, setLedgerOpen] = useState(false);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
  }, []);

  return (
    <MotionConfig reducedMotion="always">
      <div className="bg-[#0A0A0A] text-[#F8F8F8] min-h-screen overflow-x-clip" data-testid="app-root">
        <Navbar onNavigate={scrollTo} />
        <main>
          <Hero onNavigate={scrollTo} />
          <EditorialMarquee />
          <Manifesto />
          <Services onReserve={() => scrollTo("enquiry")} />
          <BookingSection />
        </main>
        <Footer onOpenLedger={() => setLedgerOpen(true)} onNavigate={scrollTo} />
        <EnquiryLedger open={ledgerOpen} onClose={() => setLedgerOpen(false)} />
      </div>
    </MotionConfig>
  );
}

export default App;
