exports.up = function (knex) {
  return knex.schema.createTable("perks", (tbl) => {
    tbl.uuid("id");
    tbl.string("perk_name", 50);
    tbl.string("perk_desc", 500);
    tbl.string("");
    tbl.float("monthly_price");
  });
};

exports.down = function (knex) {};
