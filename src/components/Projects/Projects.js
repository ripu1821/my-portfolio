import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import food1 from "../../Assets/Projects/food1.png";
import food2 from "../../Assets/Projects/food2.png";
import food3 from "../../Assets/Projects/food3.png";
import food4 from "../../Assets/Projects/food4.png";
import food5 from "../../Assets/Projects/food5.png";
import food_back1 from "../../Assets/Projects/food-back1.png";
import food_back2 from "../../Assets/Projects/food-back2.png";
import food_back3 from "../../Assets/Projects/food-back3.png";
import food_back4 from "../../Assets/Projects/food-back4.png";
import food_back5 from "../../Assets/Projects/food-back5.png";
import food_back6 from "../../Assets/Projects/food-back6.png";
import food_back7 from "../../Assets/Projects/food-back7.png";
import chat1 from "../../Assets/Projects/chat1.PNG";
import chat2 from "../../Assets/Projects/chat2.PNG";
import chat3 from "../../Assets/Projects/chat3.PNG";
import chat4 from "../../Assets/Projects/chat4.PNG";
import sss1 from "../../Assets/Projects/sss1.png";
import sss2 from "../../Assets/Projects/sss2.png";
import sss3 from "../../Assets/Projects/sss3.png";
import sss4 from "../../Assets/Projects/sss4.png";
import sss5 from "../../Assets/Projects/sss5.png";
import sss6 from "../../Assets/Projects/sss6.png";
import pp1 from "../../Assets/Projects/pp1.png";
import pp2 from "../../Assets/Projects/pp2.png";
import com1 from "../../Assets/Projects/comfirst.png";
import com2 from "../../Assets/Projects/comsecond.png";

