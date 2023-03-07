const mongoose = require('mongoose');

let orderSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    customerName:{
        type:String
    },
    customerEmail:{
        type:String
    },
    orderAmount:{
        type:Number
    },
    transactionID:{
        type:String
    },
    orderItems:{
        type:Array
    }

})

module.exports=mongoose.model('orders',orderSchema);