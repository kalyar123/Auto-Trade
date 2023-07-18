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

const AutoParts = mongoos.model(
  "autoParts",
  new mongoos.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    techIssues: {
        type: Boolean,
    },
    Image: {
      type: String,
    },
  })
);

router.get("/", async (req, res) => {
  const result = await AutoParts.find().sort({ name: -1 });
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const autoPartsData = await AutoParts.findById(req.params.id).select(
    'name description price location Image -_id'
  );
  if (!autoPartsData) {
    res.status(404).send("The given auto Parts is not found");
  }
  res.send(autoPartsData);
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
      const autoParts = new AutoParts({
        name: req.body.name,
        description: req.body.description,
        price:req.body.price,
        location:req.body.location,
        techIssues: req.body.techIssues,
        Image: req.body.Image,
        contentType: "image/png",
        isValidUser: true,
      });

      try {
        const result = await autoParts.save();
        res.status(200).send(result);
      } catch (err) {
        res.send(err.message);
      }
    }
  });
});

function validateCourse(AutoParts) {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().max(255).required(),
    price:Joi.number().required(),
    location:Joi.string().required(),
    techIssues: Joi.boolean(),
    Image:Joi.string().required(),
  });

  return schema.validate(AutoParts);
}

router.delete("/:id", async (req, res) => {
  const autoPartsData = await User.findByIdAndRemove(req.params.id);
  if (!autoPartsData) {
    res.status(404).send("The given auto parts is not found");
    return;
  }
  res.send(autoPartsData);
});

module.exports = router;
