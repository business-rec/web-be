const bestterms = [
  { term: "efficient", ratingscore: 0.9959 },
  { term: "his crew", ratingscore: 0.9927 },
  { term: "polite", ratingscore: 0.9797 },
  { term: "roofing", ratingscore: 0.9688 },
  { term: "remodel", ratingscore: 0.9427 },
  { term: "carpet", ratingscore: 0.942 },
  { term: "backyard", ratingscore: 0.9404 },
  { term: "pool", ratingscore: 0.9358 },
  { term: "wood", ratingscore: 0.931 },
  { term: "granite", ratingscore: 0.9293 }
];
const worstterms = [
  { term: "oneguard", ratingscore: 0.9696 },
  { term: "message", ratingscore: 0.9346 },
  { term: "the contract", ratingscore: 0.9117 },
  { term: "tech", ratingscore: 0.9023 },
  { term: "rep", ratingscore: 0.9019 },
  { term: "invoice", ratingscore: 0.9019 },
  { term: "office", ratingscore: 0.8995 },
  { term: "phone", ratingscore: 0.897 },
  { term: "solar", ratingscore: 0.8944 },
  { term: "salesman", ratingscore: 0.8881 }
];
//contracting

exports.seed = async function(knex, Promise) {
  const id = 17;
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
  await knex("terms").del();
  await knex("terms").insert(thebestterms);
  await knex("terms").insert(theworstterms);
};

//npx knex seed:run --env=testing
