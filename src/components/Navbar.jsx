import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Goals", href: "#goals" },
  { name: "Calculators", href: "#calculators" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onConsult }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-line">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label="Karmayafin home"
        >
          <img
            src="/logo-mark.png"
            alt="Karmayafin"
            className="h-11 w-auto object-contain"
          />
          <span className="font-display font-semibold text-2xl text-navy-900 tracking-tight">
            Karmaya<span className="text-teal-600">fin</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-navy-900 transition-colors"
            >
              {l.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onConsult}
            className="inline-flex items-center rounded-full bg-navy-900 text-white text-sm font-semibold px-6 py-3 hover:bg-navy-700 transition-colors"
          >
            Free Consultation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-navy-900"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-line bg-paper px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-ink"
            >
              {l.name}
            </a>
          ))}

          <button
            onClick={() => {
              setOpen(false);
              onConsult();
            }}
            className="w-full inline-flex justify-center items-center rounded-full bg-navy-900 text-white text-sm font-semibold px-5 py-3 hover:bg-navy-700 transition-colors"
          >
            Free Consultation
          </button>
        </div>
      )}
    </header>
  );
}