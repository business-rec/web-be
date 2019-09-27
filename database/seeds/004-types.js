const setTypes = [
  "Home Services",
  "Shopping",
  "Health & Medical",
  "Beauty & Spas",
  "Local Services",
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
  "Contractors"
];

exports.seed = async function(knex, Promise) {
  const types = [];
  for (let i = 0; i < setTypes.length; i++) {
    const id = i + 1;
    let thistype = setTypes[i];
    let thisalias = thistype.replace("& ", "");
    let type = { type: thistype, alias: thisalias, typeid: id };
    types.push(type);
  }

  await knex("companytypes").del();
  await knex("companytypes").insert(types);
};

//npx knex seed:run --env=testing
