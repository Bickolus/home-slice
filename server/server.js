const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/connection')
const dotenv = require("dotenv");
require('colors');
const routes = require("../server/routes");

const PORT = process.env.PORT || 3001;


// const routes = require("./routes");
// const path = require("path");
// const { authMiddleware } = require("./utils/auth");

// Config dotenv
dotenv.config();

// Connection to MongoDB
connectDB();


const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));


// Route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoute"))


// app.use(routes);
app.get("/", (req, res) => {
    res.send("<h1>Hello From Node Server grrrrrrrrrrBOW!!! </h1>");
  });

app.listen(PORT, () => {
  console.log(
    `Server running on ${process.env.NODE_ENV} mode on PORT ${PORT}!`
      
  );
});
