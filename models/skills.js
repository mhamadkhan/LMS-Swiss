let mongoose = require('mongoose');

let skillsSchema = mongoose.Schema({
   skill:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('skills',skillsSchema);