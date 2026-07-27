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
    <section
      id="goals"
      className="relative overflow-hidden bg-sky-50"
    >
      {/* Soft background glows to add depth to the light blue */}
      <div className="absolute -top-56 -right-48 w-[650px] h-[650px] rounded-full bg-white/60 blur-[180px]" />
      <div className="absolute -bottom-52 -left-48 w-[620px] h-[620px] rounded-full bg-[#DDF5EF]/60 blur-[200px]" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-20">

        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white border border-sky-200 text-[#0891B2] text-xs font-semibold uppercase tracking-wide px-4 py-2 mb-6 shadow-sm">
            Goal-Based Solutions
          </span>

          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#0F172A] leading-tight">
            What are you investing for?
          </h2>

          <p className="mt-5 text-lg text-[#475569] leading-7">
            Every financial goal deserves a dedicated investment strategy.
            We'll help you build wealth with purpose and confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {goals.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="
                group
                rounded-[26px]
                border
                border-sky-100
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-md
                hover:border-sky-200
              "
            >
              {/* Icon Box */}
              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-sky-100
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                <Icon size={20} className="text-[#0891B2]" />
              </div>

              {/* Title */}
              <h3 className="mt-4 font-display font-semibold text-xl text-[#0F172A]">
                {title}
              </h3>

              {/* Accent Line */}
              <div className="mt-3 h-[3px] w-14 rounded-full bg-gradient-to-r from-sky-200 to-[#0891B2]" />

              {/* Description */}
              <p className="mt-4 text-base leading-7 text-[#475569]">
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}