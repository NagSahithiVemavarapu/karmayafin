import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Karmayafin made investing simple for me. I started my first SIP with them and now I understand exactly where my money is going.",
    name: "Client Name",
    detail: "Profession",
  },
  {
    quote: "Their goal-based planning helped us prepare for our daughter's education without stress.",
    name: "Client Name",
    detail: "City",
  },
  {
    quote: "Honest guidance and always available when I have questions. Highly recommend.",
    name: "Client Name",
    detail: "",
  },
];

function TestimonialCard({ t }) {
  return (
    <div className="group shrink-0 w-[320px] sm:w-[380px] rounded-3xl border border-white/10 bg-gradient-to-br from-[#17415C] via-[#1F5573] to-[#3E8C86] p-7 shadow-[0_15px_40px_rgba(18,60,95,0.22)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(79,174,156,0.30)]">
      <div className="flex items-center justify-between">
        <Quote className="text-teal-300/50" size={30} fill="currentColor" />
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={13} className="text-teal-300" fill="currentColor" />
          ))}
        </div>
      </div>

      <p className="mt-5 font-display text-lg text-white leading-snug">
        "{t.quote}"
      </p>

      <p className="mt-6 text-sm font-semibold text-teal-200">
        — {t.name}
        {t.detail ? `, ${t.detail}` : ""}
      </p>
    </div>
  );
}

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#FBFEFD] to-[#F4FAF9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-teal-500/10 text-teal-600 text-xs font-semibold uppercase tracking-wide px-4 py-1.5 mb-6">
            Testimonials
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-navy-950">
            What our clients say.
          </h2>
          <p className="mt-2 text-xs text-slate-500">
            Sample quotes — replace with real client testimonials once you have consent.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-[#F4FAF9] to-transparent"></div>

        <div className="overflow-hidden py-2">
          <div className="marquee-track gap-6 px-6 lg:px-10">
            {loop.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
