import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderAction";
import Loading from "./Loading";
import Error from "./Error";
import Success from "./Success";

const Checkout = ({ subTotal }) => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;

  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token);
  };
  return (
    <>
    {loading && <Loading />}
    {error && <Error error="Something went wrong!" />}
    {success && <Success success="Your order has been placed!" />}
    <StripeCheckout
      amount={subTotal * 100}
      shippingAddress
      token={tokenHandler}
      stripeKey="pk_test_51Kj4sRDoo0o8MzWPn2WTJYgD1uMY50IS9n5xlwAvgms5WdlgNieq32ML5RPfAVwY1NnIxZAbTk8brrdX5S2uDLsk00eLrzEMRg"
      currency="CAD"
    >
      <Button>Pay with Card</Button>
    </StripeCheckout>
    </>
  );
};

export default Checkout;
