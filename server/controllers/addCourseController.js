let express = require('express');
let multer =require('multer');
let router = express.Router();
let Course = require('../models/course');



router.post('/addCourse',  async (req, res) => {

    try {
        console.log(req.body);
        
     
        let course = new Course(req.body);
    

        await course.save();
        res.send({ message: "Course Added Successfully" });
    }
    
    catch (error) {
        res.send({ message: "internal Server Error" });
        console.log(error.message)
    }
})

router.get('/',async(req,res)=>{
    try {     
        let Courses = await Course.find();        
        res.json(Courses);
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server Error');
    }
});

module.exports = router;
