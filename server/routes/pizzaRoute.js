const express = require("express");
const router = express.Router();
const Pizza = require("../models/Pizza");

// Get all pizzas route
router.get("/allpizzas", async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.send(pizzas);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/addpizza", async (req, res) => {
  const pizza = req.body.pizza;
  try {
    const newPizza = new Pizza({
      name: pizza.name,
      image: pizza.image,
      sizes: ["Small", "Medium", "Large"],
      description: pizza.description,
      category: pizza.category,
      prices: [pizza.prices],
    });
    await newPizza.save();
    res.status(201).send("New Pizza Added");
  } catch (error) {
    res.json({ message: error });
  }
});

// These routes are used for the Admin Panel:

router.post("/getsinglepizza", async (req, res) => {
  const pizzaId = req.body.pizzaId;
  try {
    const pizza = await pizzaModel.findOne({ _id: pizzaId });
    res.send(pizza);

  } catch (error) {
    res.json({ message: error });
  }
});

router.put("/updatepizza", async (req, res) => {
  const updatedPizza = req.body.updatedPizza;
  try {
    const pizza = await pizzaModel.findOne({ _id: updatedPizza._id });
    (pizza.name = updatedPizza.name),
      (pizza.description = updatedPizza.description),
      (pizza.category = updatedPizza.category),
      (pizza.image = updatedPizza.image),
      (pizza.prices = [updatedPizza.prices]);
    await pizza.save();
    res.status(200).send("Successfully updated the pizza!");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/deletepizza", async (req, res) => {
  const pizzaId = req.body.pizzaId;
  try {
    await pizzaModel.findOneAndDelete({ _id: pizzaId });
    res.status(200).send("Pizza has been deleted.");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

module.exports = router;
