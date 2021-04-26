exports.up = function (knex) {
  // This is a schema for a simple underwriting model that will be feed into formula
  // its meant to algorithmically demonstrate an insurance companies underwriting method so that we can return a value propisiton to a user
  // Check seed directory in ../seeds for to see an example written directly into the DB
  return knex.schema.createTable("policy_model", (tbl) => {
    tbl.uuid("id");
    tbl.string("model_name", 100);
    tbl.integer("policy_length").defaultTo(20); // for reasons of simplicity this is measured in years
    tbl.float("risk_rate"); // this is a number that defines the "risk" rate. Here it resembles the needed yeild to cover portolio i.e 1% would be 0.01
  });
};

exports.down = function (knex) {};
