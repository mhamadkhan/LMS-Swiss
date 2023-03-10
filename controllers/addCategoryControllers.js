let express = require('express');
let router = express.Router();
let Category = require('../models/category');



router.post('/addCategory',  async (req, res) => {

    try {
        console.log(req.body);
        
        
        let category = new Category(req.body);
    

        await category.save();
        res.send({ message: "Skill Added Successfully" });
    }
    
    catch (error) {
        res.send({ message: "internal Server Error" });
        console.log(error.message)
    }
})



router.get('/',async(req,res)=>{
    try {     
        let category = await Category.find();        
        res.json(category);
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server Error');
    }
});

module.exports = router;
