const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/connection')
const dotenv = require("dotenv");
require('colors');



// const routes = require("./routes");
// const path = require("path");
// const { authMiddleware } = require("./utils/auth");

//config dotenv
dotenv.config();

//connection mongodb
connectDB();


const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));









// app.use(routes);
app.get("/", (req, res) => {
    res.send("<h1>Hello From Node Server grrrrrrrrrrBOW!!! </h1>");
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `Server Running On ${process.env.NODE_ENV} mode on PORT ${PORT}`
      
  );
});
