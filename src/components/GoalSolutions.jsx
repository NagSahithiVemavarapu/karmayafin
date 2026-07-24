import {
  Home,
  GraduationCap,
  Umbrella,
  TrendingUp,
  Gift,
  LifeBuoy,
} from "lucide-react";

const goals = [
  {
    icon: Home,
    title: "Buy a Home",
    desc: "Build the down payment and beyond, on your timeline.",
  },
  {
    icon: GraduationCap,
    title: "Child's Education",
    desc: "Never let cost come in the way of your child's dreams.",
  },
  {
    icon: Umbrella,
    title: "Retirement",
    desc: "Build a corpus that funds the life you want later.",
  },
  {
    icon: TrendingUp,
    title: "Wealth Creation",
    desc: "Grow your money steadily over the long term.",
  },
  {
    icon: Gift,
    title: "Big Purchases",
    desc: "Plan ahead for cars, weddings, or travel.",
  },
  {
    icon: LifeBuoy,
    title: "Emergency Fund",
    desc: "Keep a safety net for life's surprises.",
  },
];

export default function GoalSolutions() {
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
            <div
              key={title}
              className="group cursor-pointer rounded-3xl border border-white/10 bg-gradient-to-br from-[#214F72] via-[#2A5C7A] to-[#4EA99B] p-5 min-h-[165px] shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(79,174,156,0.28)]"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110 group-hover:rotate-6">
                <Icon size={18} className="text-[#C8FFF3]" />
              </div>

              <h3 className="mt-3 font-display font-semibold text-xl text-white transition-colors duration-300 group-hover:text-[#D7FFF6]">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/80">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}