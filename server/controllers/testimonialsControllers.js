let express = require('express');
let router = express.Router();
let Testimonials = require('../models/testimonials');



router.post('/addTestimonials',  async (req, res) => {

    try {
        console.log(req.body);
        
        
        let testimonials = new Testimonials(req.body);
    

        await testimonials.save();
        res.send({ message: "Testimonial Added Successfully" });
    }
    
    catch (error) {
        res.send({ message: "internal Server Error" });
        console.log(error.message)
    }
})


router.get('/',async(req,res)=>{
    try {     
        let testimonials = await Testimonials.find();        
        res.json(testimonials);
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server Error');
    }
});

module.exports = router;
