import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Karmayafin made investing simple for me. I started my first SIP with them and now I understand exactly where my money is going.",
    name: "Client Name",
    detail: "Profession",
  },
  {
    quote:
      "Their goal-based planning helped us prepare for our daughter's education without stress.",
    name: "Client Name",
    detail: "City",
  },
  {
    quote:
      "Honest guidance and always available whenever I have questions. Highly recommended.",
    name: "Client Name",
    detail: "",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-br from-[#0F345B] via-[#123C5F] to-[#1B4965]"
    >
      {/* Background Glow */}
      <div className="absolute -top-48 -left-32 w-[420px] h-[420px] rounded-full bg-[#4FAE9C]/10 blur-[150px]" />
      <div className="absolute -bottom-48 -right-32 w-[420px] h-[420px] rounded-full bg-[#AAE3D9]/10 blur-[170px]" />

      <div className="relative py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white text-xs font-semibold uppercase tracking-wide px-4 py-1.5 mb-6">
              Testimonials
            </span>

            <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-white">
              What our clients say.
            </h2>

            <p className="mt-3 text-white/70 leading-relaxed">
              Trusted by investors who value transparency, disciplined investing,
              and long-term financial planning.
            </p>
          </div>
        </div>

        {/* Marquee Scrolling Container */}
        <div className="relative flex overflow-x-hidden w-full group">
          
          {/* Edge Fades for smooth entry/exit */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-[#0F345B] to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-[#1B4965] to-transparent pointer-events-none" />

          {/* Scrolling Track - Pauses on Hover */}
          <div className="flex w-max gap-6 px-6 animate-marquee group-hover:[animation-play-state:paused]">
            
            {/* Duplicated the array 3 times to ensure it covers wide screens without breaking the loop */}
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="
                  relative
                  w-[320px] sm:w-[380px]
                  shrink-0
                  flex
                  flex-col
                  justify-between
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/10
                  backdrop-blur-2xl
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-white/15
                  hover:border-white/20
                  hover:shadow-[0_20px_45px_rgba(0,0,0,.18)]
                "
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#123C5F] via-[#1E6177] to-[#4FAE9C] flex items-center justify-center shadow-[0_8px_20px_rgba(79,174,156,.35)] mb-5">
                    <Quote size={20} className="text-white" />
                  </div>

                  <p className="text-white/90 leading-8">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="font-semibold text-white">
                    {t.name}
                  </p>

                  {t.detail && (
                    <p className="text-sm text-white/60">
                      {t.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}