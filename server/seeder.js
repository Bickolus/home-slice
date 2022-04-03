const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("./config/connection");
const Pizza = require("./models/Pizza.js");
const Pizzas = require("../client/src/pizza-data");

// Configurate dotenv and connect to server
dotenv.config();
connectDB();

// This is how we will import data
const importData = async () => {
    try {
        await Pizza.deleteMany();
        const sampleData = Pizzas.map((pizza) => {
            return { ...pizza };
        });
        await Pizza.insertMany(sampleData);
        console.log("Data imported!");
        process.exit();
    } catch (error) {
        console.log(`${error}`);
        process.exit(1);
    }
};

// Logic for deleting already made data
const dataDestroy = () => {};

if (process.argv[2] === "-d") {
    dataDestroy();
} else {
    importData();
}
