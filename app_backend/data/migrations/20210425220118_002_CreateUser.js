exports.up = function (knex) {
  return knex.schema.createTable("user", (tbl) => {
    tbl.uuid("id");
    tbl.string("email", 64);
    tbl.date("DOB");
    tbl.string("state", 64); // state state user lives in (not used but important in real practice)
    tbl.jsonb("perks"); // holds the ID's of the perks the user selected on forums
    tbl.integer("coverage"); // total coverage user wants
    tbl.float("price_of_package");
  });
};

exports.down = function (knex) {};
