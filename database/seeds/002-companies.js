const bcrypt = require("bcrypt");
const faker = require("faker");

const types = [
  "Bars",
  "Delis",
  "Sandwiches",
  "Pizza",
  "Chinese",
  "Breakfast & Brunch",
  "Italian",
  "Mexican",
  "American (New)",
  "American (Traditional)",
  "Fast Food",
  "Coffee & Tea",
  "Cafes"
];

const fakeCompany = i => ({
  name: faker.company.companyName(),
  type: types[i],
  streetName: faker.address.streetName(),
  streetAddress: faker.address.streetAddress(),
  city: faker.address.city(),
  state: faker.address.state(),
  zipCode: faker.address.zipCode()
});

exports.seed = async function(knex, Promise) {
  const fakeCompanys = [];
  const companys = 11;
  for (let i = 1; i < companys; i++) {
    let company = await fakeCompany(i);
    const thistype = types[i];
    company = { type: thistype, ...company };
    fakeCompanys.push(company);
  }

  await knex("companies").del();
  await knex("companies").insert(fakeCompanys);
};

//npx knex seed:run --env=testing

