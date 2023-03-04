/* eslint-disable no-unused-vars */
const User = require("../Models/UserSchema")

const SignUpData = (req, res) => {
    // console.log("route ran")
    const userData = req.body.data;
    
    console.log(userData)
}

module.exports = {
    SignUpData
}