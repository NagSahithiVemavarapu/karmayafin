import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What is a mutual fund distributor?", a: "A mutual fund distributor helps you choose, invest in, and manage mutual fund investments suited to your goals and risk profile. Karmayafin is an AMFI-registered distributor." },
  { q: "How much money do I need to start?", a: "You can start investing with a SIP from just ₹500 per month. Small, disciplined investments can create long-term wealth." },
  { q: "Are my investments safe?", a: "Mutual funds are regulated by SEBI. While markets fluctuate, investing based on your goals and risk profile helps manage risk over time." },
  { q: "Do you charge me a fee?", a: "No. We are compensated by Asset Management Companies, so there is no separate advisory fee charged to you." },
  { q: "How do I get started?", a: "Click the Free Consultation button or call us. We'll understand your financial goals and recommend a suitable investment plan." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section 
      id="faqs" 
      className="relative overflow-hidden bg-gradient-to-b from-[#F0F4F8] via-[#E8F4F8] to-[#F8FAFC]"
    >
      {/* Soft background glows */}
      <div className="absolute -top-48 -left-40 w-[500px] h-[500px] rounded-full bg-white/60 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-48 -right-40 w-[500px] h-[500px] rounded-full bg-[#0B4382]/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-14 lg:py-16">
        <div className="mb-10 max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/80 bg-white/50 backdrop-blur-md text-[#0891B2] text-xs font-semibold uppercase tracking-wide px-4 py-1.5 mb-6 shadow-sm">
            Frequently Asked Questions
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-[#0F172A]">
            Everything you need to know.
          </h2>
          <p className="mt-3 text-lg text-[#475569] leading-relaxed">
            Find answers to the most common questions about mutual funds,
            SIPs, investing, and how Karmayafin helps you build long-term wealth.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.q}
                className={`rounded-[24px] border backdrop-blur-xl transition-all duration-300 ${
                    isOpen
                      ? "border-white bg-white shadow-[0_15px_40px_rgba(11,67,130,0.12)]"
                      : "border-white/80 bg-white/90 shadow-md hover:bg-white hover:-translate-y-1 hover:shadow-lg"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <h3 className="font-display text-xl font-semibold text-[#0F172A]">
                    {item.q}
                  </h3>
                  <div
                    className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? "bg-gradient-to-r from-[#123C5F] to-[#4FAE9C] text-white border-transparent shadow-sm"
                          : "bg-slate-50 text-[#0891B2] border-slate-200"
                      }`}
                  >
                    <Plus size={16} className={`transition-all duration-300 ${isOpen ? "rotate-45" : ""}`} />
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 border-t border-slate-100">
                      <p className="pt-4 text-base text-[#475569] leading-7">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}