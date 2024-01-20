import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function Login() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        variant="dark"
        onClick={() => setShow(!show)}
        className=" text-start"
      >
        <i className="bi bi-box-arrow-in-right"> </i> Login
      </Button>
      <Offcanvas
        show={show}
        onHide={() => setShow(!show)}
        placement={"end"}
        id="bg"
        className="bg-info"        
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {" "}
            <h3 className=" text-center mt-3 mx-3 pt-3 px-3">
              login to access <br></br> premium contents
            </h3>{" "}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <section id="Login">
            <Container>
              <Row className="justify-content-center align-items-center my-3 py-2 ">
                <Col>
                  <Form>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email address"
                      className="mb-3"
                    >
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Password"
                    >
                      <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>

                    <Form.Group className="my-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>

                    <Button variant="outline-dark" className="my-3" type="submit">
                      Submit
                    </Button>
                  </Form>

                  <div className="policy my-3 py-3 text-center">
                    <Button variant="outline-dark" className=" rounded-pill mx-3 px-3 fs-5" type="submit">                     
                    create account
                    </Button>
                  </div>

                </Col>
              </Row>
            </Container>
          </section>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}




export default Login;
