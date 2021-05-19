// Formula Sketch

// linear time complexity bc iterative loop on perk_array

function estimate_policy(
  coverage,
  policy_term,
  return_rate,
  risk_per_annum,
  discount_rate,
  management_fees,
  perk_array
) {
  // increment each monthly_cost attr in the perk_array into a varible.
  var perk_sum = 0;

  perk_array.forEach((e) => {
    perk_sum += e.monthly_price;
  });

  // This assumes the TotalReturn > costadjusted. otherwise it would be an unprofitable policy.
  // attempts to represent the oppruntity of the premium (TotalReturnCoverage) subtracted by the risk and fees associated with the policy and business divided by the number of months the policy is
  const TotalReturnCoverage = coverage * (1 + return_rate / 12) ** policy_term;

  const CostAdjustedCoverage =
    coverage * (1 + (risk_per_annum + management_fees) / 12) ** policy_term;

  const TotalAdjustedRate =
    (TotalReturnCoverage - CostAdjustedCoverage) * (1 + -discount_rate);

  const createMonthlyRate = () => {
    return parseFloat(
      TotalAdjustedRate / (policy_term * 12) + perk_sum
    ).toFixed(2);
  };

  return createMonthlyRate();
}

console.log(
  estimate_policy(100000, 20, 0.03, 0.015, 0.019, 0.01, [
    { monthly_price: 0 },

    { monthly_price: 1.1 },
    { monthly_price: 0.8 },
    { monthly_price: 1.8 },
  ])
);

module.exports = estimate_policy();
