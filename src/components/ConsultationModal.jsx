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
    function onKey(e) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setForm({ ...initialForm, interest: prefilledInterest || "SIP / Mutual Funds" });
      setErrors({});
      setSubmitted(false);
    }
  }, [open, prefilledInterest]);

  if (!open) return null;

  function update(field, value) { setForm((f) => ({ ...f, [field]: value })); }

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
      <div className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-[92vw] max-w-[480px] max-h-[90vh] rounded-[28px] bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col">
        <div className="flex-shrink-0 flex items-start justify-between px-7 pt-5 pb-1">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#0891B2]">Free Consultation</p>
            <h3 className="mt-1.5 font-display font-semibold text-2xl text-[#0F172A]">Talk to Karmayafin</h3>
            <p className="mt-1.5 text-base text-[#475569]">Tell us a bit about your goals — we'll call you back shortly.</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-[#475569] hover:text-[#0F172A] transition-colors">
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="px-5 sm:px-6 md:px-7 pt-5 pb-6">
            <div className="rounded-xl bg-slate-50 border border-slate-100 p-5">
              <p className="font-display font-semibold text-xl text-[#0F172A]">Thanks, {form.name}.</p>
              <p className="mt-1.5 text-base text-[#475569] leading-relaxed">We've received your details and will call you back shortly.</p>
            </div>
            <button
              onClick={onClose}
              className="mt-6 w-full inline-flex justify-center items-center rounded-full bg-gradient-to-r from-[#123C5F] via-[#1E6177] to-[#4FAE9C] text-white text-base font-semibold px-5 py-3 hover:scale-[1.02] transition-all duration-300"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
            <div className="flex-1 min-h-0 overflow-y-auto px-7 pt-4 pb-3 space-y-3">
              <Field label="Name" value={form.name} onChange={(v) => update("name", v)} error={errors.name} autoFocus />
              <Field label="Mobile number" type="tel" value={form.mobile} onChange={(v) => update("mobile", v)} error={errors.mobile} />
              <Field label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} error={errors.email} />

              <label className="block">
                <span className="text-sm font-medium text-[#475569]">Interested in</span>
                <select
                  value={form.interest}
                  onChange={(e) => update("interest", e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-base text-[#0F172A] outline-none transition-all focus:border-[#0891B2]"
                >
                  {interests.map((i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-[#475569]">Message (optional)</span>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={2}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-base text-[#0F172A] outline-none transition-all focus:border-[#0891B2] resize-none"
                />
              </label>
            </div>

            <div className="flex-shrink-0 px-7 pt-3 pb-6 space-y-3 border-t border-slate-100">
              <button
                type="submit"
                className="w-full inline-flex justify-center items-center rounded-full bg-gradient-to-r from-[#123C5F] via-[#1E6177] to-[#4FAE9C] text-white text-base font-semibold py-3 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                Request a Callback
              </button>

              <p className="pt-1 text-center text-sm text-[#475569]">
                Or call directly:{" "}
                <a href="tel:+919880089210" className="font-semibold text-[#0F172A] hover:text-[#0891B2]">
                  98800 89210
                </a>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, error, type = "text", autoFocus = false }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-[#475569]">{label}</span>
      <input
        type={type}
        value={value}
        autoFocus={autoFocus}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-1 w-full rounded-xl border px-4 py-2.5 text-base text-[#0F172A] outline-none transition-all focus:border-[#0891B2] ${
          error ? "border-red-300" : "border-slate-200"
        }`}
      />
      {error && <span className="mt-1 block text-sm text-red-500">{error}</span>}
    </label>
  );
}