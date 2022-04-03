const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51Kj4sRDoo0o8MzWPoIjwMiBnukanNwbHrWhsm55Mu4DCeqyASgZBkKz7p62mbJmV2qVFZvM9GJBIlLBjeXG5dskN00B2R5QuwF"
);
const Order = require("../models/Order");

router.post("/placeorder", async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body;
  try {
    // Using Stripe documentation to make these
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subTotal * 100,
        currency: "cad",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      // This is all coming from Stripe, only some properties are used
      const newOrder = new Order({
        name: currentUser.name,
        email: currentUser.email,
        userid: currentUser._id,
        orderItems: cartItems,
        orderAmount: subTotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          zipcode: token.card.address_zip,
        },
        transactionId: payment.source.id,
      });
      newOrder.save();
      res.send("Payment Success!");
    } else {
      res.send("Payment Failed!");
    }
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong!",
      error: error.stack,
    });
  }
});

// Route to retriever a User's Order
router.post("/getuserorder", async (req, res) => {
  const { userid } = req.body;
  try {
    // Sorted by descending order
    const orders = await Order.find({ userid }).sort({ _id: "-1" });
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({
      message: "Uh oh! Something went wrong!",
      error: error.stack,
    });
  }
});

module.exports = router;
