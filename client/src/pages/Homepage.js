import React from "react";
import pizzaData from "../pizza-data";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../components/Pizza";

const Homepage = () => {
  return (
    <>
      <Container>
        <Row>
          {pizzaData.map((pizza) => (
            <Col md={4}>
              <Pizza pizza={pizza} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
