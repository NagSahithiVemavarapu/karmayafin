import { Search, ClipboardList, LineChart, RefreshCcw } from "lucide-react";

const steps = [
  { icon: Search, title: "Understand", desc: "We understand your income, goals, risk appetite, and time horizon." },
  { icon: ClipboardList, title: "Plan", desc: "We design a personalized investment plan aligned to your life goals." },
  { icon: LineChart, title: "Invest", desc: "We help you invest in the right funds and set up SIPs—quick & paperless." },
  { icon: RefreshCcw, title: "Review & Grow", desc: "We track progress and rebalance periodically to keep you on course." },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="mb-14 max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-[#EEF9F6] border border-[#BFEBDD] text-[#0891B2] text-xs font-semibold uppercase tracking-wide px-4 py-2 mb-6">
            Our Process
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-[#0F172A]">
            Your journey with us — four simple steps.
          </h2>
          <p className="mt-5 text-lg text-[#475569] leading-7">
            From understanding your financial goals to reviewing your investments
            regularly, we stay with you throughout your wealth-building journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-10">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative">
              {i !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-16 w-[calc(100%-4rem)] h-[2px] bg-[#DDF5EF]"></div>
              )}
              <div className="group relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#BFEBDD] bg-[#EEF9F6] shadow-sm transition-all duration-500 hover:scale-110 hover:shadow-md">
                <div className="absolute top-2 left-3 h-4 w-8 rounded-full bg-white/60 blur-sm"></div>
                <Icon size={24} className="relative z-10 text-[#0891B2] transition-transform duration-500 group-hover:scale-110" />
              </div>
              <p className="mt-5 font-mono text-xs tracking-[0.25em] text-[#0891B2] font-semibold">
                STEP {i + 1}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-[#0F172A]">
                {title}
              </h3>
              <p className="mt-3 max-w-[260px] text-base leading-7 text-[#475569]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}