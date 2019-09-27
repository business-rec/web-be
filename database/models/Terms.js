"use strict";

const { Model } = require("objection");

class Terms extends Model {
	static get tableName() {
		return "terms";
	}
	// static get relationMappings() {
	// 	return {
	// 		companytypesworstterms: {
	// 			relation: Model.BelongsToOneRelation,
	// 			modelClass: __dirname + "/CompanyType",
	// 			join: {
	// 				from: "worstterms.companytypetypeid",
	// 				to: "companytypes.typeid"
	// 			}
	// 		}
	// 	};
	// }
}

module.exports = Terms;
