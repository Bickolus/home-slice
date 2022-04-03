import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderAction";
import Loading from "../components/Loading";
import Error from "../components/Error";

const OrderPage = () => {
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { loading, error, orders } = orderState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-center ">Orders</h1>
      {loading && <Loading />}
      {error && <Error error="Oops! Something went wrong!" />}
      {orders &&
        orders.map((order) => (
          <div className="container border p-4 bg-light">
            <Row>
              <Col md={4}>
                <h4>Items:</h4>
                {order.orderItems.map((item) => (
                  <h6 key={item.name}>
                    {item.name} [{item.size}] x {item.quantity} ={" "}
                    ${item.price}
                  </h6>
                ))}
              </Col>
              <Col md={3}>
                <h6>Street: {order.shippingAddress.street}</h6>
                <h6>City: {order.shippingAddress.city}</h6>
                <h6>Postal/Zip Code: {order.shippingAddress.zipcode}</h6>
                <h6>Countery: {order.shippingAddress.country}</h6>
              </Col>
              <Col md={5}>
                <h4>Order Info:</h4>
                <h6>Order Amount: ${order.orderAmount}</h6>
                <h6>Transaction ID: {order.transactionId}</h6>
                <h6>Order ID: {order._id}</h6>
              </Col>
            </Row>
          </div>
        ))}
    </>
  );
};

export default OrderPage;
