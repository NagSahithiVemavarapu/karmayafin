import { useMemo, useState } from "react";
import {
  sipFutureValue,
  lumpSumFutureValue,
  requiredSipForGoal,
  retirementPlan,
  formatINR,
} from "../utils/calculators";

const tabs = ["SIP", "Lump-Sum", "Goal", "Retirement"];

function Slider({ label, value, onChange, min, max, step, suffix = "" }) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm font-medium text-slate-600">{label}</span>
        <span className="font-mono text-sm font-semibold text-navy-800">
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-navy-700"
      />
    </label>
  );
}

function ResultRow({ label, value, emphasis = false }) {
  return (
    <div className="flex items-baseline justify-between py-2.5 border-b border-line last:border-0">
      <span className="text-sm text-slate-600">{label}</span>
      <span className={`font-mono ${emphasis ? "text-xl font-semibold text-navy-900" : "text-sm font-medium text-navy-800"}`}>
        {value}
      </span>
    </div>
  );
}

function SipCalc() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(15);
  const result = useMemo(() => sipFutureValue(amount, rate, years), [amount, rate, years]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <Slider label="Monthly investment" value={amount} onChange={setAmount} min={500} max={100000} step={500} suffix=" ₹" />
        <Slider label="Expected annual return" value={rate} onChange={setRate} min={1} max={20} step={0.5} suffix="%" />
        <Slider label="Investment period" value={years} onChange={setYears} min={1} max={35} step={1} suffix=" yrs" />
      </div>
      <div className="rounded-2xl bg-paper border border-line p-6">
        <ResultRow label="Total invested" value={formatINR(result.invested)} />
        <ResultRow label="Estimated gains" value={formatINR(result.gains)} />
        <ResultRow label="Future value" value={formatINR(result.futureValue)} emphasis />
      </div>
    </div>
  );
}

function LumpSumCalc() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const result = useMemo(() => lumpSumFutureValue(principal, rate, years), [principal, rate, years]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <Slider label="One-time investment" value={principal} onChange={setPrincipal} min={5000} max={5000000} step={5000} suffix=" ₹" />
        <Slider label="Expected annual return" value={rate} onChange={setRate} min={1} max={20} step={0.5} suffix="%" />
        <Slider label="Investment period" value={years} onChange={setYears} min={1} max={35} step={1} suffix=" yrs" />
      </div>
      <div className="rounded-2xl bg-paper border border-line p-6">
        <ResultRow label="Invested amount" value={formatINR(result.invested)} />
        <ResultRow label="Estimated gains" value={formatINR(result.gains)} />
        <ResultRow label="Future value" value={formatINR(result.futureValue)} emphasis />
      </div>
    </div>
  );
}

function GoalCalc() {
  const [target, setTarget] = useState(2500000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const result = useMemo(() => requiredSipForGoal(target, rate, years), [target, rate, years]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <Slider label="Target amount" value={target} onChange={setTarget} min={100000} max={20000000} step={50000} suffix=" ₹" />
        <Slider label="Expected annual return" value={rate} onChange={setRate} min={1} max={20} step={0.5} suffix="%" />
        <Slider label="Time to goal" value={years} onChange={setYears} min={1} max={35} step={1} suffix=" yrs" />
      </div>
      <div className="rounded-2xl bg-paper border border-line p-6">
        <ResultRow label="Total you'll invest" value={formatINR(result.totalInvested)} />
        <ResultRow label="Estimated gains" value={formatINR(result.gains)} />
        <ResultRow label="Required monthly SIP" value={formatINR(result.monthlySip)} emphasis />
      </div>
    </div>
  );
}

function RetirementCalc() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [inflation, setInflation] = useState(6);
  const [preReturn, setPreReturn] = useState(12);
  const [postReturn, setPostReturn] = useState(8);

  const result = useMemo(
    () =>
      retirementPlan({
        currentAge,
        retirementAge,
        lifeExpectancy,
        monthlyExpenseToday: monthlyExpense,
        inflationPct: inflation,
        preRetirementReturnPct: preReturn,
        postRetirementReturnPct: postReturn,
      }),
    [currentAge, retirementAge, lifeExpectancy, monthlyExpense, inflation, preReturn, postReturn]
  );

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-5">
        <Slider label="Current age" value={currentAge} onChange={setCurrentAge} min={18} max={60} step={1} suffix=" yrs" />
        <Slider label="Retirement age" value={retirementAge} onChange={setRetirementAge} min={45} max={70} step={1} suffix=" yrs" />
        <Slider label="Life expectancy" value={lifeExpectancy} onChange={setLifeExpectancy} min={70} max={100} step={1} suffix=" yrs" />
        <Slider label="Monthly expense today" value={monthlyExpense} onChange={setMonthlyExpense} min={10000} max={500000} step={5000} suffix=" ₹" />
        <Slider label="Expected inflation" value={inflation} onChange={setInflation} min={2} max={10} step={0.5} suffix="%" />
      </div>
      <div className="rounded-2xl bg-paper border border-line p-6 h-fit">
        <ResultRow label="Monthly expense at retirement" value={formatINR(result.monthlyExpenseAtRetirement)} />
        <ResultRow label="Corpus required at retirement" value={formatINR(result.corpusRequired)} />
        <ResultRow label="Required monthly SIP" value={formatINR(result.monthlySip)} emphasis />
      </div>
    </div>
  );
}

export default function Calculators() {
  const [active, setActive] = useState("SIP");

  return (
    <section id="calculators" className="bg-gradient-to-br from-teal-100/60 via-white to-navy-100/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-navy-900/5 text-navy-800 text-xs font-semibold uppercase tracking-wide px-4 py-1.5 mb-6 border border-navy-900/10">
            Tools & Calculators
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-navy-950">
            Plan your investments.
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Small, consistent investments today can create a substantial
            corpus tomorrow. See the power of compounding for yourself.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full text-sm font-semibold px-5 py-2.5 transition-colors ${
                active === tab
                  ? "bg-navy-900 text-white"
                  : "bg-paper text-slate-600 border border-line hover:border-navy-900/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="rounded-3xl border border-line bg-paper/50 p-6 sm:p-8">
          {active === "SIP" && <SipCalc />}
          {active === "Lump-Sum" && <LumpSumCalc />}
          {active === "Goal" && <GoalCalc />}
          {active === "Retirement" && <RetirementCalc />}
        </div>

        <p className="mt-6 text-xs text-slate-500 leading-relaxed max-w-2xl">
          These calculators are for illustrative purposes only, based on
          assumed constant rates of return. Actual mutual fund returns are
          subject to market risk and will vary.
        </p>
      </div>
    </section>
  );
}
