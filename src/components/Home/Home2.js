import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="my-5">
          <Col md={8} className="home-about-description text-light">
            <h1
              style={{
                fontSize: "2.2em",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              ALLOW ME TO <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p
              className="home-about-body"
              style={{ fontSize: "1.3em", lineHeight: "1.8", color: "#f0f0f0" }}
            >
              I’m deeply passionate about programming, and along the way, I’ve
              built a solid foundation of knowledge… or at least, I like to
              think so! 🤷‍♂️
              <br />
              <br />
              I’m proficient in the classics such as
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Node.js, React.js, and Nest.js.{" "}
                </b>
              </i>
              <br />
              <br />I specialize in developing next-generation &nbsp;
              <i>
                <b className="purple">Web Technologies and API Services,</b>{" "}
                with a deep focus on{" "}
                <b className="purple">Prompt Engineering Practices.</b>
              </i>
              <br />
              <br />I also thrive on leveraging my passion for creating modern,
              high-performance products using
              <i>
                <b className="purple">
                  {" "}
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> React.js and Nest.js</b>
              </i>
            </p>
          </Col>

          <Col
            md={4}
            className="myAvtar d-flex justify-content-center align-items-center"
          >
            <Tilt>
              <img
                src={myImg}
                className="img-fluid rounded-circle shadow-lg"
                alt="avatar"
                style={{ border: "5px solid #6f42c1", maxWidth: "80%" }}
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ripu1821"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ripu1547507"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ripu-daman-66947a27b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ripu_bishnoi_21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
