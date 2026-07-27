import { ArrowRight, Phone } from "lucide-react";
import ctaBackground from "/cta-background.jpg";

export default function CTA({ onConsult }) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#EEF9F6] via-[#DDF5EF] to-[#BFEBDD] py-16 lg:py-20"
    >
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <div
          className="relative overflow-hidden rounded-[36px] bg-cover bg-center shadow-2xl"
          style={{ backgroundImage: `url(${ctaBackground})` }}
        >
          {/* 
            Removed the heavy dark overlay here so the cta-background.jpg 
            is fully visible. Adding a very faint black tint just to ensure 
            the white text stays perfectly readable across all screens. 
          */}
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative px-8 lg:px-14 py-16 lg:py-20 text-center">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-white">
              Ready to build your wealth?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90 leading-relaxed">
              Take the first step toward your financial goals today.
              Whether you're starting your first SIP or planning long-term
              wealth creation, we're here to guide you every step of the way.
            </p>

            <div className="mt-10 flex flex-col items-center gap-5">
              <button
                onClick={onConsult}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0891B2] transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="tel:+919880089210"
                className="inline-flex items-center gap-2 text-base font-medium text-white transition-all duration-300 hover:text-[#BFEBDD]"
              >
                <Phone className="w-4 h-4" />
                Or call: 98800 89210
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}