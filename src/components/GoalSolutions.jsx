import { Home, GraduationCap, Umbrella, TrendingUp, Gift, LifeBuoy } from "lucide-react";

const goals = [
  { icon: Home, title: "Buy a Home", desc: "Build the down payment and beyond, on your timeline." },
  { icon: GraduationCap, title: "Child's Education", desc: "Never let cost come in the way of your child's dreams." },
  { icon: Umbrella, title: "Retirement", desc: "Build a corpus that funds the life you want later." },
  { icon: TrendingUp, title: "Wealth Creation", desc: "Grow your money steadily over the long term." },
  { icon: Gift, title: "Big Purchases", desc: "Plan ahead for cars, weddings, or travel." },
  { icon: LifeBuoy, title: "Emergency Fund", desc: "Keep a safety net for life's surprises." },
];

export default function GoalSolutions({ onConsult }) {
  return (
    <section id="goals" className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold uppercase tracking-wide px-4 py-1.5 mb-6">
            Goal-Based Solutions
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight">
            What are you investing for?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {goals.map(({ icon: Icon, title, desc }) => (
            <button
              key={title}
              onClick={() => onConsult(title)}
              className="text-left rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-teal-500/40 transition-colors"
            >
              <Icon size={22} className="text-teal-400" />
              <h3 className="mt-4 font-display font-semibold text-lg">{title}</h3>
              <p className="mt-1.5 text-sm text-navy-100/75 leading-relaxed">{desc}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
