import {
  Heart,
  Target,
  MessageCircle,
  ShieldCheck,
  RefreshCw,
  PhoneCall,
} from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Client-First, Always",
    desc: "Our guidance is built around your goals, not products.",
  },
  {
    icon: Target,
    title: "Goal-Based Approach",
    desc: "Every investment is tied to a real-life objective, not guesswork.",
  },
  {
    icon: MessageCircle,
    title: "Transparent & Honest",
    desc: "Clear communication with no hidden agendas or jargon.",
  },
  {
    icon: ShieldCheck,
    title: "Discipline Over Timing",
    desc: "We focus on staying invested instead of chasing the market.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Support",
    desc: "Regular portfolio reviews keep your financial plan on track.",
  },
  {
    icon: PhoneCall,
    title: "Accessible & Responsive",
    desc: "Reach us whenever you need trusted financial guidance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden bg-[#0A2842]"
    >
      {/* Subtle Background Glows to complement the dark blue */}
      <div className="absolute -top-52 -right-52 w-[650px] h-[650px] rounded-full bg-[#4FAE9C]/10 blur-[180px]" />
      <div className="absolute -bottom-52 -left-52 w-[650px] h-[650px] rounded-full bg-[#4FAE9C]/10 blur-[180px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.05),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="mb-12 max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-[#123C5F] text-[#4FAE9C] text-xs font-semibold uppercase tracking-wide px-4 py-1.5 mb-6">
            Why Choose Karmayafin
          </span>

          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-white">
            Why investors trust us.
          </h2>

          <p className="mt-5 text-lg text-white/75 leading-7">
            Building wealth is more than choosing investments. It's about
            having the right partner who stays with you through every stage
            of your financial journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="
                group
                relative
                overflow-hidden
                flex
                gap-5
                rounded-[24px]
                border
                border-white/10
                bg-gradient-to-br from-white/5 to-[#4FAE9C]/30
                backdrop-blur-md
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/20
                hover:shadow-xl
              "
            >
              {/* Icon Box */}
              <div
                className="
                  relative
                  z-10
                  w-14
                  h-14
                  shrink-0
                  rounded-2xl
                  bg-white/10
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  group-hover:scale-105
                  group-hover:bg-white/15
                "
              >
                <Icon size={24} className="text-[#EAFBF7]" strokeWidth={2} />
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1">
                <h3 className="font-display font-semibold text-xl text-white leading-snug">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
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