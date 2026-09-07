import { motion } from "framer-motion";

const chapters = [
  {
    n: "01",
    title: "The Touch of Care",
    body: "A cabin is the most intimate space a machine offers. We treat it as such — working slowly, by hand, with brushes and steam rather than harsh machines. Nothing is rushed; every seam is read like a page.",
    img: "https://images.unsplash.com/photo-1597725168791-7fb4446fc438?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHx3b21hbiUyMGFydGlzYW4lMjB3b3JraW5nJTIwZGV0YWlsaW5nJTIwbHV4dXJ5JTIwY2FyfGVufDB8fHx8MTc4ODgyNDM5M3ww&ixlib=rb-4.1.0&q=85",
    alt: "Woman master detailer hand-finishing a vehicle",
  },
  {
    n: "02",
    title: "Material Purity",
    body: "Aniline leather, Alcantara, open-pore wood and wool carpet each demand their own chemistry. We use pH-neutral nourishment, pure steam extraction and ozone ionisation — never silicone dressings that mask rather than mend.",
    img: "https://images.unsplash.com/photo-1601673632676-12f89e430aa3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB1cGhvbHN0ZXJ5JTIwc3RpdGNoJTIwbGVhdGhlcnxlbnwwfHx8fDE3ODg4MjQ0MDF8MA&ixlib=rb-4.1.0&q=85",
    alt: "Restored ribbed cognac leather seat bolster",
  },
  {
    n: "03",
    title: "The Woman-Led Difference",
    body: "In an industry of rushed garages, we built an atelier. Woman-owned and woman-run, Craft operates on patience, discretion and an obsession with the details others walk past. Your car returns not just clean — composed.",
    img: "https://images.unsplash.com/photo-1662316208133-55e8e16f89fb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXIlMjBkZXRhaWxpbmd8ZW58MHx8fHwxNzg4ODI0MzkzfDA&ixlib=rb-4.1.0&q=85",
    alt: "Restored saddle tan leather seats in sunlight",
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
