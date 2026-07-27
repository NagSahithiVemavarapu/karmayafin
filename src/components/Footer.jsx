import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#062447] text-white">
      <div className="relative w-full px-5 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo-mark.png" alt="Karmayafin" className="h-10 w-auto object-contain" />
            <span className="font-display font-semibold text-3xl text-white">
              Karmaya<span className="text-white/60">fin</span>
            </span>
          </div>
          <p className="mt-4 text-base leading-8 max-w-xs text-white/80">
            Mutual Fund Distribution & Wealth Building.
            <br />
            Disciplined action today.
            <br />
            Compounded wealth tomorrow.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-5">
            Quick Links
          </p>
          <ul className="space-y-3 text-base">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Process", "#process"],
              ["Goal Solutions", "#goals"],
              ["Calculators", "#calculators"],
              ["FAQs", "#faqs"],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="inline-block text-white/80 transition-all duration-300 hover:text-white hover:translate-x-1">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-5">
            Contact
          </p>
          <div className="space-y-4 text-base">
            {[
              { icon: Phone, text: "98800 89210" },
              { icon: Mail, text: "contact@karmayafin.com" },
              { icon: MapPin, text: "Your Office Address,\nCity, State – PIN" },
              { icon: Clock, text: "Mon – Sat\n10:00 AM – 7:00 PM" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  {/* Reduced the box from w-10/h-10 to w-8/h-8, updated to rounded-lg, and added mt-0.5 for perfect text alignment */}
                  <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={15} className="text-white/80" />
                  </div>
                  <span className="whitespace-pre-line text-white/80 leading-relaxed">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="w-full px-5 lg:px-8 py-6 text-sm space-y-3">
          <p className="text-white/60">
            © {new Date().getFullYear()} Karmayafin. All rights reserved.
          </p>
          <p className="text-white/80 font-medium">
            AMFI Registration: ARN – 289451
          </p>
          <p className="leading-6 text-white/40">
            Mutual fund investments are subject to market risks.
            Read all scheme related documents carefully before investing.
            Karmayafin is an AMFI-registered Mutual Fund Distributor
            (ARN – 289451). We do not offer investment advisory services and
            are not a SEBI-registered Investment Adviser. Information on this
            website is for general informational purposes only and does not
            constitute investment advice or a recommendation to buy or sell any
            security or scheme. Past performance is not indicative of future
            returns. Please consult your financial advisor before making any
            investment decision.
          </p>
        </div>
      </div>
    </footer>
  );
}