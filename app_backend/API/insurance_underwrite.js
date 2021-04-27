// Formula Sketch
// linear time complexity bc iterative loop on perk_array

function estimate_policy(coverage, policy_length, risk_rate, DOB, perk_array) {
  // increment each monthly_cost attr in the perk_array into a varible
  var perk_sum = 0;
  perk_array.forEach((e) => {
    perk_sum += e.monthly_cost;
  });

  //   this assumes that for each year the chance of needing to payout policy by x1.075 + 0.01 for each year user is over 18 the course of the policy term if

  return Math.round((coverage / (policy_length * 12)) * risk_rate + perk_sum);
}

console.log(
  estimate_policy(100000, 20, 0.0095, 32, [
    { monthly_cost: 1 },
    { monthly_cost: 5 },
  ])
);
