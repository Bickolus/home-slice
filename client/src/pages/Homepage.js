import React, { useEffect } from "react";
// import pizzaData from "../pizza-data";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getAllPizzas } from "../actions/pizzaAction";
import Filter from "../components/Filter";
import Pizza from "../components/Pizza";
import Loading from "../components/Loading";
import Error from "../components/Error";

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
          <Loading />
        ) : error ? (
          <Error error="Something went wrong!" />
        ) : (
          <Row>
            <Filter />
            {pizzas.map((pizza) => (
              <Col md={4} key={pizza._id}>
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
