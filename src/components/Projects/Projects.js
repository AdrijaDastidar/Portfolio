import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import amazon from "../../Assets/Projects/amazon.png";
import cancion from "../../Assets/Projects/cancion.png";
import texto from "../../Assets/Projects/texto.png";
import readics from "../../Assets/Projects/readics.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import incidentintel from "../../Assets/Projects/incidentintel.png";
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
                    <ul className="desc">
                      <li>Features: Home Page with sections including About Me, Resume/CV, and a Gallery showcasing achievements and awards.</li>
                      <li>Tools: Git for version control, GitHub Pages for deployment.</li>
                      <li>Technologies: HTML, CSS, JavaScript, React.js.</li>
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
                    <ul className="desc">
                      <li>Features: Home Page, Navigation Bar, Search Bar, Product Listings, Shopping Cart, Customer Service accessibility.</li>
                      <li>Tools: Git for version control, GitHub Pages for deployment.</li>
                      <li>Technologies: HTML, CSS, JavaScript, React.js.</li>
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
                    <ul className="desc">
                      <li>Features: User Authentication, CRUD Operations, Artist Dashboard for Song Management.</li>
                      <li>Tools: Git for version control, GitHub Pages for deployment.</li>
                      <li>Technologies: HTML, CSS, JavaScript, PHP, MySql.</li>
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
                    <ul className="desc">
                      <li>Features: Text case conversion, text reversal, text statistics.</li>
                      <li>Tools: Git for version control, GitHub Pages for deployment.</li>
                      <li>Technologies: HTML, CSS, JavaScript, React.js.</li>
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
                    <ul className="desc">
                      <li>Features: Up-to-date news articles, browsing headlines, coverage of various topics.</li>
                      <li>Tools: Git for version control, GitHub Pages for deployment, NEWS API.</li>
                      <li>Technologies: HTML, CSS, JavaScript, React.js.</li>
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={incidentintel}
              title="Real Time Threat Analysis - Incident Intel"
              description={
                <>
                  <div>
                    <ul className="desc">
                      <li>Features: Real-time cyber incident feeds, platform identification, data collection, and analysis.</li>
                      <li>Tools: Web scraping (Scrapy, BeautifulSoup), Git for version control.</li>
                      <li>Technologies: Python, Natural Language Processing (NLP), MERN Stack, Apache Kafka, MongoDB.</li>
                    </ul>
                  </div>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    June 2024
                  </span>
                </>
              }
              ghLink="https://github.com/chhavikant-01/incident-intel"
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
                  <div>
                    <ul className="desc">
                      <li>Features: Solved over 2,000 queries in Mathematics and Python, interactive learning materials.</li>
                      <li>Tools: Interactive platforms for query resolution, content production.</li>
                      <li>Technologies: Mathematics, Python, Educational Technology.</li>
                    </ul>
                  </div>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    August 2022
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
                  <div>
                    <ul className="desc">
                      <li>Features: Handled employee records, scheduled interviews, streamlined recruitment.</li>
                      <li>Tools: Online tracking system, HR management tools.</li>
                      <li>Technologies: Human Resources Information Systems (HRIS), Recruitment Tools.</li>
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
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
