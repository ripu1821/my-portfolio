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
            <span className="purple"> pizone infotech solution pvt ltd </span>
            in <span className="purple"> Jaipur </span>.
            <br />
            <br />
            <p>
              As a passionate and dynamic
              <span className="purple"> Web Developer,</span> I specialize in
              technologies like{" "}
              <span className="purple">ReactJS, NodeJS, NextJS,</span> and{" "}
              <span className="purple">NestJS</span>. With a collaborative
              mindset, I have consistently contributed to building efficient
              user interfaces and elevating code quality. I’m skilled at
              optimizing performance and seamlessly integrating APIs, ensuring
              applications run smoothly and efficiently. Always driven to stay
              at the forefront of industry advancements, I continuously refine
              my expertise to deliver cutting-edge solutions.
            </p>
            <br />
            When I’m not immersed in coding, I dive into activities that
            inspire, challenge, and energize me:
          </p>
          <ul>
            <li className="about-activity">🎮 Gaming</li>
            <li className="about-activity">✍️ Writing Tech Blogs</li>
            <li className="about-activity">🏋️‍♂️ Staying Active</li>
            <li className="about-activity">🎧 Listening to Music</li>
            <li className="about-activity">✈️ Traveling</li>
          </ul>
          <br />
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Striving to create solutions that inspire, innovate, and make a
            difference!"{" "}
          </p>
          <footer className="blockquote-footer">ripu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
