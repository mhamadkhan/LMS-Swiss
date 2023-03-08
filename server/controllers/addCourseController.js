let express = require('express');
let multer =require('multer');
let router = express.Router();
let Course = require('../models/course');
let path = require('path');
const fs = require('fs');

// write a code to store images in server through multer and create folder through fs and return link to store in mongoDB?


const upload = multer({ dest: 'server/uploads/media' })
  
//   const upload = multer({ storage: storage })

// app.post('/', upload.single('image'), (req, res) => {
//   res.send(`/${req.file.path}`)
// })

router.post('/addCourse', upload.single('courseCardPic'), async (req, res) => {

    try {
        console.log(req.body);
        const file = req.file;
        // Save the file to disk using fs
        const filename = `${file.originalname}`;
        const filepath = `server/upload/media/${filename}`;
        // fs.writeFile(filename, filepath, 'base64', (err) => {
        //     if (err) throw err;
        //     console.log('Image file saved successfully.');
        //   });
        // fs.writeFile(filepath)      
        // Generate a URL for the file
        const url = filepath;
      
        let course = new Course(req.body);
        course.courseCardPic =  url;
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
        let applications = await CourseApply.find();        
        res.json(applications);
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server Error');
    }
});

module.exports = router;
