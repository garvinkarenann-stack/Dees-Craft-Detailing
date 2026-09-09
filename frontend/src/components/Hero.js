import { useRef } from "react";
import { motion, useMotionValue, useTransform, useScroll, useMotionTemplate } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1605437241278-c1806d14a4d9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXIlMjBkZXRhaWxpbmd8ZW58MHx8fHwxNzg4ODI0MzkzfDA&ixlib=rb-4.1.0&q=85";

const lines = [
  { text: "The Interior,", italic: false },
  { text: "Elevated to", italic: false },
  { text: "an Art Form.", italic: true },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.5 } },
};
const lineVariant = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero({ onNavigate }) {
  const cardRef = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useTransform(my, [0, 1], [7, -7]);
  const rotateY = useTransform(mx, [0, 1], [-9, 9]);
  const spotX = useTransform(mx, (v) => `${v * 100}%`);
  const spotY = useTransform(my, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${spotX} ${spotY}, rgba(232,216,200,0.18), transparent 60%)`;

  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 0.4], ["0%", "18%"]);

  const onMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden" data-testid="hero-section">
      <motion.div className="absolute inset-0 -z-10" style={{ y: bgY }}>
        <img src={HERO_IMG} alt="" className="w-full h-[120%] object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/85 to-[#0A0A0A]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center py-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="inline-flex items-center gap-3 border border-[#D4AF37]/30 px-4 py-2 mb-10"
            data-testid="hero-badge"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={1.5} />
            <span className="mono-label">Woman-Owned &amp; Operated Interior Expert</span>
          </motion.div>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="font-display font-light tracking-tight leading-[1.04] text-5xl sm:text-6xl lg:text-8xl"
            data-testid="hero-headline"
          >
            {lines.map((l, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <motion.span
                  variants={lineVariant}
                  className={`block ${l.italic ? "italic text-[#D4AF37]" : ""}`}
                >
                  {l.text}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.5 }}
            className="mt-8 max-w-md text-[#A1A1AA] font-light leading-relaxed text-base sm:text-lg"
          >
            Deanna's Craft Car Detailing is a woman-owned studio devoted to a single discipline: the
            meticulous restoration and preservation of automotive interiors. Every stitch,
            every hide, every surface — finished by hand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.7 }}
            className="mt-12 flex flex-wrap items-center gap-5"
          >
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
          style={{ perspective: 1200 }}
        >
          <motion.div
            ref={cardRef}
            onMouseMove={onMouseMove}
            onMouseLeave={() => { mx.set(0.5); my.set(0.5); }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative gold-rim"
            data-testid="hero-tilt-card"
          >
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{ background: spotlight }}
            />
            <img
              src={HERO_IMG}
              alt="Bespoke diamond-stitched quilted leather cockpit interior"
              className="w-full aspect-[4/5] object-cover"
              data-testid="hero-image"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#0A0A0A] to-transparent z-20">
              <p className="mono-label">Nº 001 — Quilted Hide Study</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => onNavigate("manifesto")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#A1A1AA] hover:text-[#D4AF37] transition-colors"
        aria-label="Scroll down"
        data-testid="hero-scroll-cue"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}>
          <ArrowDown className="w-4 h-4" strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
}
