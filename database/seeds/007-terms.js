const worstterms = [
  { term: "rude", ratingscore: 0.9993 },
  { term: "waiting", ratingscore: 0.9751 },
  { term: "manager", ratingscore: 0.9674 },
  { term: "cashier", ratingscore: 0.966 },
  { term: "fee", ratingscore: 0.9572 },
  { term: "phone", ratingscore: 0.9536 },
  { term: "rep", ratingscore: 0.9527 },
  { term: "living spaces", ratingscore: 0.949 },
  { term: "lady", ratingscore: 0.9476 },
  { term: "corporate", ratingscore: 0.946 }
];

const bestterms = [
  { term: "knowledgeable", ratingscore: 0.9959 },
  { term: "patient", ratingscore: 0.9864 },
  { term: "easy", ratingscore: 0.9797 },
  { term: "unique", ratingscore: 0.9778 },
  { term: "budget", ratingscore: 0.9706 },
  { term: "carpets", ratingscore: 0.968 },
  { term: "clean", ratingscore: 0.9662 },
  { term: "decor", ratingscore: 0.9625 },
  { term: "granite", ratingscore: 0.9615 },
  { term: "patio", ratingscore: 0.9581 }
];

exports.seed = async function(knex, Promise) {
  const id = 12;
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
