const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    pizzaCount: Int
    orders: [Order]
  }
  type Pizza {
    _id: ID
    title: String
    desc: String
    img: String
    price: Float
    toppings: [Topping]
  }
  type Topping {
    _id: ID
    name: String
    price: Float
  }
  type Order {
    _id: ID
    orderDate: String
    pizzas: [Pizza]
  }
  type Query {
    me: User
    pizzas(title: String): [Pizza]
    pizza(_id: ID!): Pizza
    order(_id: ID!): Order
    checkout(pizzas: [ID]!): Checkout
  }
  type Auth {
    token: ID!
    user: User
  }
  type Checkout {
    session: ID
  }
  input pizzaDetails {
    pizzaId: String
    title: String
    desc: String
    price: Float
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    addOrder(pizzas: [ID]!): Order
    addTopping(name: String!, price: Float!): Topping
  }
`;

module.exports = typeDefs;
