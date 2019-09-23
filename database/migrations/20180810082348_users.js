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
			companies.string("company", 255).notNullable();
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
