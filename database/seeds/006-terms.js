const bestterms = [
  { term: "service", ratingscore: 0.91 },
  { term: "new", ratingscore: 0.9 },
  {
    term: "experience",
    ratingscore: 0.94
  },
  { term: "honest", ratingscore: 0.99 },
  { term: "price", ratingscore: 0.88 }
];
const worstterms = [
  { term: "$", ratingscore: 0.95 },
  { term: "oil", ratingscore: 0.89 },
  { term: "called", ratingscore: 0.91 },
  { term: "manager", ratingscore: 0.93 },
  { term: "sales", ratingscore: 0.89 }
];

exports.seed = async function(knex, Promise) {
  const id = 13;
  const thebestterms = [];
  for (let i = 0; i < bestterms.length; i++) {
    let thisterm = bestterms[i];
    thisterm = { companytypetypeid: id, termtype: "best", ...thisterm };
    thebestterms.push(thisterm);
  }
  const theworstterms = [];
  for (let i = 0; i < worstterms.length; i++) {
    let thisterm = worstterms[i];
    thisterm = { companytypetypeid: id, termtype: "worst", ...thisterm };
    theworstterms.push(thisterm);
  }

  await knex("terms").insert(thebestterms);
  await knex("terms").insert(theworstterms);
};

//npx knex seed:run --env=testing
