exports.up = function(knex) {
	return knex.schema.createTable("types", types => {
		types.increments("id").primary();
		types.string("type", 255).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("types");
};
