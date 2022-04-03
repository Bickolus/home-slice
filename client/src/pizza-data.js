const Pizzas = [
  {
    name: "Margherita",
    sizes: ["Small", "Medium", "Large"],
    prices: [
      {
        Small: 99,
        Medium: 199,
        Large: 399,
      },
    ],
    category: "Vegetarian",
    image: "/images/margherita.jpg",
    description: "Good ol' cheese pizza with 100% mozzerella cheese!",
  },
  {
    name: "Farmhouse",
    sizes: ["Small", "Medium", "Large"],
    prices: [
      {
        Small: 229,
        Medium: 399,
        Large: 599,
      },
    ],
    category: "Vegetarian",
    image: "/images/farmhouse.jpg",
    description:
      "Toppings include: onions, capsicum, tomato & grilled mushroom. Perfect for vegetarians!",
  },
  {
    name: "Veggie Paradise",
    sizes: ["Small", "Medium", "Large"],
    prices: [
      {
        Small: 180,
        Medium: 290,
        Large: 460,
      },
    ],
    category: "Vegetarian",
    description:
      "Here's a fun one: golden corn, black olives, capsicum, red paprika.",
    image: "/images/veggie_paradise.jpg",
  },
  {
    name: "Chicken Golden Delight",
    sizes: ["Small", "Medium", "Large"],
    prices: [
      {
        Small: 249,
        Medium: 349,
        Large: 599,
      },
    ],
    category: "Non-Vegetarian",
    image: "/images/chicken_golden_delight.jpg",
    description:
      "Mmm! This one has double pepper barbecue chicken, golden corn and extra cheese. You'd love it!",
  },
  {
    name: "Chicken Pepperoni",
    sizes: ["Small", "Medium", "Large"],
    prices: [
      {
        Small: 320,
        Medium: 580,
        Large: 800,
      },
    ],
    category: "Non-Vegetarian",
    image: "/images/cheesepepperoni.jpg",
    description:
      "Another classic! Pepperoni with extra cheese. You can't go wrong with this.",
  },
  {
    name: "Indian Chicken Tikka",
    sizes: ["Small", "Medium", "Large"],
    prices: [
      {
        Small: 250,
        Medium: 380,
        Large: 500,
      },
    ],
    category: "Non-Vegetarian",
    image: "/images/IndianTandooriChickenTikka.jpg",
    description:
      "This is what being Desi is all about! Tandoori masala with chicken tikka, onion, red paprika & mint mayo.",
  },
];
module.exports = Pizzas;
