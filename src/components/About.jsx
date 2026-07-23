export default function About() {
  return (
    <section id="about" className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <div>
          <span className="inline-flex items-center rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold uppercase tracking-wide px-4 py-1.5 mb-6">
            About Karmayafin
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight">
            Where the right action creates lasting wealth.
          </h2>
        </div>

        <div className="space-y-5 text-navy-100/90 leading-relaxed">
          <p>
            Wealth is not built by chance — it is built by{" "}
            <span className="text-teal-300 font-medium">karma</span>:
            consistent, disciplined action taken with the right guidance. Our
            name reflects this — the right financial actions, repeated over
            time, create meaningful and lasting wealth.
          </p>
          <p>
            We are a mutual fund distribution and wealth-building firm
            dedicated to helping individuals, families, and professionals
            invest with confidence — from a first SIP to a full retirement
            portfolio.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-400 mb-2">Our Mission</p>
              <p className="text-sm text-navy-100/80 leading-relaxed">
                To make disciplined, goal-based investing accessible to every Indian family.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-400 mb-2">Our Vision</p>
              <p className="text-sm text-navy-100/80 leading-relaxed">
                To be a trusted lifelong wealth partner for our clients across generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
