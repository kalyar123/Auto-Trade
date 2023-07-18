
const config = require("config");
const helmet=require("helmet");
const morgan=require("morgan");
const express = require("express");
const app = express();
const logger=require("./middleware/logger");
const users=require('./routes/users');
const home=require('./routes/home');
const mongoos = require("mongoose");
const cors=require('cors');
const multer=require('multer');
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
app.use('/',home);



mongoos
  .connect("mongodb://localhost/Usersdb")
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
