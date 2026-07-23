// All formulas use standard mutual-fund industry conventions.
// r = periodic rate, n = number of periods.

/**
 * SIP Future Value — monthly investment compounding monthly.
 * FV = P × [((1+r)^n - 1) / r] × (1+r)
 */
export function sipFutureValue(monthlyAmount, annualRatePct, years) {
  const r = annualRatePct / 100 / 12;
  const n = years * 12;
  if (r === 0) return monthlyAmount * n;
  const fv = monthlyAmount * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
  const invested = monthlyAmount * n;
  return { futureValue: fv, invested, gains: fv - invested };
}

/**
 * Lump-sum Future Value — one-time investment, annual compounding.
 * FV = P × (1+r)^n
 */
export function lumpSumFutureValue(principal, annualRatePct, years) {
  const r = annualRatePct / 100;
  const fv = principal * Math.pow(1 + r, years);
  return { futureValue: fv, invested: principal, gains: fv - principal };
}

/**
 * Goal Calculator — reverse SIP: how much to invest monthly to hit a target.
 * P = Target / [((1+r)^n - 1) / r × (1+r)]
 */
export function requiredSipForGoal(targetAmount, annualRatePct, years) {
  const r = annualRatePct / 100 / 12;
  const n = years * 12;
  if (r === 0) return targetAmount / n;
  const factor = ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const monthlySip = targetAmount / factor;
  return { monthlySip, totalInvested: monthlySip * n, gains: targetAmount - monthlySip * n };
}

/**
 * Retirement Calculator — corpus needed to fund a monthly income
 * through retirement, adjusted for inflation, then the monthly SIP
 * required today to build that corpus by retirement age.
 */
export function retirementPlan({
  currentAge,
  retirementAge,
  lifeExpectancy,
  monthlyExpenseToday,
  inflationPct,
  preRetirementReturnPct,
  postRetirementReturnPct,
}) {
  const yearsToRetirement = retirementAge - currentAge;
  const yearsInRetirement = Math.max(lifeExpectancy - retirementAge, 1);

  // Inflate today's monthly expense to the value at retirement age.
  const inflation = inflationPct / 100;
  const monthlyExpenseAtRetirement =
    monthlyExpenseToday * Math.pow(1 + inflation, yearsToRetirement);
  const annualExpenseAtRetirement = monthlyExpenseAtRetirement * 12;

  // Corpus required using a real-return annuity (post-retirement return net of inflation),
  // assuming withdrawals grow with inflation each year through retirement.
  const postReturn = postRetirementReturnPct / 100;
  const realReturn = (1 + postReturn) / (1 + inflation) - 1;
  let corpusRequired;
  if (Math.abs(realReturn) < 1e-9) {
    corpusRequired = annualExpenseAtRetirement * yearsInRetirement;
  } else {
    corpusRequired =
      (annualExpenseAtRetirement * (1 - Math.pow(1 + realReturn, -yearsInRetirement))) /
      realReturn;
  }

  // Monthly SIP required today to reach that corpus by retirement.
  const { monthlySip } = requiredSipForGoal(
    corpusRequired,
    preRetirementReturnPct,
    yearsToRetirement
  );

  return {
    corpusRequired,
    monthlySip,
    yearsToRetirement,
    yearsInRetirement,
    monthlyExpenseAtRetirement,
  };
}

export function formatINR(value) {
  if (!isFinite(value)) return "—";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}
