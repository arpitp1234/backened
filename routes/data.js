const express=require('express');
const router=express('../middleware/fetchUser');
const Datas=require('../models/Datas')
const{body,validationResult}=require('express-validator');


router.post('/',async(req,res)=>{
  try{
    
    const{RefreeName,ReferredBy,Emailid,PhoneNumber,City}=req.body;
    //If ther are errors,return Bad requrest and the erross
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const note=new Datas({
        RefreeName,ReferredBy,Emailid,PhoneNumber,City,
    })
    const savedData =await note.save()
    console.log(savedData);
    res.json(savedData);
}catch(error){
     console.error(error.message);
     res.status(500).send("Internal Sever error");
}
})

module.exports=router;