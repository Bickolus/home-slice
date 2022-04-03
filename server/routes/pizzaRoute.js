const express = require("express");
const router = express.Router();
const Pizza = require('../models/Pizza');

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
        varients: ["small", "medium", "larg"],
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

  

module.exports = router;