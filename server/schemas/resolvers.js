const { User, Pizza, Topping, Order } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    pizzas: async (parent, { title }) => {
      const params = {};

      if (title) {
        params.title = {
          $regex: title,
        };
      }

      return await Pizza.find(params).populate("toppings");
    },
    pizza: async (parent, { _id }) => {
      return await Pizza.findById(_id).populate("toppings");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findById(context.user._id).populate({
          path: "orders.pizzas",
        });

        return userData;
      }
      throw new AuthenticationError("Not logged in!");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.pizzas",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in!");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ pizzas: args.pizzas });
      const { pizzas } = await order
        .populate("pizzas")
        .populate({
          path: "pizzas",
          populate: "toppings",
        })
        .execPopulate();
      const line_items = [];

      for (let i = 0; i < pizzas.length; i++) {
        // generate pizza id
        const product = await stripe.products.create({
          name: pizzas[i].title,
          desc: pizzas[i].desc,
          images: [`${url}/images/${pizzas[i].image}`],
        });

        // generate price id using the product id
        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: pizzas[i].price * 100,
          currency: "cad",
        });

        // add price id to the line items array
        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addTopping: async (parent, args) => {
      return await Topping.create(args);
    },
    addOrder: async (parent, { pizzas }, context) => {
      if (context.user) {
        const order = new Order({ pizzas });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
