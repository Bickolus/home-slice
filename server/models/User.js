const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// import Order
const Order = require("./Order");

// Create the User Schema to and make sure it includes username, email, password and an array of pizzas that they order
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address!"],
  },
  password: {
    type: String,
    required: true,
  },
  orders: [Order.schema],
});

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
