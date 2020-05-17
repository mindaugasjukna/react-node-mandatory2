exports.seed = function (knex) {
  return knex("pokemons")
    .del()
    .then(() => {
      return knex("users").del();
    })

    .then(() => {
      return knex("users").insert([
        {
          first_name: "Mindaugas",
          last_name: "Jukna",
          email: "minitest@testmini.com",
          password:
            "$2a$10$iI639qF9gX0hqktt745/TO1nKb1KR8ClP1KoJoPG0mcNZzM15Nwcm", //test123
        },
      ]);
    })

    .then((users) => {
      return knex("pokemons").insert([
        {
          user_id: 1, //-> Mindaugas
          pokemon_title: "Charmander",
          pokemon_type: "Fire",
          pokemon_desc: "Coolest pokemon ever",
          post_date: "",
        },
        {
          user_id: 1, //-> Mindaugas
          pokemon_title: "Bulbasaur",
          pokemon_type: "Grass",
          pokemon_desc: "Cool. Not as cool as Charmander",
          post_date: "",
        },
      ]);
    });
};
