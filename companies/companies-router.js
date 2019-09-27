const axios = require("axios");
const authenticate = require("../auth/authenticate-middleware.js");
const Company = require("../database/models/Company");
const User = require("../database/models/User");
const CompanyType = require("../database/models/CompanyType");
const Terms = require("../database/models/Terms");
const { transaction } = require("objection");

module.exports = router => {
  router.get("/companytypes", async (req, res) => {
    try {
      let companytypes = await CompanyType.query().orderBy("companytypes.type");
      res.send(companytypes);
    } catch (err) {
      res.status(404).send(err.data);
    }
  });
  router.get("/terms", async (req, res) => {
    try {
      const terms = await Terms.query();
      res.send(terms);
    } catch (err) {
      res.status(404).send(err.data);
    }
  });

  router.get("/termsgraph/:terms", async (req, res) => {
    const companies = await CompanyType.query()
      .skipUndefined()
      .allowEager("[worstterms, bestterms]")
      .eager(req.params.terms);
    if (!companies) {
      res.status(404).send({ error: "doesn't exist" });
    }
    res.send(companies);
  });

  router.get("/:id/terms/", async (req, res) => {
    const company = await Company.query().findById(req.params.id);
    const companyType = company.typeid;
    const companies = await CompanyType.query()
      .skipUndefined()
      .allowEager("[terms]")
      .eager("[terms]")
      .where({ typeid: companyType });
    if (!companies) {
      res.status(404).send({ error: "doesn't exist" });
    }
    res.send(companies);
  });

  router.get("/typesarray", async (req, res) => {
    try {
      let companytypes = await CompanyType.query()
        .select("companytypes.type")
        .orderBy("companytypes.type");
      companytypes = companytypes.map(company => company.type);
      res.send(companytypes);
    } catch (err) {
      res.status(404).send(err.data);
    }
  });

  router.get("/all", async (req, res) => {
    try {
      const companies = await Company.query();
      res.send(companies);
    } catch (err) {
      res.status(404).send(err.data);
    }
  });
  router.get("/:id", async (req, res) => {
    const company = await Company.query().findById(req.params.id);
    if (!company) {
      throw createStatusCodeError(404);
    }
    res.send(company);
  });
};

function createStatusCodeError(statusCode) {
  return Object.assign(new Error(), {
    statusCode
  });
}
