const bcrypt = require("bcrypt");
const faker = require("faker");

const fakeJoin = i => ({
  userid: i,
  companyid: i
});

exports.seed = async function(knex, Promise) {
  const fakeJoins = [];
  const joins = 11;
  for (let i = 1; i < joins; i++) {
    let join = await fakeJoin(i);
    fakeJoins.push(join);
  }

  await knex("users_companies").del();
  await knex("users_companies").insert(fakeJoins);
};

//npx knex seed:run --env=testing
