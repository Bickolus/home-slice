const { Schema, model } = require("mongoose");

// Create order schema and make sure it includes date ordered and an array of pizzas
const toppingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Topping = model("Topping", toppingSchema);

module.exports = Topping;