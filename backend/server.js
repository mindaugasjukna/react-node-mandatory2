const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const apiRoutes = require("./routes/api");

const Knex = require("knex");
const knexfile = require("./knexfile.js");
const knex = Knex(knexfile.development);

const { Model } = require("objection");

const session = require("express-session");

app.use(
    session({
        secret: `secret-key`,
        resave: false,
        saveUninitialized: false
    })
)

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");

    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-type, Accept",
    );

    res.header("Access-Control-Allow-Credentials", "true");

    res.header("Access-Control-Allow-Methods", "POST,GET,OPTIONS,PUT,DELETE,PATCH");

    next();
})
app.use("/api", apiRoutes);

const server = app.listen(9090, (error) => {
    if (error) {
        console.log("Cant run express");
    }
    console.log("Succesfully running express on server", server.address().port);
});

