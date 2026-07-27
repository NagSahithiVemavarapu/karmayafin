import {
  TrendingUp,
  Repeat,
  Target,
  PiggyBank,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    name: "Mutual Fund Investments",
    desc: "Research-backed mutual fund portfolios tailored to your goals and risk profile.",
  },
  {
    icon: Repeat,
    name: "SIP Investments",
    desc: "Build wealth consistently through disciplined SIP investments.",
  },
  {
    icon: Target,
    name: "Goal-Based Planning",
    desc: "Investment strategies designed around your life's milestones.",
  },
  {
    icon: PiggyBank,
    name: "Retirement Planning",
    desc: "Plan today for a financially secure and independent retirement.",
  },
  {
    icon: ShieldCheck,
    name: "Tax Saving (ELSS)",
    desc: "Reduce taxes while creating long-term wealth through ELSS.",
  },
  {
    icon: GraduationCap,
    name: "Child Education",
    desc: "Secure your child's future with dedicated investment planning.",
  },
  {
    icon: Briefcase,
    name: "Portfolio Advisory",
    desc: "Professional portfolio reviews to keep investments on track.",
  },
  {
    icon: Globe,
    name: "NRI Services",
    desc: "Simple and compliant investment solutions for NRIs.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-[#EEF9F6] via-[#DDF5EF] to-[#BFEBDD]"
    >
      {/* Background Glows (Switched to white to pop against the mint gradient) */}
      <div className="absolute -top-44 -left-44 w-[420px] h-[420px] rounded-full bg-white/60 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-white/60 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="mb-12 max-w-2xl">

          <span className="inline-flex items-center rounded-full border border-white/60 bg-white/50 text-[#0891B2] text-xs font-semibold uppercase tracking-wide px-4 py-2 mb-6 shadow-sm">
            Our Services
          </span>

          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-[#0F172A]">
            Financial solutions built around you.
          </h2>

          <p className="mt-5 text-lg text-[#475569] leading-7">
            Personalized investment solutions that help you grow,
            protect and manage your wealth with confidence.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map(({ icon: Icon, name, desc }) => (

            <div
              key={name}
              className="
              group
              rounded-3xl
              border
              border-white
              bg-white
              p-5
              min-h-[220px]
              shadow-sm
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-xl
            "
            >
              {/* Icon */}
              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-gradient-to-br 
                  from-[#123C5F] 
                  via-[#1E6177] 
                  to-[#4FAE9C]
                  flex
                  items-center
                  justify-center
                  shadow-md
                  transition-all
                  duration-500
                  group-hover:scale-105
                "
              >
                <Icon size={17} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="mt-4 font-display font-semibold text-xl leading-snug text-[#0F172A]">
                {name}
              </h3>

              {/* Description */}
              <p className="mt-3 text-base leading-7 text-[#475569]">
                {desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}