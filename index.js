////-------------Database Connection---------------------------------/////
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/refer_earn");

const mysql=require("mysql")
const db=mysql.createConnection({
    host:"local",
    user:'root',
    password:'99Worst@hit',
    database:'arpit',
    table:'student'
})
const hostname="127.0.0.1";

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
