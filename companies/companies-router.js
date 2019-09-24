const axios = require("axios");
const authenticate = require("../auth/authenticate-middleware.js");
const Company = require("../database/models/Company");
const User = require("../database/models/User");
const { transaction } = require("objection");

//app.use("/api/companies", authenticate, companiesRouter);
module.exports = router => {
  //get companies via axios api call
  router.get("/", (req, res) => {
    const requestOptions = {
      headers: { accept: "application/json" }
    };
    axios
      .get("https://icanhazdadcompany.com/search", requestOptions)
      .then(response => {
        res.status(200).json(response.data.results);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "Error Fetching Companies", error: err });
      });
  });

  //get table of companies
  router.get("/all", async (req, res) => {
    try {
      const companies = await Company.query();
      res.send(companies);
    } catch (err) {
      console.log(err instanceof objection.ValidationError);
      console.log(err.data);
    }
  });
  //get company by id
  router.get("/:id", async (req, res) => {
    const company = await Company.query().findById(req.params.id);
    if (!company) {
      throw createStatusCodeError(404);
    }
    res.send(company);
  });
};
