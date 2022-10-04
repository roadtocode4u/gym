const mongoose = require("mongoose");

const User = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    phone: Number,
})

const model = mongoose.model("User", User);

module.exports = model;