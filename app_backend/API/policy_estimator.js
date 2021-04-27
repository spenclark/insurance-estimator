// Formula Sketch

// linear time complexity bc iterative loop on perk_array

function estimate_policy(
  coverage,
  policy_term,
  risk_rate,
  risk_per_annum,
  discount_rate,
  perk_array
) {
  // increment each monthly_cost attr in the perk_array into a varible
  var perk_sum = 0;
  perk_array.forEach((e) => {
    perk_sum += e.monthly_cost;
  });

  return (
    (coverage *
      (risk_rate * (-risk_per_annum + 1) ** policy_term) *
      (-discount_rate + 1)) /
      (policy_term * 12) +
    perk_sum
  );
}

console.log(
  estimate_policy(100000, 20, 0.02, 0.0075, 0.05, [
    { monthly_cost: 1 },
    { monthly_cost: 2 },
  ])
);
