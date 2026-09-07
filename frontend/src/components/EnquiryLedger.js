import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { X } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function EnquiryLedger({ open, onClose }) {
  const [enquiries, setEnquiries] = useState(null);

  useEffect(() => {
    if (!open) return;
    setEnquiries(null);
    axios
      .get(`${API}/enquiries`)
      .then((r) => setEnquiries(r.data))
      .catch(() => setEnquiries([]));
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-[#0A0A0A]/92 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={onClose}
          data-testid="ledger-modal"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-[#121212] border border-white/[0.1] max-w-3xl w-full max-h-[80vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-8 border-b border-white/[0.08]">
              <div>
                <p className="mono-label mb-2">Atelier Ledger</p>
                <h3 className="font-display text-2xl font-light">Client Enquiries</h3>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                aria-label="Close ledger"
                data-testid="ledger-close-btn"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>

            <div className="overflow-y-auto p-8 space-y-5" data-testid="ledger-list">
              {enquiries === null && (
                <p className="text-[#A1A1AA] font-light" data-testid="ledger-loading">Opening the ledger…</p>
              )}
              {enquiries !== null && enquiries.length === 0 && (
                <p className="text-[#A1A1AA] font-light" data-testid="ledger-empty">
                  No enquiries yet. New bookings will appear here.
                </p>
              )}
              {enquiries?.map((e) => (
                <article key={e.id} className="border border-white/[0.08] bg-[#0A0A0A] p-6" data-testid={`ledger-entry-${e.id}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <p className="font-display text-lg">{e.name}</p>
                      <p className="text-[#A1A1AA] text-sm font-light">{e.email}{e.phone ? ` · ${e.phone}` : ""}</p>
                    </div>
                    <span className="mono-label !text-[#D4AF37]">
                      {e.created_at ? new Date(e.created_at).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) : ""}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm font-light text-[#E8D8C8]/85">
                    <p><span className="text-[#A1A1AA]">Vehicle:</span> {e.vehicle}</p>
                    <p><span className="text-[#A1A1AA]">Ritual:</span> {e.package || "—"}</p>
                    <p><span className="text-[#A1A1AA]">Condition:</span> {e.condition || "—"}</p>
                    <p><span className="text-[#A1A1AA]">Preferred:</span> {e.preferred_date || "—"}</p>
                  </div>
                  {e.message && <p className="mt-4 text-sm text-[#A1A1AA] font-light italic">“{e.message}”</p>}
                </article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
