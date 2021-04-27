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

  const estimate_policy = () => {
    return Math.round(
      compounded_monthly_rate - compounded_monthly_cost + perk_sum
    );
  };

  return estimate_policy();
}

console.log(
  estimate_policy(150000, 20, 0.04, 0.0325, 0.01, 0.015, [
    { monthly_price: 1.1 },
    { monthly_price: 2.35 },
  ])
);
