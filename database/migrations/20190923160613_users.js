exports.up = function(knex) {
	return knex.schema
		.createTable("users", users => {
			users.increments("id").primary();
			users
				.string("username", 255)
				.notNullable()
				.unique();
			users.string("password", 255).notNullable();
		})
		.createTable("companies", companies => {
			companies.increments("id").primary();
			companies.string("name", 255).notNullable();
			companies.string("type", 255).notNullable();
			companies.string("streetName", 255).notNullable();
			companies.string("streetAddress", 255).notNullable();
			companies.string("city", 255).notNullable();
			companies.string("state", 255).notNullable();
			companies.string("zipCode", 255).notNullable();
		})
		.createTable("users_companies", table => {
			table.increments("id").primary();
			table
				.integer("userid")
				.unsigned()
				.references("id")
				.inTable("users")
				.onDelete("CASCADE")
				.index();
			table
				.integer("companyid")
				.unsigned()
				.references("id")
				.inTable("companies")
				.onDelete("CASCADE")
				.index();
		});
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTableIfExists("users_companies")
		.dropTableIfExists("companies")
		.dropTableIfExists("users");
};
