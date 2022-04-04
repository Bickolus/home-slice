const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/connection");
const dotenv = require("dotenv");
require("colors");
const path = require("path");

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
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/orders", require("./routes/orderRoute"));

// app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(
    `Server running on ${process.env.NODE_ENV} mode on PORT ${PORT}!`
  );
});