function Projects() {
  const projects = [
    {
      title: "Food Delivery App Admin Panel",
      achievements: [
        "Security",
        "Responsive Design",
        "Authentication and Authorization",
        "Error Handling and Validation",
        "User-Friendly Interface",
        "Efficient Data Management",
      ],
      description:
        "The Next.js admin panel is a comprehensive web application designed for managing various aspects of a system, including user details, project categories, offers, and orders. It features a user-friendly interface with responsive design, ensuring a seamless experience across different devices. The user management section allows administrators to view, create, edit, and delete user accounts, ensuring efficient management of user-related data. The project category management section provides tools for creating, editing, and deleting project categories, enabling administrators to organize projects effectively. The offer management section allows for the creation, editing, and deletion of offers, facilitating the management of promotional activities. The order management section enables administrators to view order details, update order statuses, and delete orders as needed, ensuring effective management of the ordering process. Additionally, the admin panel implements authentication and authorization mechanisms, ensuring that only authorized users can access and perform actions within the system. It also includes error handling and validation features to ensure data integrity and prevent malicious inputs. Overall, the Next.js admin panel is a powerful tool for managing various aspects of a system, providing administrators with the tools they need to efficiently manage user accounts, project categories, offers, and orders.",
      images: [food1, food2, food3, food4, food5, food1, food2],
      ghLink: "https://github.com/ripu1821",
      demoLink: "https://food-49.web.app/",
    },
    {
      title: "Food Delivery App Back End",
      achievements: [
        "JWT Authentication",
        "Payment Integration",
        "Redis implements",
        "Token blacklist",
      ],
      description:
        "In the food delivery app backend built with NestJS, we have implemented a range of APIs to facilitate various functionalities. For user management, we have endpoints for user registration, login, profile update, and password management, including forgot password functionality. The product category API allows for managing and retrieving different food categories available in the app. The offer API enables the creation, retrieval, and management of special offers and discounts for users. The cart API allows users to add, remove, and update items in their shopping cart. For payments, we have integrated APIs to handle payment processing securely. These APIs collectively form a robust backend system to power the food delivery app, providing a seamless experience for both users and administrators. #We have also implemented JWT (JSON Web Token) authentication to secure the APIs. When a user successfully logs in or registers, a JWT token is generated and sent back to the client. This token is then included in the Authorization header of subsequent requests to authenticate the user. The backend verifies the JWT token to ensure that the request is coming from an authenticated user. If the token is valid, the request is processed; otherwise, an unauthorized error is returned. This approach ensures that only authenticated users can access protected APIs, providing a secure environment for the food delivery app.",
      images: [
        food_back1,
        food_back2,
        food_back3,
        food_back4,
        food_back5,
        food_back6,
        food_back7,
      ],
      ghLink: "https://github.com/ripu1821",
      demoLink: "https://food-49.web.app/",
    },
    {
      title: "AI GPT Clone",
      achievements: [
        "Security",
        "Using AI",
        "Authentication and Authorization",
        "Error Handling and Validation",
        "User-Friendly Interface",
      ],
      description:
        "In our project inspired by ChatGPT, we've developed robust login and logout APIs to manage user sessions. We've also implemented multifunctionality, allowing users to engage in chat interactions with a chatbot, generate paragraphs based on a single word, summarize text, and even generate programming code. Additionally, our project offers the unique feature of generating AI-generated images, enhancing the user experience with diverse and creative content. With these functionalities, our project aims to provide a comprehensive and innovative platform for various user needs, blending AI capabilities seamlessly into everyday interactions.",
      images: [chat1, chat2, chat3, chat4, chat1, chat2, chat3],
      ghLink: "https://github.com/ripu1821",
      demoLink: "https://food-49.web.app/",
    },
    {
      title: "Sri Sathya Sai Divyanga Seva",
      achievements: [
        "AWS S3",
        "Security",
        "JWT Authentication",
        "Redis implements",
        "Token blacklist",
      ],
      description:
        "In our live project, we are created a comprehensive API system that integrates various functionalities with user profiles. One of the key features is the integration of AWS S3 for uploading and managing photos and voice recordings. This allows users to upload and share multimedia content seamlessly. Additionally, we have integrated an SMS service for notifications and user verification, enhancing the overall user experience and security of the platform. The project focuses on providing a smooth and efficient user experience through robust API integration and reliable service connections.",
      images: [sss1, sss2, sss3, sss4, sss5, sss6, sss3],
      ghLink: "https://github.com/ripu1821",
      demoLink: "https://food-49.web.app/",
    },
    {
      title: "Password Manager App",
      achievements: [
        "JWT Authentication",
        "Payment Integration",
        "Redis implements",
        "Token blacklist",
      ],
      description:
        "In the food delivery app backend built with NestJS, we have implemented a range of APIs to facilitate various functionalities. For user management, we have endpoints for user registration, login, profile update, and password management, including forgot password functionality. The product category API allows for managing and retrieving different food categories available in the app. The offer API enables the creation, retrieval, and management of special offers and discounts for users. The cart API allows users to add, remove, and update items in their shopping cart. For payments, we have integrated APIs to handle payment processing securely. These APIs collectively form a robust backend system to power the food delivery app, providing a seamless experience for both users and administrators. #We have also implemented JWT (JSON Web Token) authentication to secure the APIs. When a user successfully logs in or registers, a JWT token is generated and sent back to the client. This token is then included in the Authorization header of subsequent requests to authenticate the user. The backend verifies the JWT token to ensure that the request is coming from an authenticated user. If the token is valid, the request is processed; otherwise, an unauthorized error is returned. This approach ensures that only authenticated users can access protected APIs, providing a secure environment for the food delivery app.",
      images: [pp1, pp2, pp1, pp2, pp1, pp2, pp1],
      ghLink: "https://github.com/ripu1821",
      demoLink: "https://food-49.web.app/",
    },
    {
      title: "Common API's For all Projects",
      achievements: [
        "JWT Authentication",
        "Redis implements",
        "Token blacklist",
      ],
      description:
        "In NestJS projects, a common API pattern for JWT token management and user logout handling using Redis is essential for ensuring secure authentication and session management. This API typically includes endpoints for token creation, validation, and revocation. Upon user logout, the JWT token is added to a Redis blacklist, preventing its reuse and enhancing security. By integrating Redis, developers can efficiently manage token blacklists and revoke tokens, ensuring that expired or compromised tokens cannot be used to access protected resources. This approach not only enhances security but also improves performance by offloading token validation to a fast, in-memory cache. Overall, this API pattern is foundational in many NestJS projects, providing a robust and secure authentication mechanism.",
      images: [com1, com2, com1, com2, com1, com2, com1],
      ghLink: "https://github.com/ripu1821",
      demoLink: "https://food-49.web.app/",
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleProjectChange = () => {
    const nextIndex = (currentProjectIndex + 1) % projects.length;
    setCurrentProjectIndex(nextIndex);
    setCurrentImageIndex(0);
  };

  const handleImageSwap = () => {
    const nextIndex =
      (currentImageIndex + 1) % projects[currentProjectIndex].images.length;
    setCurrentImageIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(handleImageSwap, 1000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}> */}
        {projects.map((project, index) => (
          <Col
            // md={4}
            className="project-card"
            key={index}
            onClick={handleProjectChange}
          >
            <ProjectCard
              imgPath={project?.images[currentImageIndex]}
              isBlog={false}
              title={project?.title}
              achievements={project?.achievements}
              description={project?.description}
              // ghLink={project?.ghLink}
              // demoLink={project?.demoLink}
            />
          </Col>
        ))}
        {/* </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
