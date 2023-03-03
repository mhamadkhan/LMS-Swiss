const SignUpRoute = require('./routers/SignUpRoute')
const LoginRoute = require('./routers/LoginRoute')
const express = require("express");

const jwt = require("jsonwebtoken")
const connectDB = require('./config/db')

const app = express();
let cors = require('cors')
app.use(cors())
app.use(express.json())

///////////////////////////  connect Database
// connectDB();

app.get('/', (req, res) => {
    res.send('<h3>Server at Home</h3>')
    console.log("Server at Home");
})

app.get('/session-check', (req, res) => {
    const token = req.query.token;
    // console.log(token);

    if (token == null) {
        // token not found
        return res.send("user ni ha")
    } else {
        try {
            const tokenValid = jwt.verify(token, 'my_secret_key');
            console.log(tokenValid);
            return res.send("user ha");
        } catch (error) {
            return res.send("error");
        }
    }
})


app.use('/signup', SignUpRoute)
app.use('/login', LoginRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})