let express = require('express');
let router = express.Router();
let User = require('../models/user');
let Token = require('../models/token');
let sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

router.post('/forget',async(req,res)=>{

    console.log(req.body.email)
    try {
        const user = await User.findOne({email:req.body.email});
        if(!user){
            return res.send({message:"Invalid Email"});
        }

        let token = await Token.findOne({ userId: user._id });
        if (!token) {
            token = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
        }

        const link = `${process.env.BASE_URL}user/${user._id}/${token.token}`;
        await sendEmail(user.email, "Password reset", link);

        res.send("password reset link sent to your email account");
    }
    
    catch (error) {
         res.send("An error occured");
        console.log(error);
    }
})

router.post('/:userId/:token',async(req,res)=>{

    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).send({message:"invalid link or expired"});

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!token) return res.status(400).send({message:"Invalid link or expired"});

        user.password = req.body.password;
        await user.save();
        await token.delete();

        res.send("password reset sucessfully.");
    }
    
    catch (error) {
        res.send("An error occured");
        console.log(error);
    }
})



module.exports = router;