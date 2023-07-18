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

const assurance = mongoos.model(
  "Assurance",
  new mongoos.Schema({
    name: {
      type: String,
      required: true,
    },
    carType:{
      type: String,
     },
    category:{
        type: String,
    },
    make:{
        type: String,
    },
    model:{
        type: String,
    },
    color:{
        type: String,
    },

    state:{
        type: String,
    },
    city:{
        type: String,
    },
    country:{
        type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    Image: {
      type: String,
    },
  })
);

router.get("/", async (req, res) => {
  const result = await assurance.find().sort({ name: -1 });
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const assurance_data = await assurance.findById(req.params.id).select(
    "name carType category make model color state city country price Image -_id"
  );
  if (!assurance_data) {
    res.status(404).send("The given car is not found");
  }
  res.send(assurance_data);
});

router.post("/", async (req, res) => {
const {name,carType,category,make,model,color,state,city,country,price}=req.body;
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
      const new_assurance = new assurance({
        name,
        carType,
        category,
        make,
        model,
        color,
        state,
        city,
        country,
        price,
        Image: req.body.Image,
        contentType: "image/png",
      });

      try {
        const result = await new_assurance.save();
        res.status(200).send(result);
      } catch (err) {
        res.send(err.message);
      }
    }
  });
});

function validateCourse(assurance_data) {
  const schema = Joi.object({
    name: Joi.string().required(),
    carType: Joi.string(),
    category:Joi.string(),
    make:Joi.string(),
    model:Joi.string(),
    color:Joi.string(),
    state:Joi.string(),
    city:Joi.string(),
    country:Joi.string(),
    price:Joi.string(),
    Image:Joi.string().required(),
  });

  return schema.validate(assurance_data);
}

router.delete("/:id", async (req, res) => {
  const assurance_data = await assurance.findByIdAndRemove(req.params.id);
  if (!assurance_data) {
    res.status(404).send("The given car is not found");
    return;
  }
  res.send(assurance_data);
});

module.exports = router;
