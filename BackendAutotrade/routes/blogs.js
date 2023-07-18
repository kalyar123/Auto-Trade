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

const Blogs = mongoos.model(
  "Blogs",
  new mongoos.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    author: {
        type: String,
        required: true,
      },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    Image: {
      type: String,
    },
  })
);

router.get("/", async (req, res) => {
  const result = await Blogs.find().sort({ name: -1 });
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const blogs_details = await Blogs.findById(req.params.id).select(
    'name author description date Image -_id'
  );
  if (!blogs_details) {
    res.status(404).send("The given blogs is not found");
  }
  res.send(blogs_details);
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
      const blogs = new Blogs({
        name: req.body.name,
        author:req.body.author,
        description: req.body.description,
        date:req.body.date,
        Image: req.body.Image,
        contentType: "image/png",
        isValidUser: true,
      });

      try {
        const result = await blogs.save();
        res.status(200).send(result);
      } catch (err) {
        res.send(err.message);
      }
    }
  });
});

function validateCourse(blogs) {
  const schema = Joi.object({
    name: Joi.string().required(),
    author:Joi.string().required(),
    description: Joi.string().max(2000).required(),
    date:Joi.string().required(),
    techIssues: Joi.boolean(),
    Image:Joi.string().required(),
  });

  return schema.validate(blogs);
}

router.delete("/:id", async (req, res) => {
  const blogs = await Blogs.findByIdAndRemove(req.params.id);
  if (!blogs) {
    res.status(404).send("The given blog is not found");
    return;
  }
  res.send(blogs);
});

module.exports = router;
