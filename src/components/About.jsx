export default function About() {
  return (
    <section id="about" className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">

        {/* LEFT */}
        <div>

          <span className="inline-flex items-center rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold uppercase tracking-wide px-4 py-1.5 mb-6">
            About Karmayafin
          </span>

          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight max-w-lg">
            Where the right action creates lasting wealth.
          </h2>

          {/* Illustration */}
          <div className="mt-8 flex justify-center lg:justify-start">

            <img
              src="/abt_img.png"
              alt="Karmayafin Wealth Tree"
              className="
                w-[430px]
                sm:w-[480px]
                lg:w-[560px]
                xl:w-[600px]
                object-contain
                -ml-4
                drop-shadow-[0_40px_80px_rgba(79,174,156,0.28)]
                transition-all
                duration-700
                hover:scale-105
              "
            />

          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-6 text-navy-100/90 leading-relaxed">

          <p className="text-lg leading-9">
            Wealth is not built by chance — it is built by{" "}
            <span className="text-teal-300 font-semibold">
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

          {/* Mission & Vision */}
          <div className="mt-8 grid sm:grid-cols-2 gap-5">

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
                p-6
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
                OUR MISSION
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
                p-6
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
                OUR VISION
              </p>

              <p className="text-white/90 text-base leading-8">
                To be a trusted lifelong wealth partner for our clients across
                generations.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}