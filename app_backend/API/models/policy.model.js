const db = require("../../data/dbConfig");

module.exports = {
  findPolicy,
  addPolicy,
};

function findPolicy(id) {
  return db("policy_model").where({ id }).first();
}

function addPolicy(input) {
  return ([id] = await db("policy_model").insert(input, "id"));
}
