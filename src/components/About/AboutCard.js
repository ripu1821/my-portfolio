import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">RIPUDAMAN </span>
            from{" "}
            <span className="purple"> Sri Ganganagar, Rajasthan, India.</span>
            <br />I am currently employed as a software developer at{" "}
            <span className="purple"> pizone infotech solution pvt ltd.</span>
            <br />
            <br/>
            <p>
              I'm a dynamic web developer in ReactJS, NodeJS, NextJS, and
              NestJS. Collaborative by nature, I've contributed to efficient
              interfaces and elevated codequality. Adept at optimizing
              performance and integrating API's, I stay current with industry
              trends, ensuring my skills are always cutting-edge.
            </p>
           
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <br />
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">ripu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
