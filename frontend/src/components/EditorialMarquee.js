import { Asterisk } from "lucide-react";

const items = [
  "Hand-Finished Interiors",
  "Pet Hair & Odor Removal",
  "Woman-Owned & Operated",
  "By Appointment Only",
  "West St. Paul, Manitoba",
  "Details from $150",
];

export default function EditorialMarquee() {
  return (
    <section
      className="border-y border-white/[0.07] bg-[#121212] py-6"
      data-testid="editorial-marquee"
    >
      <div className="flex flex-wrap items-center justify-center gap-y-3 px-6">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display italic text-lg sm:text-xl text-[#E8D8C8]/80 whitespace-nowrap px-6">
              {item}
            </span>
            {i < items.length - 1 && (
              <Asterisk className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={1.5} />
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
