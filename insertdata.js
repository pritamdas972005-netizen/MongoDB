const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/test')
const userSchema = new mongoose.Schema({
    name:String,
    Gender:String,
    age:Number

});
const User=mongoose.model('User',userSchema);
const  user=new User({
    name:'pritam',
    Gender:'male',
    age:20
});
user.save().then(()=>{console.log('insert successfully')}).catch(err=>console.log(err));