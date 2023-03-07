let express = require('express');
let router = express.Router();
let User = require('../models/user');
let jsonwebtoken = require('jsonwebtoken');
let Token = require('../models/token');
let sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');


router.post('/signup', async (req, res) => {

    try {
        console.log(req.body);
        let user = new User(req.body);
        // console.log(req.body);
        let userEmail = await User.findOne({ email: req.body.email });
        if (userEmail) {
            res.send("User Already Exists");
        }
        else {
            user.role="Student";
            await user.save();

            const token = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString('hex')
            }).save();
            console.log(token.token);
            const url = `${process.env.BASE_URL}user/${user._id}/verify/${token.token}`;
            console.log(url);
            await sendEmail(user.email, 'verify Email', url);

            await res.send({ message: "An Email has been Sent to Your Email Address Please Verify" });

        }
    }

    catch (error) {
        res.send({ message: "internal Server Error" });
        console.log(error.message)
    }
})


router.get('/:id/verify/:token', async (req, res) => {

    try {
        const user = await User.findOne({ _id: req.params.id });
        if (!user) {
            res.send({ message: "Invalid Link" });
        }
        const token = await Token.findOne({ userId: req.params.id })
        // console.log(token);
        if (!token) {
            res.send({ message: "Invalid Link" });
        }

        await User.findByIdAndUpdate(user._id, { verified: true });
        await token.remove();
        res.send({ message: "Email Verified Successfully" });
    }

    catch (error) {
        console.log(error)
        res.send({ message: "internal Server Error" });
    }
})


router.get('/session-check', async (req, res)=>{

    try{

        let data = await jsonwebtoken.verify(req.query.token, "FSD m cat says mioon")

        let user = await User.findById(data.id);
        
        res.json(user);
    }catch(e){
        res.json(null);
    }

});

router.post('/login', async (req, res) => {

    try {
        console.log(req.body)
        let userEmail = await User.findOne({ email: req.body.email });
        let userPassword = await User.findOne({ password: req.body.password });

        if (!userEmail || !userPassword) {
            return res.send({ message: "Invalid Email or password" })
        }

        let user = await User.findOne(req.body);
        console.log(user);
        console.log(user.verified);
        if (user.verified === false) {
            let token = await Token.findOne({ userId: user._id });
            // console.log(token);
            if (!token) {
                token = await new Token({
                    userId: user._id,
                    token: crypto.randomBytes(32).toString("hex"),
                }).save();
                const url = `${process.env.BASE_URL}user/${user._id}/verify/${token.token}`;
                console.log(url);
                await sendEmail(user.email, "Verify Email", url);
                res.send({ message: "An Email sent to your account please verify" })
            }
            else if(token){

                res.send({ message: "An Email sent to your account please verify" })
            }
        }

        if (user.verified === true) {

            jsonwebtoken.sign({
                id: user._id
            }, "FSD m cat says mioon", {
                expiresIn: "12h"
            }, (err, UserToken) => {
                res.json({
                    utoken: UserToken,
                    user: user,
                    message:'LoginSuccessfully'
                });
            })
            // res.send({ message: "Logged in Successfully" })
        }
    }

    catch (error) {
        console.log(error.message)
    }
});

router.get('/totalUsers',async(req,res)=>{
    try {
        
        let totalUsers = await User.find().countDocuments();
        console.log(totalUsers);
        res.json(totalUsers);
    } catch (error) {
        res.json(error.message);
    }

})
router.get('/',async(req,res)=>{
    try {     
        let users = await User.find();        
        res.json(users);
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server Error');
    }
});

module.exports = router;