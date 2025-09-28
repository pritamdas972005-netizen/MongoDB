const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017").then(()=> console.log
("connected to mongoDB")).catch(err=>console.err("could not connect to MongoDB",err));
const user=[
    {name:'jhon', age:30},
    {name:'Rahul', age:20},
    {name:'Rohim', age:23}
]
const userschema=new mongoose.Schema({
    name:String,
    age:Number
});
const User=mongoose.model('User',userschema);
async function storeInformation(){
    const user =new User({
    name:'jhon',
    age:30
    });
    await user.save();
    console.log("User saved", user);
}
storeInformation();