import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Phone, Clock, MapPin } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const conditions = ["Pristine — keep it so", "Light Wear", "Loved & Lived-In", "Restoration Needed"];
const packageOptions = [
  "The Alcantara Restorative",
  "Bespoke Aniline Leather Spa",
  "Concierge Interior Preservation",
  "Clean Air & Ozone Ionisation",
  "Not sure — advise me",
];

const inputCls =
  "w-full bg-[#0A0A0A] border border-white/[0.12] px-5 py-4 text-[#F8F8F8] font-light placeholder:text-[#A1A1AA]/50 focus:border-[#D4AF37]/70 focus:outline-none transition-colors duration-300";

export default function EnquiryForm({ selectedPackage, onPackageChange }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", vehicle: "",
    condition: conditions[0], preferred_date: "", message: "",
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (selectedPackage) setForm((f) => ({ ...f, package: selectedPackage }));
  }, [selectedPackage]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.vehicle.trim()) {
      toast.error("Please complete your name, email and vehicle.");
      return;
    }
    setSending(true);
    try {
      await axios.post(`${API}/enquiries`, { ...form, package: selectedPackage || form.package || packageOptions[4] });
      toast.success("Enquiry received. The atelier will respond within one business day.");
      setForm({ name: "", email: "", phone: "", vehicle: "", condition: conditions[0], preferred_date: "", message: "" });
      onPackageChange("");
    } catch {
      toast.error("Something went wrong sending your enquiry. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="enquiry" className="py-28 lg:py-40" data-testid="enquiry-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24">
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
            Tell us about your vehicle and its interior. Every enquiry is read personally — expect a
            considered reply, never an automated quote.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-5">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={1.5} />
              <div>
                <p className="mono-label !text-[#A1A1AA]">Concierge Line</p>
                <p className="font-light mt-1">(555) 014-2718</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={1.5} />
              <div>
                <p className="mono-label !text-[#A1A1AA]">Atelier Hours</p>
                <p className="font-light mt-1">Tue – Sat, 8:00 – 18:00</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={1.5} />
              <div>
                <p className="mono-label !text-[#A1A1AA]">The Studio</p>
                <p className="font-light mt-1">Unit 4, The Old Tannery Works</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#121212] border border-white/[0.08] p-8 sm:p-12 space-y-6"
          data-testid="enquiry-form"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="mono-label !text-[#A1A1AA] block mb-3" htmlFor="eq-name">Name *</label>
              <input id="eq-name" className={inputCls} value={form.name} onChange={set("name")} placeholder="Your name" data-testid="enquiry-name-input" />
            </div>
            <div>
              <label className="mono-label !text-[#A1A1AA] block mb-3" htmlFor="eq-email">Email *</label>
              <input id="eq-email" type="email" className={inputCls} value={form.email} onChange={set("email")} placeholder="you@example.com" data-testid="enquiry-email-input" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="mono-label !text-[#A1A1AA] block mb-3" htmlFor="eq-phone">Phone</label>
              <input id="eq-phone" className={inputCls} value={form.phone} onChange={set("phone")} placeholder="Optional" data-testid="enquiry-phone-input" />
            </div>
            <div>
              <label className="mono-label !text-[#A1A1AA] block mb-3" htmlFor="eq-vehicle">Vehicle Make &amp; Model *</label>
              <input id="eq-vehicle" className={inputCls} value={form.vehicle} onChange={set("vehicle")} placeholder="e.g. Range Rover Autobiography" data-testid="enquiry-vehicle-input" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="mono-label !text-[#A1A1AA] block mb-3" htmlFor="eq-condition">Interior Condition</label>
              <select id="eq-condition" className={inputCls} value={form.condition} onChange={set("condition")} data-testid="enquiry-condition-select">
                {conditions.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="mono-label !text-[#A1A1AA] block mb-3" htmlFor="eq-package">Preferred Ritual</label>
              <select
                id="eq-package"
                className={inputCls}
                value={selectedPackage || ""}
                onChange={(e) => onPackageChange(e.target.value)}
                data-testid="enquiry-package-select"
              >
                <option value="">Select a package…</option>
                {packageOptions.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="mono-label !text-[#A1A1AA] block mb-3" htmlFor="eq-date">Preferred Date</label>
            <input id="eq-date" type="date" className={inputCls} value={form.preferred_date} onChange={set("preferred_date")} data-testid="enquiry-date-input" />
          </div>

          <div>
            <label className="mono-label !text-[#A1A1AA] block mb-3" htmlFor="eq-message">Notes for the Atelier</label>
            <textarea id="eq-message" rows={4} className={`${inputCls} resize-none`} value={form.message} onChange={set("message")} placeholder="Stains, odours, materials, concerns…" data-testid="enquiry-message-input" />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="mono-label !text-[#0A0A0A] bg-[#D4AF37] w-full py-5 hover:bg-[#E8D8C8] transition-colors duration-300 disabled:opacity-60"
            data-testid="enquiry-submit-btn"
          >
            {sending ? "Sending…" : "Send Enquiry"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
