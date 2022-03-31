const db = require("./connection");
const { User, Pizza, Topping } = require("../models");

db.once("open", async () => {
  await Pizza.deleteMany();

  await Pizza.insertMany([
    {
      title: "Chicken Tikka",
      desc: "A specially developed Pakistani recipe topped with spicy chicken tikka and onions.",
      img: "chicken-tikka.png",
      price: 9.99,
      toppings: [],
    },
    {
      title: "Chicken Fajita",
      desc: "Special marinated chicken with onions, green peppers and spices. Warning: spicy!",
      img: "chicken-fajita.png",
      price: 9.99,
      toppings: [],
    },
    {
      title: "Veggie Delight",
      desc: "For the veggie lovers, a pizza with tomatoes, onions, and green peppers.",
      img: "veggie-delight.png",
      price: 8.99,
      toppings: [],
    },
    {
      title: "Classic Cheese",
      desc: "Good ol' mozzeralla and cheese. You can never go wrong with it.",
      img: "classic.png",
      price: 7.99,
      toppings: [],
    },
    {
      title: "The Sal Special",
      desc: "This one will open your Third Eye. Toppings include: eggplants, grated parmesan, breadcrumbs, premium pizza sauce, and whole milk mozzeralla. Trust me, it is worth the money.",
      img: "sal-special.png",
      price: 10999.99,
      toppings: [],
    },
  ]);

  console.log("pizzas seeded");

  await Topping.deleteMany();

  await Topping.insertMany([
    {
      name: "Pepperoni",
      price: "1.99",
    },
    {
      name: "Sausage",
      price: "1.99",
    },
    {
      name: "Mushrooms",
      price: "1.99",
    },
    {
      name: "Chicken",
      price: "2.99",
    },
    {
      name: "Extra Cheese",
      price: "2.99",
    },
    {
      name: "Premium Sal's Eggplant",
      price: "99.99",
    },
    {
      name: "Onions",
      price: "1.99",
    },
    {
      name: "Green Peppers",
      price: "1.99",
    },
  ]);

  console.log("toppings seeded");

  await User.deleteMany();

  await User.create({
    username: "hpotter",
    email: "hpotter@gmail.com",
    password: "12345678",
  });

  console.log("users seeded");

  process.exit();
});
