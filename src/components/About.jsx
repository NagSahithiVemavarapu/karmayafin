export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white"
    >
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#EEF9F6]/40 to-transparent" />
      <div className="absolute -top-40 -right-32 w-[500px] h-[500px] rounded-full bg-[#EEF9F6] blur-[150px]" />
      <div className="absolute -bottom-40 -left-32 w-[450px] h-[450px] rounded-full bg-[#DDF5EF] blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="w-full">
          <span className="inline-flex items-center rounded-full bg-[#EEF9F6] border border-[#BFEBDD] text-[#0891B2] text-xs font-semibold uppercase tracking-wide px-4 py-2 mb-6 shadow-sm">
            About Karmayafin
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-[#0F172A]">
            Where the right action creates lasting wealth.
          </h2>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-6 text-[#475569] leading-relaxed">
          <p className="text-lg leading-9">
            Wealth is not built by chance —
            it is built by{" "}
            <span className="text-[#0891B2] font-semibold">
              karma
            </span>
            : consistent, disciplined action taken with the right guidance.
            Our name reflects this philosophy — the right financial actions,
            repeated over time, create meaningful and lasting wealth.
          </p>
          <p className="text-lg leading-9">
            We are a mutual fund distribution and wealth-building firm
            dedicated to helping individuals, families and professionals
            invest with confidence — from a first SIP to a complete
            retirement portfolio.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <div className="rounded-3xl p-7 min-h-[175px] bg-gradient-to-br from-[#123C5F] via-[#255B72] to-[#4FAE9C] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20" />
              </svg>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/70 font-semibold">
              OUR MISSION
            </p>
            <p className="mt-4 text-base leading-8 text-white/95">
              To make disciplined, goal-based investing accessible to every Indian family.
            </p>
          </div>

          <div className="rounded-3xl p-7 min-h-[175px] bg-gradient-to-br from-[#123C5F] via-[#255B72] to-[#4FAE9C] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/70 font-semibold">
              OUR VISION
            </p>
            <p className="mt-4 text-base leading-8 text-white/95">
              To be a trusted lifelong wealth partner for our clients across generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}