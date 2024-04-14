import React, { useState, useEffect } from "react";
import { Container, Col,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chat1 from "../../Assets/Projects/chat1.PNG";
import chat2 from "../../Assets/Projects/chat2.PNG";
import chat3 from "../../Assets/Projects/chat3.PNG";
import chat4 from "../../Assets/Projects/chat4.PNG";
import wirringsoftwares1 from "../../Assets/Projects/wirringsoftwares1.png";
import wirringsoftwares2 from "../../Assets/Projects/wirringsoftwares2.png";
import wirringsoftwares3 from "../../Assets/Projects/wirringsoftwares3.png";
import wirringsoftwares4 from "../../Assets/Projects/wirringsoftwares4.png";
import wirringsoftwares5 from "../../Assets/Projects/wirringsoftwares5.png";
import wirringsoftwares6 from "../../Assets/Projects/wirringsoftwares6.png";
import wirringsoftwares7 from "../../Assets/Projects/wirringsoftwares7.png";
import wise1 from "../../Assets/Projects/wise1.png";
import wise2 from "../../Assets/Projects/wise2.png";
import wise3 from "../../Assets/Projects/wise3.png";
import wise4 from "../../Assets/Projects/wise4.png";
import wise5 from "../../Assets/Projects/wise5.png";
import wise6 from "../../Assets/Projects/wise6.png";
import wise7 from "../../Assets/Projects/wise7.png";
import balajimultisales1 from "../../Assets/Projects/balajimultisales1.png";
import balajimultisales2 from "../../Assets/Projects/balajimultisales2.png";
import balajimultisales3 from "../../Assets/Projects/balajimultisales3.png";
import balajimultisales4 from "../../Assets/Projects/balajimultisales4.png";
import balajimultisales5 from "../../Assets/Projects/balajimultisales5.png";
import balajimultisales6 from "../../Assets/Projects/balajimultisales6.png";
import balajimultisales7 from "../../Assets/Projects/balajimultisales7.png";

function HomeProjects() {
  const projects = [
    {
      title: "Wirring Softwares",
      achievements: [
        "Robust Backend Development",
        "Secure Data Storage",
        "Seamless User Experience",
        "Responsive Design",
        "Client Requirements Tailoring",
        "User-Focused Solutions",
        "High-Quality Deliverables",
      ],
      description:
        "I recently completed a website project for an IT company, which I'm excited to showcase in my portfolio. Leveraging the power of Supabase, I developed a robust and secure backend to manage data storage and authentication, ensuring a seamless experience for users. The website features a responsive design, adapting effortlessly to different devices and screen sizes. Working closely with the client, I tailored the website to meet their specific requirements, highlighting the company's details, services, and success stories. I paid special attention to user experience, making the website intuitive and easy to navigate. Thorough testing and optimization were conducted to ensure optimal performance across various browsers and devices. This project reflects my commitment to delivering high-quality, client-focused solutions that exceed expectations.",
      images: [
        wirringsoftwares1,
        wirringsoftwares2,
        wirringsoftwares3,
        wirringsoftwares4,
        wirringsoftwares5,
        wirringsoftwares6,
        wirringsoftwares7,
      ],
      demoLink: "https://wirringsoftwares.in/",
    },
    {
      title: "WISE-Wireless Industry Service Excellence",
      achievements: [
        "Robust and Secure Backend Development",
        "Seamless User Experience",
        "Tailored Website Development",
        "Client Requirement Highlighting",
        "User-Focused Interface Design",
        "Responsive Design Implementation",
        "Thorough Testing and Optimization for Performance",
      ],
      description:
        "Leveraging the power of Supabase, I developed a robust and secure backend to manage data storage and authentication, ensuring a seamless experience for users. The website features a responsive design, adapting effortlessly to different devices and screen sizes. Working closely with the client, I tailored the website to meet their specific requirements, highlighting the company's details, services, and success stories. I paid special attention to user experience, making the website intuitive and easy to navigate. Thorough testing and optimization were conducted to ensure optimal performance across various browsers and devices. This project reflects my commitment to delivering high-quality, client-focused solutions that exceed expectations.",
      images: [wise1, wise2, wise3, wise4, wise5, wise6, wise7],
      demoLink: "https://wiseit.in/",
    },
    {
      title: "Bala Ji Multi Sales",
      achievements: [
        "Professional Website Development",
        "Quality & Reliability Emphasis",
        "Diverse Product Curation",
        "Responsive Design",
        "User-Friendly Interface",
        "Personalized Customer Attention",
        "Expertise Demonstration",
      ],
      description:
        "I created a website for Bala ji Multi Sales, a company dedicated to offering the best electronic products and services to its customers. highlighting its commitment to quality, reliability, and customer satisfaction. It features an extensive range of electronic products, including smartphones, laptops, home appliances, and audio systems, all carefully curated from leading brands. The website also emphasizes the company's core values of integrity, innovation, and excellence, providing visitors with a seamless shopping experience and personalized attention from a knowledgeable team. It was a project focused on showcasing the company's offerings and commitment to quality and customer service.",
      images: [
        balajimultisales1,
        balajimultisales2,
        balajimultisales3,
        balajimultisales4,
        balajimultisales5,
        balajimultisales6,
        balajimultisales7,
      ],
      demoLink: "https://www.balajimultisales.in/",
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
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate(); 
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
  const goToProjectPage = () => {
    navigate("/project"); // Navigate to the '/project' route when called
  };
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
              demoLink={project?.demoLink}
            />
          </Col>
        ))}
        {/* </Row> */}
        <Button variant="primary"  onClick={goToProjectPage}>Show All Project</Button> 
      </Container>
    </Container>
  );
}

export default HomeProjects;
