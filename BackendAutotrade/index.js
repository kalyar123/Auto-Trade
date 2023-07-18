
const config = require("config");
const helmet=require("helmet");
const morgan=require("morgan");
const express = require("express");
const app = express();
const logger=require("./middleware/logger");
const users=require('./routes/users');
const autoParts=require('./routes/autoParts');
const authUser=require('./routes/auth');
const addCar =require('./routes/addCar');
const assurance= require('./routes/assurance');
const orders= require('./routes/order');
const blogs= require('./routes/blogs');
const home=require('./routes/home');
const finance=require('./routes/finance');
const mongoos = require("mongoose");
const cors=require('cors');
const multer=require('multer');
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors({
  origin: " http://localhost:3000", 
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(logger);
app.use(express.static('public'));
app.set('view engine','pug');
app.set('views','./views');
app.use('/api/users',users);
app.use('/api/autoParts',autoParts);
app.use('/api/addCar',addCar);
app.use('/api/authUser',authUser);
app.use('/api/orders',orders);
app.use('/api/assurance',assurance);
app.use('/api/blogs',blogs);
app.use('/api/finance',finance);
app.use('/',home);



mongoos
  .connect("mongodb://127.0.0.1/FypProject")
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log("Could not connected to the database", err));


console.log(config.get('mail.host'))
if(app.get('env')==='development'){
    app.use(morgan('tiny'));
    console.log("development morgan is available")
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}  ${process.env.NODE_ENV}`);
});
