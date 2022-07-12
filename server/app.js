const express = require("express");
const gqlHTTP = require("express-graphql")
const schema = require("./schema/schema")
const Mongoose = require("mongoose");
require("dotenv").config()
const app = express();

app.use('/graphql',gqlHTTP.graphqlHTTP({
    schema,
    graphiql:true
}));

Mongoose.connect(process.env.db_url, error => {
    return error
})

Mongoose.connection

.once("open", () => console.log("Database connected successfully"))

.on("error", () => console.log("Error connecting database"))

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server listening on port:${PORT}`)
})