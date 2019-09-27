"use strict";

const { Model } = require("objection");
const Company = require("./Company");
const CompanyType = require("./CompanyType");

class User extends Model {
	static get tableName() {
		return "users";
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
			},
			companiesType: {
				relation: Model.ManyToManyRelation,
				modelClass: CompanyType,
				join: {
					from: "companytypes.id",
					through: {
						from: "companies_companytypes.companytypeid",
						to: "companies_companytypes.companyid"
					},
					to: "users.id"
				}
			}
		};
	}
}

module.exports = User;
