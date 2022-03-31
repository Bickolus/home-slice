import { gql } from '@apollo/client';

export const QUERY_PIZZAS = gql`
  query getPizzas($pizza: ID) {
    pizzas(pizzas: $pizzas) {
      _id
      name
      desc
      price
      image
      toppings {
        _id
        name
        price
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($pizzas: [ID]!) {
    checkout(pizzas: $pizzas) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    pizzas {
      _id
      title
      desc
      price
      toppings {
        _id
        name
        price
      }
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        pizzas {
          _id
          title
          desc
          price
          image
          toppings {
            _id
            name
            price
          }
        }
      }
    }
  }
`;
