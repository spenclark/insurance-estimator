exports.up = function (knex) {
  // This is a schema for a simple underwriting model that will be feed into formula
  // its meant to algorithmically demonstrate an insurance companies underwriting method so that we can return a value propisiton to a user
  // Check seed directory in ../seeds for to see an example written directly into the DB
  return knex.schema.createTable("policy_model", (tbl) => {
    tbl.uuid("id");
    tbl.timestamp("created_at").defaultTo(knex.fn.now());
    tbl
      .uuid("owner_id")
      .references("id")
      .inTable("client")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.string("model_name", 100);
    tbl.float("return_rate");
    tbl.float("risk_per_annum");
    tbl.float("discount_rate");
    tbl.float("management_fees");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("policy_models");
};
