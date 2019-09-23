"use strict";

const { Model } = require("objection");

class Company extends Model {
	static get tableName() {
		return "companies";
	}

	// static get relationMappings() {
	// 	return {
	// 		company_modeled: {
	// 			relation: Model.ManyToManyRelation,
	// 			modelClass: __dirname + "/CompaniesModeled",
	// 			join: {
	// 				from: "companies.id",
	// 				through: {
	// 					from: "company_companies.companyid",
	// 					to: "company_companies.companymodeledid"
	// 				},
	// 				to: "companiesmodeled.id"
	// 			}
	// 		}
	// 	};
	// }
}

module.exports = Company;
