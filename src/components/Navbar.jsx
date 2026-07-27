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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <nav className="w-full px-5 lg:px-8 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Karmayafin home">
          <img src="/logo-mark.png" alt="Karmayafin" className="h-11 w-auto object-contain" />
          <span className="font-display font-semibold text-2xl text-[#0F172A] tracking-tight">
            Karmaya<span className="text-[#0891B2]">fin</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="text-base font-medium text-[#475569] hover:text-[#0891B2] transition-colors duration-300">
              {l.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center">
          <button
            onClick={onConsult}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#123C5F] via-[#1E6177] to-[#4FAE9C] text-white text-base font-semibold px-6 py-3 shadow-[0_10px_25px_rgba(79,174,156,0.28)] transition-all duration-300 hover:scale-105 hover:shadow-[0_18px_40px_rgba(79,174,156,0.35)]"
          >
            Free Consultation
          </button>
        </div>

        <button className="lg:hidden text-[#0F172A]" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-5 py-6 space-y-4">
          {links.map((l) => (
            <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="block text-base font-medium text-[#0F172A]">
              {l.name}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); onConsult(); }}
            className="w-full inline-flex justify-center items-center rounded-full bg-gradient-to-r from-[#123C5F] via-[#1E6177] to-[#4FAE9C] text-white text-base font-semibold px-5 py-3 shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            Free Consultation
          </button>
        </div>
      )}
    </header>
  );
}