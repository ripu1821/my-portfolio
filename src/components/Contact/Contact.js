import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

function Contact() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Contact <strong className="purple">ME</strong>
            </h1>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <IoCallOutline size={30} style={{ marginRight: "10px" }} />
              Call:{" "}
              <a href="tel:+916350680083" className="purple">
                +91 63506-80083
              </a>
            </h1>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <MdOutlineEmail size={30} style={{ marginRight: "10px" }} />
              Email:{" "}
              <a href="mailto:beniwalripu@gmail.com" className="purple">
                beniwalripu@gmail.com
              </a>
            </h1>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <CiLocationOn size={30} style={{ marginRight: "10px" }} />
              Location:{" "}
              <a
                href="https://www.google.com/maps?q=Sri+Ganganagar"
                target="_blank"
                rel="noopener noreferrer"
                className="purple"
              >
                Sri Ganganagar
              </a>
            </h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
