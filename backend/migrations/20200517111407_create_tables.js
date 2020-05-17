exports.up = function (knex) {
    return knex.schema
        .createTable("users", (table) => {
            table.increments("id");
            table.string("first_name").notNullable();
            table.string("last_name").notNullable();
            table.string("email").notNullable();
            table.string("password").notNullable();
        })
        .createTable("pokemons", (table) => {
            table.increments("id");
            table.string("pokemon_title").notNullable();
            table.string("pokemon_type").notNullable();
            table.string("pokemon_desc").notNullable();
            table.datetime("post_date");
            table.integer("user_id").unsigned().notNullable();

            // Set the foreign key
            table
                .foreign("user_id")
                .references("id")
                .inTable("users")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
        });
};

exports.down = function (knex) {
    return (
        knex.schema
            // Here, delete tables in reverse order because todos depends on users
            .dropTableIfExists("pokemons")
            .dropTableIfExists("users")
    );
};
