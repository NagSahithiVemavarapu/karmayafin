export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white">
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-teal-100/25 to-transparent"></div>
      <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-teal-400/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">

        <div className="w-full">
          <span className="inline-flex items-center rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold uppercase tracking-wide px-4 py-1.5 mb-6">
            About Karmayafin
          </span>

          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight">
            Where the right action creates lasting wealth.
          </h2>
        </div>

        {/* Text */}
        <div className="mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-6 text-navy-100/90 leading-relaxed">

          <p className="text-lg leading-9">
            Wealth is not built by chance — it is built by{" "}
            <span className="text-teal-300 font-semibold">karma</span>:
            consistent, disciplined action taken with the right guidance.
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

        {/* Mission & Vision */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">

          {/* Mission */}
          <div
            className="
              group
              rounded-3xl
              border border-white/10
              bg-gradient-to-br
              from-[#214F72]
              via-[#2A5C7A]
              to-[#4EA99B]
              p-7
              min-h-[175px]
              shadow-[0_12px_30px_rgba(0,0,0,0.18)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#7ED8C6]/60
              hover:shadow-[0_24px_50px_rgba(79,174,156,0.30)]
            "
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C7FFF1] mb-4">
              Our Mission
            </p>

            <p className="text-white/90 text-base leading-8">
              To make disciplined, goal-based investing accessible to every
              Indian family.
            </p>
          </div>

          {/* Vision */}
          <div
            className="
              group
              rounded-3xl
              border border-white/10
              bg-gradient-to-br
              from-[#214F72]
              via-[#2A5C7A]
              to-[#4EA99B]
              p-7
              min-h-[175px]
              shadow-[0_12px_30px_rgba(0,0,0,0.18)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#7ED8C6]/60
              hover:shadow-[0_24px_50px_rgba(79,174,156,0.30)]
            "
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C7FFF1] mb-4">
              Our Vision
            </p>

            <p className="text-white/90 text-base leading-8">
              To be a trusted lifelong wealth partner for our clients across
              generations.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
