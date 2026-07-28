import heroBg from "/hero-img.png";

export default function Hero({ onConsult }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden hero-section bg-white"
    >
      {/* Background image (Opacity restored to full 100%) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Restored the pure white fade so the image doesn't get tinted mint */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.85) 18%, rgba(255,255,255,0) 45%), linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0) 25%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-16 lg:pt-20 lg:pb-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-slate-50 text-[#0891B2] text-xs font-semibold uppercase tracking-wide px-4 py-1.5 mb-6 border border-[#0891B2]/20">
            AMFI Registered Mutual Fund Distributor
          </span>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.3rem] leading-[1.1] text-[#0F172A] tracking-tight">
            Compounding your wealth isn't complex — let's do it together.
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-xl leading-relaxed">
            Karmayafin helps you invest in mutual funds, plan for your life
            goals, and build lasting wealth through disciplined, goal-based
            investing.
          </p>

          <div className="mt-8">
            <button
              onClick={onConsult}
              className="inline-flex items-center rounded-full bg-gradient-to-r from-[#123C5F] via-[#1E6177] to-[#4FAE9C] text-white text-base font-semibold px-10 py-4 shadow-lg hover:scale-105 transition-all duration-300"
          >
            Start Investing
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#475569]">
            <span>Goal-Based Planning</span>
            <span>Transparent, Client-First Guidance</span>
          </div>
        </div>
        <div className="relative hidden lg:block min-h-[420px]" />
      </div>
    </section>
  );
}