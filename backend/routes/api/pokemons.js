const express = require("express");
const router = express.Router();
const Pokemons = require("../../models/Pokemons.js");

// Create endpoint of all BlogPosts
router.get("/", async (req, res) => {
    const pokemons = await Pokemons.query().withGraphFetched("user");
    res.json(pokemons);
});

//create new post
router.post("/", async (req, res, next) => {
    try {
        if (req.session.user) {
            const { pokemon_title, pokemon_type, pokemon_desc } = req.body;
            const user_id = req.session.user.id;
            const pokemon = await Pokemons.query().insert({
                pokemon_title,
                pokemon_type,
                pokemon_desc,
                user_id
            });
            res.json(pokemon);
        } else {
            return res.status(403).send({ response: "Unauthorized" });
        }
    } catch (err) {
        next(err);
    }
});

//get all blog posts from a user
router.get("/getallpokemons", async (req, res) => {
    try {
        if (req.session.user) {
            const pokemon = await Pokemons.query()
                .where("user_id", req.session.user.id)
                .withGraphFetched("user");
            res.json(pokemon);
        } else {
            return res.status(403).send({ response: "Unauthorized" });
        }
    } catch (err) { }
});

// Export to api.js
module.exports = router;
