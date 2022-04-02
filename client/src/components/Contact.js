import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { AiFillPhone, AiFillMobile, AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Home Slice Pizza</h1>
            <p>
              Lorem ea et eirmod et et magna eos aliquyam, gubergren accusam sed
              amet diam et eos, sadipscing ut at no sit dolor nonumy ut sit. At
              ipsum no dolor sed justo ea, ea kasd duo sadipscing sed voluptua
              aliquyam sadipscing sed, dolore takimata sit lorem elitr amet et
              ea dolor, sanctus sed eirmod sea ipsum lorem invidunt eos, et est
              dolor sit et. Clita kasd ut dolor sed. Voluptua labore rebum eos
              ea, invidunt invidunt takimata vero sadipscing duo dolor magna.
              Eirmod eos sed dolor labore lorem diam et dolor dolor, diam sed
              sit takimata eirmod. Diam sit justo erat ipsum duo nonumy sed.
              Kasd dolor nonumy sea sed no consetetur. Diam ipsum sea vero
              ipsum. Aliquyam clita takimata ut gubergren amet dolores kasd
              gubergren, voluptua vero amet justo accusam dolor aliquyam vero
              at, sea eirmod labore et sadipscing invidunt sadipscing stet
              clita. Sit no voluptua accusam diam dolor. Invidunt ipsum et justo
              et sit kasd dolores, eos stet elitr sit at ipsum sed, dolor rebum
              kasd takimata kasd justo. Sea est dolor et duo no invidunt
              gubergren. Aliquyam erat ea sed justo ea takimata et, takimata
              dolores duo erat justo duo, vero diam eirmod elitr invidunt
              sanctus kasd eos.
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
                  <td>123-555-4567</td>
                </tr>
                <tr>
                  <td>
                    <AiFillMobile />
                  </td>
                  <td>Call</td>
                  <td>333-555-1111</td>
                </tr>
                <tr>
                  <td>
                    <AiFillMail />
                  </td>
                  <td>Email</td>
                  <td>homeslice@fakemail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/farmhouse.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
