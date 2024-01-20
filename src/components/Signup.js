import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/esm/Button";

function Signup() {
  return (
    <section id="Signup" className="bg-dark text-white">
      <hr></hr>
      <div className="text-center ">
        <h1 className="text-center mt-3 p-3">SIGN UP FOR PREMIUM ACCESS</h1>
        <p>
          Get music, stories, photos, and more delivered right to your inbox.
        </p>
      </div>

      <Container>
        <Row className="justify-content-center align-items-center my-3 py-3">
          <Col lg={6}>
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2" className="position-relative">
                  Email <span className="fw-bold text-danger">*</span>
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="email" placeholder="email@example.com" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3 mt-4"
                controlId="formPlaintext"
              >
                <Form.Label column sm="2">
                  City <span className="fw-bold text-danger">*</span>
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="city" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3 mt-4"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="4"></Form.Label>

                <Col sm="8" >
                  <Button variant="outline-light" className="px-3 fs-5 mx-3 ">
                    Join Now
                  </Button>

                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>

      <p className="m-2 p-2 fw-light fst-italic text-mute" style={{textAlign:"justify"}}>
        We are passionate about music. To help us share that passion we'd like
        to use cookies and similar technologies to personalize your experiences
        on our sites and to advertise on other sites. For more information and
        additional choices click Cookie Choices below {" "}
        <span >
        <a href="#cookies" className="link" >cookies choices</a>
        </span>
     
      </p>
      <br className="m-0 p-0"></br>
      
    </section>
  );
}




export default Signup;
