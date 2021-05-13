//to require mongoose
const mongoose = require("mongoose")


//Structure of the database
const schema = mongoose.Schema({
    name: {
        type: String,
    },

    email: {
        type: String,
    },

    country: {
        type: String,
    }
})


//connect to the online collection from  -env
module.exports = mongoose.model("persons", schema)