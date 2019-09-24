const bcrypt = require("bcrypt");
const faker = require("faker");

const fakeUser = i => ({
  username: faker.internet.userName(),
  password: "password"
});

exports.seed = async function(knex, Promise) {
  const fakeUsers = [];
  const users = 11;
  for (let i = 1; i < users; i++) {
    let user = await fakeUser(i);
    let hash = await bcrypt.hash(user.password, 10);
    user = { username: user.username, password: hash };
    fakeUsers.push(user);
  }
  const adminhash = await bcrypt.hash("password", 10);
  const admins = [
    { username: "bryant", password: adminhash },
    { username: "lc", password: adminhash },
    { username: "mauricio", password: adminhash }
  ];

  await knex("users").del();
  await knex("users").insert(fakeUsers);
  await knex("users").insert(admins);
};

//npx knex seed:run --env=testing
