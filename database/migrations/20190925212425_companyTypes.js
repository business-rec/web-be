exports.up = function(knex) {
	return knex.schema
		.dropTableIfExists("types")
		.createTable("companytypes", table => {
			table.increments("id").primary();
			table.string("type", 255).notNullable();
		});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("companytypes");
};
