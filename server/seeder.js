const mogoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("./config/connection");
const Pizza = require("./models/pizzaModel");
const Pizzas = require("../client/src/pizza-data");