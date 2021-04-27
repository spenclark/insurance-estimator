exports.up = function (knex) {
  return knex.schema.createTable("perks", (tbl) => {
    tbl.uuid("id");
    tbl.string("perk_name", 50);
    tbl.string("perk_desc", 500);
    tbl.string("img_url", 500);
    tbl
      .uuid("policy_id")
      .references("id")
      .inTable("policy_model")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.float("monthly_price");
  });
};

exports.down = function (knex) {};
