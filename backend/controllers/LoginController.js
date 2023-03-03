/* eslint-disable no-unused-vars */
var jwt = require('jsonwebtoken');


const generateToken = () => {
    const payload = {
        id: "random"
    }
    const options = {
        expiresIn: '1h',
        issuer: 'my_app',
        audience: 'my_users',
        algorithm: 'HS256',
        subject: '1234',
    };
    const token = jwt.sign(payload, 'my_secret_key', options);

    return token;
}

const LoginData = (req, res) => {

    const { name, password } = req.body.data;
    // console.log(name, password)

    let token = generateToken();
    res.send(token);

}

module.exports = {
    LoginData
}