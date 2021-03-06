"use strict";
const { transaction } = require("objection");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");
const bcrypt = require("bcrypt");
const User = require("../database/models/User");

module.exports = router => {
	router.post("/register", async (req, res) => {
		const graph = req.body;
		const hash = await bcrypt.hash(graph.password, 10);
		const hasheduser = { username: graph.username, password: hash };
		let insertedUser;
		const user = await User.query().findOne({ username: graph.username });
		if (user) {
			res.status(422).send({ loginError: "username exists" });
		}
		try {
			insertedUser = await transaction(User.knex(), trx => {
				return User.query(trx).insertGraph(hasheduser);
			});
			res.status(201).send({
				username: insertedUser.username,
				id: insertedUser.id
			});
		} catch (err) {
			console.log(err instanceof objection.ValidationError);
			console.log(err.data);
		}
	});

	router.post("/login", async (req, res) => {
		const graph = req.body;
		let user;
		let passwordCheck;
		try {
			user = await User.query().findOne({ username: graph.username });
			if (user) {
				passwordCheck = await bcrypt.compare(
					graph.password,
					user.password
				);
				if (passwordCheck) {
					const token = await generateToken(user);
					// console.log(user);

					res.status(201).json({
						message: `Welcome ${user.username}!`,
						user: { username: user.username, id: user.id },
						token
					});
				} else {
					res.status(422).json({ message: "Invalid password" });
				}
			} else {
				res.status(404).send({ message: "invalid username" });
			}
		} catch (err) {
			console.log(err instanceof objection.ValidationError);
			console.log(err.data);
		}
	});
};

function createStatusCodeError(statusCode) {
	return Object.assign(new Error(), {
		statusCode
	});
}

function generateToken(user) {
	const payload = {
		subject: user.id,
		username: user.username
	};

	const options = {
		expiresIn: "24h"
	};

	return jwt.sign(payload, secrets.jwtSecret, options);
}
