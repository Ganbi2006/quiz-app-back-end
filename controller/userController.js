const usermodel = require("../database/schema/userSchema")


const createUser = async(req, res) => {
    const createdUser = await usermodel.create(req.body)
    res.status(200).send(createdUser)
}


module.exports = {createUser}