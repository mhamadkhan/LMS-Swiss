const SignUpRoute = require('./routers/SignUpRoute')
const LoginRoute = require('./routers/LoginRoute')
const express = require("express");

// const connectDB = require('./config/db')

const app = express();
let cors = require('cors')
app.use(cors())
app.use(express.json())

// ///////////////////////  connect Database
// connectDB();

app.get('/', (req, res) => {
    res.send('<h3>Server at Home</h3>')
    console.log("Server at Home");
})


app.use('/signup', SignUpRoute)
app.use('/login', LoginRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})