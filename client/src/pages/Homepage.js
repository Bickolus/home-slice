import React, {useEffect} from "react";
import pizzaData from "../pizza-data";
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from "react-bootstrap";
import { getAllPizzas } from '../actions/pizzaAction'
import Pizza from "../components/Pizza";

const Homepage = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector(state => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;

  useEffect(() => {dispatch(getAllPizzas());
  } , [dispatch]);
  return (
    <>
      <Container>
        {loading ? (<h1>Loading...</h1>)
          : error ? (<h1>error while fetching.. </h1>)
          : ( <Row>
            {pizzaData.map((pizza) => (
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
