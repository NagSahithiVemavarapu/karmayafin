export default function CTA({ onConsult }) {
  return (
    <section className="bg-navy-950 text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16 lg:py-20 text-center">
        <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight">
          Ready to build your wealth?
        </h2>
        <p className="mt-4 text-navy-100/80 max-w-xl mx-auto leading-relaxed">
          Take the first step toward your financial goals today. Talk to us
          — the first consultation is free.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => onConsult()}
            className="inline-flex items-center rounded-full bg-teal-500 text-navy-950 text-sm font-semibold px-6 py-3.5 hover:bg-teal-400 transition-colors"
          >
            Schedule a Consultation
          </button>
          <a
            href="tel:+919880089210"
            className="inline-flex items-center rounded-full border border-white/20 text-white text-sm font-semibold px-6 py-3.5 hover:border-teal-400 transition-colors"
          >
            Or call: 98800 89210
          </a>
        </div>
      </div>
    </section>
  );
}
