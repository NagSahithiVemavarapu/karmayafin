import {
  TrendingUp, Repeat, Target, PiggyBank, ShieldCheck,
  GraduationCap, Briefcase, Globe,
} from "lucide-react";

const services = [
  { icon: TrendingUp, name: "Mutual Fund Investments", desc: "Curated, research-backed mutual fund recommendations across equity, debt, and hybrid funds matched to your risk profile and goals." },
  { icon: Repeat, name: "Systematic Investment Plans (SIP)", desc: "Start small, stay consistent. We help you set up SIPs that turn everyday savings into long-term wealth through compounding." },
  { icon: Target, name: "Goal-Based Financial Planning", desc: "A clear roadmap for every life goal — a home, your child's education, a dream vacation, or early retirement." },
  { icon: PiggyBank, name: "Retirement Planning", desc: "Plan today for a financially independent tomorrow and retire with confidence." },
  { icon: ShieldCheck, name: "Tax-Saving Investments (ELSS)", desc: "Save tax under Section 80C while building wealth with ELSS and other tax-efficient options." },
  { icon: GraduationCap, name: "Children's Future Planning", desc: "Secure your child's education and milestones with dedicated long-term strategies." },
  { icon: Briefcase, name: "Lump-Sum & Portfolio Advisory", desc: "Deploy one-time funds wisely, with regular portfolio reviews to stay on track." },
  { icon: Globe, name: "NRI Investment Services", desc: "Compliant, hassle-free guidance for NRIs investing in Indian mutual funds." },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-br from-[#FEFFFE] via-[#FCFEFD] to-[#F4FBF9]">
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-teal-100/40 blur-3xl"></div>
      <div className="absolute -bottom-32 right-0 w-80 h-80 rounded-full bg-cyan-100/30 blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-navy-900/5 text-navy-800 text-xs font-semibold uppercase tracking-wide px-4 py-1.5 mb-6 border border-navy-900/10">
            Our Services
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-navy-950">
            How we help you grow.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, name, desc }) => (
          <div
            key={name}
            className="group rounded-3xl border border-white/70 bg-gradient-to-br from-white via-[#F8FEFD] to-[#F3FBF8] backdrop-blur-xl p-7 shadow-[0_12px_35px_rgba(18,60,95,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#7FCDBB] hover:bg-gradient-to-br hover:from-[#FFFFFF] hover:via-[#F7FEFC] hover:to-[#E6F8F4] hover:shadow-[0_25px_50px_rgba(79,174,156,0.18)]"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#123C5F] via-[#1B5679] to-[#4FAE9C] flex items-center justify-center shadow-[0_8px_22px_rgba(79,174,156,0.30)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Icon size={22} className="text-white" />
            </div>

            {/* Title */}
            <h3 className="mt-5 font-display font-semibold text-lg text-navy-950 leading-snug">
              {name}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm text-slate-600 leading-7">
              {desc}
            </p>

            {/* Learn More */}
            <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition-all duration-300 group-hover:gap-3 group-hover:text-teal-700">
              Learn More
              <span>→</span>
        </button>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}
