exports.up = function (knex) {
  // This is a model that we apply to the CreateUser database
  // its meant to algorithmically demonstrate an insurance companies underwriting method to a client so they can understand the costs vs the LTV
  // Check seed directory in ../seeds for to see an example written directly into the DB
  return knex.schema.createTable("policy_model", (tbl) => {
    tbl.uuid("id");
    tbl.string("f_name", 100); // will be a single form input on front end, use string method to split
    tbl.string("l_name", 100);
    tbl.tbl.float("final_rate"); // this float is what gets passback to frontend
  });
};

exports.down = function (knex) {};
