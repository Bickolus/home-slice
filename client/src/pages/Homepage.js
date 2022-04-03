import React, {useEffect} from "react";
import pizzaData from "../pizza-data";
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from "react-bootstrap";
import { getAllPizzas } from '../actions/pizzaAction'
import Pizza from "../components/Pizza";

const Homepage = () => {
  const dispatch = useDispatch()

  useEffect(() => {dispatch(getAllPizzas());
  } , [dispatch]);
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
