import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { AiFillPhone, AiFillEnvironment, AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={12}>
            <h1>Contact Us 🤙🤙 </h1>
            <p>
             Have an event for you and your homeslices? <br/>
             Need to reserve a table for our state-of-the-art indoor dining experience? <br/> 
             <br/>
             <br/> 
             Get in TOUCH with us now! We are always on the other side of the button for our <strong>HomeSlices!!</strong>
            </p>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    Contact Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <AiFillPhone />
                  </td>
                  <td>Phone</td>
                  <td> 905-555-1234</td>
                </tr>
                <tr>
                  <td>
                    <AiFillEnvironment />
                  </td>
                  <td>Location</td>
                  <td> 14 Bridle Path, Ontario</td>
                </tr>
                <tr>
                  <td>
                    <AiFillMail />
                  </td>
                  <td>Email</td>
                  <td>homeslice@food.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={8} style ={{marginLeft: "150px", marginTop: "50px"}}>
            <Image
              src="images/contact.png"
              style={{ width: "550px", height: "350px" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
