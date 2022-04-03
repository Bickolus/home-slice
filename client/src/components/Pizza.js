import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";

const Pizza = ({ pizza }) => {
  const [sizes, setSizes] = useState("Small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, sizes));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "18rem", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={handleShow}
        />

        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Size</h6>
                <select value={sizes} onChange={(e) => setSizes(e.target.value)}>
                  {pizza.sizes.map((size) => (
                    <option key ={size}>{size}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>Price: ${pizza.prices[0][sizes] * quantity} CAD</Col>
            <Col md={6}>
              <Button 
              onClick={addToCartHandler}
              className="bg-primary text-white">Add to Cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <Card.Img
          variant="top"
          src={pizza.image}
          style={{ height: "auto" }}
        />
          </div>
          <div>
            <h5>Description: </h5>
            <h6>{pizza.description}</h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pizza;
