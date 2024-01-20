import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function Footer() {
  return (
    <Container fluid className="bg-dark text-light">
      <Row>
        <Col>
          <footer className="foot">
            <hr className="mt-0 pt-0 mb-3 pb-3"></hr>
            <div className="text-center social-link mb-3">
              <a
                href="https://www.facebook.com/"
                className="text-reset  fs-3 m-2 p-2"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-reset  fs-3 m-2 p-2"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://twitter.com/"
                className="text-reset  fs-3 m-3 p-3"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://youtube.com/"
                className="text-reset  fs-3 m-2 p-2"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
            <div className="d-flex justify-content-center align-items-center policy ">
              
              <p className=" mx-2 ">
                <a href="#privacypolicy" className="link">
                  Privacy Policy
                </a>
                .
              </p>
              
              <p className=" mx-2  ">
                <a href="#terms&conditions" className="link">
                  Terms & Conditions
                </a>
                .
              </p>
              <p className=" mx-2 ">
                <a href="#Adchoices" className="link">
                  Ad Choices
                </a>
                .
              </p>
            </div>
            <p className="text-center my-2 py-2">
              2021-2025 © freaky-Band. All Rights Reserved. Website by P&TY
            </p>

            <p className="text-center mb-2 pb-2">
              Visit
              <a href="#online" className="link">
                {" "}
                www.Online.gov{" "}
              </a>{" "}
              for social networking safety tips for parents and youth.
            </p>
          </footer>
        </Col>
      </Row>
    </Container>
  );
}



export default Footer;
