"use strict";
const { transaction } = require("objection");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");
const bcrypt = require("bcrypt");
const User = require("../database/models/User");
const Company = require("../database/models/Company");

//app.use("/api/users", usersRouter)
module.exports = router => {
	router.get("/all", async (req, res) => {
		try {
			const users = await User.query();
			res.send(users);
		} catch (err) {
			console.log(err instanceof objection.ValidationError);
			console.log(err.data);
		}
	});

	router.get("/:id", async (req, res) => {
		const user = await User.query().findById(req.params.id);
		if (!user) {
			throw createStatusCodeError(404);
		}
		res.send(user);
	});

	//get a user's companies
	//http://localhost:3300/api/users/1/companies
	router.get("/:id/companies", async (req, res) => {
		const user = await User.query().findById(req.params.id);
		if (!user) {
			throw createStatusCodeError(404);
		}
		const companies = await user.$relatedQuery("companies").skipUndefined();
		res.send(companies);
	});

	// Add existing Company as a savedcompany to a user.
	router.post("/:id/companies", async (req, res) => {
		const user = await User.query().findById(req.params.id);
		if (!user) {
			throw createStatusCodeError(404);
		}
		await user.$relatedQuery("companies").relate(req.body.id);
		res.send(req.body);
	});
	//add a new company to a user, in the req body
	router.post("/:id/newcompany", async (req, res) => {
		const newcompany = req.body;
		const user = await User.query().findById(req.params.id);
		if (!user) {
			throw createStatusCodeError(404);
		}
		const company = await user
			.$relatedQuery("companies")
			.insert(newcompany);

		res.send(company);
	});
};

function createStatusCodeError(statusCode) {
	return Object.assign(new Error(), {
		statusCode
	});
}
