import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact({ onConsult }) {
  return (
    <section id="contact" className="bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="inline-flex items-center rounded-full bg-navy-900/5 text-navy-800 text-xs font-semibold uppercase tracking-wide px-4 py-1.5 mb-6 border border-navy-900/10">
            Contact Us
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-navy-950">
            Let's talk about your goals.
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed max-w-md">
            Reach out directly, or schedule a free consultation and we'll
            call you back at a time that works.
          </p>

          <div className="mt-8 space-y-4">
            <a href="tel:+919880089210" className="flex items-center gap-3 text-navy-900 font-medium">
              <Phone size={18} className="text-navy-600" /> 98800 89210
            </a>
            <a href="mailto:contact@karmayafin.com" className="flex items-center gap-3 text-navy-900 font-medium">
              <Mail size={18} className="text-navy-600" /> contact@karmayafin.com
            </a>
            <div className="flex items-center gap-3 text-slate-600">
              <MapPin size={18} className="text-navy-600" /> [Office address, City, PIN]
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Clock size={18} className="text-navy-600" /> Mon–Sat, 10:00 AM – 7:00 PM
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white border border-line p-8 flex flex-col justify-center items-start">
          <h3 className="font-display font-semibold text-xl text-navy-950">Prefer we call you?</h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Fill a quick form and get a free, no-obligation consultation.
          </p>
          <button
            onClick={() => onConsult()}
            className="mt-6 inline-flex items-center rounded-full bg-navy-900 text-white text-sm font-semibold px-6 py-3.5 hover:bg-navy-700 transition-colors"
          >
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
