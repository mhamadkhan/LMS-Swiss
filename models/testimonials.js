const mongoose = require('mongoose');

let testimonialsSchema = mongoose.Schema({
  
     name:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    },
   rating:{
        type:String,
        required:true
    },
   Date:{
    type: String,
    required:true
    },
})

module.exports=mongoose.model('testimonials',testimonialsSchema);