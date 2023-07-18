const express = require("express");
const { type } = require("express/lib/response");
const router = express.Router();
const Joi = require("joi");
const mongoos = require("mongoose");


const finance = mongoos.model(
  "Finance",
  new mongoos.Schema({
    bankName: {
      type: String,
      required: true,
    },
    personName:{
      type: String,
      required: true,
     },
    carName:{
        type: String,
        required: true,
    },
    
    model:{
        type: String,
    },
    totalInstallments: {
        type: Number,
    },

    perInstallment:{
        type: Number,
    },
    totalPrice:{
        type: Number,
    },
  })
);

router.get("/", async (req, res) => {
  const result = await finance.find().sort({ name: -1 });
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const finance_data = await finance.findById(req.params.id).select(
    "bankName personName carName model totalInstallments perInstallment totalPrice -_id"
  );
  if (!finance_data) {
    res.status(404).send("The given car is not found");
  }
  res.send(finance_data);
});

router.post("/", async (req, res) => {
const {bankName,personName,carName,model,totalInstallments,perInstallment,totalPrice}=req.body;

      const { error } = validateCourse(req.body);
      if (error) {
        res.status(400).send(error.details[0].message);
        return;
      }
      const new_finance = new finance({
        bankName,personName,carName,model,totalInstallments,perInstallment,totalPrice
      });

      try {
        const result = await new_finance.save();
        res.status(200).send(result);
      } catch (err) {
        res.send(err.message);
      }
    
});

function validateCourse(finance_data) {
  const schema = Joi.object({
    bankName: Joi.string().required(),
    personName: Joi.string().required(),
    carName: Joi.string().required(),
    model:Joi.string(),
    totalInstallments:Joi.number(),
    perInstallment:Joi.number(),
    totalPrice:Joi.number(),
    
  });

  return schema.validate(finance_data);
}

router.delete("/:id", async (req, res) => {
  const finance_data = await finance.findByIdAndRemove(req.params.id);
  if (!finance_data) {
    res.status(404).send("The given car is not found");
    return;
  }
  res.send(finance_data);
});

module.exports = router;