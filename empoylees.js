//1.Insert one employee document into the employees collection.
//MongoDB connection
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>console.log('mongodb connected')).catch(err=>console.log('connected failed!',err));
//Define employee schema
const employeeSchema = new mongoose.Schema({
    name:String,
    Department:String,
    salary:Number,
    company:String,
    
});
//create employee model
const Employee= mongoose.model('Employee',employeeSchema);
//Insert one employee doucment
async function insertEmployee() {

    const employee= new Employee({
        name:'peter',
        Department:'Data Science',
        salary:26000,
        company:"TCS"
    });
    await employee.save();
    console.log("Employee insert Successfully", employee);
}
insertEmployee();