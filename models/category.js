let mongoose = require('mongoose');

let categorySchema = mongoose.Schema({
   category:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('category',categorySchema);