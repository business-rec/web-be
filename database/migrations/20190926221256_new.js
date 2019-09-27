exports.up = function(knex) {
	return knex.schema.createTable("terms", table => {
		table
			.increments("id")
			.primary()
			.notNullable();
		table
			.integer("companytypetypeid")
			.unsigned()
			.references("typeid")
			.inTable("companytypes")
			.onUpdate("CASCADE")
			.onDelete("CASCADE")
			.index();
		table.string("term", 255);
		table.float("ratingscore");
		table.string("termtype", 255);
	});
	// 		.createTable("companies_companytypes", table => {
	// 			table
	// 				.increments("id")
	// 				.primary()
	// 				.notNullable();
	// 			table
	// 				.integer("companyid")
	// 				.unsigned()
	// 				.references("id")
	// 				.inTable("users_companies")
	// 				.onUpdate("CASCADE")
	// 				.onDelete("CASCADE")
	// 				.index();
	// 			table
	// 				.integer("companytypeid")
	// 				.unsigned()
	// 				.references("typeid")
	// 				.inTable("companytypes")
	// 				.onUpdate("CASCADE")
	// 				.onDelete("CASCADE")
	// 				.index();
	// 			table
	// 				.integer("companytype")
	// 				.unsigned()
	// 				.references("type")
	// 				.inTable("companytypes")
	// 				.onUpdate("CASCADE")
	// 				.onDelete("CASCADE")
	// 				.index();
	// 		});
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTableIfExists("companytypes")
		.dropTableIfExists("bestterms")
		.dropTableIfExists("worstterms");
};
