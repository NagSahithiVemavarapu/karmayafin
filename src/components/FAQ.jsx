import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is a mutual fund distributor?",
    a: "A mutual fund distributor helps you choose, invest in, and manage mutual fund investments suited to your goals and risk profile. Karmayafin is an AMFI-registered distributor.",
  },
  {
    q: "How much money do I need to start?",
    a: "You can start a SIP with as little as ₹500 per month. There's no need to wait until you have a large amount.",
  },
  {
    q: "Are my investments safe?",
    a: "Mutual fund investments are subject to market risks and returns are not guaranteed. Disciplined, long-term, goal-based investing helps manage risk, and we help you choose funds appropriate to your risk appetite.",
  },
  {
    q: "Do you charge me a fee?",
    a: "As a mutual fund distributor, we are compensated through commissions paid by the asset management companies.",
  },
  {
    q: "How do I get started?",
    a: "Simply call us at 98800 89210 or fill out the contact form, and we'll schedule a free consultation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="mb-10">
          <span className="inline-flex items-center rounded-full bg-navy-900/5 text-navy-800 text-xs font-semibold uppercase tracking-wide px-4 py-1.5 mb-6 border border-navy-900/10">
            FAQs
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-navy-950">
            Frequently asked questions.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="rounded-2xl border border-line bg-paper overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-navy-950">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-navy-700 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
