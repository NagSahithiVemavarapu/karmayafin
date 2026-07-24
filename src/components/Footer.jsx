import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-950 text-navy-100/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-3 gap-12">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo-mark.png"
              alt="Karmayafin"
              className="h-10 w-auto object-contain"
            />

            <span className="font-display font-semibold text-2xl text-white">
              Karmaya
              <span className="text-teal-400">fin</span>
            </span>
          </div>

          <p className="mt-4 text-sm leading-8 max-w-xs">
            Mutual Fund Distribution & Wealth Building.
            <br />
            Disciplined action today.
            <br />
            Compounded wealth tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-5">
            Quick Links
          </p>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Services
              </a>
            </li>

            <li>
              <a href="#process" className="hover:text-white transition-colors">
                Process
              </a>
            </li>

            <li>
              <a href="#goals" className="hover:text-white transition-colors">
                Goal Solutions
              </a>
            </li>

            <li>
              <a href="#calculators" className="hover:text-white transition-colors">
                Calculators
              </a>
            </li>

            <li>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-5">
            Contact
          </p>

          <div className="space-y-4 text-sm">

            <div className="flex items-start gap-3">
              <Phone size={17} className="text-teal-400 mt-0.5 shrink-0" />
              <span>98800 89210</span>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={17} className="text-teal-400 mt-0.5 shrink-0" />
              <span>contact@karmayafin.com</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={17} className="text-teal-400 mt-0.5 shrink-0" />
              <span>
                Your Office Address,
                <br />
                City, State – PIN
              </span>
            </div>

            <div className="flex items-start gap-3">
              <Clock size={17} className="text-teal-400 mt-0.5 shrink-0" />
              <span>
                Mon – Sat
                <br />
                10:00 AM – 7:00 PM
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-xs space-y-3">

          <p>
            © {new Date().getFullYear()} Karmayafin.
            All rights reserved.
          </p>

          <p>
            AMFI Registration: ARN – 289451
          </p>

          <p className="leading-6 text-navy-100/50">
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