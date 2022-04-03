import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Import from reducers folder
import { getAllPizzaReducer } from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/cartReducer";

// Uses all reducers
const rootReducer = combineReducers({
  // These are the key value pairs for the reducers
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
});

// Get locally stored cart items
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
};

// Define middleware
const middleware = [thunk];

// Create store object, use composewithDevTools so we can take advantage of devtools extension
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
