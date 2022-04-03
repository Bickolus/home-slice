const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name of the order is required!"],
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
    },
    userid: {
      type: String,
    },
    orderItems: [],
    shippingAddress: {
      type: Object,
    },
    orderAmount: {
      type: String,
      // required: true,
    },
    isDelivered: {
      type: Boolean,
      default: false,
    },
    transactionId: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
