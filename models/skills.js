let mongoose = require('mongoose');

let skillsSchema = mongoose.Schema({
   category:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('skills',skillsSchema);