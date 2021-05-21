const db = require("../../data/dbConfig");
const estimator = require("../policy_estimator");
const policyModel = require("../models/policy.model");
module.exports = {
  addUser,
  findUser,
  returnEstimate,
};

// this inserts a user into the table
function addUser(input) {
  return ([id] = await db("user").insert(input, "id"));
}

// finds user by id returns & first equivalency
function findUser(id) {
  return db("user").where({ id }).first();
}

// this returns both the user, policy id and calls the estimator function
function returnEstimate(user_id, policy_id, [perk_array]) {
  const { user } = await findUser(user_id).next();
  const { policy } = await policyModel.findPolicy(policy_id);
  return estimator(
    user.coverage,
    user.policy_term,
    policy.retrun_rate,
    policy.risk_per_annum,
    policy.discount_rate,
    policy.management_fees,
    perk_array
  );
}
