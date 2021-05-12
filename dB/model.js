//to require mongoose
const mongoose = require("mongoose")


//Structure of the database
const userSchema = mongoose.Schema({
    name: {
        type:String
    },

    email: {
        type:String
    },

    country: {
        type:String
    }
})


//connect to my online collection from  -env
module.exports = mongoose.model("persons", userSchema)