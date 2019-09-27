"use strict";

const { Model } = require("objection");

class BestTerms extends Model {
	static get tableName() {
		return "bestterms";
	}
	static get relationMappings() {
		return {
			companytypesbestterms: {
				relation: Model.BelongsToOneRelation,
				modelClass: __dirname + "/CompanyType",
				join: {
					from: "bestterms.companytypetypeid",
					to: "companytypes.typeid"
				}
			}
		};
	}
}

module.exports = BestTerms;
