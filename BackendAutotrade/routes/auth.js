const express = require('express');
const bodyParser = require('body-parser');
const { type } = require("express/lib/response");
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Joi = require("joi");
const jwt = require('jsonwebtoken');


// Define a user schema and model
const authSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userType: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true,unique: true, },
  password: { type: String, required: true },
});

const authUser = mongoose.model('AuthUser', authSchema);
// Define an endpoint for creating a new user
router.post('/register', async (req, res) => {
  try {
    const { name,userType,userName, email, password, confirmPassword } = req.body;
    console.log("hello",req.body);

    // Check if the user already exists
    const { error } = validateUser(req.body);
      if (error) {
        res.status(400).send(error.details[0].message);
        return;
      }
    const user = await authUser.findOne({ email });
    if (user) {
      return res.status(409).json({ message: 'User already exists' });
    }
    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user
    const newUser = new authUser({
      name,
      userType,
      userName,
      email,
      password: hashedPassword,
    });
    console.log(newUser)
    // Save the new user to the database
    await newUser.save();
    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});
// login API endpoint
const secretKey = 'mysecretkey';
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await authUser.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // create a JWT token with a 30-minute expiration time
  const token = jwt.sign({ email }, secretKey, { expiresIn: '30m' });
  res.json({ token });
});

// define a protected API endpoint that requires a valid JWT token
router.get('/token', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token) {
    jwt.verify(token, (err, decoded) => {
      if (err) {
        res.status(403).json({ error: 'Invalid token' });
      } else {
        res.json({ data: 'Protected data' });
      }
    });
  } else {
    res.status(401).json({ error: 'Missing token' });
  }
});

function validateUser(User) {
    const schema = Joi.object({
      name: Joi.string().min(5).required(),
      userType:Joi.string().required(),
      userName:Joi.string().required(),
      email: Joi.string().min(5).required().email(),
      password: Joi.string().required(),
      confirmPassword:Joi.string().required()
    });
  
    return schema.validate(User);
  }
  module.exports = router;