exports.up = function (knex) {
  // This is a schema for a simple underwriting model that will be feed into formula
  // its meant to algorithmically demonstrate an insurance companies underwriting method so that we can return a value propisiton to a user
  // Check seed directory in ../seeds for to see an example written directly into the DB
  return knex.schema.createTable("policy_model", (tbl) => {
    tbl.uuid("id");
    tbl.string("model_name", 100);
    tbl.integer("policy_term").defaultTo(20); // for reasons of simplicity this is measured in years (standard 20)
    tbl.float("increasing_risk_per_annum"); // chances the policy holder dies every year as they age
    tbl.float("claim_rate"); // defines the "" rate say expect pay about 3% of claims to cover portolio i.e 1% would be 0.01
  });
};

exports.down = function (knex) {};
