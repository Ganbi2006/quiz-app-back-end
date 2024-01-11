const {model,Schema} = require("mongoose")

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    age: Number,
})
const usermodel = model("User", userSchema)
 
module.exports = usermodel