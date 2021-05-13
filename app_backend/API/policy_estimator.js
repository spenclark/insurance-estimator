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

  const createMonthlyRate = () => {
    return perk_sum;
  };
  return createMonthlyRate();
}

module.exports = estimate_policy();
