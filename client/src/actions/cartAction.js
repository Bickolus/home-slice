export const addToCart = (pizza, quantity, size) => (dispatch, getState) => {
  var cartItem = {
    // list properties of Pizza, the stuff you wanna extract
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    size: size,
    quantity: Number(quantity),
    prices: pizza.prices,
    // This is the final price of what size and how many you order
    price: pizza.prices[0][size] * quantity,
  };

  if (cartItem.quantity > 10) {
    alert("You can only add a maximum of 10 pizzas!");
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    } else {
      // Will successfully create item
      dispatch({ type: "ADD_TO_CART", payload: cartItem });

      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cartReducer.cartItems)
      );
    }
  }
};

export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });

  const cartItems = getState().cartReducer.cartitems;

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
