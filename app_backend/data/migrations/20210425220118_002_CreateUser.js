exports.up = function (knex) {
  return knex.schema.createTable("user", (tbl) => {
    tbl.uuid("id");
    tbl.string("email", 64);
    tbl.date("DOB");
    tbl.string("nationality", 64);
    tbl.jsonb("perks");
    tbl.integer("coverage");
    tbl.float("final_rate"); // this float is what gets passback to frontend
  });
};

exports.down = function (knex) {};
