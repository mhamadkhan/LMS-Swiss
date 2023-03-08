const mongoose = require('mongoose');

let courseSchema = mongoose.Schema({
  
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    level:{
        type:String,
        required:true
    },
    lessons:{
        type:String,
        required:true
    },
    quizzes:{
        type:String,
        required:true
    },
    languages:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    certificates:{
        type:String,
        required:true
    },
    // picture:{
    //     type:String,
    //     required:true
    // },
    skills:{
        type:String,
        required:true
    },

})

module.exports=mongoose.model('course',courseSchema);