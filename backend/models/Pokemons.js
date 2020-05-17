const { Model } = require("objection");

class Pokemon extends Model {
    static get tableName() {
        return "pokemons";
    }

    static get relationMappings() {
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "pokemons.user_id",
                    to: "users.id",
                },
            },
        };
    }
}

module.exports = Pokemon;