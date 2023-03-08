const mongoose = require('mongoose');

let courseSchema = mongoose.Schema({
  
    courseTitle:{
        type:String,
        required:true
    },
    coursePrice:{
        type:Number,
        required:true
    },
    courseDuration:{
        type:Number,
        required:true
    },
    courseLevel:{
        type:String,
        required:true
    },
    courseLessons:{
        type:String,
        required:true
    },
    courseQuizzes:{
        type:String,
        required:true
    },
    courseLanguage:{
        type:String,
        required:true
    },
    courseDescription:{
        type:String,
        required:true
    },
    courseCertificate:{
        type:String,
        required:true
    },
    courseCardPic:{
        type:String,
        required:true
    },
    courseSkill:{
        type:String,
        required:true
    },

})

module.exports=mongoose.model('course',courseSchema);