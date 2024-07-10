////-------------Database Connection---------------------------------/////
const mongoose=require("mongoose");
/*mongoose.connect("mongodb+srv://redway345:nzRzvY4kxPKfEJxx@referearn.4ukocme.mongodb.net/?retryWrites=true&w=majority&appName=referearn")*/
const hostname="127.0.0.1";
//---------------------------------------------------------//
const dotenv=require('dotenv');
dotenv.config()
mongoose.connect(process.env.URI)

//-----------------------------------------------------------//
const express=require('express');
var cors=require('cors');
const app=express();
const port=5000;

app.use(cors());
app.use(express.json());

//Available Routes
app.use('/api/data',require('./routes/data'));
app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})
