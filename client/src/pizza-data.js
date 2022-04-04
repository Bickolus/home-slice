const Pizzas = [
  {
    name: "Margherita",
    sizes: ["Small", "Medium", "Large"],
    prices: [
      {
        Small: 6.99,
        Medium: 7.99,
        Large: 8.99,
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
        Small: 7.99,
        Medium: 8.99,
        Large: 9.99,
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
        Small: 8.99,
        Medium: 9.99,
        Large: 10.99,
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
        Small: 9.99,
        Medium: 10.99,
        Large: 11.99,
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
        Small: 7.99,
        Medium: 8.99,
        Large: 9.99,
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
        Small: 9.99,
        Medium: 10.99,
        Large: 11.99,
      },
    ],
    category: "Non-Vegetarian",
    image: "/images/IndianTandooriChickenTikka.jpg",
    description:
      "This is what being Desi is all about! Tandoori masala with chicken tikka, onion, red paprika & mint mayo.",
  },
  {
    name: "The Sal Special",
    sizes: ["Small", "Medium", "Large"],
    prices: [
      {
        Small: 699.99,
        Medium: 799.99,
        Large: 899.99,
      },
    ],
    category: "Vegetarian",
    image: "/images/TheSalSpecial.png",
    description:
      "A unique eggplants-and-parmesan pizza topped with tomatoes and fresh basil leaves. Made with an incredibly rare breed of eggplants that is known to make you better at logical problem solving when eaten. It takes a special person to order this one. Are you that person?",
  },
];
module.exports = Pizzas;
