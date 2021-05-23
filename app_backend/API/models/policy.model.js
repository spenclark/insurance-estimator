const db = require("../../data/dbConfig");

module.exports = {
  findPolicy,
  addPolicy,
  addClient,
  returnPerks,
};

function findPolicy(id) {
  return db("policy_model").where({ id }).first();
}

function addPolicy(input) {
  const [id] = await db("policy_model").insert(input, "id");
  return id;
}

function returnPerks(id) {
  return db("perks").where(id, "=", "policy_id");
}
//  use innerjoin method to find where policy id are equal on perk and user table
// function findSelectedPerk() {}
