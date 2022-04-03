import axios from "axios";

// Code for trying to get all our pizzas from db and put it to our react front-end
export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const response = await axios.get("/api/pizzas/allpizzas");
    // console.log(response.data);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: err });
  }
};
