import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const quotes = [
  {
    text: "My 911's cabin had three years of school runs in it. It came back smelling of nothing but clean leather — every vent, every stitch. I didn't know this level of care existed.",
    name: "Elena M.",
    car: "Porsche 911 Carrera",
  },
  {
    text: "The aniline hides in my DB11 are unforgiving. Craft treated them like a couture garment — matte, supple, correct. Not a trace of silicone shine.",
    name: "James W.",
    car: "Aston Martin DB11",
  },
  {
    text: "Vegan leather, white interior, two toddlers. I booked the Preservation day and genuinely gasped at collection. Woman-run, and it shows in the patience.",
    name: "Priya S.",
    car: "Tesla Model S",
  },
  {
    text: "They collected my Range Rover at 7am and returned it by dusk with the cabin better than the day I bought it. The ozone treatment removed a smell two dealers couldn't.",
    name: "Daniel K.",
    car: "Range Rover Autobiography",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % quotes.length);
    }, 7000);
    return () => clearInterval(t);
  }, []);

  const go = (d) => {
    setDir(d);
    setIndex((i) => (i + d + quotes.length) % quotes.length);
  };

  const q = quotes[index];

  return (
    <section id="reviews" className="py-28 lg:py-40 bg-[#121212] border-y border-white/[0.07]" data-testid="testimonials-section">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <p className="mono-label mb-10">Client Accolades</p>
        <Quote className="w-8 h-8 text-[#D4AF37]/60 mx-auto mb-10 rotate-180" strokeWidth={1} />

        <div className="relative min-h-[220px] sm:min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              data-testid="testimonial-quote"
            >
              <p className="font-display font-light italic text-2xl sm:text-3xl leading-relaxed text-[#E8D8C8]">
                “{q.text}”
              </p>
              <footer className="mt-8">
                <p className="mono-label !text-[#F8F8F8]">{q.name}</p>
                <p className="text-[#A1A1AA] text-sm font-light mt-1">{q.car}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            className="w-12 h-12 border border-white/15 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            aria-label="Previous testimonial"
            data-testid="testimonial-prev-btn"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <div className="flex gap-2" data-testid="testimonial-dots">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
                className={`h-1 transition-all duration-500 ${i === index ? "w-8 bg-[#D4AF37]" : "w-3 bg-white/20 hover:bg-white/40"}`}
                aria-label={`Testimonial ${i + 1}`}
                data-testid={`testimonial-dot-${i}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            className="w-12 h-12 border border-white/15 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            aria-label="Next testimonial"
            data-testid="testimonial-next-btn"
          >
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
