const express= require('express')
const app = express();
const mongoose= require ('mongoose');
app.use(express.json());
const cors = require ('cors');
app.use(cors());
const mongoURL='mongodb://localhost:27017/FypProject';
mongoose.connect(mongoURL,{
    useNewUrlParser: true
}).then(()=>{
    console.log("connected to database");
}).catch(e=>console.log(e))

//Model import
require('./userdetails');
const user=mongoose.model('userinfo');


// Routes
app.post('/register',async(req,res)=>{
    console.log(req.body);
    const {name,username,email,password,conpass}=req.body;
    try {
        const olduser=await user.findOne({email});
        if(olduser){
           return res.json({error:"User exists"});
        }
       await user.create({
        name:name,
        username,
        email,
        password,
        conpass
       })
       res.send({status:"ok"});
    } catch (error) {
        res.send({status:'error'})
    }
   
});



app.post('/login',async(req,res)=>{
     console.log(req.body);
     const {email,password}=req.body;
     user.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                res.send({message:"login successfully",user:user})
            }else{
                res.send({message:"password didn't match"})
            }
        }else{
            res.send({message:"user not registered"})
        }
     })
     })


     //Server
app.listen(5000,()=>{
    console.log("Server started at port 5000");
});





