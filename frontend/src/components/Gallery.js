import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const works = [
  {
    id: "quilted",
    title: "Diamond-Quilted Cockpit",
    tag: "Leather Spa",
    img: "https://images.unsplash.com/photo-1605437241278-c1806d14a4d9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXIlMjBkZXRhaWxpbmd8ZW58MHx8fHwxNzg4ODI0MzkzfDA&ixlib=rb-4.1.0&q=85",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: "cognac",
    title: "Cognac Binnacle",
    tag: "Preservation",
    img: "https://images.unsplash.com/photo-1661336878257-1c51b5af959a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXIlMjBkZXRhaWxpbmd8ZW58MHx8fHwxNzg4ODI0MzkzfDA&ixlib=rb-4.1.0&q=85",
    span: "",
  },
  {
    id: "saddle",
    title: "Saddle Tan Revival",
    tag: "Restorative",
    img: "https://images.unsplash.com/photo-1662316208133-55e8e16f89fb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXIlMjBkZXRhaWxpbmd8ZW58MHx8fHwxNzg4ODI0MzkzfDA&ixlib=rb-4.1.0&q=85",
    span: "",
  },
  {
    id: "obsidian",
    title: "Obsidian Door Study",
    tag: "Detail Finish",
    img: "https://images.unsplash.com/photo-1605437211365-7257403ea287?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXIlMjBkZXRhaWxpbmd8ZW58MHx8fHwxNzg4ODI0MzkzfDA&ixlib=rb-4.1.0&q=85",
    span: "lg:col-span-2",
  },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="py-28 lg:py-40" data-testid="gallery-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="mono-label mb-6">Atelier Gallery</p>
          <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-2xl">
            Recent studies in <span className="italic text-[#D4AF37]">hide &amp; stitch</span>.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-[260px] gap-4">
          {works.map((w, i) => (
            <motion.button
              key={w.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              onClick={() => setActive(w)}
              className={`relative group overflow-hidden text-left ${w.span}`}
              data-testid={`gallery-item-${w.id}`}
            >
              <img
                src={w.img}
                alt={w.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/85 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 border border-transparent group-hover:border-[#D4AF37]/40 transition-colors duration-500" />
              <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
                <div>
                  <p className="mono-label mb-2">{w.tag}</p>
                  <p className="font-display text-lg sm:text-xl">{w.title}</p>
                </div>
                <span className="mono-label opacity-0 group-hover:opacity-100 transition-opacity duration-500">View</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-[#0A0A0A]/92 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setActive(null)}
            data-testid="gallery-modal"
          >
            <motion.figure
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 12 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl w-full gold-rim"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={active.img} alt={active.title} className="w-full max-h-[75vh] object-cover" />
              <figcaption className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#0A0A0A] to-transparent flex justify-between items-end">
                <div>
                  <p className="mono-label mb-2">{active.tag}</p>
                  <p className="font-display text-xl">{active.title}</p>
                </div>
              </figcaption>
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 w-10 h-10 border border-white/20 bg-[#0A0A0A]/60 backdrop-blur flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                aria-label="Close"
                data-testid="gallery-modal-close"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
