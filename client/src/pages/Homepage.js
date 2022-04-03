import React, { useEffect } from "react";
// import pizzaData from "../pizza-data";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getAllPizzas } from "../actions/pizzaAction";
import Pizza from "../components/Pizza";

const Homepage = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);

  // Destructure
  const { loading, pizzas, error } = pizzastate;

  // Add useEffect, dispatch the getAllPizzas action
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
      <Container>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error while fetching!</h1>
        ) : (
          <Row>
            {pizzas.map((pizza) => (
              <Col md={4}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default Homepage;
