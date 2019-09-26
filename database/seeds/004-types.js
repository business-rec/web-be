const setTypes = [
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

exports.seed = async function(knex, Promise) {
  const types = [];
  for (let i = 0; i < setTypes.length; i++) {
    const thistype = setTypes[i];
    const type = { type: thistype };
    types.push(type);
  }

  await knex("companytypes").del();
  await knex("companytypes").insert(types);
};

//npx knex seed:run --env=testing
