"use strict";
const { transaction } = require("objection");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");
const bcrypt = require("bcrypt");
const User = require("../database/models/User");
const Company = require("../database/models/Company");
const CompanyType = require("../database/models/CompanyType");

module.exports = router => {
	router.get("/all", async (req, res) => {
		try {
			const users = await User.query();
			if (!users) {
				res.status(404).send({ dberror: "no users" });
			}
			res.send(users);
		} catch (err) {
			console.log(err instanceof objection.ValidationError);
			console.log(err.data);
		}
	});

	router.get("/:id", async (req, res) => {
		const user = await User.query().findById(req.params.id);
		if (!user) {
			res.status(404).send({ userError: "user does not exist" });
		}
		res.send(user);
	});

	router.get("/graph/:id", async (req, res) => {
		const user = await User.query()
			.skipUndefined()
			.allowEager("[companies]")
			.eager(req.query.eager)
			.findById(req.params.id);
		if (!user) {
			res.status(404).send({ userError: "user does not exist" });
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
		if (!user) {
			res.status(404).send({ userError: "user does not exist" });
		}
		res.send(user);
	});

	router.delete("/:id", async (req, res) => {
		await User.query().deleteById(req.params.id);
		if (!user) {
			res.status(404).send({ userError: "user does not exist" });
		}
		res.send({});
	});

	router.get("/:id/companies", async (req, res) => {
		const user = await User.query().findById(req.params.id);
		if (!user) {
			res.status(404).send({ userError: "user does not exist" });
		}
		const companies = await user.$relatedQuery("companies").skipUndefined();
		res.send(companies);
	});

	router.post("/:id/companies", async (req, res) => {
		const user = await User.query().findById(req.params.id);
		if (!user) {
			res.status(404).send({ userError: "user does not exist" });
		}
		try {
			const company = await user
				.$relatedQuery("companies")
				.relate(req.body.id);
			const companyId = company.companyid;
			const newcompany = await user
				.$relatedQuery("companies")
				.findById(companyId);

			res.status(201).send(newcompany);
		} catch (err) {
			res.status(404).send({ error: "company does not exist" });
		}
	});

	router.post("/:id/newcompany", async (req, res) => {
		let newcompany = req.body;
		const companyid = newcompany.id;
		if (companyid) {
			res.status(404).send({ error: "dont send company id" });
		}
		const companytype = newcompany.type;
		if (!companytype) {
			res.status(404).send({ error: "must send company type" });
		}
		try {
			const typechecker = await CompanyType.query().findOne({
				type: companytype
			});
			if (!typechecker) {
				res.status(404).send({ error: "company type invalid" });
			}
			const user = await User.query().findById(req.params.id);
			if (!user) {
				res.status(404).send({ userError: "user does not exist" });
			}
			const companyType = typechecker.typeid;
			newcompany = { typeid: companyType, ...newcompany };
			const company = await user
				.$relatedQuery("companies")
				.insert(newcompany);
			res.status(200).send(company);
		} catch (err) {
			//res.status(404).send(err.data);
			res.status(404).send(err instanceof objection.ValidationError);
		}
	});

	router.delete("/:id/companies", async (req, res) => {
		const user = await User.query().findById(req.params.id);
		if (!user) {
			res.status(404).send({ userError: "user does not exist" });
		}
		try {
			const company = await user
				.$relatedQuery("companies")
				.unrelate()
				.findById(req.body.id);
			if (!company) {
				res.status(404).send({
					message: "company does not exist for user"
				});
			}
			res.status(200).send(req.body);
		} catch (err) {
			res.status(404).send(err);
		}
	});

	router.patch("/:id/companies", async (req, res) => {
		const updatedcompany = req.body;
		const companyid = updatedcompany.id;
		if (!companyid) {
			res.status(404).send({ error: "missing company id" });
		}
		const user = await User.query().findById(req.params.id);
		if (!user) {
			res.status(404).send({ userError: "user does not exist" });
		}
		const company = await user
			.$relatedQuery("companies")
			.patchAndFetchById(req.body.id, req.body);
		if (!company) {
			res.status(404).send({
				message: "company does not exist for user"
			});
		}
		res.status(200).send(company);
	});
};

function createStatusCodeError(statusCode) {
	return Object.assign(new Error(), {
		statusCode
	});
}
