import { Asterisk } from "lucide-react";

const items = [
  "Hand-Stitched Precision",
  "Steam & Oil Infusion",
  "pH-Neutral Leather Nourishment",
  "Female Artisanship",
  "Zero Harsh Odours",
  "Concierge Collection & Return",
];

export default function EditorialMarquee() {
  const row = [...items, ...items];
  return (
    <section
      className="border-y border-white/[0.07] bg-[#121212] py-6 overflow-hidden"
      data-testid="editorial-marquee"
    >
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center shrink-0">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="font-display italic text-xl sm:text-2xl text-[#E8D8C8]/80 whitespace-nowrap px-8">
                  {item}
                </span>
                <Asterisk className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={1.5} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
