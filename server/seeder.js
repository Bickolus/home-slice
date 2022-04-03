const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("./config/connection");
const Pizza = require("./models/Pizza.js");
const Pizzas = require("../client/src/pizza-data");

//config dot env and mongodb conn file
dotenv.config();
connectDB();

//import data
const importData = async () => {
    try {
        await Pizza.deleteMany();
        const sampleData = Pizzas.map((pizza) => {
            return { ...pizza };
        });
        await Pizza.insertMany(sampleData);
        console.log("DATA IMPOrted");
        process.exit();
    } catch (error) {
        console.log(`${error}`);
        process.exit(1);
    }
};

importData();