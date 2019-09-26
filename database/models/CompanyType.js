"use strict";

const { Model } = require("objection");

class CompanyType extends Model {
	static get tableName() {
		return "companytypes";
	}
}

module.exports = CompanyType;
