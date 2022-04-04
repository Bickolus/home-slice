import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPizza } from "../actions/pizzaAction";

const Filter = () => {
  const [searchKey] = useState("");
  const [category, setCategory] = useState("All");
  const dispatch = useDispatch();

  return (
    <div className="p-4 mt-4" style={{ backgroundColor: "#F8E46C" }}>
      <Form>
        <Row>
          <Col>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>All</option>
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
            </select>
          </Col>
          <Col>
            <Button
              style={{ backgroundColor: "#CB3B14", borderColor: "#CB3B14" }}
              onClick={() => {
                dispatch(filterPizza(searchKey, category));
              }}
            >
              Search!
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filter;
