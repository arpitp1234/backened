const mongoose=require('mongoose');
const { default: isEmail } = require('validator/lib/isEmail');
const {Schema}=mongoose;

const DataSchema= new Schema({
   
    RefreeName:{
        type:String,
        required:true
    },
    ReferredBy:{
       type:String,
       required:true
    },
    Emailid:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:Number,
        required:true
    },
    City:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('data',DataSchema);