let mongoose = require('mongoose');

let courseRegistration = mongoose.Schema({
   firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:String,
        required:true
    },
     Gender:{
        type:String,
        required:true
     },
     whatsappNo:{
        type:String,
        required:true
     }, 
      alternateNumber:{
        type:String,
        required:true
     },
     address:{
        type:String,
        required:true
     },
    city:{
        type:String,
        required:true
     },
    nationality:{
        type:String,
        required:true
     },
     otherQueries:{
        type:String,
        required:true
     },
     sourceOfInfo:{
        type:String,
        required:true
     },

   
})

module.exports = mongoose.model('courseRegistration',courseRegistration);