import { ArrowUpRight } from "lucide-react";

export default function Footer({ onOpenLedger, onNavigate }) {
  return (
    <footer className="border-t border-white/[0.07] bg-[#0A0A0A]" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-10">
        <h2 className="font-display font-light leading-[0.98] text-[11vw] lg:text-[6.5rem] text-white/[0.92]" data-testid="footer-wordmark">
          Deanna's Craft <span className="italic text-[#D4AF37]">Car Detailing</span>
        </h2>

        <div className="mt-16 grid sm:grid-cols-3 gap-12 border-t border-white/[0.07] pt-12">
          <div>
            <p className="mono-label mb-5">The Studio</p>
            <p className="text-[#A1A1AA] font-light leading-relaxed text-sm">
              9 Third Street, Unit 1<br />
              West St. Paul, Manitoba<br />
              By appointment only
            </p>
          </div>
          <div>
            <p className="mono-label mb-5">Concierge</p>
            <p className="text-[#A1A1AA] font-light leading-relaxed text-sm">
              1-204-999-9010<br />
              Call or text to book
            </p>
          </div>
          <div>
            <p className="mono-label mb-5">Atelier</p>
            <div className="flex flex-col items-start gap-3">
              {[["manifesto", "Manifesto"], ["services", "Services"], ["enquiry", "Book a Session"]].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => onNavigate(id)}
                  className="text-[#A1A1AA] hover:text-[#D4AF37] font-light text-sm transition-colors inline-flex items-center gap-1.5"
                  data-testid={`footer-link-${id}`}
                >
                  {label}
                  <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.07] flex flex-wrap items-center justify-between gap-4">
          <p className="text-[#A1A1AA]/60 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Deanna's Craft Car Detailing — Woman-Owned &amp; Operated Interior Atelier
          </p>
          <button
            onClick={onOpenLedger}
            className="mono-label !text-[#A1A1AA]/60 hover:!text-[#D4AF37] transition-colors"
            data-testid="footer-ledger-btn"
          >
            Atelier Ledger
          </button>
        </div>
      </div>
    </footer>
  );
}
