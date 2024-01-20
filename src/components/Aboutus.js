import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./Footer";

function Aboutus() {
  return (
    <section id="Aboutus" className="bg-info">
       <div className="text-center mt-5 pt-5">
              <h1> About us </h1>
              <p className="fst-italic">welcome to our Band</p>              
            </div>
            <Container>
              <Row>
               <Col >
               <img
            src={require("./Images/homePic2.jpg")}
            className="img-fluid rounded border border-danger-subtle"
            alt="crowd enjoy"
          />
               </Col>
              </Row>
            </Container>
       
      <Container fluid>
        <Row>     

          <Col lg={7}>
   
            <div className="mt-3 pt-3">
              <p style={{textAlign:"justify"}}>
                For more than two decades, freaky band music has been an
                indelible part of music history. Their brilliant harmonies
                conveyed simple truths through sophisticated, pioneering musical
                arrangements. freaky band transcended their music and have come
                to representmusic culture. They provided fans around the world
                with a passport to experience love, youthful exuberance, and
                surf culture. Founded in city,country in 2001, freaky band were
                originally comprised of the two teenaged edwars brothers.
              </p>

              <p style={{textAlign:"justify"}}>
                Their influence on other artists spans musical genres and
                movements. Countless artists have cited Pet Sounds as their
                inspiration for creating their own musical masterpieces. Fusce
                rhoncus erat turpis, non sollicitudin sem imperdiet est sed arcu
                fringilla, id blandit nunc fermentum. Nullam ante augue,
                convallis eu nunc non, malesuada egestas augue. Nulla facilisis
                sollicitudin consequat. Sed id semper libero. Sed erat orci,
                lacinia sed viverra eget, sodales eget velit.{" "}
              </p>

              <p style={{textAlign:"justify"}}>
                placerat tellus. Suspendisse et lacinia augue. Suspendisse
                consectetur sagittis ante, sit amet sagittis nulla dictum in.
                Curabitur sodales urna ultrices, auctor diam nec, consectetur
                velit. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae.
              </p>
            </div>
          </Col>

          <Col lg={5}>      
            <div className="text-center social-link-about mt-3 pt-3 ">
              <p className="text-body-secondary font-monospace fs-3 mb-2 pb-2 ">
                {" "}
                David Edwards{" "}
                <a
                  href="https://www.facebook.com/"
                  className="text-reset  fs-5 px-2"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="text-reset  fs-5 px-2"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  className="text-reset  fs-5 px-2"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
              </p>{" "}
              <p class="text-body-secondary font-monospace fs-3  my-2 py-2 social">
                {" "}
                john Edwards{" "}
                <a
                  href="https://www.facebook.com/"
                  className="text-reset  fs-5 px-2"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="text-reset  fs-5 px-2"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  className="text-reset  fs-5 px-2"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
              </p>{" "}
              <p className="text-body-secondary font-monospace fs-3  my-2 py-2 social">
                Victoria jensy{" "}
                <a
                  href="https://www.facebook.com/"
                  className="text-reset  fs-5 px-2"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="text-reset  fs-5 px-2"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  className="text-reset  fs-5 px-2"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
              </p>{" "}
              <p class="text-body-secondary font-monospace fs-3  my-2 py-2 social">
                Joe Bradley{" "}
                <a
                  href="https://www.facebook.com/"
                  className="text-reset  fs-5 px-2"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="text-reset  fs-5 px-2"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  className="text-reset  fs-5 px-2"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
              </p>{" "}
              <p class="text-body-secondary font-monospace fs-3 my-2 py-2 social">
                Charlotte Tracy{" "}
                <a
                  href="https://www.facebook.com/"
                  className="text-reset  fs-5 px-2"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="text-reset  fs-5 px-2"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  className="text-reset  fs-5 px-2"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
              </p>{" "}
              <p class="text-body-secondary font-monospace fs-3 my-2 py-2 social">
                John Campell{" "}
                <a
                  href="https://www.facebook.com/"
                  className="text-reset  fs-5 px-2"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="text-reset  fs-5 px-2"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  className="text-reset  fs-5 px-2"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
              </p>{" "}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
}




export default Aboutus;
