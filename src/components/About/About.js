import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
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
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h2 className="section-heading">
          Professional <strong className="purple">Experience </strong> and{" "}
          <strong className="purple">Skillset </strong>
        </h2>
        <p className="section-description">
          A summary of my experience developing robust web applications,
          collaborating with teams to create user-friendly interfaces,
          optimizing website performance, integrating APIs and third-party
          services, conducting testing and debugging, participating in code
          reviews, and staying up-to-date with the latest web development
          technologies and trends.
        </p>
        <br />
        <br />
        <ul>
          <h6 className="about-activity">
            <ImPointRight /> Developed and implemented robust web applications
            usingReactJS, NodeJS, NextJS, and NestJS.
          </h6>
          <br />
          <h6 className="about-activity">
            <ImPointRight /> Collaborated with a team of developers to create
            efficient and userfriendly interfaces.
          </h6>
          <br />
          <h6 className="about-activity">
            <ImPointRight /> Utilized industry best practices and coding
            standards to ensure highquality code delivery.
          </h6>
          <br />
          <h6 className="about-activity">
            <ImPointRight /> Improved website performance by optimizing code and
            implementing caching mechanisms.
          </h6>
          <br />
          <h6 className="about-activity">
            <ImPointRight /> I-ntegrated various APIs and third-party services
            to enhance functionality and user experience.
          </h6>
          <br />
          <h6 className="about-activity">
            <ImPointRight /> Conducted thorough testing and debugging to
            identify and resolveany software issues or bugs.
          </h6>
          <br />
          <h6 className="about-activity">
            <ImPointRight /> Actively participated in code reviews and provided
            constructive feedback to enhance the overall codebase.
          </h6>
          <br />
          <h6 className="about-activity">
            <ImPointRight /> Stayed up-to-date with the latest technologies and
            trends in web development to constantly improve skills and
            knowledge.
          </h6>
          <br />
          <h6 className="about-activity">
            <ImPointRight /> Successfully developed and implemented both
            frontend and backend solutions for multiple projects.
          </h6>
          <br />
          <h6 className="about-activity">
            <ImPointRight /> Gained valuable knowledge and experience in various
            aspects of web development.
          </h6>
          <br />
          <h6 className="about-activity">
            <ImPointRight /> Collaborated effectively with team members to
            accomplish project objectives.
          </h6>
          <br />
          <h6 className="about-activity">
            <ImPointRight /> Demonstrated ability to learn and adapt quickly in
            a fast-paced environment.
          </h6>
        </ul>
        <br />
        <br />
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
