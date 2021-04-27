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
    perk_sum += e.monthly_price;
  });

  const expected_value =
    (coverage *
      (risk_rate * (-risk_per_annum + 1) ** policy_term) *
      (-discount_rate + 1)) /
      (policy_term * 12) +
    perk_sum;

  return parseFloat(expected_value.toFixed(2));
}

console.log(
  estimate_policy(100000, 20, 0.02, 0.0075, 0.05, [
    { monthly_price: 1.1 },
    { monthly_price: 2.35 },
  ])
);
