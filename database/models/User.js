"use strict";

const { Model } = require("objection");
const Company = require("./Company");

class User extends Model {
	static get tableName() {
		return "users";
	}
	static get relationMappings() {
		return {
			// newcompanies: {
			// 	relation: Model.ManyToManyRelation,
			// 	modelClass: Company,
			// 	join: {
			// 		from: "users.id",
			// 		through: {
			// 			from: "users_companies.userid",
			// 			to: "users_companies.companyid"
			// 		},
			// 		to: "companies.id"
			// 	}
			// },
			// companies_pinned: {
			// 	relation: Model.ManyToManyRelation,
			// 	modelClass: Company,
			// 	join: {
			// 		from: "companies.id",
			// 		through: {
			// 			from: "users_companies.companyid",
			// 			to: "users_companies.userid"
			// 		},
			// 		to: "users.id"
			// 	}
			// },
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

module.exports = User;
