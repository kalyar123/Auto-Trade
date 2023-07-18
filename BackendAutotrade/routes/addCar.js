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

const AddCar = mongoos.model(
  "AddCar",
  new mongoos.Schema({
    name: {
      type: String,
      required: true,
    },
    type:{
      type: String,
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
    assembly:{
        type: String,
    },
    bodyType:{
        type: String,
    },
    transmission:{
        type: String,
    },
    color:{
        type: String,
    },
    capacity:{
        type: String,
    },
    fuel:{
        type: String,
    },
    location:{
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
    description: {
      type: String,
      required: true,
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
  const result = await AddCar.find().sort({ name: -1 });
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const addCar = await AddCar.findById(req.params.id).select(
    "name type carType category make model assembly bodyType transmission color capacity fuel location state city country price description Image -_id"
  );
  if (!addCar) {
    res.status(404).send("The given car is not found");
  }
  res.send(addCar);
});

router.post("/", async (req, res) => {
const {name,type,carType,category,make,model,assembly,bodyType,transmission,color,capacity,fuel,location,state,city,country,price,description}=req.body;
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
      const Addcar = new AddCar({
        name,
        type,
        carType,
        category,
        make,
        model,
        assembly,
        bodyType,
        transmission,
        color,
        capacity,
        fuel,
        location,
        state,
        city,
        country,
        price,
        description,
        Image: req.body.Image,
        contentType: "image/png",
        isValidUser: true,
      });

      try {
        const result = await Addcar.save();
        res.status(200).send(result);
      } catch (err) {
        res.send(err.message);
      }
    }
  });
});

function validateCourse(AddCar) {
  const schema = Joi.object({
    name: Joi.string().required(),
    type: Joi.string(),
    carType: Joi.string(),
    category:Joi.string(),
    make:Joi.string(),
    model:Joi.string(),
    assembly:Joi.string(),
    bodyType:Joi.string(),
    transmission:Joi.string(),
    color:Joi.string(),
    capacity:Joi.string(),
    fuel:Joi.string(),
    location:Joi.string(),
    state:Joi.string(),
    city:Joi.string(),
    country:Joi.string(),
    price:Joi.number().required(),
    description: Joi.string().max(255).required(),
    techIssues: Joi.boolean(),
    Image:Joi.string().required(),
  });

  return schema.validate(AddCar);
}

router.delete("/:id", async (req, res) => {
  const AddCarData = await AddCar.findByIdAndRemove(req.params.id);
  if (!AddCarData) {
    res.status(404).send("The given car is not found");
    return;
  }
  res.send(AddCarData);
});

module.exports = router;
