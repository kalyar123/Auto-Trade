const mongoose= require ('mongoose');
const userdetailschema=new mongoose.Schema({
    name:String,
    username:String,
    email:{type:String,unique:true},
    password:String,
    conpass:String
},
{
    collection:"userinfo"
}
);
mongoose.model('userinfo',userdetailschema);