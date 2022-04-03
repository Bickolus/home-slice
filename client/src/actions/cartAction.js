export const addToCart = (pizza, quantity, sizes) => (dispatch, getState) => {
    var cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        sizes: pizza.sizes,
        quantity: quantity,
        prices: pizza.prices,
        price: pizza.prices[0][sizes] * quantity

    };
    dispatch({ type: "ADD_TO_CART", payload: cartItem});

    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems)
    )
}