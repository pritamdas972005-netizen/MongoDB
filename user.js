//1.write a nodejs code to connect to mongoDB database name testDB using Mongoose.
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test')
.then (()=>console.log("connected to MongoDB"))
.catch(err => Console.log("could not connect to MongoDB",err));
//2.create a user schema with fileds name,email,password.
const studentSchema = new mongoose.Schema(
    {
    name:{
        type:String,
        requrie:true,
        trim:true
    },
    email:{
        type:String,
        requrie:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    }
},
    {timestamps:true}
);
