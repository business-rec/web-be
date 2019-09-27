"use strict";

const { Model } = require("objection");
const CompanyType = require("./CompanyType");

class Company extends Model {
	static get tableName() {
		return "companies";
	}

	static get relationMappings() {
		return {
			companies: {
				relation: Model.ManyToManyRelation,
				modelClass: Company,
				join: {
					from: "companies.id",
					through: {
						from: "users_companies.userid",
						to: "users_companies.companyid"
					},
					to: "users.id"
				}
			}
		};
	}
}

module.exports = Company;
