export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <img src="/logo-mark.png" alt="Karmayafin" className="h-10 w-auto object-contain" />
            <span className="font-display font-semibold text-xl text-white">
              Karmaya<span className="text-teal-400">fin</span>
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed max-w-xs">
            Mutual Fund Distribution &amp; Wealth Building. Disciplined
            action today. Compounded wealth tomorrow.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-400 mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#calculators" className="hover:text-white transition-colors">Calculators</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-400 mb-4">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>Phone: 98800 89210</li>
            <li>Email: contact@karmayafin.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-xs space-y-2">
          <p>© {new Date().getFullYear()} Karmayafin. All rights reserved.</p>
          <p>AMFI Registration: ARN – 289451</p>
          <p className="leading-relaxed text-navy-100/50">
            Mutual fund investments are subject to market risks. Read all
            scheme related documents carefully before investing. Karmayafin
            is an AMFI-registered Mutual Fund Distributor (ARN – 289451). We
            do not offer investment advisory services and are not a
            SEBI-registered Investment Adviser. Information on this website
            is for general informational purposes only and does not
            constitute investment advice or a recommendation to buy or sell
            any security or scheme. Past performance is not indicative of
            future returns. Please consult your financial advisor before
            making any investment decision.
          </p>
        </div>
      </div>
    </footer>
  );
}
