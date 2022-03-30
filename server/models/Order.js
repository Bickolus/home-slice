const { Schema, model } = require("mongoose");

// Create order schema and make sure it includes date ordered and an array of pizzas
const orderSchema = new Schema({
  orderDate: {
    type: Date,
    default: Date.now,
  },
  pizzas: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pizza",
    },
  ],
});

module.exports = Order;