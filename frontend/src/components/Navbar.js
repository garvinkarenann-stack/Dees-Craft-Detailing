import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { id: "manifesto", label: "Manifesto" },
  { id: "services", label: "Services" },
];

export default function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled ? "bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent border-b border-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
          data-testid="nav-logo"
        >
          <span className="w-8 h-8 border border-[#D4AF37]/60 flex items-center justify-center font-display text-[#D4AF37] text-lg transition-colors duration-300 group-hover:bg-[#D4AF37] group-hover:text-[#0A0A0A]">
            C
          </span>
          <span className="font-display text-lg tracking-wide">
            Deanna's Craft <span className="italic text-[#D4AF37]">Car Detailing</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-10" data-testid="nav-links">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => onNavigate(l.id)}
              className="mono-label !text-[#A1A1AA] hover:!text-[#D4AF37] transition-colors duration-300"
              data-testid={`nav-link-${l.id}`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => onNavigate("enquiry")}
          className="mono-label !text-[#0A0A0A] bg-[#D4AF37] px-6 py-3 hover:bg-[#E8D8C8] transition-colors duration-300"
          data-testid="nav-book-session-btn"
        >
          Book Session
        </button>
      </div>
    </motion.header>
  );
}
