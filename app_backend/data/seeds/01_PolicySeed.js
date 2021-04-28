exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("policy_model")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("policy_model").insert([
        { model_name: "DemoPolicy", policy_term: 20, risk_rate: 0.02 },
      ]);
    });
};
