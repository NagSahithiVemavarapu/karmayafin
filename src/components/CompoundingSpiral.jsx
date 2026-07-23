// The signature visual: ascending steps connected by a single continuous
// path, with a small marker climbing it — literal to "disciplined,
// repeated action (karma) compounding upward into wealth."
export default function CompoundingSpiral({ className = "" }) {
  const steps = [
    { x: 40, y: 340, w: 46, h: 40 },
    { x: 100, y: 300, w: 46, h: 80 },
    { x: 160, y: 250, w: 46, h: 130 },
    { x: 220, y: 190, w: 46, h: 190 },
    { x: 280, y: 120, w: 46, h: 260 },
    { x: 340, y: 40, w: 46, h: 340 },
  ];

  const pathD = steps
    .map((s, i) => {
      const cx = s.x + s.w / 2;
      const cy = s.y - 14;
      return i === 0 ? `M ${cx} ${cy}` : `L ${cx} ${cy}`;
    })
    .join(" ");

  return (
    <svg
      viewBox="0 0 420 400"
      className={className}
      role="img"
      aria-label="Ascending bars connected by a rising path, representing compounding growth"
    >
      <defs>
        <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--color-navy-700)" />
          <stop offset="100%" stopColor="var(--color-navy-500)" />
        </linearGradient>
        <linearGradient id="lastBarGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--color-teal-600)" />
          <stop offset="100%" stopColor="var(--color-teal-400)" />
        </linearGradient>
      </defs>

      {steps.map((s, i) => (
        <rect
          key={i}
          x={s.x}
          y={s.y}
          width={s.w}
          height={s.h}
          rx={10}
          fill={i === steps.length - 1 ? "url(#lastBarGrad)" : "url(#barGrad)"}
          opacity={0.15 + i * 0.15}
        />
      ))}

      <path
        d={pathD}
        fill="none"
        stroke="var(--color-teal-500)"
        strokeWidth="2"
        strokeDasharray="1 8"
        strokeLinecap="round"
      />

      <circle r="7" fill="var(--color-teal-500)">
        <animateMotion
          dur="6s"
          repeatCount="indefinite"
          path={pathD}
          keyPoints="0;1"
          keyTimes="0;1"
          calcMode="linear"
        />
      </circle>
    </svg>
  );
}
