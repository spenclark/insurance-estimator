// We want to evalute both the policy model and the user data and return an aprox. monthly cost

// Formula Sketch
// (Coverage(int) / (policy_length(yrs) * 12))(risk_rate(float)(age_risk^inverse(risk_rate)) + sum of each in perk_array.monthly_cost = estimated_monthly_subscription
// linear time complexity bc iterative loop on perk_array

function estimate_policy(coverage, policy_length, risk_rate, age, perk_array) {
  // this increments each monthly_cost attr in the perk array giving us a total
  //   var perk_sum = 0;
  //   perk_array.forEach((e) => {
  //     perk_sum += e.monthly_cost;
  //   });
  //   this assumes that for each year user the chance of needing to payout policy increases by x1.075 over the course of the policy term
  //   return Math.round((coverage / (policy_length * 12)) * risk_rate + perk_sum);
}

console.log(
  estimate_policy(100000, 20, 0.0095, 32, [
    { monthly_cost: 1 },
    { monthly_cost: 5 },
  ])
);
