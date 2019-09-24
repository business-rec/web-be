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

	router.patch("/:id", async (req, res) => {
		let update = req.body;
		let user;
		if (update.password) {
			const hash = await bcrypt.hash(update.password, 10);
			update = { ...update, password: hash };
			user = await User.query().patchAndFetchById(req.params.id, update);
		}
		user = await User.query().patchAndFetchById(req.params.id, update);

		res.send(user);
	});

	router.delete("/:id", async (req, res) => {
		await User.query().deleteById(req.params.id);

		res.send({});
	});

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

	router.delete("/:id/companies", async (req, res) => {
		const user = await User.query().findById(req.params.id);
		if (!user) {
			throw createStatusCodeError(404);
		}
		const company = await user
			.$relatedQuery("companies")
			.unrelate()
			.findById(req.body.id);
		if (!company) {
			res.send({ message: "company does not exist for user" });
		}
		res.send(req.body);
	});

	router.patch("/:id/companies", async (req, res) => {
		const user = await User.query().findById(req.params.id);
		if (!user) {
			throw createStatusCodeError(404);
		}
		const company = await user
			.$relatedQuery("companies")
			.patchAndFetchById(req.body.id, req.body);
		//.findById(req.body.id);
		if (!company) {
			res.send({ message: "company does not exist for user" });
		}
		res.send(req.body);
	});
};

function createStatusCodeError(statusCode) {
	return Object.assign(new Error(), {
		statusCode
	});
}
