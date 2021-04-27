exports.up = function (knex) {
  // This is a schema for a simple underwriting model that will be feed into formula
  // its meant to algorithmically demonstrate an insurance companies underwriting method so that we can return a value propisiton to a user
  // Check seed directory in ../seeds for to see an example written directly into the DB
  return knex.schema.createTable("policy_model", (tbl) => {
    tbl.uuid("id");
    tbl.string("model_name", 100);
    tbl.integer("policy_term").defaultTo(20); // for reasons of simplicity this is measured in years (standard 20)
    tbl.float("risk_rate"); // defines the portfolio goals of the policy. i.e expects to pay out at least 3% worth of claims (<3%)
    tbl.float("risk_per_annum"); // accounts for the inflation of holder risk as a annual increase. used as exp base
  });
};

exports.down = function (knex) {};
