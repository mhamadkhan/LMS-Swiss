let express = require('express');
let connectDB=require('./dbConfig/db')
let cors = require('cors');
const PORT = process.env.PORT || 5000;
let app = express();
app.use(express.json());
app.use(cors());
connectDB();
const UserRoute = require('./controllers/userController');
const passRoute = require('./controllers/passwordReset');
const courseApply = require('./controllers/courseApplyController')
const addCourse = require('./controllers/addCourseController')
const paymentRoute = require('./controllers/paymentController');
// const sliderController = require('./controllers/sliderController');

app.use('/user',UserRoute);
app.use('/user',passRoute);
app.use('/payment',cors(),paymentRoute);
app.use('/courseApply',courseApply);
app.use('/course',addCourse);



app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})