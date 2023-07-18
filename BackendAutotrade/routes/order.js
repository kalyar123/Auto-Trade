const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoos = require("mongoose");

const orderSchema = mongoos.model(
  "Order",
  new mongoos.Schema({
    items: [{
        product: {
          type: String,
          required: true
        },
        quantity: {
          type: Number,
          required: true
        }
      }],
      totalPrice: {
        type: Number,
        required: true
      }
  })
);

router.get("/", async (req, res) => {
  const result = await orderSchema.find().sort({ name: -1 });
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const addCar = await orderSchema.findById(req.params.id).select(
    "product quantity totalPrice -_id"
  );
  if (!addCar) {
    res.status(404).send("The given product s not found");
  }
  res.send(addCar);
});

router.post("/", async (req, res) => {
      const order=req.body;
      console.log("file path",req.body)
      const { error } = validateCourse(req.body);
      if (error) {
        res.status(400).send(error.details[0].message);
        return;
      }
      const newOrder = new orderSchema(order);

      try {
        const result = await newOrder.save();
        res.status(200).send(result);
      } catch (err) {
        res.send(err.message);
      }
});

function validateCourse(order) {
  const schema = Joi.object({
    items: Joi.array().items(
      Joi.object({
        product: Joi.string().required(),
        quantity: Joi.number().required()
      })
    ),
    totalPrice: Joi.number().required()
  });

  return schema.validate(order);
}

router.delete("/:id", async (req, res) => {
  const AddCarData = await AddCar.findByIdAndRemove(req.params.id);
  if (!AddCarData) {
    res.status(404).send("The given product is not found");
    return;
  }
  res.send(AddCarData);
});

module.exports = router;
