import { Heart, Target, MessageCircle, ShieldCheck, RefreshCw, PhoneCall } from "lucide-react";

const reasons = [
  { icon: Heart, title: "Client-First, Always", desc: "Our guidance is built around your goals, not products." },
  { icon: Target, title: "Goal-Based Approach", desc: "Every investment is tied to a real-life objective, not guesswork." },
  { icon: MessageCircle, title: "Transparent & Honest", desc: "Clear communication, no hidden agendas, no jargon." },
  { icon: ShieldCheck, title: "Discipline Over Timing", desc: "We focus on staying invested, not chasing the market." },
  { icon: RefreshCw, title: "Ongoing Support", desc: "Regular reviews and rebalancing to keep your plan on track." },
  { icon: PhoneCall, title: "Accessible & Responsive", desc: "Reach us whenever you need guidance — call 98800 89210." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-teal-500/10 text-teal-600 text-xs font-semibold uppercase tracking-wide px-4 py-1.5 mb-6">
            Why Choose Karmayafin
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-navy-950">
            Why investors trust us.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 rounded-2xl border border-line bg-paper p-6">
              <div className="w-10 h-10 shrink-0 rounded-full bg-navy-900 flex items-center justify-center">
                <Icon size={18} className="text-teal-300" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-base text-navy-950">{title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
