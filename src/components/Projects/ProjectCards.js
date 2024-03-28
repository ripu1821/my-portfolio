import React, { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";

const ProjectCard = ({
  imgPath,
  title,
  achievements,
  description,
  ghLink,
  demoLink,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Card className="project-card-view">
      <Row>
        <Col md={6}>
          <Card.Img variant="top" src={imgPath} className="project-card-img" />
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title className="purple">{title}</Card.Title>
            <Card.Body className="text-start">
              <Col md={12}>
                <Card.Title className="purple mt-2">Achievements</Card.Title>
                <Row>
                  {achievements &&
                    achievements.map((achievement, index) => (
                      <Col key={index} md={6}>
                        {index + 1}.{achievement}
                      </Col>
                    ))}
                </Row>
              </Col>

              <Card.Title className="purple mt-4">Description</Card.Title>
              {showFullDescription ? (
                <Card.Text>{description}</Card.Text>
              ) : (
                <Card.Text>{description.slice(0, 560)}.....</Card.Text>
              )}
            </Card.Body>
            <Button variant="primary" onClick={toggleDescription}>
              {showFullDescription ? "Show Less" : "Show More"}
            </Button>
            {/* <Card.Footer> */}
              {/* <Button href={ghLink}>GitHub Link</Button>{" "}
              <Button href={demoLink}>Demo Link</Button> */}
            {/* </Card.Footer> */}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProjectCard;
