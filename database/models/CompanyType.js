"use strict";

const { Model } = require("objection");
const Terms = require("./Terms");

class CompanyType extends Model {
	static get tableName() {
		return "companytypes";
	}

	static get relationMappings() {
		return {
			terms: {
				relation: Model.HasManyRelation,
				modelClass: Terms,
				join: {
					from: "companytypes.typeid",
					to: "terms.companytypetypeid"
				}
			}
		};
	}
}

module.exports = CompanyType;
