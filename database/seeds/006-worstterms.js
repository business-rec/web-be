const worstterms = [
  { worstterm: "oneguard", poorratingscore: 0.9696 },
  { worstterm: "message", poorratingscore: 0.9346 },
  { worstterm: "the contract", poorratingscore: 0.9117 },
  { worstterm: "tech", poorratingscore: 0.9023 },
  { worstterm: "rep", poorratingscore: 0.9019 },
  { worstterm: "invoice", poorratingscore: 0.9019 },
  { worstterm: "office", poorratingscore: 0.8995 },
  { worstterm: "phone", poorratingscore: 0.897 },
  { worstterm: "solar", poorratingscore: 0.8944 },
  { worstterm: "salesman", poorratingscore: 0.8881 }
];
//contracting

exports.seed = async function(knex, Promise) {
  //   const id = 17;
  //   const theworstterms = [];
  //   for (let i = 0; i < worstterms.length; i++) {
  //     let thisworstterm = worstterms[i];
  //     thisworstterm = { companytypetypeid: 17, ...thisworstterm };
  //     theworstterms.push(thisworstterm);
  //   }
  //
  //   await knex("worstterms").del();
  //   await knex("worstterms").insert(theworstterms);
};

//npx knex seed:run --env=testing
