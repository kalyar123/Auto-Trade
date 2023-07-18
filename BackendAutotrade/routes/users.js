const express = require("express");
const { type } = require("express/lib/response");
const router = express.Router();
const Joi = require("joi");
const multer = require("multer");
const mongoos = require("mongoose");

const Storage = multer.diskStorage({
  destination: "upload",
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("Image");

const User = mongoos.model(
  "User",
  new mongoos.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salary: {
      type: Number,
    },
    isValidUser: {
      type: Boolean,
    },
    Image: {
      type: String,
    },
  })
);

router.get("/", async (req, res) => {
  const result = await User.find().sort({ name: -1 });
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const userdata = await User.findById(req.params.id).select(
    "name email salary -_id"
  );
  if (!userdata) {
    res.status(404).send("The given course is not found");
  }
  res.send(userdata);
});

router.post("/", async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.log("some thing went wrong", err);
    } else {
      console.log("file path",req.file)
      const { error } = validateCourse(req.body);
      if (error) {
        res.status(400).send(error.details[0].message);
        return;
      }
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary,
        Image: "http://localhost:5000/" + req.file.filename,
        contentType: "image/png",
        isValidUser: true,
      });

      try {
        const result = await user.save();
        res.status(200).send(result);
      } catch (err) {
        res.send(err.message);
      }
    }
  });
});

router.put("/:id", async (req, res) => {
  const userdata = await User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.state.name,
        email: req.body.state.email,
        salary: req.body.state.salary,
      },
    },
    { new: true }
  );
  if (!userdata) {
    res.status(404).send("The given user is not found");
    return;
  }

  const { error } = validateCourse(req.body.state);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  res.send(userdata);
});

function validateCourse(User) {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    email: Joi.string().min(5).required().email(),
    salary: Joi.number(),
  });

  return schema.validate(User);
}

router.delete("/:id", async (req, res) => {
  const userdata = await User.findByIdAndRemove(req.params.id);
  if (!userdata) {
    res.status(404).send("The given user is not found");
    return;
  }
  res.send(userdata);
});

module.exports = router;
