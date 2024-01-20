import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./Footer";
import Signup from "./Signup";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <section id="Home" className="bg-info">
      <Container>
        <Row className="justify-content-center align-items-center">
          <div className="text-center my-3 py-3"></div>
          <div className="text-center mt-3 pt-3 mb-1 pb-1">
            <h1>The Band</h1>
            <p className="fst-italic">we love music</p>
          </div>
          <Col>
            <div>
              <Carousel>
                <Carousel.Item interval={3000}>
                  <img
                    src={require("./Images/homePic1.jpg")}
                    className="img-fluid "
                    alt="crowd enjoy"
                  />
                  <Carousel.Caption>
                    <h4>El Deso, TX</h4>
                    <p className="d-none d-sm-block">
                    PaulHouse Bar & Grill-El Paso
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    src={require("./Images/homePic4.jpg")}
                    className="img-fluid"
                    alt="crowd enjoy"
                  />
                  <Carousel.Caption>
                    <h4>Tower Junction, CO</h4>
                    <p className="d-none d-sm-block">
                   
Aromhhitheater at Zas Colonias Park
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}> 
                  <img
                    src={require("./Images/homePic3.jpg")}
                    className="img-fluid"
                    alt="crowd enjoy"
                  />
                  <Carousel.Caption>
                    <h4>Golden City, ID</h4>
                    <p className="d-none d-sm-block">
                    Revolution Music Mansion & Event Center-Boise
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <p className="lead text-muted my-3 " style={{textAlign:"justify"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </p>
        </Row>
      </Container>
      <Signup />
      <Footer />
    </section>
  );
}



export default Home;
