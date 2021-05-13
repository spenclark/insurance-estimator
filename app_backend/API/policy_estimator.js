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

  // Compounding risk on premium (likleyhood holder dies annual increases with age). dollar adjusted risk cost over life of policy
  var compounded_monthly_cost =
    (coverage *
      (1 + (risk_per_annum + management_fees - discount_rate) / 12) **
        policy_term -
      coverage) /
    (policy_term * 12);

  // using the monthly risks/costs as a initial value we then compound at the return rate over the policy lifecycle
  var compounded_monthly_rate =
    compounded_monthly_cost * (1 + return_rate / 12) ** policy_term;

  const createMonthlyRate = () => {
    // lower rates of return should increase cost (behavior wrong here bc RoR is mapped to costs/fees)
    return Math.round(
      compounded_monthly_rate + compounded_monthly_cost + perk_sum
    );
  };

  return createMonthlyRate();
}

module.exports = estimate_policy();
