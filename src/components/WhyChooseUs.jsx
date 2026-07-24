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
    <section id="why-choose" className="relative overflow-hidden bg-gradient-to-br from-[#F5FCFA] via-[#FBFEFD] to-[#EDF9F6]">
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-teal-200/20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-emerald-200/20 blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
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
            <div key={title} className="group flex gap-4 rounded-3xl border border-white/70 bg-gradient-to-br from-white/75 via-[#F9FEFC]/80 to-[#F0FBF8]/90 backdrop-blur-xl p-6 shadow-[0_10px_35px_rgba(18,60,95,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#7FCDBB] hover:shadow-[0_22px_50px_rgba(18,60,95,0.18)]">
              <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-[#123C5F] via-[#1B5679] to-[#4FAE9C] flex items-center justify-center shadow-[0_8px_22px_rgba(79,174,156,0.35)] transition-all duration-500 group-hover:scale-110">
                <Icon size={20} className="text-white" />
              </div>
              <div>
               <h3 className="font-display font-semibold text-lg text-navy-950">
                {title}
              </h3>

              <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-[#4FAE9C] to-[#8ED8C8]"></div>

                <p className="mt-3 text-sm text-slate-600 leading-7">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
