import CompoundingSpiral from "./CompoundingSpiral";

export default function Hero({ onConsult }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_#f2ecdd_0%,_#faf6ec_55%)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-16 lg:pt-20 lg:pb-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-navy-900/5 text-navy-800 text-xs font-semibold uppercase tracking-wide px-4 py-1.5 mb-6 border border-navy-900/10">
            AMFI Registered Mutual Fund Distributor
          </span>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.3rem] leading-[1.1] text-navy-950 tracking-tight">
            Compounding your wealth isn't complex — let's do it together.
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            Karmayafin helps you invest in mutual funds, plan for your life
            goals, and build lasting wealth through disciplined, goal-based
            investing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onConsult}
              className="inline-flex items-center rounded-full bg-navy-900 text-white text-sm font-semibold px-6 py-3.5 hover:bg-navy-700 transition-colors"
            >
              Start Investing
            </button>
            <button
              onClick={onConsult}
              className="inline-flex items-center rounded-full border border-navy-900/20 text-navy-900 text-sm font-semibold px-6 py-3.5 hover:border-teal-500 hover:text-teal-600 transition-colors"
            >
              Schedule a Free Consultation
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            <span className="font-mono text-xs text-navy-700">ARN-289451</span>
            <span>Goal-Based Planning</span>
            <span>Transparent, Client-First Guidance</span>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <CompoundingSpiral className="w-full max-w-md h-auto" />
        </div>
      </div>
    </section>
  );
}
