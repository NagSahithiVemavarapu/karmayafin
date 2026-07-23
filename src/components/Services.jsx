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
    <section id="services" className="bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-navy-900/5 text-navy-800 text-xs font-semibold uppercase tracking-wide px-4 py-1.5 mb-6 border border-navy-900/10">
            Our Services
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-navy-950">
            How we help you grow.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="rounded-2xl bg-white border border-line p-6 shadow-[0_4px_28px_rgba(15,35,24,0.05)] hover:-translate-y-1 transition-transform"
            >
              <div className="w-11 h-11 rounded-xl bg-navy-900/8 flex items-center justify-center">
                <Icon size={20} className="text-navy-700" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-base text-navy-950 leading-snug">{name}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
