exports.up = function (knex) {
  return knex.schema.createTable("client", (tbl) => {
    tbl.uuid("id");
    tbl.timestamp("created_at").defaultTo(knex.fn.now());
    tbl.string("client_name", 64);
  });
};

exports.down = function (knex) {};
