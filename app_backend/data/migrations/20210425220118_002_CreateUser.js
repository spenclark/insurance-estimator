exports.up = function (knex) {
  return knex.schema.createTable("user", (tbl) => {
    tbl.uuid("id");
    tbl.timestamp("created_at").defaultTo(knex.fn.now());

    tbl.string("email", 64);
    tbl.string("f_name", 64);
    tbl.string("l_name", 64);
    tbl.date("DOB"); // YYYYMMDD
    tbl.string("state", 64);
    tbl.jsonb("perks");
    tbl.integer("coverage");
    tbl.integer("policy_term");
    tbl
      .uuid("client_id")
      .references("id")
      .inTable("policy_model")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
