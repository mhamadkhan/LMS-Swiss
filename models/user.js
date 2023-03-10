let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
   userName:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
     role:{
        type:String,
        required:true
     },
    verified:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('users',userSchema);