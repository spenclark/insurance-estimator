exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("policy_model")
    .del()
    .then(function () {
      // Inserts seed entries for policy model db (these three will be used on the demo app)
      return knex("policy_model").insert([
        {
          model_name: "PolicyBuilder",
          return_rate: 0.04,
          risk_per_annum: 0.0325,
          discount_rate: 0.01,
          management_fees: 0.015,
        },
        {
          model_name: "NorthWestern",
          return_rate: 0.03,
          risk_per_annum: 0.0325,
          discount_rate: 0.09,
          management_fees: 0.0198,
        },
        {
          model_name: "NorthWestern",
          return_rate: 0.0289,
          risk_per_annum: 0.0325,
          discount_rate: 0.09,
          management_fees: 0.0198,
        },
      ]);
    });
};
