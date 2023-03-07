const mongoose = require('mongoose');

let sliderSchema = mongoose.Schema({
    SImage1:{
        type:String
    },
    SImage2:{
        type:String
    },
    SImage3:{
        type:String
    },
    SImage4:{
        type:String
    },
    SliderFolder:{
        type:String
    }
})

module.exports = mongoose.model('sliders',sliderSchema);