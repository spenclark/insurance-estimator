// Formula Sketch

// (policy_coverage / (policy_term*12)(riskrate)

// linear time complexity bc iterative loop on perk_array

function estimate_policy(
  coverage,
  policy_term,
  claim_rate,
  holder_risk_rate,
  DOB,
  perk_array
) {
  // increment each monthly_cost attr in the perk_array into a varible
  var perk_sum = 0;
  perk_array.forEach((e) => {
    perk_sum += e.monthly_cost;
  });

  //   this assumes that for each year the chance of needing to payout the policy by holder_risk_rate^policy_term for each year over the course of the policy term i.e risk of death increases by 0.75% per annum over policy

  return (
    ((coverage / policy_term) *
      (claim_rate * holder_risk_rate ** policy_term)) /
      12 +
    perk_sum
  );
}

console.log(
  estimate_policy(100000, 20, 0.0095, 1.0075, 32, [
    { monthly_cost: 1 },
    { monthly_cost: 5 },
  ])
);
