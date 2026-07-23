import { useEffect, useState } from "react";
import { X } from "lucide-react";

const initialForm = { name: "", mobile: "", email: "", interest: "SIP / Mutual Funds", message: "" };
const interests = ["SIP / Mutual Funds", "Retirement", "Tax Saving", "Other"];

export default function ConsultationModal({ open, onClose, prefilledInterest }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setForm({ ...initialForm, interest: prefilledInterest || "SIP / Mutual Funds" });
      setErrors({});
      setSubmitted(false);
    }
  }, [open, prefilledInterest]);

  if (!open) return null;

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name";
    if (!/^\d{10}$/.test(form.mobile.replace(/\s+/g, ""))) next.mobile = "Enter a valid 10-digit mobile number";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl border border-line overflow-hidden">
        <div className="flex items-start justify-between px-7 pt-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">Free Consultation</p>
            <h3 className="mt-1.5 font-display font-semibold text-xl text-navy-950">Talk to Karmayafin</h3>
            <p className="mt-1.5 text-sm text-slate-500">
              Tell us a bit about your goals — we'll call you back shortly.
            </p>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-slate-400 hover:text-navy-950 transition-colors">
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="px-7 pt-6 pb-8">
            <div className="rounded-xl bg-navy-900/5 border border-navy-900/10 p-5">
              <p className="font-display font-semibold text-navy-950">Thanks, {form.name}.</p>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                We've received your details and will call you back shortly.
              </p>
            </div>
            <button
              onClick={onClose}
              className="mt-6 w-full inline-flex justify-center items-center rounded-full bg-navy-900 text-white text-sm font-semibold px-5 py-3 hover:bg-navy-700 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-7 pt-6 pb-7 space-y-4">
            <Field label="Name" value={form.name} onChange={(v) => update("name", v)} error={errors.name} autoFocus />
            <Field label="Mobile number" type="tel" value={form.mobile} onChange={(v) => update("mobile", v)} error={errors.mobile} />
            <Field label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} error={errors.email} />

            <label className="block">
              <span className="text-xs font-medium text-slate-600">Interested in</span>
              <select
                value={form.interest}
                onChange={(e) => update("interest", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-line px-3.5 py-2.5 text-sm text-navy-950 outline-none focus:border-navy-500"
              >
                {interests.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-xs font-medium text-slate-600">Message (optional)</span>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={3}
                className="mt-1.5 w-full rounded-lg border border-line px-3.5 py-2.5 text-sm text-navy-950 outline-none focus:border-navy-500 resize-none"
              />
            </label>

            <button
              type="submit"
              className="w-full inline-flex justify-center items-center rounded-full bg-navy-900 text-white text-sm font-semibold px-5 py-3 hover:bg-navy-700 transition-colors"
            >
              Request a Callback
            </button>

            <p className="pt-2 text-center text-sm text-slate-600">
              Or call directly:{" "}
              <a href="tel:+919880089210" className="font-semibold text-navy-800 hover:text-teal-600">
                98800 89210
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, error, type = "text", autoFocus = false }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-slate-600">{label}</span>
      <input
        type={type}
        value={value}
        autoFocus={autoFocus}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm text-navy-950 outline-none transition-colors focus:border-navy-500 ${
          error ? "border-red-300" : "border-line"
        }`}
      />
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
