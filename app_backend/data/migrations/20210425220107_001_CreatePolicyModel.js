exports.up = function (knex) {
  // This is a schema for a simple underwriting model that will be feed into formula
  // its meant to algorithmically demonstrate an insurance companies underwriting method so that we can return a value propisiton to a user
  // Check seed directory in ../seeds for to see an example written directly into the DB
  return knex.schema.createTable("policy_model", (tbl) => {
    tbl.uuid("id");
    tbl.string("model_name", 100);
    tbl.integer("policy_term").defaultTo(20); // for reasons of simplicity this is measured in years (standard 20)
    tbl.float("return_rate"); // predicted yeild on float from premiums
    tbl.float("risk_per_annum"); // used as risk varible to cover chances of payouts and margin. proxy for likleyhood of claim
    tbl.float("discount_rate"); // example: discount on yeilds, express 5% as 0.05
    tbl.float("management_fees"); // percentage of premiums needed to cover operations
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("policy_models");
};
