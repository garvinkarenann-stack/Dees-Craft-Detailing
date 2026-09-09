import { motion } from "framer-motion";
import { Phone, Clock, MapPin } from "lucide-react";

export default function BookingSection() {
  return (
    <section id="enquiry" className="py-28 lg:py-40" data-testid="enquiry-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mono-label mb-6">Enquiries &amp; Bookings</p>
          <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Reserve your <span className="italic text-[#D4AF37]">session</span>.
          </h2>
          <p className="mt-6 text-[#A1A1AA] font-light leading-relaxed max-w-md">
            Every booking begins with a conversation. Call or text Deanna directly — she'll
            advise on the right service for your vehicle and find a time that suits you.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-5">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={1.5} />
              <div>
                <p className="mono-label !text-[#A1A1AA]">Call or Text</p>
                <a href="tel:+12049999010" className="font-light mt-1 block hover:text-[#D4AF37] transition-colors" data-testid="booking-phone-link">
                  1-204-999-9010
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={1.5} />
              <div>
                <p className="mono-label !text-[#A1A1AA]">Hours</p>
                <p className="font-light mt-1">By Appointment Only</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={1.5} />
              <div>
                <p className="mono-label !text-[#A1A1AA]">The Studio</p>
                <p className="font-light mt-1">9 Third Street, Unit 1, West St. Paul, Manitoba</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#121212] border border-white/[0.08] p-10 sm:p-14 text-center gold-rim"
          data-testid="booking-card"
        >
          <p className="mono-label mb-8">By Appointment Only</p>
          <p className="font-display font-light text-2xl sm:text-3xl leading-snug text-[#E8D8C8]">
            “Tell me about your vehicle — I'll take care of the rest.”
          </p>
          <p className="mono-label !text-[#A1A1AA] mt-6">— Deanna</p>
          <a
            href="tel:+12049999010"
            className="mono-label !text-[#0A0A0A] bg-[#D4AF37] inline-block mt-12 px-10 py-5 hover:bg-[#E8D8C8] transition-colors duration-300"
            data-testid="booking-call-btn"
          >
            Call or Text 1-204-999-9010
          </a>
          <p className="text-[#A1A1AA] text-xs font-light mt-6">
            Tue – Sun · Flexible scheduling for drop-off &amp; pick-up
          </p>
        </motion.div>
      </div>
    </section>
  );
}
