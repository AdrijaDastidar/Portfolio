import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import amazon from "../../Assets/Projects/amazon.png";
import cancion from "../../Assets/Projects/cancion.png";
import texto from "../../Assets/Projects/texto.png";
import readics from "../../Assets/Projects/readics.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import cert1 from "../../Assets/Certificates/s5.png";
import cert2 from "../../Assets/Certificates/s6.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <div style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              title="Portfolio Website"
              description={
                <>
                  <div>
                    <ul>
                      <li>
                        Home Page with sections including About Me, Resume/CV,
                        and a Gallery showcasing achievements and awards.
                      </li>
                      <li>
                        Integrates seamlessly with social media platforms for
                        enhanced connectivity.
                      </li>
                    </ul>
                  </div>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    August 2023
                  </span>
                </>
              }
              ghLink="https://github.com/AdrijaDastidar/Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              title="Amazon Clone"
              description={
                <>
                  <div>
                    <ul>
                      <li>
                        Essential features like Home Page, Navigation Bar,
                        Search Bar, Product Listings, Shopping Cart, and
                        Customer Service accessibility.
                      </li>
                      <li>
                        Developed with Git for version control and deployed via
                        GitHub Pages.
                      </li>
                    </ul>
                  </div>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    October 2023
                  </span>
                </>
              }
              ghLink="https://github.com/AdrijaDastidar/Amazon-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cancion}
              title="Music Website - Cancion"
              description={
                <>
                  <div>
                    <ul>
                      <li>
                        Offers robust User Authentication, CRUD Operations, an
                        intuitive Artist Dashboard for efficient Song
                        Management.
                      </li>
                      <li>
                        Includes Backup, Audit, Language, Mood Management, and
                        Recovery features.
                      </li>
                    </ul>
                  </div>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    January 2024
                  </span>
                </>
              }
              ghLink="https://github.com/AdrijaDastidar/Music-Website-Cancion"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={texto}
              title="Text Manipulation Website - Texto"
              description={
                <>
                  <div>
                    <ul>
                      <li>
                        React-based web app for text manipulation and analysis
                        allowing case conversion, text reversal, and providing
                        text statistics.
                      </li>
                      <li>
                        Developed with Git for version control and deployed via
                        GitHub Pages.
                      </li>
                    </ul>
                  </div>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    March 2024
                  </span>
                </>
              }
              ghLink="https://github.com/AdrijaDastidar/Texto-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={readics}
              title="News Website - Readics"
              description={
                <>
                  <div>
                    <ul>
                      <li>
                        Web application designed to deliver real time news
                        articles across various categories.
                      </li>
                      <li>
                        Users can browse news headlines and explore different
                        topics such as Business, Entertainment, Science, Sports,
                        Technology, and more.
                      </li>
                    </ul>
                  </div>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    March 2024
                  </span>
                </>
              }
              ghLink="https://github.com/AdrijaDastidar/Readics-React"
            />
          </Col>
          <h1 className="project-heading">
            My <strong className="purple">Experience</strong> Non-Tech
          </h1>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert1}
              title="Subject Matter Expert"
              description={
                <>
                  <ul>
                    <li>
                      Provided in-depth expertise in Mathematics and Python
                      programming for 11th and 12th-grade students and JEE
                      aspirants.{" "}
                    </li>
                    <li>
                      Addressed real-time student queries promptly, ensuring
                      accurate information delivery, and developed high-quality
                      educational content to enhance learning and exam
                      preparation.
                    </li>
                  </ul>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    AUGUST 2022
                  </span>
                </>
              }
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert2}
              title="Human Resources"
              description={
                <>
                  <ul>
                    <li>
                      Performed administrative tasks and supported daily HR
                      activities.
                    </li>
                    <li>Updated employee records and screened resumes</li>
                  </ul>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    AUGUST 2023
                  </span>
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
