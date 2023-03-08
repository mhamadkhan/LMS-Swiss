let express = require('express');
let multer =require('multer');
let router = express.Router();
let Course = require('../models/course');
let path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/ // Choose Types you want...
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!') // custom this message to fit your needs
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

// app.post('/', upload.single('image'), (req, res) => {
//   res.send(`/${req.file.path}`)
// })

router.post('/addCourse', upload.single('picture'), async (req, res) => {

    try {
        console.log(req.body);
        const file = req.picture;
        // Save the file to disk using fs
        const filename = `${file.filename}-${file.originalname}`;
        const filepath = `uploads/${filename}`;
        fs.renameSync(file.path, filepath);
      
        // Generate a URL for the file
        const url = `http://example.com/${filepath}`;
      
        let course = new Course(req.body);
        picture =  url;
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
