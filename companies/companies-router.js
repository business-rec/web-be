const axios = require("axios");
const authenticate = require("../auth/authenticate-middleware.js");
const Company = require("../database/models/Company");
const User = require("../database/models/User");
const CompanyType = require("../database/models/CompanyType");
const { transaction } = require("objection");

module.exports = router => {
  router.get("/companytypes", async (req, res) => {
    try {
      let companytypes = await CompanyType.query().orderBy("companytypes.type");
      res.send(companytypes);
    } catch (err) {
      console.log(err instanceof objection.ValidationError);
      console.log(err.data);
    }
  });

  router.get("/typesarray", async (req, res) => {
    try {
      let companytypes = await CompanyType.query()
        .select("companytypes.type")
        .orderBy("companytypes.type");
      companytypes = companytypes.map(company => company.type);
      res.send(companytypes);
    } catch (err) {
      console.log(err instanceof objection.ValidationError);
      console.log(err.data);
    }
  });

  router.get("/all", async (req, res) => {
    try {
      const companies = await Company.query();
      res.send(companies);
    } catch (err) {
      console.log(err instanceof objection.ValidationError);
      console.log(err.data);
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
