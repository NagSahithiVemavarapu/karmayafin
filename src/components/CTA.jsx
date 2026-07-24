import { ArrowRight, Phone } from "lucide-react";
import ctaBackground from "/cta-background.jpg";

export default function CTA({ onConsult }) {
  return (
    <section className="px-4 sm:px-6 py-10 bg-paper-dim">
      <div
        className="relative max-w-4xl mx-auto rounded-[28px] overflow-hidden text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBackground})` }}
      >
        {/* dark overlay for text contrast */}
        <div className="absolute inset-0 bg-navy-950/25" />

        <div className="relative px-6 lg:px-10 py-16 lg:py-20 text-center">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight">
            Ready to build your wealth?
          </h2>
          <p className="mt-4 text-navy-100/80 max-w-xl mx-auto leading-relaxed">
            Take the first step toward your financial goals today. Talk to us
            — the first consultation is free.
          </p>

          <div className="mt-8 flex flex-col items-center gap-5">
            <button
              onClick={() => onConsult()}
              className="inline-flex items-center gap-2 rounded-full bg-white text-navy-950 text-sm font-semibold px-6 py-3.5 hover:bg-white/90 transition-colors"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+919880089210"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              Or call: 9880089210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
