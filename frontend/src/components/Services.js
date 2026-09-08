import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const packages = [
  {
    id: "basic",
    n: "I",
    name: "The Basic Detail",
    price: "$100",
    duration: "Interior, by appointment",
    blurb: "A complete interior refresh — every surface cleaned, dressed and hand-finished.",
    includes: ["Full cabin vacuum & wipe-down", "Dash, console & trim detailing", "Interior glass polished", "Mats & carpets cleaned"],
  },
  {
    id: "pet-oil-cap",
    n: "II",
    name: "Pet Hair, Oil & Cap Removal",
    price: "add-on from $25",
    duration: "With any detail",
    blurb: "Stubborn pet hair, oil spots and cap marks lifted from fabric and carpet.",
    includes: ["Deep pet-hair extraction", "Oil & grease spot treatment", "Cap mark removal", "Fabric-safe finish"],
  },
  {
    id: "odor",
    n: "III",
    name: "Odor Removal",
    price: "add-on from $25",
    duration: "With any detail",
    blurb: "Smoke, pet and mildew odours neutralised — never masked.",
    includes: ["Full-cabin odour treatment", "Vent & fabric refresh", "Neutral, fragrance-free result"],
  },
];

export default function Services({ onReserve }) {
  const [open, setOpen] = useState("basic");

  return (
    <section id="services" className="py-28 lg:py-40 bg-[#121212] border-y border-white/[0.07]" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-end justify-between gap-8 mb-20"
        >
          <div>
            <p className="mono-label mb-6">The Services</p>
            <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-xl">
              Considered care, <span className="italic text-[#D4AF37]">honest pricing</span>.
            </h2>
          </div>
          <p className="text-[#A1A1AA] font-light max-w-sm text-sm sm:text-base">
            One woman, one cabin at a time — by appointment at our West St. Paul studio.
          </p>
        </motion.div>

        <div className="border-t border-white/[0.08]">
          {packages.map((p, idx) => {
            const isOpen = open === p.id;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: idx * 0.06 }}
                className="border-b border-white/[0.08]"
                data-testid={`service-item-${p.id}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? "" : p.id)}
                  className="w-full grid grid-cols-[auto_1fr_auto] sm:grid-cols-[80px_1fr_auto_48px] items-center gap-5 sm:gap-8 py-8 text-left group"
                  data-testid={`service-toggle-${p.id}`}
                >
                  <span className="font-display italic text-[#D4AF37]/70 text-lg hidden sm:block">{p.n}</span>
                  <span>
                    <span className={`font-display text-xl sm:text-2xl lg:text-3xl block transition-colors duration-300 ${isOpen ? "text-[#D4AF37]" : "group-hover:text-[#E8D8C8]"}`}>
                      {p.name}
                    </span>
                    <span className="text-[#A1A1AA] text-sm font-light mt-1 block">{p.blurb}</span>
                  </span>
                  <span className="text-right">
                    <span className="mono-label block">{p.price}</span>
                    <span className="text-[#A1A1AA] text-xs font-light">{p.duration}</span>
                  </span>
                  <Plus
                    className={`w-5 h-5 text-[#D4AF37] transition-transform duration-500 justify-self-end ${isOpen ? "rotate-45" : ""}`}
                    strokeWidth={1.5}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 sm:pl-[80px] grid sm:grid-cols-[1fr_auto] gap-8 items-end">
                        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
                          {p.includes.map((inc) => (
                            <li key={inc} className="flex items-center gap-3 text-[#E8D8C8]/85 font-light text-sm">
                              <span className="w-1 h-1 bg-[#D4AF37] shrink-0" />
                              {inc}
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => onReserve(p.name)}
                          className="mono-label border border-[#D4AF37]/50 text-[#D4AF37] px-7 py-3.5 hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors duration-300 whitespace-nowrap"
                          data-testid={`service-reserve-${p.id}`}
                        >
                          Reserve this Service
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
