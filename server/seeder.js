const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("./config/connection");
const Pizza = require("./models/Pizza.js");
const Pizzas = require("../client/src/pizza-data");