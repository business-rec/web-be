const bcrypt = require("bcrypt");
const faker = require("faker");

const types = [
  "Home Services",
  "Shopping",
  "Restaurants",
  "Health & Medical",
  "Beauty & Spas",
  "Local Services",
  "Food",
  "Automotive",
  "Doctors",
  "Active Life",
  "Professional Services",
  "Event Planning & Services",
  "Real Estate",
  "Home & Garden",
  "Auto Repair",
  "Hair Salons",
  "Fast Food",
  "Fashion",
  "Nightlife",
  "Contractors"
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
  //   const fakeCompanys = [];
  //   const companys = 11;
  //   for (let i = 1; i < companys; i++) {
  //     let company = await fakeCompany(i);
  //     const thistype = types[i];
  //     company = { type: thistype, ...company };
  //     fakeCompanys.push(company);
  //   }
  //
  //   await knex("companies").del();
  //   await knex("companies").insert(fakeCompanys);
};

//npx knex seed:run --env=testing
