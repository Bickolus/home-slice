const { Schema, model } = require("mongoose");

const pizzaSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 60,
  },
  desc: {
    type: String,
    required: true,
    maxlength: 200,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  toppings: [
    {
      type: Schema.Types.ObjectId,
      ref: "Topping"
    }
  ],
});

// {
//   title: {
//     type: String,
//     required: true,
//     maxlength: 60,
//   },
//   desc: {
//     type: String,
//     required: true,
//     maxlength: 200,
//   },
//   img: {
//     type: String,
//     required: true,
//   },
//   prices: {
//     type: [Number],
//     required: true,
//   },
//   extraOptions: {
//     type: [Toppings]
//   },
// },
// { timestamps: true }
// );

const Pizza = model("Pizza", pizzaSchema);

module.exports = Pizza;
