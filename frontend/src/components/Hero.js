import { Sparkles } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1625690180114-5530b1304127?q=80&w=1920&auto=format&fit=crop";

export default function Hero({ onNavigate }) {
  return (
    <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 -z-10">
        <img src={HERO_IMG} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/85 to-[#0A0A0A]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center py-20">
        <div>
          <div
            className="inline-flex items-center gap-3 border border-[#D4AF37]/30 px-4 py-2 mb-10"
            data-testid="hero-badge"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={1.5} />
            <span className="mono-label">Woman-Owned &amp; Operated Interior Expert</span>
          </div>

          <h1
            className="font-display font-light tracking-tight leading-[1.04] text-5xl sm:text-6xl lg:text-8xl"
            data-testid="hero-headline"
          >
            The Interior,<br />
            Elevated to<br />
            <span className="italic text-[#D4AF37]">an Art Form.</span>
          </h1>

          <p className="mt-8 max-w-md text-[#A1A1AA] font-light leading-relaxed text-base sm:text-lg">
            Deanna's Craft Car Detailing is a woman-owned studio devoted to a single discipline: the
            meticulous restoration and preservation of automotive interiors. Every stitch,
            every hide, every surface — finished by hand.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <button
              onClick={() => onNavigate("enquiry")}
              className="mono-label !text-[#0A0A0A] bg-[#D4AF37] px-9 py-4 hover:bg-[#E8D8C8] transition-colors duration-300"
              data-testid="hero-book-btn"
            >
              Book a Session
            </button>
            <button
              onClick={() => onNavigate("manifesto")}
              className="mono-label !text-[#F8F8F8] border border-white/20 px-9 py-4 hover:border-[#D4AF37]/60 hover:!text-[#D4AF37] transition-colors duration-300"
              data-testid="hero-explore-btn"
            >
              Explore the Craft
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative gold-rim" data-testid="hero-tilt-card">
            <img
              src={HERO_IMG}
              alt="Modern luxury car interior"
              className="w-full aspect-[4/5] object-cover"
              data-testid="hero-image"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#0A0A0A] to-transparent">
              <p className="mono-label">Nº 001 — Modern Cabin Study</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
