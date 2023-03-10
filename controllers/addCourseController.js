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

router.get('/singleCourse',async(req,res)=>{
    console.log(req.query.id)
    try {     
        let course = await Course.findById(req.query.id);        
        res.json(course);
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server Error');
    }
});

router.put('/updateCourse',async(req,res)=>{
        
    try {
      
        let courseid =req.query.id
       
        console.log(courseid);
        let updateCourse = await Course.findById(courseid);
        if(!updateCourse) res.status(404).json({msg:'no Product Found'});
      
        updateCourse = await Course.findByIdAndUpdate(courseid,req.body);
              
        if(updateCourse){
            await updateCourse.save(updateCourse);
            res.send({ message: "Course Updated Successfully" });
            await res.json(updateCourse);
            console.log( (updateCourse)
            ) 
        }

    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server Error');
    }
});


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