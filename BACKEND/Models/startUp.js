const mongoose = require('mongoose');

const startUpSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    ayushID:{
        type:Number,
        unique:true
    }
});

const startUp = mongoose.model('startUp_data',startUpSchema);

module.exports = startUp;