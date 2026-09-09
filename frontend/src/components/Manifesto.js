import { motion } from "framer-motion";

const chapters = [
  {
    n: "01",
    title: "The Touch of Care",
    body: "A cabin is the most intimate space a machine offers. We treat it as such — working slowly, by hand, with brushes and steam rather than harsh machines. Nothing is rushed; every seam is read like a page.",
    img: "https://images.unsplash.com/photo-1549064233-945d7063292f?q=80&w=1600&auto=format&fit=crop",
    alt: "Modern black and red car interior in daylight",
  },
  {
    n: "02",
    title: "Material Purity",
    body: "Leather, wood, carpet and trims each demand their own chemistry. I use only the best cleaners, treatments, and conditioners for each project — never mask rather than mend.",
    img: "https://images.unsplash.com/photo-1583573278124-e8d4fd3edf3c?q=80&w=1600&auto=format&fit=crop",
    alt: "Modern black and grey BMW car interior",
  },
  {
    n: "03",
    title: "The Woman-Led Difference",
    body: "In an industry of rushed garages, I've built an expert practice. Woman-owned and woman-run, Craft operates on patience, discretion and an obsession with the details others walk past. Your car returns not just clean — composed.",
    img: "https://images.unsplash.com/photo-1636763086447-e28e410d840b?q=80&w=1600&auto=format&fit=crop",
    alt: "Modern car interior with steering wheel and dashboard",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-28 lg:py-40" data-testid="manifesto-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-24 max-w-2xl"
        >
          <p className="mono-label mb-6">The Manifesto</p>
          <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Three chapters on why <span className="italic text-[#D4AF37]">interiors</span> deserve
            reverence.
          </h2>
        </motion.div>

        <div className="space-y-28 lg:space-y-40">
          {chapters.map((c, i) => (
            <motion.article
              key={c.n}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
              data-testid={`manifesto-chapter-${c.n}`}
            >
              <div className="relative group overflow-hidden">
                <motion.img
                  src={c.img}
                  alt={c.alt}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
                <span className="absolute top-5 left-5 mono-label bg-[#0A0A0A]/70 backdrop-blur px-3 py-2">
                  Chapter {c.n}
                </span>
              </div>
              <div className={i % 2 === 1 ? "lg:pr-8" : "lg:pl-8"}>
                <span className="font-display text-7xl lg:text-8xl text-white/[0.07] leading-none block">
                  {c.n}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl mt-2 mb-6">{c.title}</h3>
                <p className="text-[#A1A1AA] font-light leading-relaxed text-base sm:text-lg max-w-lg">
                  {c.body}
                </p>
                <div className="mt-8 h-px w-24 bg-[#D4AF37]/50" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
