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

export default function Testimonials() {
  return (
    <section className="bg-paper">
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

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl bg-white border border-line p-7">
              <p className="font-display text-lg text-navy-900 leading-snug">"{t.quote}"</p>
              <p className="mt-4 text-sm font-semibold text-slate-600">
                — {t.name}
                {t.detail ? `, ${t.detail}` : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
