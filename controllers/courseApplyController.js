let express = require('express');
let router = express.Router();
let CourseApply = require('../models/courseApply');

router.post('/apply', async (req, res) => {

    try {
        console.log(req.body);
        let apply = new CourseApply(req.body);
        let alreadyExist = await CourseApply.findOne({ whatsappNo: req.body.whatsappNo });
        if (alreadyExist) {
            res.send({ message: "Application with this whatsapp number already exist" });
        }else{
             await apply.save();
             res.send({ message: "Applied Successfully" });
        }
    }

    catch (error) {
        res.send({ message: "internal Server Error" });
        console.log(error.message)
    }
})


router.get('/totalApplications',async(req,res)=>{
    try {
        
        let applications = await CourseApply.find().countDocuments();
        console.log(applications);
        res.json(applications);
    } catch (error) {
        res.json(error.message);
    }

})

router.get('/',async(req,res)=>{
    try {     
        let applications = await CourseApply.find();        
        res.json(applications);
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server Error');
    }
});

module.exports = router;