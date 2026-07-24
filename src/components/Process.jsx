import { Search, ClipboardList, LineChart, RefreshCcw } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Understand",
    desc: "We understand your income, goals, risk appetite, and time horizon.",
  },
  {
    icon: ClipboardList,
    title: "Plan",
    desc: "We design a personalized investment plan aligned to your life goals.",
  },
  {
    icon: LineChart,
    title: "Invest",
    desc: "We help you invest in the right funds and set up SIPs—quick & paperless.",
  },
  {
    icon: RefreshCcw,
    title: "Review & Grow",
    desc: "We track progress and rebalance periodically to keep you on course.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-gradient-to-br from-[#E3EFFB] via-[#F1F8FF] to-[#DCEEF7]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-[#7BC6F8]/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#63B5A2]/10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

        <div className="mb-12 max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur-md border border-white/70 text-navy-800 text-xs font-semibold uppercase tracking-wide px-4 py-1.5 mb-6 shadow-sm">
            Our Process
          </span>

          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-navy-950">
            Your journey with us — four simple steps.
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative">

              {/* Connector */}
              {i !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-16 w-[calc(100%-4rem)] h-[2px] bg-[#C9DEE8]"></div>
              )}

              {/* Premium Glass Circle */}
              <div
                className="
                group
                relative
                z-10
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-white/70
                bg-gradient-to-br
                from-[#214F72]
                via-[#2C6485]
                to-[#4EA99B]
                backdrop-blur-xl
                shadow-[0_10px_25px_rgba(18,60,95,0.25)]
                transition-all
                duration-500
                hover:scale-110
                hover:shadow-[0_18px_35px_rgba(79,174,156,0.35)]
              "
              >
                {/* Gloss highlight */}
                <div className="absolute top-2 left-3 h-4 w-8 rounded-full bg-white/20 blur-sm"></div>

                <Icon
                  size={24}
                  className="relative z-10 text-white transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <p className="mt-5 font-mono text-xs tracking-[0.25em] text-teal-600">
                STEP {i + 1}
              </p>

              <h3 className="mt-2 font-display text-xl font-semibold text-navy-950">
                {title}
              </h3>

              <p className="mt-3 max-w-[250px] text-sm leading-7 text-slate-600">
                {desc}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}