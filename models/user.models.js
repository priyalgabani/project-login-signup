const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    userSchema: "String",
    email:"String",
    password:"String",
})

const usermodel = mongoose.Model("User", userSchema)

module.exports =userSchema