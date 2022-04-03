import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Who We Are</h1>
        <p>
          Our history says a lot about us. Serving the community since 1963, our family recipe book continues to delight our customers. All of our meals are based on our family’s own cooking and we are proud of the fact that our recipes have stood the test of time.

          What makes <strong>HomeSlice™</strong> unique is that everything is homemade using natural ingredients. There are no fillers and we make one pizza at a time. What this means is that you can feel good about treating yourself and your family to pizza and our other menu favourites since all the ingredients are healthy and every meal is prepared fresh just for you. Cheeses are made with whole milk, pepperoni is made of pure meat, and our dough and sauce are completely homemade.

          Pizza is or signature at <strong>HomeSlice™</strong> and we have topping combinations that have become household favourites. You can also make your own pizza, done your way, using the ingredients and toppings that you want.

          Not only will you find pizza on our menu, but we are also known for our homemade pasta dishes, baked sandwiches, submarines, garlic fingers, and baked panzerotti.

        </p>
        <h1>Our Specialty</h1>
        <Row>
          <Col md={6}>
            <p>
            <strong>HomeSlice™</strong> in the Greater Toronto Area is not your average pizza restaurant. Looking through the menu you will notice pizzas, sandwiches, pasta, and other dishes, but what you will also discover is quality, freshness, deliciousness, and homemade dishes.


              Family owned and operated, <strong>HomeSlice™</strong> serves up the best homemade pizzas in all of the Greater Toronto Area! We are proud to serve your family the delicious home-grown recipes passed down from ours. All ingredients that go into the preparation of our menu selections are 100% natural with no fillers. You can feel good about treating you and your family to our classic Italian dishes.

              It is because we offer homemade meals that we have become successful in the community. Our customers come to know us for strict quality every time. All of our meals are prepared and made fresh to order so that you have the peace of mind knowing that the fresh deliciousness of our dishes await.
            </p>
          </Col>
          <Col md={6}>
            <p>
              Since we are open 7 days a week, it makes sense to offer a daily special. Every day of the week you can enjoy a delicious meal at an irresistible price.  Make Mondays fun with a party size pizza or take a load off on Saturday with a large pizza that comes with cheese garlic bread, pop, and dipping sauces. Visit our website to view our complete list and details of our daily specials.

              <strong>HomeSlice™</strong> is a proud supporter of our community. Give us a call for school fundraising campaigns.

              We welcome you to dine with us at <strong>HomeSlice™</strong> in GTA, or give us a call to order for takeout and delivery @ 905-555-1234.
            </p>
          </Col>
        </Row>
        <Row>
          <h1>From Us, to You!</h1>
          <Col md={9}>
           Here at <strong>HomeSlice™</strong>, we believe in making friends through pizza!  <br/> Be our friends, call us now home slice!
          </Col>
        </Row>
        <Row>
          <Col md={3} style={{ marginLeft: "140px", marginTop: "60px" }}>
            <Image src="images/family.jpg"
              style={{ width: "700px", height: "450px" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
