/* eslint-disable no-unused-vars */
const User = require("../Models/UserSchema")

const SignUpData = async (req, res) => {
    const { name, email, password } = req.body.data;

    try {
        const UserExist = await User.findOne({ email: email });

        if (UserExist) {
            return res.status(422).json({ error: "Email already exists" });
        }

        const user = new User({ name, email, password });

        const userRegister = await user.save()

        if (userRegister) {
            return res.status(201).json({ mesage: "User Registered Successfully" })
        } else {
            return res.status(500).json({ mesage: "Registration Failed" })
        }

    } catch (error) {
        console.loG(error.message);
    }
}

module.exports = {
    SignUpData
}