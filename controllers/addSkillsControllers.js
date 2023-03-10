let express = require('express');
let router = express.Router();
let Skills = require('../models/skills');



router.post('/addSkill',  async (req, res) => {

    try {
        console.log(req.body);
        
        
        let skills = new Skills(req.body);
    

        await skills.save();
        res.send({ message: "Skill Added Successfully" });
    }
    
    catch (error) {
        res.send({ message: "internal Server Error" });
        console.log(error.message)
    }
})



router.get('/',async(req,res)=>{
    try {     
        let skills = await Skills.find();        
        res.json(skills);
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server Error');
    }
});

module.exports = router;
