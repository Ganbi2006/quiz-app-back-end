const {model,Schema} = require("mongoose")

const factSchema = new Schema({
    fact: String,
    title: String,
    dislike: [],
    like: [],
    UserId: String,
    date: {type: Date, default: Date.now()}
})
const factModel = model("Fact", factSchema)
 
module.exports = factModel