let express = require('express');
let connectDB=require('./dbConfig/db')
let cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const PORT = process.env.PORT || 5000;
let app = express();
app.use(express.json());
app.use(cors());
connectDB();
const UserRoute = require('./controllers/userController');
const passRoute = require('./controllers/passwordReset');
const courseApplyRoute = require('./controllers/courseApplyController')
const addCourseRoute = require('./controllers/addCourseController')
const addTestimonialsRoute = require('./controllers/testimonialsControllers')
const paymentRoute = require('./controllers/paymentController');
const skillRoute = require('./controllers/addSkillsControllers');
const categoryRoute = require('./controllers/addCategoryControllers');

app.use('/user',UserRoute);
app.use('/user',passRoute);
app.use('/payment',cors(),paymentRoute);
app.use('/courseApply',courseApplyRoute);
app.use('/course',addCourseRoute);
app.use('/testimonials',addTestimonialsRoute);
app.use('/skill',skillRoute);
app.use('/category',categoryRoute);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})