import { Search, ClipboardList, LineChart, RefreshCcw } from "lucide-react";

const steps = [
  { icon: Search, title: "Understand", desc: "We understand your income, goals, risk appetite, and time horizon." },
  { icon: ClipboardList, title: "Plan", desc: "We design a personalized investment plan aligned to your life goals." },
  { icon: LineChart, title: "Invest", desc: "We help you invest in the right funds and set up SIPs-quick & paperless." },
  { icon: RefreshCcw, title: "Review & Grow", desc: "We track progress and rebalance periodically to keep you on course." },
];

export default function Process() {
  return (
    <section id="process" className="bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="mb-12 max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-navy-900/5 text-navy-800 text-xs font-semibold uppercase tracking-wide px-4 py-1.5 mb-6 border border-navy-900/10">
            Our Process
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-navy-950">
            Your journey with us — four simple steps.
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">

  {steps.map(({ icon: Icon, title, desc }, i) => (
    <div key={title} className="relative">

      {/* connector */}
      {i !== steps.length - 1 && (
        <div className="hidden lg:block absolute top-8 left-16 w-[calc(100%-4rem)] h-[2px] bg-line"></div>
      )}

      <div className="w-16 h-16 rounded-full bg-navy-900 flex items-center justify-center relative z-10 shadow-lg">
        <Icon size={24} className="text-teal-300" />
      </div>

      <p className="mt-5 font-mono text-xs text-teal-600 tracking-widest">
        STEP {i + 1}
      </p>

      <h3 className="mt-2 font-display text-xl font-semibold text-navy-950">
        {title}
      </h3>

      <p className="mt-3 text-slate-600 leading-7 text-sm max-w-[250px]">
        {desc}
      </p>

    </div>
  ))}
</div>
      </div>
    </section>
  );
}
