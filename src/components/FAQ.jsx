import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What is a mutual fund distributor?",
    a: "A mutual fund distributor helps you choose, invest in, and manage mutual fund investments suited to your goals and risk profile. Karmayafin is an AMFI-registered distributor.",
  },
  {
    q: "How much money do I need to start?",
    a: "You can start investing with a SIP from just ₹500 per month. Small, disciplined investments can create long-term wealth.",
  },
  {
    q: "Are my investments safe?",
    a: "Mutual funds are regulated by SEBI. While markets fluctuate, investing based on your goals and risk profile helps manage risk over time.",
  },
  {
    q: "Do you charge me a fee?",
    a: "No. We are compensated by Asset Management Companies, so there is no separate advisory fee charged to you.",
  },
  {
    q: "How do I get started?",
    a: "Click the Free Consultation button or call us. We'll understand your financial goals and recommend a suitable investment plan.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-gradient-to-br from-[#F8FCFF] via-white to-[#F5FCFA]"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-32 w-80 h-80 bg-sky-200/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-200/15 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-16">

        <h2 className="font-display text-center text-3xl sm:text-4xl font-semibold text-navy-950 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="grid lg:grid-cols-[260px_1fr] gap-8 items-center">

          {/* Illustration */}

          <div className="flex justify-center">
            <img
              src="/faq-illustration.png"
              alt="FAQ"
              className="w-full max-w-[240px] object-contain"
            />
          </div>

          {/* FAQ */}

          <div className="space-y-3">

            {faqs.map((item, index) => {

              const isOpen = openIndex === index;

              return (

                <div
                  key={item.q}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-xl
                  ${
                    isOpen
                      ? "border border-[#73C6B6] bg-gradient-to-r from-white/90 via-[#F8FDFF] to-[#EDFDF8] shadow-[0_15px_35px_rgba(18,60,95,0.12)]"
                      : "border border-white/70 bg-gradient-to-r from-white/90 via-[#FCFEFF] to-[#F3FCF8] shadow-[0_8px_22px_rgba(18,60,95,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(18,60,95,0.10)]"
                  }`}
                >

                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >

                    <h3 className="font-display font-semibold text-[18px] text-navy-950">
                      {item.q}
                    </h3>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300
                      ${
                        isOpen
                          ? "bg-gradient-to-br from-[#123C5F] via-[#1D5C7B] to-[#4FAE9C]"
                          : "bg-white/80 backdrop-blur-lg shadow-md"
                      }`}
                    >
                      <Plus
                        size={16}
                        className={`transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 text-white"
                            : "text-[#123C5F]"
                        }`}
                      />
                    </div>

                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-5 text-sm leading-7 text-slate-600">
                      {item.a}
                    </p>
                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
}